
const express = require('express');

class UserController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllUsers(request, response) );
        this.router.get('/:id', (request, response) => this.getUser(request, response) );
    }

    getAllUsers(request, response) {
        console.log( "request for all users" + request.url );
        response.status(500).send({"message" : "please try later" } );
    }

    getUser(request, response) {
        const id = request.params.id;
        console.log( "request for user " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        const fakeUser = { "id" : id, "name" : "firstName", "surname" : "surname" };
        response.status(200).send(JSON.stringify(fakeUser) );
    }
}

const userRouter = new UserController().router; // initialises a new router
module.exports = userRouter; // allows another module to use the router

