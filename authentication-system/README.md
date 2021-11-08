# Exercice 1: Basic Authentication System

## Introduction
In this exercice, you are asked to create a basic authentication system with `ExpressJS`.

## Minimum Requirements
The application you'll create in this repo is an **Authentication system**. It allows users to:
* `signup`
* `login`

## Steps

* Navigate to this directory and create a new nodeJS project
```
npm init
```
* Create a new file called `index.js` under this directory. This file will hold your express web application.

* Install Express and import it to your project 
```
npm install --save express
```

* Now, it's time to take few moments and think about of your system. Ask yourslef:
    * What are the endpoints you'll listen on?
    * What are the methods of these requests?
    * What are the parameters and the request bodies of these requests?
    * What are the responses you'll send back?
    * Where will you store the data of the users?

* Create an array of users (*which will play the role of the DataBase in this exercice*). Each user should have the following properties:
    * id: `number`
    * firstName: `string`
    * lastName: `string`
    * email: `string`
    * password: `string`

* Define the routes and the request handlers as follows:
    * **Login**: 
        * **POST** request on `/auth/signup`
        * Request body will be an object containing the data of the new user (email, password, firstName, lastName)
        * Email should have a valid email format *example@example.example*. If not, return an error (status: 422, message: "Invalid email")
        * If password length is less than 7 characters, return an error (status: 422, message: "Password should contain at least 7 characters")
        * Password should be a combination of digits and alphabets. If not, return an error (status: 422, message: "Password should be a combination of digits and alphabets")
        * If all checks are made successfully, add the user to the current list of users and return a response with a status of 201
    * **Signup**
        * **POST** request on `/auth/login` 
        * Request body will be an object containing the authentication data (email, password)
        * Check if there is a user registered with that email. If not, return an error with status 404 (not found)
        * If the user exists, check if the user has the registered user has the same password. If there is a password missmatch, return an error (401)
        * If the password is correct, return a success response with the status of 200  
* Start listening to requests on port 3000
```
app.listen(3000, () => {console.log("Started listening on port 3000...")})
```

* Test your API using [Postman](http://github.com)
    * Install Postman on your machine
    * Create a new collection named `authentication-system`
    * Run your server on port 3000
    * Create a new request under that collection named `signup`
        * Change the method to POST
        * Change the url to 
        ```
        localhost:3000/auth/signup
        ```
        * Add the user data to the request body
        * Send the request
    * Create a new request under the same collection named `login`
        * Reproduce the same steps to test your API

## Advanced
Add an admin system to manage users

* Create an object called admin with the following properties
    * email: admin@smu.tn
    * password: "smu123456"
    * firstName: "admin"
    * lastName: "admin"
* Make an login request handler for the admin
* Add the requests needed for the admin to:
    * Get user data by id
    * Delete existing user by id
    * Update user data by id

## Nightmare mode
* Add a banning system for users
    * User object should have a `isBanned` property that is initially set to `false`
    * Add 2 request handlers:
        * PUT /users/:id/ban to ban a user
        * PUT /users/:id/activate to activate a user
* Secure your routes with `Authorization` using Bearer Tokens