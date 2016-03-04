appJS.controller('form4Ctrl',function($rootScope,$scope){

	$scope.data={};
	$scope.showBtnSend=true;
	$scope.ShowDuration=true;
	$scope.bonificacion=0;

	$scope.Edades = $rootScope.DB.Edades.filter(function(item){
		return item.id > 3;
	});


	$scope.Edad_Change=function(){
			
		if((!$scope.data.hasOwnProperty('edad') || $scope.data.edad.id==4)){
			$scope.ShowDuration = true;			
		}else{
			$scope.ShowDuration = false;			
		}			
	}


	$scope.submit=function(){

		var duracion = ($scope.data.hasOwnProperty('antiguedad'))? $scope.data.antiguedad.id:0;

		$scope.bonificacion = $rootScope.DB.Importes.filter(function(item){
						
			return item.contrato==2 && 
				   item.edad == $scope.data.edad.id && 
				   item.sexo == $scope.data.sexo.id && 				   
				   item.duracion == duracion;

		})[0].importe;

		$scope.showBtnSend=false;
	}

	$scope.reset=function(){

		$scope.data={};
		$scope.showBtnSend=true;
		$scope.ShowDuration=true;
		$scope.bonificacion=0;
	}


});