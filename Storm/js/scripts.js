var valor = 1

function prox(){
	
	switch (valor){
		
		case -3:
		
			valor = 1;
		
		break;
		
		case -2:
		
			valor = 2;
		
		break;
		
		case -1:
		
			valor = 3;
		
		break;
		
	}
	
	
	if (valor == 3) {
		
		valor = 0;
		
	}
	valor = valor + 1;
	switch (valor){
	
		case 1:
			document.getElementById("not3").style.display = "none";
			document.getElementById("not1").style.display = "block";
			document.getElementById("ama3").style.color = "white";
			document.getElementById("ama1").style.color = "yellow";
		break;
		
		case 2:
			document.getElementById("not1").style.display = "none";
			document.getElementById("not2").style.display = "block";
			document.getElementById("ama1").style.color = "white";
			document.getElementById("ama2").style.color = "yellow";	
		break;
		
		case 3:
			document.getElementById("not2").style.display = "none";
			document.getElementById("not3").style.display = "block";
			document.getElementById("ama2").style.color = "white";
			document.getElementById("ama3").style.color = "yellow";
		break;
	
	
}
}

function ant(){
	
	switch (valor){
		
		case 1:
		
			valor = 0;
		
		break;
		
		case 2:
		
			valor = -2;
		
		break;
		
		case 3:
		
			valor = -1;
		
		break;
		
	}
	
	if (valor == -3) {
		
		valor = 0;
		
	}
	valor = valor - 1;
	switch (valor){
	
		case -3:
			document.getElementById("not2").style.display = "none";
			document.getElementById("not1").style.display = "block";
			document.getElementById("ama2").style.color = "white";
			document.getElementById("ama1").style.color = "yellow";
		break;
		
		case -2:
			document.getElementById("not3").style.display = "none";
			document.getElementById("not2").style.display = "block";
			document.getElementById("ama3").style.color = "white";
			document.getElementById("ama2").style.color = "yellow";	
		break;
		
		case -1:
			document.getElementById("not1").style.display = "none";
			document.getElementById("not3").style.display = "block";
			document.getElementById("ama1").style.color = "white";
			document.getElementById("ama3").style.color = "yellow";
		break;
	
	
}
}