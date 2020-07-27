# TODO API with Nodejs

## Requirements

    * nodejs >= 10.16
    * npm >= 6.9

## Setup

    * copy .env.example to .env
    * npm install
    
## Development

    * npm run dev

## Dependencies

    * express
    * dotenv
    * body-parser
    * cors

## DevDependencies

    * nodemon

## Tasks List

*  Setup 
    * [x] Install express
    * [x] Install dotenv
    * [x] Install body-parser
    * [x] Install cors
    * [x] Install nodemon dev
    * [x] Add comand start to package.json
    * [x] Add comand dev to package.json
*   Cors
    * [x] Add cors file
    * [x] Add configuration to enable/disable with whitelist
*   Scaffold
    * [x] Create folder src
    * [x] Create folder src/controllers
    * [x] Create folder src/exceptions
    * [x] Create folder src/middlewares
    * [x] Create folder src/models
    * [x] Create folder src/routes
    * [x] Create folder src/routes/v1
    * [x] Create file index in src
    * [x] Create file app in src
*   TODO
    * Controllers 
        * [x] Create Task file
    * Exceptions 
        * [x] Create index file
        * [x] Create cors file
            * [x] Create cors error
    * Middlewares
        * [x] Create index file
        * [x] Create logger file 
            * [x] Log information (route. method, time) 
        * [x] Create error file 
            * [x] Handling errors and return json response 
    * Models 
        * [x] Create Task file
    * Routes 
        * [x] Create index file
        * [x] Create task file
            * [x] Create Restful routes    