class InboxCtrl {

    constructor(/*inject*/ inboxService) {
        this.messages = inboxService.getMessages();
    }
}

angular.module('mail-app').controller('inbox-controller', InboxCtrl);