'use strict'

window.addEventListener('load', ()=>{
	console.log("DOM cargado!!");
	
	
	
	var formulario = document.querySelector("#formulario");

	formulario.addEventListener('submit', function(){
		console.log("Evento submit capturado");
		
	
	
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var email = document.querySelector("#email").value;
		var edad = parseInt(document.querySelector("#edad").value);
		var mensaje = document.querySelector("#mensaje").value;
			
		
		console.log(nombre);
		if(nombre.trim() == null || nombre.trim().length == 0){
			alert("El nombre no es válido");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
			document.querySelector("#error_nombre").style.color ="red";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display = "none";
		}

		console.log(apellidos);
		if(apellidos.trim() == null || apellidos.trim().length == 0){
			alert("El apellido no es válido");
			document.querySelector("#error_apellidos").innerHTML = "El apellido no es valido";
			document.querySelector("#error_apellidos").style.color ="red";
            return false;
		}

		console.log(email);
		if(email.trim() == null || email.trim().length == 0){
			alert("El email no es válido");
			document.querySelector("#error_email").innerHTML = "El el email no es valido";
			document.querySelector("#error_email").style.color ="red";
            return false;
		}

		console.log(edad);
		if(edad == null || edad <= 0 || isNaN(edad)){
			alert("La edad no es válida");
			document.querySelector("#error_edad").innerHTML = "La edad no es valida";
			document.querySelector("#error_edad").style.color ="red";
			return false;
		}
        console.log(mensaje);
		if(mensaje.trim() == null || mensaje.trim().length == 0){
			alert("El mensaje no es válido");
			document.querySelector("#error_mensaje").innerHTML = "El mensaje no es valido";
			document.querySelector("#error_mensaje").style.color ="red";
            return false;
		}

    	    
		/*
		var datos_usuario = [nombre, apellidos, edad];
		var indice;
		for(indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		*/
		
	});

});