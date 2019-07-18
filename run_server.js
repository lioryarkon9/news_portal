const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const PATH = require('path');
const SOCKET_IO = require('socket.io');

const App = EXPRESS(); // initializing app with express server software

// App.use is a method for implementing middleware
App.use(BODY_PARSER.json());
App.use(BODY_PARSER.urlencoded({ extended: true }));
App.use(EXPRESS.static(PATH.join(__dirname, 'react-client/build'))); // serving static files from html document

const EXPRESS_SERVER = App.listen(process.env.PORT || 5000, function () {
    const HOST = EXPRESS_SERVER.address().address, PORT = EXPRESS_SERVER.address().port;
    console.info('news_portal listening at http://%s:%s', HOST, PORT);
});


App.get('/', function (req, res) {
    res.sendFile(__dirname + '/react-client/build/index.html');
});

App.post('/subscribe', function (req, res) {
    const EMAIL = req.body.emailValue;
    res.json({msg: 'ok', emailReceived: EMAIL});
})

const IO = SOCKET_IO(EXPRESS_SERVER);

const NEWS_CHANNEL = IO.of('/news', function (socket) {
    console.log('a news user is connected');
    socket.emit('data', {data: 'Breaking News init Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'});
    const IntervalId = setInterval(() => {
        socket.emit('data', {data: 'Breaking News Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'})
    }, 600000);
    socket.on('disconnect', function () {
        console.log('A news user disconnected');
        clearInterval(IntervalId);
    });
})

const WAETHER_CHANNEL = IO.of('/weather', function (socket) {
    console.log('a weather user is connected');
    socket.emit('data', {data: [
        {tmp: '36', location: 'Beer Sheva'},
        {tmp: '37', location: 'Beer Sheva'},
        {tmp: '28', location: 'Beer Sheva'},
        {tmp: '17', location: 'Beer Sheva'},
        {tmp: '33', location: 'Beer Sheva'},
        {tmp: '11', location: 'Beer Sheva'},
        {tmp: '24', location: 'Beer Sheva'}
    ]});
    const IntervalId = setInterval(() => {
        socket.emit('data', {data: [
            {tmp: '36', location: 'Beer Sheva'},
            {tmp: '37', location: 'Beer Sheva'},
            {tmp: '28', location: 'Beer Sheva'},
            {tmp: '17', location: 'Beer Sheva'},
            {tmp: '33', location: 'Beer Sheva'},
            {tmp: '11', location: 'Beer Sheva'},
            {tmp: '24', location: 'Beer Sheva'}
        ]});
    }, 14400000);
    socket.on('disconnect', function () {
        console.log('A weather user disconnected');
        clearInterval(IntervalId);
    });
})

const FINANCE_CHANNEL = IO.of('/finance', function (socket) {
    console.log('a finance user is connected');
    socket.emit('data', {data: {PointsScored: [74, 33, 46, 68], Teams: ['Team1', 'Team2', 'Team3', 'Team4']}});
    const IntervalId = setInterval(() => {
        socket.emit('data', {data: {PointsScored: [80, 25, 30, 70], Teams: ['Team1', 'Team2', 'Team3', 'Team4']}});
    }, 300000);
    socket.on('disconnect', function () {
        clearInterval(IntervalId);
        console.log('A finance user disconnected');
    });
})

const SPORTS_CHANNEL = IO.of('/sports', function (socket) {
    console.log('a sports user is connected');
    socket.emit('data', {data: {Team1: {id: 'barcelona', label: 'Barca', points: '0'}, Team2: {id: 'real_madrid', label: 'Madrid', points: '0'}}});
    const IntervalId = setInterval(() => {
        socket.emit('data', {data: {Team1: {id: 'barcelona', label: 'Barca', points: '2'}, Team2: {id: 'real_madrid', label: 'Madrid', points: '3'}}});
    }, 1000);
    socket.on('disconnect', function () {
        clearInterval(IntervalId);
        console.log('A sports user disconnected');
    });
})