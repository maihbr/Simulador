appJS.controller('form1Ctrl',function($rootScope,$scope){

$scope.data={};
$scope.bonificacion=0;
$scope.showBtnSend=true;

$scope.Edades = $rootScope.DB.Edades.filter(function(item){
		return item.id < 4;
});

function esDiscaSevera(arrDiscapacidad,Porcentaje){
	
	var bEnfermedadTipo1 = arrDiscapacidad.some(function(item){
		return item=='enfermedad mental' || item=='intelectual';
	});

	var bEnfermedadTipo2 = arrDiscapacidad.some(function(item){
		return item=='física' || item=='visual' || item=='auditiva';
	});

	return (bEnfermedadTipo1 || (bEnfermedadTipo2 && Porcentaje==2))?true:false;

}

$scope.someSelected=function(){	

	if($scope.data.tipos!=undefined){
		return ($scope.data.tipos.length >0)?true:false;
	}else{
		return false;
	}
}	


$scope.submit=function(){

	var severa = esDiscaSevera($scope.data.tipos,$scope.data.porcentaje.id);
	
	$scope.bonificacion = $rootScope.DB.Importes.filter(function(item){
		
		return item.contrato==$rootScope.idContrato && 
			   item.edad == $scope.data.edad.id &&
			   item.sexo == $scope.data.sexo.id &&
			   item.severa == severa;

	})[0].importe;
	$scope.showBtnSend=false;

}

$scope.reset=function(){	
	$scope.data={};
	$scope.bonificacion=0;
	$scope.showBtnSend=true;
}


});