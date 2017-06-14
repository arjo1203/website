nerdboard.provider('dataService', function() {
	var baseURL = '';
	this.config = function() {
		baseURL = url;
	};

	this.$get = ['$http','$log', function($http, $log) {
		var oDataService = {};

		oDataService.myData = function(range) {
			return $http({
				url: 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=' + range,
				method: 'GET'
			});
		};

		

		return oDataService;
	}];
});