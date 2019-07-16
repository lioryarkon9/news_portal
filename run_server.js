const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const PATH = require('path');
const SOCKET_IO = require('socket.io')();

const App = EXPRESS(); // initializing app with express server software

// App.use is a method for implementing middleware
App.use(BODY_PARSER.json());
App.use(BODY_PARSER.urlencoded({ extended: true }));
App.use(EXPRESS.static(PATH.join(__dirname, 'react-client/build'))); // serving static files from html document

const Server = App.listen(process.env.PORT || 5000, function () {
    const HOST = Server.address().address, PORT = Server.address().port;
    console.info('news_portal listening at http://%s:%s', HOST, PORT);
});

App.get('/', function (req, res) {
    res.sendFile(__dirname + '/react-client/build/index.html');
});

SOCKET_IO.on('connection', function (socket) {
    console.log('a user is connected');
})