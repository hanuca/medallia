const messages = [];

function loadMessages() {

    messages.push(createMessage('subject', 'content', false));
    messages.push(createMessage('subject123', 'content123', false));
    messages.push(createMessage('subject999', 'very large content to check elipsis is working', false));
    messages.push(createMessage('subject Read',
            `this message is already read
             and has very long content
             with alot of words
             that no one will ever read them.
             once upon a time there was a message ...`, true));
    messages.push(createMessage('subject not Read yet', 'not read yet', false));
    messages.push(createMessage('another read message ', 'read it too', true));
    messages.push(createMessage('last one', 'last message', false));
}

function createMessage(subject, content, isRead) {

    return {
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

module.exports = {
    getMessages: getMessages
}