class InboxCtrl {

    constructor() {
        this.messages = [];

        this.messages.push('message');
        this.messages.push('123');

        this.messages.push('789');
    }
}

angular.module('mail-app').controller('inbox-controller', InboxCtrl);