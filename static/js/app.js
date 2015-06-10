var app = angular.module('industrial', []);

app.controller('informacion', function ($scope, $http, $sce) {

	$http.get('/static/tec_laguna/default.json').success(function (response) {
					$scope.informacion = response;
		    	});

	$scope.click = function(selector){
		$scope.tabla = '';
		switch(selector) {
				case 'inicio':
				$http.get('/static/tec_laguna/default.json').success(function (response) {

					$scope.informacion = response;
		    	});
				break;
		    case 'egresar':
		    	$http.get('/static/tec_laguna/al_egresar.json').success(function (response) {

					$scope.informacion = response;
		    	});
		        break;
		    case 'campos':
		    $http.get('/static/tec_laguna/campos.json').success(function (response) {
					$scope.informacion = response;
		    	});
		        break;
		    case 'admision':

		    $http.get('/static/tec_laguna/admision.json').success(function (response) {

					$scope.informacion = response;
		    	});
				break;
		    case 'permanensia':

		    $http.get('/static/tec_laguna/requisitos.json').success(function (response) {

					$scope.informacion = response;
		    	});

		        break;
		    case 'seleccion':
		     $http.get('/static/tec_laguna/seleccion.json').success(function (response) {

					$scope.informacion = response;
		    	});
		        break;

		    case 'caracteristicas':
		     $http.get('/static/tec_laguna/caracteristicas.json').success(function (response) {

					$scope.informacion = response;
		    	});

		        break;
		    case 'plan':
		     $http.get('/static/tec_laguna/tabla.html').success(function (response) {
		     		$scope.informacion = ''
					$scope.tabla= response;
		    	});

		        break;
		    default:
		        alert('default ' + selector);
		}
	}
}).filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
