class MailHomePageCtrl {

    constructor() {
        this.userName = 'aaa';

        this.unreadMessages = 3;
        this.totalMessages = 10;

        this.viewMessages = function() {

            alert('gdf');
        };
    }

}

angular.module('mail-app').controller('mail-home-page', MailHomePageCtrl);