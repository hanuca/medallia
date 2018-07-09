class InboxCtrl {

    constructor(/*inject*/ inboxService) {
        this.wire(inboxService);
        this.load();
    }

    wire(inboxService) {
        this.inboxService = inboxService;
    }

    async load() {
        this.messages = await this.inboxService.getMessages();
    }
}

angular.module('mail-app').controller('inbox-controller', InboxCtrl);