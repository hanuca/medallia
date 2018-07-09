const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const database = require('./database')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/"));

app.get('/getUnreadMessages', function (req, res) {
  res.json({unreadMessages: 3});
});

app.get('/getTotalMessages', function (req, res) {
    res.json({totalMessages: 10});
});

app.get('/getMessages', function (req, res) {

    let messages =[];

    messages.push(
        {
            subject: 'subject',
            content: 'content',
        },
        {
            subject: 'subject123',
            content: 'content123',
        },
        {
            subject: 'subject999',
            content: 'very large content to check elipsis is working',
        });

    res.json(messages);
});

app.listen(3000, function () {
  console.log('Comments server listening on port 3000!')
});
