// lib
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const _ = require('lodash');

// app
const database = require('./database');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/"));

app.get('/getUnreadMessages', function (req, res) {

  let messages = database.getMessages();
  let notReadMessage = _.filter(messages, {isRead: false});
  res.json({unreadMessages: notReadMessage.length});
});

app.get('/getTotalMessages', function (req, res) {
    let messages = database.getMessages();
    res.json({totalMessages: messages.length});
});

app.get('/getMessages', function (req, res) {
    let messages = database.getMessages();
    res.json(messages);
});

app.put('/markMessageAsRead/:id', function(req, res) {
    const id = req.params.id
    let readMessageResult = database.markReadMessage(id)

    if (readMessageResult) {
        res.json(readMessageResult);
    } else {
        res.json('message is not existed');
    }
})


app.listen(3000, function () {
  console.log('Comments server listening on port 3000!')
});
