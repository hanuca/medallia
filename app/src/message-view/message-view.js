class MessageViewCtrl {

    constructor(/*inject*/ $scope, $stateParams) {
        this.wire($scope, $stateParams);
        this.load();

    }

    wire($scope, $stateParams) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
    }

    async load() {
        this.message = this.$stateParams.message;
    }
}

angular.module('mail-app').controller('message-view-controller', MessageViewCtrl);