
const express = require('express');

class BookController {
    constructor() {
        this.router = express.Router(); // creating a sub part of the app that just deals with the books
        // fetches our data
        this.router.get('/', (request, response) => this.getAllBooks(request, response) );
        this.router.get('/:id', (request, response) => this.getBook(request, response) );
        this.router.get('/numerous/3', (request, response) => this.getNumerousBooks(request, response) );
    }

    getAllBooks(request, response) {
        console.log( "request for all books" + request.url );
        // all responses you should send back a status and a message - 500 usually readable one
        // goto the pool, make the connection, make a query
        // do some stuff to get the array o fbooks
        response.satus(200).send(JSON.stringify(bookArray))
        response.status(500).send({"message" : "please try later" } );
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        // const mock = { "id" : id, "title" : "mock", "author" : "lewis" };
        // response.status(200).send(JSON.stringify(mock) );
        doWork(id).then(
            // workResult is the value returned from the doWork function
            (workResult) => response.status(200).send(JSON.stringify(workResult))
        ).catch(
            (error) => response.status(500).send(error)
        );
    }

    // getNumerousBooks(request, response) {
    //     const id = request.params.id;

    //     let books = [
    //         {"id" : id, "title" : `title${id}`, "author": `author${id}`},
    //         {"id" : id, "title" : `title${id}`, "author": `author${id}`},
    //         {"id" : id, "title" : `title${id}`, "author": `author${id}`},
    //         {"id" : id, "title" : `title${id}`, "author": `author${id}`},
    //         {"id" : id, "title" : `title${id}`, "author": `author${id}`}
    //     ]

    //     let first3 = books.filter(book => id < 4)

    //     console.log( "request for books " + first3 );
    // }
}

function doWork(id) {
    return new Promise(
        (resolve, reject) => {
            resolve({"id" : id, "title" : "title", "author": "author"});
        }
    )
}

const bookRouter = new BookController().router; // initialises a new router
module.exports = bookRouter; // allows another module to use the router

