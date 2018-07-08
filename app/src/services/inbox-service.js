class InboxService {

    constructor() {
    }

    viewMessages() {
        alert('gdf');
    }

    getInboxUser() {
        return 'moshe';
    }

    getUnreadMessages() {
        return 3;
    }

    getTotalMessages() {
        return 10;
    }

    getMessages() {

        // Mock messages
        let message = new Message('subject', 'content');
        let message2 = new Message('subject222', 'content222');
        let message3 = new Message('333333', 'bocy 3333');

        let messages = [];
        messages.push(message);
        messages.push(message2);
        messages.push(message3);
        return messages;
    }

}

angular.module('mail-app').service('inboxService', InboxService);