angular.module("pedidos").factory("apiService", function($http){
	var _getCardapio = function(){
		return $http.get('http://localhost:3001/cardapio');
	}

	return {
		getCardapio: _getCardapio
	};
});