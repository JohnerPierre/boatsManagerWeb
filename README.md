# Boats Manager 

## Requirement

* MongoDb version v3.4.9
* Npm version 5.4.2
* Node version v8.7.0

## Installation

First need to setup the database, go to ./backend and lunch mongoDb with :
```
mongod
```
After need to install et lunch the Api for access to data:
```
npm install
node server.js
```
Optionally fill the Db with data with(dump folder):
```
mongorestore
```
Some users (Login: Jp; Pw: 12/Koko;12/Bill;123) and boats are available

Secondly you need to install and lunch main application, go back to ./ and :
```
npm install
npm start
```

Now the site web is available at : http://localhost:4200/

Note : Db datas are available (./backEnd/api.js) at : http://localhost:5000/KEYWORD

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Authors

Pierre Johner