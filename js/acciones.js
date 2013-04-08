$(document).ready(function(e) {
	//alert ("listo")
	document.addEventListener("deviceready",function (){
		$(".btn").tap (function(){
		var boton=(($(this).attr('class')).split(' '))[1];
		switch(boton)
		{
			case 'b1':
			navigator.notification.beep(1);
			break;
			case 'b2':
			navigator.notification.beep(2);
			break;
			case 'b3':
			navigator.notification.beep(3);
			break;
			case 'v1':
			navigator.notification.vibrate(500);
			break;
			case 'v2':
			navigator.notification.vibrate(300);
			navigator.notification.vibrate(1000);
			break;
		}
		$('derecha').swiperight(function(){
			navigator.notification.alert("deslizo a la derecha",function(){},"Practica 1", "aceptar");
			
		$('izquierda').swipeleft(function(){
			navigator.notification.confirm("deslizo a la izquierda",function(option){
				switch (option){
					case '1':
					navigator.notification.beep(1)
					break;
					case '2':
					navigator.notification.vibrate(500)
					break;
				}
				},"Practica 1", "Beep, Vibrar,Cancelar");	
		});
		
		
		$('table td').eq(1).text(device.name);
		$('table td').eq(3).text(device.cordpva);
		$('table td').eq(5).text(device.plataform);
		$('table td').eq(7).text(device.version);
		$('table td').eq(9).text(device.UUID);
		
		});
		
	},false);
        	
              
        });
		});
