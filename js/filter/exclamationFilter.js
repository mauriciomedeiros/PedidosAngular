angular.module("pedidos").filter("exclamation", function () {
	return function (input, number) {
		var exclamations = new Array((number + 1)).join("!");
		return input + exclamations;
	};
});