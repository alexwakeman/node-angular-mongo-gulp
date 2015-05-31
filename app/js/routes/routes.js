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