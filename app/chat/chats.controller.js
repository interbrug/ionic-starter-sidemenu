(function() {
    'use strict';

    angular
        .module('app')
        .controller('ChatsController', ChatsController);

    ChatsController.$inject = ['$scope', 'Chat'];

    /* @ngInject */
    function ChatsController($scope, Chat) {
        var vm = this;

        // METHODS
        vm.remove = remove;

        // VARIABLES
        vm.chats = [];

        ionic.Platform.ready(function(){
            activate();
        });

        ////////////////

        function activate() {
        	// Bij iedere binnenkomst opnieuw laden
			$scope.$on('$ionicView.enter', function(e) {
				loadChats();
			});
        }

        function loadChats() {
		  vm.chats = Chat.all();
        }
		
		function remove(chat) {
			Chat.remove(chat);
		};
    }
})();