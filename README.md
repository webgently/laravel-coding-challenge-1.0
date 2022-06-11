# laravel-coding-challenge-1.0

## Getting started

### Installation

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/5.4/installation#installation)

Alternative installation is possible without local dependencies relying on [Docker](#docker). 

Clone the repository

    git clone https://github.com/galaxy-comet/laravel-coding-challenge-1.0.git

Switch to the repo folder

    cd laravel-coding-challenge-1.0

Install all the dependencies using composer

    composer install
    
Install all the style modules

    npm install

Copy the example env file and make the required configuration changes in the .env file

    rename .env.example .env

Generate a new application key

    php artisan key:generate

Generate a new JWT authentication secret key

    php artisan jwt:generate

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

**TLDR command list**

    git clone https://github.com/galaxy-comet/laravel-coding-challenge-1.0.git
    cd laravel-coding-challenge-1.0
    composer install
    npm install
    rename .env.example .env
    php artisan key:generate
    php artisan jwt:generate 
    
**Make sure you set the correct database connection information before running the migrations**

    php artisan migrate
    php artisan serve
