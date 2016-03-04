var appJS = angular.module('appSimulator',['checklist-model']);

appJS.run(function($rootScope){
	
	$rootScope.bShowForm1=false;
	$rootScope.bShowForm2=false;
	$rootScope.bShowForm3=false;
	$rootScope.bShowForm4=false;

	$rootScope.setView=function(bForm1,bForm2,bForm3,bForm4){

		$rootScope.bShowForm1=bForm1;
		$rootScope.bShowForm2=bForm2;
		$rootScope.bShowForm3=bForm3;
		$rootScope.bShowForm4=bForm4;

	}
	
	//Cargamoos los datos

	$rootScope.DB = {Edades:[{'id':1,'caption':'Mayor o igual a 30 años'},
							 {'id':2,'caption':'Mayor de 30 y menor de 45 años'},							 
							 {'id':3,'caption':'Mayor o igual a 45 años'},
							 {'id':4,'caption':'Menor o igual 30 años'},
							 {'id':5,'caption':'Mayor de 45 años'}
							 ],

					Sexo:[{'id':1,'caption':'Hombre'},
						  {'id':2,'caption':'Mujer'}],

					Trabajadores:[
					{'id':1,'caption':'Con menos de 250 trabajadores'},
					{'id':2,'caption':'Con 250 trabajadores o más'}],

					Contratos:[
						{'id':1,
						 'caption':'Indefinido ordinario',
						 'bCalculate':false,
						 'info':''},

						{'id':2,
						  'caption':'Indefinido de apoyo a emprendedores',
						  'bCalculate':true,
						  'info':'En este tipo de contrato\, las bonificaciones dependen de las características del candidato.Este contrato sólo puede realizarse si el empleador es un trabajador autónomo que desea contratar a personas con discapacidad.Por favor\, tenga en cuenta que la ayuda establecida es por una jornada estándar de 40 horas semanales\, si no se hace esta jornada a la bonificación se le ha de aplicar la reducción correspondiente.'},

						{'id':3,'caption':'Fijo discontinuo', 'bCalculate':false,'info':''},

						{'id':4,
						 'caption':'Indefinido para la contratacion de personas con discapacidad',
						  'bCalculate':true,
						  'info':'En este tipo de contrato\, las bonificaciones dependen de las características del candidato.Por favor\, tenga en cuenta que la ayuda establecida es por una jornada estándar de 40 horas semanales\, si no se hace esta jornada a la bonificación se le ha de aplicar la reducción correspondiente.'},

						{'id':5,
						  'caption':'Indefinido para personas con discapacidad procedentes de enclaves laborales',
						  'bCalculate':true,
						  'info':'En este tipo de contrato\, las bonificaciones dependen de las características del candidato.Este contrato sólo puede realizarse si se está contratando a una persona con discapacidad que previamente había prestado servicio a la empresa a través de un enclave laboral.Por favor\, tenga en cuenta que la ayuda establecida es por una jornada estándar de 40 horas semanales\, si no se hace esta jornada a la bonificación se le ha de aplicar la reducción correspondiente.'},

						{'id':6,'caption':'Prácticas', 'bCalculate':false,'info':''},
						{'id':7,'caption':'Formación y aprendizajes','bCalculate':false,'info':''},
						
						{'id':8,
						 'caption':'Temporal de fomento de empleo para personas con discapacidad',
						  'bCalculate':true,
						 'info':'En este tipo de contrato\, las bonificaciones dependen de las características del candidato.Por favor\, tenga en cuenta que la ayuda establecida es por una jornada estándar de 40 horas semanales\, si no se hace esta jornada a la bonificación se le ha de aplicar la reducción correspondiente.'},

						{'id':9,'bCalculate':false,'caption':'Relevo','info':''},
						{'id':10,'bCalculate':false,'caption':'Obra y servicio determinado','info':''},
						{'id':11,'bCalculate':false,'caption':'Eventual por circustancias de la producción','info':''},
						{'id':12,'bCalculate':false,'caption':'Interinidad','info':''}
						],

					Porcentajes:[
						{'id':1,'caption':'Mayor o igual al 33% y menor de 65%'},
						{'id':2,'caption':'Mayor o igual al 65%'},						
					],

					Antiguedad:[
						{'id':1,'caption':'1 año'},
						{'id':2,'caption':'2 años'},
						{'id':3,'caption':'3 años'}
					],

					Tipos:[
						{"id":1,"caption":"Física"},
						{"id":2,"caption":"Organica"},
						{"id":3,"caption":"Visual"},
						{"id":4,"caption":"Auditiva"},
						{"id":5,"caption":"Enfermedad Mental"},
						{"id":6,"caption":"Intelectual"}
					],
						
					Importes:[
						{'contrato':1,'edad':0,'sexo':0,'importe':0,'info':'Este tipo de contrato no tiene bonificación\, salvo si la contratación es en un centro especial de empleo\, en cuyo caso la bonificación es del 50% de la cuota empresarial por contingencias comunes\.'},
						{'contrato':3,'edad':0,'sexo':0,'importe':0,'info':'Este tipo de contrato no tiene bonificación\, salvo si la contratación es en un centro especial de empleo\, en cuyo caso la bonificación es del 50% de la cuota empresarial por contingencias comunes\.'},
						{'contrato':6,'edad':0,'sexo':0,'importe':0,'info':'Bonificación del 50% de la cuota empresarial por contingencias comunes\.'},
						{'contrato':9,'edad':0,'sexo':0,'importe':0,'info':'Este tipo de contrato no tiene bonificación\, salvo si la contratación es en un centro especial de empleo\, en cuyo caso la bonificación es del 50% de la cuota empresarial por contingencias comunes\.'},
						{'contrato':10,'edad':0,'sexo':0,'importe':0,'info':'Este tipo de contrato no tiene bonificación\, salvo si la contratación es en un centro especial de empleo\, en cuyo caso la bonificación es del 50% de la cuota empresarial por contingencias comunes\.'},
						{'contrato':11,'edad':0,'sexo':0,'importe':0,'info':'Este tipo de contrato no tiene bonificación\, salvo si la contratación es en un centro especial de empleo\, en cuyo caso la bonificación es del 50% de la cuota empresarial por contingencias comunes\.'},
						{'contrato':12,'edad':0,'sexo':0,'importe':0,'info':'Bonificación del 100% de las cuotas empresariales a la seguridad por todos los conceptos y cuotas de recaudación en su conjunto\.Sólo cuando es para sustituir a trabajadores con discapacidad en situación de incapacidad temporal\.'},
						{'contrato':7,'edad':0,'sexo':0,'importe':0,'trabajadores':1,'info':'100% reducción de las cuotas empresariales por todos los conceptos y cuotas de recaudaciones conjunta\.'},
						{'contrato':7,'edad':0,'sexo':0,'importe':0,'trabajadores':2,'info':'75% reducción de las cuotas empresariales por todos los conceptos y cuotas de recaudaciones conjunta.'},

						{'contrato':2,'edad':4,'sexo':1,'duracion':1,'importe':1000},
						{'contrato':2,'edad':4,'sexo':1,'duracion':2,'importe':1100},
						{'contrato':2,'edad':4,'sexo':1,'duracion':3,'importe':1200},
						{'contrato':2,'edad':4,'sexo':2,'duracion':1,'importe':1100},
						{'contrato':2,'edad':4,'sexo':2,'duracion':2,'importe':1200},
						{'contrato':2,'edad':4,'sexo':2,'duracion':3,'importe':1300},
						{'contrato':2,'edad':5,'sexo':1,'duracion':0,'importe':1300},
						{'contrato':2,'edad':5,'sexo':2,'duracion':0,'importe':1500},

						{"contrato":4,"edad":1,"sexo":1,"severa":true,"importe":5100},
						{"contrato":4,"edad":1,"sexo":2,"severa":true,"importe":5950},
						{"contrato":4,"edad":2,"sexo":1,"severa":true,"importe":5100},
						{"contrato":4,"edad":2,"sexo":2,"severa":true,"importe":5950},
						{"contrato":4,"edad":3,"sexo":1,"severa":true,"importe":6300},
						{"contrato":4,"edad":3,"sexo":2,"severa":true,"importe":6300},
						{"contrato":4,"edad":1,"sexo":1,"severa":false,"importe":4500},
						{"contrato":4,"edad":1,"sexo":2,"severa":false,"importe":5350},
						{"contrato":4,"edad":2,"sexo":1,"severa":false,"importe":4500},
						{"contrato":4,"edad":2,"sexo":2,"severa":false,"importe":5350},
						{"contrato":4,"edad":3,"sexo":1,"severa":false,"importe":5700},
						{"contrato":4,"edad":3,"sexo":2,"severa":false,"importe":5700},

						{"contrato":5,"edad":1,"sexo":1,"severa":true,"importe":5100},
						{"contrato":5,"edad":1,"sexo":2,"severa":true,"importe":5950},
						{"contrato":5,"edad":2,"sexo":1,"severa":true,"importe":5100},
						{"contrato":5,"edad":2,"sexo":2,"severa":true,"importe":5950},
						{"contrato":5,"edad":3,"sexo":1,"severa":true,"importe":6300},
						{"contrato":5,"edad":3,"sexo":2,"severa":true,"importe":6300},
						{"contrato":5,"edad":1,"sexo":1,"severa":false,"importe":4500},
						{"contrato":5,"edad":1,"sexo":2,"severa":false,"importe":5350},
						{"contrato":5,"edad":2,"sexo":1,"severa":false,"importe":4500},
						{"contrato":5,"edad":2,"sexo":2,"severa":false,"importe":5350},
						{"contrato":5,"edad":3,"sexo":1,"severa":false,"importe":5700},
						{"contrato":5,"edad":3,"sexo":2,"severa":false,"importe":5700},

						{"contrato":5,"edad":1,"sexo":1,"severa":true,"importe":4100},
						{"contrato":5,"edad":1,"sexo":2,"severa":true,"importe":4700},
						{"contrato":5,"edad":2,"sexo":1,"severa":true,"importe":4100},
						{"contrato":5,"edad":2,"sexo":2,"severa":true,"importe":4700},
						{"contrato":5,"edad":3,"sexo":1,"severa":true,"importe":4700},
						{"contrato":5,"edad":3,"sexo":2,"severa":true,"importe":5300},

						{"contrato":5,"edad":1,"sexo":1,"severa":false,"importe":3500},
						{"contrato":5,"edad":1,"sexo":2,"severa":false,"importe":4100},
						{"contrato":5,"edad":2,"sexo":1,"severa":false,"importe":3500},
						{"contrato":5,"edad":2,"sexo":2,"severa":false,"importe":4100},

						{"contrato":5,"edad":3,"sexo":1,"severa":false,"importe":4100},
						{"contrato":5,"edad":3,"sexo":2,"severa":false,"importe":4700},

						{"contrato":8,"edad":1,"sexo":1,"severa":true,"importe":4100},
						{"contrato":8,"edad":2,"sexo":1,"severa":true,"importe":4100},
						{"contrato":8,"edad":1,"sexo":2,"severa":true,"importe":4700},
						{"contrato":8,"edad":2,"sexo":2,"severa":true,"importe":4700},
						{"contrato":8,"edad":3,"sexo":1,"severa":true,"importe":4700},
						{"contrato":8,"edad":3,"sexo":2,"severa":true,"importe":5300},
						{"contrato":8,"edad":1,"sexo":1,"severa":false,"importe":3500},
						{"contrato":8,"edad":2,"sexo":1,"severa":false,"importe":3500},
						{"contrato":8,"edad":1,"sexo":2,"severa":false,"importe":4100},
						{"contrato":8,"edad":2,"sexo":2,"severa":false,"importe":4100},
						{"contrato":8,"edad":3,"sexo":1,"severa":false,"importe":4100},
						{"contrato":8,"edad":3,"sexo":2,"severa":false,"importe":4700}
						

						]
				};
	
	//Final de carga de datos


});