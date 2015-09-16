angular.module("pedidos").factory("loadingInterceptor", function($rootScope, $timeout){
	return {
		request: function(config){
			$rootScope.loading = true;
			return config
		},

		response: function(response){
			$timeout(function(){
				$rootScope.loading = false;
			}, 1000);
			return response;
		}
	};
});


angular.module("pedidos").config(function($httpProvider){
	$httpProvider.interceptors.push("loadingInterceptor");
})