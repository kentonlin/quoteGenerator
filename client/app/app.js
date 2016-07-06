angular.module("App", [])
.controller("myController", function($scope,appQuote) {
	$scope.data = {};
	$scope.data.list = []; 

	$scope.quote = function() {
		appQuote.getQuote()
			.then(function(quo) {
				$scope.data.quote = quo.quote;
				$scope.data.author = quo.author; 
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	$scope.addQuote = function() {
		$scope.data.list = appQuote.addTo()
		console.log($scope.data.list)
	};

	$scope.removeItem = function(elem) {
		var index = $scope.data.list.indexOf(elem);
		$scope.data.list.splice(index, 1);
	}

})
.factory("appQuote", function($http) {

		var array = []; 
		var current; 

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
				console.log(resp.data)
				current = resp.data; 
				return resp.data;
			})
		}

		var addTo = function() {
			array.push(current);
			return array; 
		}

	return {
		getQuote: getQuote,
		addTo: addTo
	}

})

// ROUTER CODE 
// angular.module("App", ['ngRoute'])

// .config(function($routeProvider) {
// 	$routeProvider

// 	.when('/', {
// 		templateUrl : ''
// 	})
// })
// ROUTER CODE 
