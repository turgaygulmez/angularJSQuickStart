var app = angular.module('Tget', []);

app.controller('TgetController', HomeController);

function HomeController ($scope, TgetFactory) {

	var model = TgetFactory.model;

	$scope.companyName = model.companyName;
}