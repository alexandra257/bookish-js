
const express = require('express');
const BookController = require('./controllers/bookController.js');
const UserController = require('./controllers/userController.js');

const app = express();

// if user login is invalid this will be sent
// sits above all requests?
app.use('/login', (req, res, next) => {
    res.status(500).send("Login not implemented yet");
} );

app.use('/', (req, res, next) => {
    // if the header is invalid (in this case, no token in postman), send an error back
    if ( ! req.headers.token ) {
        res.status(401).send("computer says no");
        // eventually real validation will happen here e.g. user login
        // token = digital signature, enycription e.g. person with the master password
    } else {
        // if the there is a token in the header, go to the next bit of code
        next();
    }
} );

// when someone specifys a URL containing /books, call the BookController
app.use('/books', BookController);
// when someone specifys a URL containing /users, call the UserController
app.use('/users', UserController);


// handle errors, log diagnostic, give user simple error message
app.use(function (err, req, res, next) {
    console.error( err );
    res.status(500).send('System unable to process request, please try later.')
})

app.use(function (err, req, res, next) {
    console.error( err );
    res.status(404).send('404, you made a bad request.')
})

// activates the app on port and sends a message to let us know the port is running
app.listen(3000, () => console.log('\nBookish listening on port 3000'));

// to send requests in postman we can now use http://localhost:3000/_______