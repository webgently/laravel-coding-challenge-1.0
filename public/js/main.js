let selected = [];
const processChange = debounce((str) => getApi(str));

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
// OMDbAPI
function getApi(str) {
    fetch('http://www.omdbapi.com/?apikey=fa8db5f0&s=' + str)
        .then(res => res.json())
        .then(data => {
            if (data.Response === 'True') {
                searchDisplay(data, str);
            } else {
                $('#search_result').empty().append('<div>No found</div>');
                $('#search_str').empty().append('<span>Result for</span>');
                $('#selected_count').text(0);
                $('#selected_result').empty();
            }
        });
}
// display search result
function searchDisplay(data, str) {
    let searchResult = '';
    data.Search.forEach(element => {
        const displayData = `${element.Poster}~${element.Title}~${element.Type}~${element.Year}~${element.imdbID}`;
        searchResult += `
            <li class="flex justify-between border-b-[1px]">\
                <p>${element.Title}</p>\
                <button id="cbtn-${element.imdbID}" onclick="select(\'${displayData}\')" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded">Nominate</button>\
            </li>
        `;
    });
    selected = [];
    $('#search_result').empty().append(searchResult);
    $('#search_str').empty().append(`Result for <span class="text-sm">"${str}"</span>`);
}
// select 
function select(str) {
    const displayData = {
        Poster: str.split('~')[0],
        Title: str.split('~')[1],
        Type: str.split('~')[2],
        Year: str.split('~')[3],
        imdbID: str.split('~')[4]
    }

    if (selected.length === 0) {
        selectDisplay(displayData);
    } else {
        const found = selected.find(element => element.imdbID === displayData.imdbID);

        if (!found) {
            selectDisplay(displayData);
        }
    }
}
// display selected result
function selectDisplay(data) {
    const selectdata = `
        <li id="dlist-${data.imdbID}" class="flex justify-between border-b-[1px]">\
            <p>${data.Title}</p>\
            <button onclick="remove(\'${data.imdbID}\')" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded">Remove</button>\
        </li>
    `;
    selected.push(data);
    $('#cbtn-' + data.imdbID).prop('disabled', true);
    $('#cbtn-' + data.imdbID).removeClass('bg-blue-500 hover:bg-blue-700').addClass('bg-gray-500 hover:bg-gray-700');
    $('#selected_result').append(selectdata);
    $('#selected_count').text(selected.length);
    if (selected.length === 5) {
        alert("Selected 5 movies");
    }
}