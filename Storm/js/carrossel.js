var valor = 1;
var controle = false;

function trocarAut(){
			
	if (valor == 3) {
		
		valor = 0;
		
	}
	valor = valor + 1;
	switch (valor){
	
		case 1:
			document.getElementById("img3").style.display = "none";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img1").style.display = "block";
						
		break;
		
		case 2:
			document.getElementById("img3").style.display = "none";
			document.getElementById("img2").style.display = "block";
			document.getElementById("img1").style.display = "none";
		break;
		
		case 3:
			document.getElementById("img3").style.display = "block";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img1").style.display = "none";
		break;
	
	
}
}


function clickCarrossel(num){
	
	valor = valor + parseInt(num);
	
	switch (valor){
		
		case 0:
			
			valor = 3;
			
		break;
			
		case 4:
		
			valor = 1;
			
		break;
		
	}
	
	switch (valor){
	
		case 1:
			document.getElementById("img3").style.display = "none";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img1").style.display = "block";
						
		break;
		
		case 2:
			document.getElementById("img3").style.display = "none";
			document.getElementById("img2").style.display = "block";
			document.getElementById("img1").style.display = "none";
		break;
		
		case 3:
			document.getElementById("img3").style.display = "block";
			document.getElementById("img2").style.display = "none";
			document.getElementById("img1").style.display = "none";
		break;
	
	
}
	
}
	


var intervalo = window.setInterval(trocarAut, 15000);