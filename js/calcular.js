
/*
	função exibe edificios que poderão ser evoluidos
*/
function mostrared() {
	if(document.getElementById('calcularedificios').style.display == "block")
		document.getElementById('calcularedificios').style.display = "none";
	else{
		document.getElementById('calcularedificios').style.display = "block";
		var i, j;
		for(i = 0; i < Cidade.length; i++){
			document.getElementById('tc'.concat((i + 1).toString())).innerHTML = Cidade[i][0];
			
			for(j = 0; j < 19; j++){
				if(Cidade[i][2 * (j + 1) - 1] != 30){
					document.getElementById('imc'.concat((i + 1).toString(), 'ed', (j + 1).toString())).src = url[Cidade[i][2 * (j + 1) - 1]];
					document.getElementById('txtc'.concat((i + 1).toString(), 'ed', (j + 1).toString())).innerHTML = Cidade[i][2 * (j + 1)].toString();
				
					el  = document.getElementById('tc'.concat((i + 1).toString(), 'ed', (j + 1).toString()));
					btnCarregarl2(parseInt(Cidade[i][2 * (j + 1)]), el,  ed[Cidade[i][2 * (j + 1) - 1]]);
				}
			}
		}
	}
}
/*
	função recebe dois números a e b e retorna o maior numero
*/
function maximo(a, b){
	if(a > b) return a;
	return b;
}
/*
	função calcula o gasto para evolução de edifícios e construção de tropa
*/
function calcular(){
	if(document.getElementById('resultado').style.display == "block")
		document.getElementById('resultado').style.display = "none";
	else{
		document.getElementById('resultado').style.display = "block";
		var i, j, k, n;
		var rec = [0, 0, 0, 0, 0, 0, 0];
		for(i = 0; i < Cidade.length; i++){
			for(j = 0; j < 19; j++){
				if(Cidade[i][2 * (j + 1) - 1] != 30){
					var edificio = 'tc' + (i + 1) + 'ed' + (j + 1);
					var level = document.getElementById(edificio).options[document.getElementById(edificio).selectedIndex].text;
					
					for(k = Cidade[i][2 * (j + 1)]; k < parseInt(level); k++){
						rec[0] += Recurso[Cidade[i][2 * (j + 1) - 1]][5 * k];
						rec[1] += Recurso[Cidade[i][2 * (j + 1) - 1]][5 * k + 1];
						rec[2] += Recurso[Cidade[i][2 * (j + 1) - 1]][5 * k + 2];
						rec[3] += Recurso[Cidade[i][2 * (j + 1) - 1]][5 * k + 3];
						rec[4] += Recurso[Cidade[i][2 * (j + 1) - 1]][5 * k + 4];
					}
				}
			}
		}
		for(i = 0; i < 14; i++){
			var unid = 'ct' + (i + 1);
			rec[0] += document.getElementById(unid).value * Unidade[i][1];
			rec[1] += document.getElementById(unid).value * Unidade[i][2];
			rec[2] += document.getElementById(unid).value * Unidade[i][3];
			rec[3] += document.getElementById(unid).value * Unidade[i][4];
			rec[4] += document.getElementById(unid).value * Unidade[i][5];
			rec[5] += document.getElementById(unid).value * Unidade[i][6];
			rec[6] += document.getElementById(unid).value * Unidade[i][7];
		}
		for(i = 0; i < 11; i++){
			var unid = 'cf' + (i + 1);
			rec[0] += document.getElementById(unid).value * Unidade[i + 14][1];
			rec[1] += document.getElementById(unid).value * Unidade[i + 14][2];
			rec[2] += document.getElementById(unid).value * Unidade[i + 14][3];
			rec[3] += document.getElementById(unid).value * Unidade[i + 14][4];
			rec[4] += document.getElementById(unid).value * Unidade[i + 14][5];
			rec[5] += document.getElementById(unid).value * Unidade[i + 14][6];
			rec[6] += document.getElementById(unid).value * Unidade[i + 14][7];
		}
		document.getElementById('cwood').innerHTML = rec[0].toString();
		document.getElementById('cwine').innerHTML = rec[1].toString();
		document.getElementById('cmarble').innerHTML = rec[2].toString();
		document.getElementById('cglass').innerHTML = rec[3].toString();
		document.getElementById('csulfur').innerHTML = rec[4].toString();
		document.getElementById('cgold').innerHTML = rec[5].toString();
		document.getElementById('cpop').innerHTML = rec[6].toString();
		
		var prod = [0, 0, 0, 0, 0];
		var dep = [0, 0, 0, 0, 0];
		for(i = 0; i < Cidade.length; i++){
			prod[0] += Cidade[i][39];
			if(Cidade[i][40] == 31)
				prod[1] += Cidade[i][41];
			if(Cidade[i][40] ==  32)
				prod[2] += Cidade[i][41];
			if(Cidade[i][40] == 33)
				prod[3] += Cidade[i][41];
			if(Cidade[i][40] == 34)
				prod[4] += Cidade[i][41];
			prod[1] -= Cidade[i][42];
			
			dep[0] += Cidade[i][43];
			dep[1] += Cidade[i][44];
			dep[2] += Cidade[i][45];
			dep[3] += Cidade[i][46];
			dep[4] += Cidade[i][47];
		}
		if((dep[0] - rec[0] < 0 && prod[0] <= 0) || (dep[1] - rec[1] < 0 && prod[1] <= 0) || (dep[2] - rec[2] < 0 && prod[2] <= 0) || (dep[3] - rec[3] < 0 && prod[3] <= 0) || (dep[4] - rec[4] < 0 && prod[4] <= 0)){
			alert('Produção Insuficiente para calcular o Tempo');
		}
	}	
}
/*
	função mostra div de tropas/frotas
*/
function mostrarG() {
	document.getElementById('calcularunidades').style.display = "block";
	var i, j;
	for(i = 0; i < Cidade.length; i++){
		document.getElementById('cc' + (i + 1)).innerHTML = Cidade[i][0];
	}
}
