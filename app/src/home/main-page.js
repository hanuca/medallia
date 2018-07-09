class MailHomePageCtrl {

    constructor(/*inject*/ inboxService) {
        this.wire(inboxService);
        this.load();
    }

    wire(inboxService) {
        this.inboxService = inboxService;
    }

    load() {
        this.loadUser();
        this.loadMessagesCounter();
    }

    loadUser() {
        this.userName = this.inboxService.getInboxUser();
    }

    async loadMessagesCounter() {
        this.unreadMessages = await this.inboxService.getUnreadMessages();
        this.totalMessages = await this.inboxService.getTotalMessages();
    }
}

angular.module('mail-app').controller('mail-home-page', MailHomePageCtrl);