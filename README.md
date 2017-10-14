# Boats Manager 

## Requirement

* MongoDb version v3.4.9
* Npm version 5.4.2
* Node version v8.7.0

## Installation

First you need to setup the database, go to ./backend and launch mongoDb with : 
```
mongod
```
After this you need to install et launch the Api to access the data:
```
npm install
node server.js
```
Optionally you can fill the Db with data with(dump folder):
```
mongorestore
```
Some users (Login: Jp; Pw: 12/Koko;12/Bill;123) and boats are available

Secondly you need to install and launch the main application, go back to ./ and :
```
npm install
npm start
```

Now the website is available at : http://localhost:4200/

Note : Db datas are available (./backEnd/api.js) at : http://localhost:5000/KEYWORD

![alt text](https://i.imgur.com/KmATCrE.png)

## Running unit tests
TODO

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Author(s)

Pierre Johner