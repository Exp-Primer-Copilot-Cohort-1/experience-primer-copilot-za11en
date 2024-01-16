//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const jwtSecret = 'secret123';
const jwtCheck = expressJwt({ secret: jwtSecret });
const port = 3001;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
const allowedOrigins = ['http://localhost:3000'];
const socketioJwt = require('socketio-jwt');
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});
const mongoose = require('mongoose');
const mongoDB = 'mongodb://    