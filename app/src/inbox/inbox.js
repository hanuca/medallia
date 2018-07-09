class InboxCtrl {

    constructor(/*inject*/ $scope, inboxService) {
        this.wire(inboxService, $scope);
        this.load();

    }

    wire(inboxService, $scope) {
        this.inboxService = inboxService;
        this.$scope = $scope;
    }

    async load() {
        this.messages = await this.inboxService.getMessages();
        this.$scope.$digest();
    }
}

angular.module('mail-app').controller('inbox-controller', InboxCtrl);