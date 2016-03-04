appJS.controller('form3Ctrl',function($rootScope,$scope){
		
	$scope.infoBonificacion = $rootScope.DB.Importes.filter(function(item){					
		return item.contrato==$rootScope.idContrato;
	})[0].info;
			
});