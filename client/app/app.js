angular.module("App", [])
.controller("myController", function($scope,appQuote) {
	$scope.data = {};
	$scope.quote = function() {
		console.log('quote method active');
		appQuote.getQuote()
			.then(function(quo) {
				$scope.data.quo = quo;
			})
			.catch(function(error) {
				console.log(error);
			});
	}
})
.factory("appQuote", function($http) {

		var array = []; 

		var getQuote = function() {
		return $http({
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
  		method: "POST",
  		headers: {
    		"content-type": "application/x-www-form-urlencoded",
    		"accept": "application/json",
    		"x-mashape-key": "85undWA8fnmsh09irl8YW1g0r816p1chfHnjsnxLekODfILfup"
    	}
		})
		.then(function(resp) {
			array.push(resp.data.quote);
			return resp.data.quote;
		})
	}

	// var getQuote = function() {
	// 	return $http({
	// 		method: 'POST',
	// 		url: 'http://quotes.rest/qod.json'
	// 	})
	// 	.then(function(resp) {
	// 		console.log(resp.data.contents.quotes[0].quote)
	// 		return resp.data.contents.quotes[0].quote;
	// 	})
	// }

	return {
		getQuote: getQuote
	}
})