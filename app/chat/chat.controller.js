(function() {
    'use strict';

    angular
        .module('app')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['$stateParams', 'Chat'];

    /* @ngInject */
    function ChatController($stateParams, Chat) {
        var vm = this;

        // METHODS

        // VARIABLES
        vm.chat = {};

        ionic.Platform.ready(function(){
            activate();
        });

        ////////////////

        function activate() {
            vm.chat = Chat.get($stateParams.chatId);
        }
    }
})();