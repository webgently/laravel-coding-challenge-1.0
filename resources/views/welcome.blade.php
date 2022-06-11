<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Laravel</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>

</head>

<body class="bg-gray-300">
    <div class="md:container md:mx-auto">
        <div class="flex flex-col justify-center h-screen space-y-5">
            <div class="rounded bg-white shadow-lg leading-loose p-5 w-full">
                <p>Movie title</p>
                <div class="flex items-center">
                    <label for="movie-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-black-500 dark:text-black-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="movie-search" class="border text-sm rounded-lg  
                            block w-full pl-10 p-2.5 dark:placeholder-gray-400 dark:text-black 
                            dark:focus:ring-blue-500" placeholder="Search" required="" onkeyup="processChange(this.value)">
                    </div>
                </div>
            </div>
            <div class="flex w-full space-x-4">
                <div class="w-1/2 rounded bg-white shadow-lg p-5">
                    <div class="text-xl font-bold" id="search_str">Result for</div>
                    <div class="p-5 overflow-y-auto h-96">
                        <ul class="list-disc flex flex-col space-y-3.5" id="search_result"></ul>
                    </div>
                </div>
                <div class="w-1/2 rounded bg-white shadow-lg p-5">
                    <div class="text-xl font-bold">Nominations <span class="text-sm"> selected <span id="selected_count">0</span> Movies</span></div>
                    <div class="p-5 overflow-y-auto h-96">
                        <ul class="list-disc flex flex-col space-y-3.5" id="selected_result"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>