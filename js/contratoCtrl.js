appJS.controller('contratoCtrl',function($rootScope,$scope){

	$scope.data={};
		
	$scope.Contrato_Change=function(){

		$scope.infoContrato="";
		$rootScope.idContrato = $scope.data.contrato.id;		
		var contratoSelected  = $rootScope.DB.Contratos[$rootScope.idContrato-1];

		if(contratoSelected.bCalculate)
			$scope.infoContrato = contratoSelected.info;


		if($rootScope.idContrato==4 || $rootScope.idContrato==5 || $rootScope.idContrato==8){
			$rootScope.setView(true,false,false,false);
			if( angular.isObject($rootScope.$$childTail.$$childHead) && 
				angular.isFunction($rootScope.$$childTail.$$childHead.reset)){
				$rootScope.$$childTail.$$childHead.reset();
			}

		}else if($rootScope.idContrato==7){
			$rootScope.setView(false,true,false,false);
		}else if($rootScope.idContrato==2){			
			$rootScope.setView(false,false,false,true);
		}else{
			$rootScope.setView(false,false,true,false);
		}
				
	}


});