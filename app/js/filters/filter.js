appFilters.filter('myFilter', function() {
	return function(input) {
		return input ? input : 'Nothing Fetch Yet!';
	}
})