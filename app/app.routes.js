(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider

            // setup an abstract state for the apps directive
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/menu/menu.view.html',
                controller: 'MenuController as MenuCtrl'
            })

            // Each app has its own nav history stack:

            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'app/search/search.view.html'
                    }
                }
            })

			.state('app.browse', {
				url: '/browse',
				views: {
					'menuContent': {
						templateUrl: 'app/browse/browse.view.html'
					}
				}
			})

            .state('app.chats', {
                url: '/chats',
                views: {
                    'menuContent': {
                       templateUrl: 'app/chat/chats.view.html',
                        controller: 'ChatsController as ChatsCtrl'
                    }
                }
            })
            
            .state('app.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'menuContent': {
                        templateUrl: 'app/chat/chat.view.html',
                        controller: 'ChatController as ChatCtrl'
                    }
                }
            });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/chats');

        });
})();