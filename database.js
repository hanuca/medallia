// lib
const _ = require('lodash');

// vars
const messages = [];

function loadMessages() {

    messages.push(createMessage(1, 'subject', 'content', false));
    messages.push(createMessage(2, 'subject123', 'content123', false));
    messages.push(createMessage(3, 'subject999', 'very large content to check elipsis is working', false));
    messages.push(createMessage(4, 'subject Read',
            `this message is already read
             and has very long content
             with alot of words
             that no one will ever read them.
             once upon a time there was a message ...`, true));
    messages.push(createMessage(5, 'subject not Read yet', 'not read yet', false));
    messages.push(createMessage(6, 'another read message ', 'read it too', true));
    messages.push(createMessage(7, 'last one', 'last message', false));
}

function createMessage(id, subject, content, isRead) {

    return {
        id: id,
        subject:subject,
        content:content,
        isRead: isRead
    }
}

function init() {
    loadMessages();
}

init();

function getMessages() {
    return messages;
}

function markReadMessage(id) {
    let message = _.find(messages, (message) => {
        return message.id.toString() === id.toString();
    });
    if (message) {
        message.isRead = true;
        return message;
    }

    return null;
}

module.exports = {
    getMessages: getMessages,
    markReadMessage: markReadMessage
}