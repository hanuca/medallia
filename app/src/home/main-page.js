class MailHomePageCtrl {

    constructor(/*inject*/ inboxService) {
        this.userName = inboxService.getInboxUser();

        this.unreadMessages = inboxService.getUnreadMessages();
        this.totalMessages = inboxService.getTotalMessages();
    }
}

angular.module('mail-app').controller('mail-home-page', MailHomePageCtrl);