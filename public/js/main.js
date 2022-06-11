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
                console.log("error");
            } else {
                console.log(data);
            }
        });
}