angular.module("pedidos").controller("pedidosCtrl", function ($scope, pedidoP, cardapioValue, $http, apiService) {

	var loadCardapios = function(){
		apiService.getCardapio().success(function(cardapios){
			$scope.cardapio = cardapios;
		})
	};

	var loadPedidos = function(){
		$http.get('http://localhost:3001/pedidos').success(function(pedidos){
			$scope.pedidos = pedidos;
			$scope.total = calcularTotal();
			$scope.total = pedidoP.calculaImposto($scope.total);
		})
	};

	$scope.total = 0;

	$scope.adicionarPedido = function (pedido) {
		pedido.subtotal = pedido.quantidade * pedido.item.preco;
		pedido.data = new Date();

		$http.post('http://localhost:3001/pedidos', pedido).success(function(){
			loadPedidos();
			delete $scope.pedido;
			$scope.pedidoForm.$setPristine();
		})
	};

	$scope.cancelarPedido = function (pedido) {
		$scope.pedidos.splice($scope.pedidos.indexOf(pedido), 1);
		$scope.total = calcularTotal();
	};

	var calcularTotal = function () {
		return $scope.pedidos.reduce(function (prev, cur) {
			return prev + cur.subtotal;
		}, 0);
	};

	loadCardapios();
	loadPedidos();
});