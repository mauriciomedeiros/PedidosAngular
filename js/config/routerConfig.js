angular.module("pedidos").config(function($routeProvider){
	$routeProvider.when("/pedidos", {
		templateUrl: "view/pedidos.html",
		controller: "pedidosCtrl",
		resolve: {
			cardapio: function(apiService){
				return apiService.getCardapio()
			}
		}
	});

	$routeProvider.otherwise({
		redirectTo: "/pedidos"
	});
})