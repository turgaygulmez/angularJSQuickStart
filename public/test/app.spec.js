describe('TgetController', function () {
    // inject app module
    beforeEach(module('Tget'));

    var myCtr, scope;
    // define scope and controller before each test
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        myCtr = $controller('TgetController', {
            $scope: scope
        });
    }));

    describe('controller model', function () {
	    it('should valid company name', function () {
	        expect(scope.companyName).toEqual('TGET');
	    });
	});
});
