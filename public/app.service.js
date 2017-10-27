app.factory('TgetFactory', HomeFactory);

function HomeFactory () {
	var factory = {
		model: {
			companyName: 'TGET'
		}
	}; 

	factory.method1 = function() {
		console.error('not implemented');
	}

	factory.method2 = function() {
		console.error('not implemented');
	}

	return factory;
}