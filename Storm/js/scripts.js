var valor = 1;
var controle = false;

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
			document.getElementById("ama3").style.color = "#fefefe";
			document.getElementById("ama1").style.color = "#fff001";
		break;
		
		case 2:
			document.getElementById("not1").style.display = "none";
			document.getElementById("not2").style.display = "block";
			document.getElementById("ama1").style.color = "#fefefe";
			document.getElementById("ama2").style.color = "#fff001";	
		break;
		
		case 3:
			document.getElementById("not2").style.display = "none";
			document.getElementById("not3").style.display = "block";
			document.getElementById("ama2").style.color = "#fefefe";
			document.getElementById("ama3").style.color = "#fff001";
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
			document.getElementById("ama2").style.color = "#fefefe";
			document.getElementById("ama1").style.color = "#fff001";
		break;
		
		case -2:
			document.getElementById("not3").style.display = "none";
			document.getElementById("not2").style.display = "block";
			document.getElementById("ama3").style.color = "#fefefe";
			document.getElementById("ama2").style.color = "#fff001";	
		break;
		
		case -1:
			document.getElementById("not1").style.display = "none";
			document.getElementById("not3").style.display = "block";
			document.getElementById("ama1").style.color = "#fefefe";
			document.getElementById("ama3").style.color = "#fff001";
		break;
	
	
}

}

function drop(){
	
	var menu = document.getElementById("dropDown");
	
	if (controle == false){
		
		menu.style.display = "block";	
		controle = true;
		
	} else{
		
		menu.style.display = "none";	
		controle = false;
		
	}
		
		
	
	
	
	
	
}

function muda(num){
	
	switch (num){
	
		case 1:
			document.getElementById("not3").style.display = "none";
			document.getElementById("not2").style.display = "none";
			document.getElementById("not1").style.display = "block";
			document.getElementById("ama3").style.color = "#fefefe";
			document.getElementById("ama2").style.color = "#fefefe";
			document.getElementById("ama1").style.color = "#fff001";
			valor = 1;
		break;
		
		case 2:
			document.getElementById("not1").style.display = "none";
			document.getElementById("not3").style.display = "none";
			document.getElementById("not2").style.display = "block";
			document.getElementById("ama1").style.color = "#fefefe";
			document.getElementById("ama3").style.color = "#fefefe";
			document.getElementById("ama2").style.color = "#fff001";	
			valor = 2;
		break;
		
		case 3:
			document.getElementById("not2").style.display = "none";
			document.getElementById("not1").style.display = "none";
			document.getElementById("not3").style.display = "block";
			document.getElementById("ama2").style.color = "#fefefe";
			document.getElementById("ama1").style.color = "#fefefe";
			document.getElementById("ama3").style.color = "#fff001";
			valor = 3;
		break;
	
	
}
	
}


function selecao(){
	
	var sele = parseInt(document.getElementById("selResp").value);
	
	switch (sele){
	
		case 1:
			document.getElementById("not3").style.display = "none";
			document.getElementById("not2").style.display = "none";
			document.getElementById("not1").style.display = "block";
			document.getElementById("ama3").style.color = "#fefefe";
			document.getElementById("ama2").style.color = "#fefefe";
			document.getElementById("ama1").style.color = "#fff001";
			valor = 1;
		break;
		
		case 2:
			document.getElementById("not1").style.display = "none";
			document.getElementById("not3").style.display = "none";
			document.getElementById("not2").style.display = "block";
			document.getElementById("ama1").style.color = "#fefefe";
			document.getElementById("ama3").style.color = "#fefefe";
			document.getElementById("ama2").style.color = "#fff001";	
			valor = 2;
		break;
		
		case 3:
			document.getElementById("not2").style.display = "none";
			document.getElementById("not1").style.display = "none";
			document.getElementById("not3").style.display = "block";
			document.getElementById("ama2").style.color = "#fefefe";
			document.getElementById("ama1").style.color = "#fefefe";
			document.getElementById("ama3").style.color = "#fff001";
			valor = 3;
		break;
	
	
}
	
	
	
}



