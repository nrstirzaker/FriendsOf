'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const Hapi = require('hapi');
var appConfig = require('./appConfig.js');
// Create a server with a host and port

const server = new Hapi.Server();
server.connection({ 
    host: 'friendsofripley-gu23-6ed', 
    port: 80 
});

// Add the route
server.route({
    method: 'GET',
    path:'/health', 
    handler: function (request, reply) {

        return reply('Server is running');
    }
});

server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {

        return reply('Server is running');
    }
});

server.route({
    method: 'POST',
    path:'/add', 
    handler: function (request, reply) {

        console.log( request.payload);

        reply('Hello ' + encodeURIComponent(request.payload.email) + '!');
    }
});



// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});