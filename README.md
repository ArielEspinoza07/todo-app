# TODO API with Nodejs

## Requirements

    * nodejs >= 10.16
    * npm >= 6.9

## Setup

    * copy .env.example to .env
    * npm install
    
## Development

    * npm run dev

## Migrations
    * npm run migrate
    * npm run rollback

## Dependencies

    * body-parser
    * cors
    * dotenv
    * express
    * knex
    * mysql2
    * objection

## DevDependencies

    * nodemon

## Tasks List

*   Setup 
    *   Dependencies
        * [x] Install body-parser
        * [x] Install cors
        * [x] Install dotenv
        * [x] Install express
        * [x] Install knex
        * [x] Install mysql2
        * [x] Install objection
    *   DevDependencies
        * [x] Install nodemon dev
    *   Commands
        * [x] Add comand start
        * [x] Add comand dev
        * [x] Add comand migrate
        * [x] Add comand rollback

*   Scaffold
    * [x] Create folder db
        * [x] Create folder migrations to store knex migrations
    * [x] Create folder src
        * [x] Create folder controllers
        * [x] Create folder exceptions
        * [x] Create folder middlewares
        * [x] Create folder models
        * [x] Create folder routes
            * [x] Create folder api
                * [x] Create folder v1
        * [x] Create folder schemas
        * [x] Create file app
        * [x] Create file cors
        * [x] Create file db
            * [x] Create connection and set to the model
        * [x] Create file index
        * [x] Create knexfile
            * [x] Create general db config for knex (DB accepted mysql, postgre, sqlite3)

*   TODO
    *   Controllers 
        * When create a new file use {name}.controller
        * [ ] Create Project restful controller
        * [x] Create Task restful controller
        * [ ] Create User restful controller
    *   Exceptions 
        * When create a new file use {name}.exception
        * [x] Create index file  to require all exceptions
        * [x] Create cors file
            * [x] Handle cors error
            * [x] Add whitelist or urls
            * [x] Get whitelist from env file
            * [x] If environment is development continue
    *   Middlewares
        * When create a new file use {name}.middleware
        * [x] Create index file to require all middlewares
        * [x] Create logger file 
            * [x] Log information (route, method, time) 
        * [x] Create error file 
            * [x] Add const errorTypes and errorMessages  
            * [x] Handling errors and return json response 
        * [ ] Add auth file
            * [ ] Handle authentication
    *   Models 
        * When create a new file use {name}.model
        * [ ] Create Project model
            * [ ] Set table name
            * [ ] Set table primary key
            * [ ] Set schema
        * [x] Create Task model
            * [x] Set table name
            * [x] Set table primary key
            * [x] Set schema
        * [ ] Create User model
            * [ ] Set table name
            * [ ] Set table primary key
            * [ ] Set schema
    *   Routes 
        * When create a new file use {name}.route
        * [x] Create index file  to require all routes
        * [ ] Create project file
            * [ ] Create Restful routes, 
            * [ ] Use controller and call functions for the routes
        * [x] Create task file
            * [x] Create Restful routes, 
            * [x] Use controller and call functions for the routes 
        * [ ] Create user file
            * [ ] Create Restful routes, 
            * [ ] Use controller and call functions for the routes
    *   Schemas
        * When create a new file use {name}.schema
        * [x] Create project file
        * [x] Create task file
        * [x] Create user file