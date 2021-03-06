class InboxCtrl {

    constructor(/*inject*/ $scope, inboxService, $state) {
        this.wire(inboxService, $scope, $state);
        this.load();

    }

    wire(inboxService, $scope, $state) {
        this.inboxService = inboxService;
        this.$scope = $scope;
        this.$state = $state;
    }

    async load() {
        this.messages = await this.inboxService.getMessages();
        this.$scope.$digest();
    }

    selectMessage(message) {

        this.updateReadMessage(message);
        this.goToMessageView(message);
    }

    updateReadMessage(message) {
        message.read();
        return this.inboxService.readMessage(message);
    }

    goToMessageView(message) {
        this.$state.go('message-view', {message: message});
    }
}

angular.module('mail-app').controller('inbox-controller', InboxCtrl);