'use strict';

var app = angular.module('app', ['ui.router', 'appRoutes', 'appControllers', 'appServices', 'appDirectives', 'appFilters']);
var appRoutes = angular.module('appRoutes', []);
var appControllers = angular.module('appControllers', []);
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);
var appFilters = angular.module('appFilters', []);

app.constant('Options', {baseUrl: 'http://localhost:4001'});
appRoutes.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/home',
		controller: 'HomeCtrl',
		templateUrl: '../partials/home.html'
	})
	.state('app', {
		url: '/app/:uid',
		abstract: true,
		controller: 'AppCtrl',
		templateUrl: '../partials/app.html'
	})
	.state('app.dashboard', {
		url: '/dashboard',
		controller: 'DashboardCtrl',
		templateUrl: '../partials/app.dashboard.html'
	})
	.state('app.customers', {
		url: '/customers',
		controller: 'CustomersCtrl',
		templateUrl: '../partials/app.customers.html'
	})
});
appControllers.controller('HomeCtrl', ['$scope', '$http',
	function HomeCtrl($scope, $http) {
		
		$scope.welcome = "Landing page for App!";
	}
]);


appControllers.controller('AppCtrl', ['$scope', '$http', '$state', '$stateParams',
	function AppCtrl($scope, $http, $state, $stateParams) {

		$scope.uid = $stateParams.uid;

		$scope.returnHome = function() {
			return $state.go('home', {param1: 'arg1'});
		}
	}
]);

appControllers.controller('DashboardCtrl', ['$scope', '$http', '$state', '$stateParams', 'MyService',
	function DashboardCtrl($scope, $http, $state, $stateParams, MyService) {

		/* Accessible because sub state */
		$scope.uid = $stateParams.uid;

		$scope.fetchData = function() {
			MyService.read($stateParams.uid).then(function(data) {
				$scope.data = data;
			});
		}
	}
]);

appControllers.controller('CustomersCtrl', ['$scope', 
	function CustomersCtrl($scope) {

		var defaultForm = {
			name: "",
			email: ""
		};

		var id = 2;

		$scope.customers = [
			{
				id: 1,
				name: 'John Doe',
				email: 'johndoe@gmail.com'
			},
			{
				id: 2,
				name: 'Kevin Doe',
				email: 'kevindoe@gmail.com'
			}
		];

		$scope.addCustomer = function(customer) {
			var cust = {id: ++id, name:customer.name, email:customer.email};
			$scope.customers.push(cust);

			$scope.addForm.$setPristine();
            $scope.customer = defaultForm;
		}

	}
]);
appDirectives.directive('tplMyData', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/directives/tpl.my.data.html'
	};
});
appFilters.filter('myFilter', function() {
	return function(input) {
		return input ? input : 'Nothing Fetch Yet!';
	}
})
appServices.factory('MyService', function($http, $q, Options) {
	return {
		read: function(id) {
			var deferred = $q.defer();

			$http.get(Options.baseUrl + '/read/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		create: function(data) {
			var deferred = $q.defer();

			$http.post(Options.baseUrl + '/create', {data: "my data"}).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		edit: function(data) {
			var deferred = $q.defer();

			$http.put(Options.baseUrl + '/edit', {data: "my data"}).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		delete: function(id) {
			var deferred = $q.defer();

			$http.delete(Options.baseUrl + '/delete/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	};
});