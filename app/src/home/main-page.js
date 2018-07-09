class MailHomePageCtrl {

    constructor(/*inject*/ $scope, inboxService) {
        this.wire(inboxService, $scope);
        this.load();
    }

    wire(inboxService, $scope) {
        this.inboxService = inboxService;
        this.$scope = $scope;
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
        this.$scope.$digest();
    }
}

angular.module('mail-app').controller('mail-home-page', MailHomePageCtrl);