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

}

angular.module('mail-app').service('inboxService', InboxService);