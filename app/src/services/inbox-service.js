class InboxService {

    constructor($http) {
        this.wire($http);
    }

    wire($http) {
        this.$http = $http;
    }

    getInboxUser() {
        return 'moshe'; // should be login user at session
    }

    getUnreadMessages() {
        return this.$http.get('http://localhost:3000/getUnreadMessages').then(function(data) {
            return data.data.unreadMessages;
        });
    }

    getTotalMessages() {
        return this.$http.get('http://localhost:3000/getTotalMessages').then(function(data) {
            return data.data.totalMessages;
        });
    }

    getMessages() {
        return this.$http.get('http://localhost:3000/getMessages').then(function(data) {
            let messages = [];
            _.forEach(data.data, (item) => {
                let message = new Message(item.id, item.subject,item.content, item.isRead);
                messages.push(message);
            });
            return messages;
        });
    }

    readMessage(message) {
        return this.$http.put('/markMessageAsRead/' + message.id);
    }
}

angular.module('mail-app').service('inboxService', InboxService);