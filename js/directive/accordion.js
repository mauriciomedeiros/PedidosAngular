angular.module("pedidos").directive("accordion", function(){
	return {
		templateUrl: "view/accordion.html",
		scope: {
			title: "@"
		},
		transclude: true,
		link: function(scope){
			scope.open = function(){
				scope.isAberto = !scope.isAberto;
			}
		}
	};
})