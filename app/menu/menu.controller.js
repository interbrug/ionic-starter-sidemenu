(function() {
    'use strict';

    angular
        .module('app')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', '$ionicModal', '$timeout'];

    /* @ngInject */
    function MenuController($scope, $ionicModal, $timeout) {
        var vm = this;

        // METHODS
        vm.closeLogin = closeLogin;
        vm.doLogin = doLogin;
        vm.login = login;

        // VARIABLES
        vm.loginData = {};

        ionic.Platform.ready(function(){
            activate();
        });

        ////////////////

        function activate() {
			$ionicModal.fromTemplateUrl('app/login/login.view.html', {
				scope: $scope
			}).then(function(modal) {
				vm.modalLogin = modal;
			});
        }

		// Triggered in the login modal to close it
		function closeLogin() {
			console.log('hide modal');
			vm.modalLogin.hide();
		};

		// Perform the login action when the user submits the login form
		function doLogin() {
			console.log('Doing login', vm.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout(function() {
				closeLogin();
			}, 1000);
		};

		// Open the login modal
		function login() {
			vm.modalLogin.show();
		};

    }
})();