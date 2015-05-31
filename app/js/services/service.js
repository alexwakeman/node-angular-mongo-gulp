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