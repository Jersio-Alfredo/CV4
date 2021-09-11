let mostrar = 0
let ul

function ocultarMostrar(){
	ul = document.getElementById('ocultar');
	if (mostrar == 0){
		
		ul.setAttribute("class","ocultar");
		mostrar = 1;
	}else {
		ul.setAttribute("class","");
		mostrar = 0;
	}
}

