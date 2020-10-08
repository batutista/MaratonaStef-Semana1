(function () {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);

    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = ['$rootScope'];

    function listaTarefasController($rootScope) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        $rootScope.listaMensagens = [
            { id: 1, text: 'Mensagem aqui', tipo: 'danger'},
            { id: 2, text: 'Mensagem aqui', tipo: 'info'},
            { id: 2, text: 'Mensagem aqui', tipo: 'success'},
            { id: 4, text: 'Mensagem aqui', tipo: 'warning'}
        ]

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();
