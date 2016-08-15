(function() {
    'use strict';

    angular
        .module('app')
        .service('Chat', Chat);

    Chat.$inject = [];

    /* @ngInject */
    function Chat() {
        this.all = all;
        this.get = get;
        this.remove = remove;

        ////////////////

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'http://placehold.it/512/ff0000/ffffff?text=BS'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'http://placehold.it/512/00ff00/000000?text=ML'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'http://placehold.it/512/0000ff/ffffff?text=AB'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'http://placehold.it/512/ffff00/000000?text=PG'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'http://placehold.it/512/ff00ff/ffffff?text=MH'
        }];

        function all() {
            return chats;
        }

        function get(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }

        function remove(chat) {
            chats.splice(chats.indexOf(chat), 1);
        }
    }
})();