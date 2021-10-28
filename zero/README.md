# Exercice 0: Students management system

## Introduction
In this exercice, you are asked to create a minimal `ExpressJS` web application.
This will be your step by step guide to getting started with `ExpressJS`.

## Minimum Requirements
The application you'll create in this repo is a **Students management system**. It allows users to:
* `retrieve` a list of students
* `create` new students
* `delete` existing students
* `edit` existing students

The application should accept the following requests:
* `GET` /students => returns the list of all existing students
* `POST` /students => creates a new student
* `DELETE` /students/:id => deletes the student with the requested id
* `PUT` /students/:id => updates the student with the requested id

## Steps

* Create a new nodeJS project

* Install and import ExpressJS

* Create an instance of ExpressJS

* Create an array of students (*which will play the role of the DataBase in this exercice*). Each student should have the following properties:
    * id: number
    * firstName: string
    * lastName: string
    * email: string
    * class: string

* Define the routes and the request handlers as requested

* Test your API using [Postman](http://github.com)