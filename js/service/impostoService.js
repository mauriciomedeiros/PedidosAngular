// exemplos de services
angular.module("pedidos").factory("impostoFactory", function(){
	var _calculaImposto = function(valorPedido){
		return valorPedido + (valorPedido * 0.10);
	}
	return {
		calculaImposto: _calculaImposto
	};
});

angular.module("pedidos").service("impostoServices", function(){
	this.calculaImposto = function(valorPedido){
		return valorPedido + (valorPedido * 0.10);
	}
});

angular.module("pedidos").provider("pedidoP", function(porcentagemDefaultConstant){
	var _porcentagem = porcentagemDefaultConstant.valor;

	var _calculaImposto = function(valorPedido){
		return valorPedido + (valorPedido * (_porcentagem / 100));
	};

	this.setPorcentagemImposto = function(porcentagem){
		_porcentagem = porcentagem;
	};

	this.$get = function(){
		return {
			calculaImposto: _calculaImposto
		};
	};
});