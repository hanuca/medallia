class MessageCtrl {

    constructor() {
    }
}

angular.module('mail-app').component('message',  {
  controller: MessageCtrl,
  templateUrl: 'src/directives/message/message.html',
  bindings: {
    message: '=',
    select: '&'
  },
});