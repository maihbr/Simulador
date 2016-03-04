appJS.controller('form2Ctrl',function($rootScope,$scope){

	$scope.infoBonificacion="";
	$scope.data={};

	$scope.Trabajadores_Change=function(){		
		$scope.infoBonificacion = $rootScope.DB.Importes.filter(function(item){				
				return item.contrato==7 && item.trabajadores== parseInt($scope.data.trabajadores.id);
			})[0].info;
			
	}

});