
/*
	função exibe edificios que poderão ser evoluidos
*/
function mostrared() {
	if(document.getElementById('calcularedificios').style.display == "block")
		document.getElementById('calcularedificios').style.display = "none";
	else{
		document.getElementById('calcularedificios').style.display = "block";
		var i, j;
		for(i = 0; i < player.QtdCity(); i++){
			var arr = player.getCity(i);
			document.getElementById('tc'.concat((i + 1).toString())).innerHTML = arr[0];
			
			for(j = 0; j < arr[1].length; j++){
				var ed = arr[1][j];
				document.getElementById('imc' + (i + 1) + 'ed' + (j + 1)).src = Recurso[ed[0]][1];
				document.getElementById('txtc' + (i + 1) + 'ed' + (j + 1)).innerHTML = ed[1];
				
				el  = document.getElementById('tc' + (i + 1) + 'ed' + (j + 1));
				btnCarregarl2(parseInt(ed[1]), el,  Recurso[ed[0]][0]);
			}
		}
	}
}
/*

*/
function calculaRecursos(){
	var i;
	UnidadeC = [];
	for(i = 0; i < 14; i++){
		var unid = 'ct' + (i + 1);
		UnidadeC.push(document.getElementById(unid).value);
	}
	for(i = 0; i < 11; i++){
		var unid = 'cf' + (i + 1);
		UnidadeC.push(document.getElementById(unid).value);
	}
	document.getElementById('calcularunidades').style.display = 'none';
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
		for(i = 0; i < player.QtdCity(); i++){
			var arr = player.getCity(i);
			for(j = 0; j < arr[1].length; j++){
				var edificio = 'tc' + (i + 1) + 'ed' + (j + 1);
				var level = document.getElementById(edificio).options[document.getElementById(edificio).selectedIndex].text;
				
				if(arr[1][j] != '' && level != '')
					for(k = parseInt(arr[1][j]); k <= parseInt(level); k++){
						var ed = arr[1][j];
						rec[0] += Recurso[ed[0]][5 * (k + 1) + 2];
						rec[1] += Recurso[ed[0]][5 * (k + 1) + 3];
						rec[2] += Recurso[ed[0]][5 * (k + 1) + 4];
						rec[3] += Recurso[ed[0]][5 * (k + 1) + 5];
						rec[4] += Recurso[ed[0]][5 * (k + 1) + 6];
					}
			}
		}
		for(i = 0; i < 25; i++)
			if(UnidadeC[i] != '' && UnidadeC[i] != null){
				alert(UnidadeC[i]);
				rec[0] += UnidadeC[i] * Unidade[i][1];
				rec[1] += UnidadeC[i] * Unidade[i][2];
				rec[2] += UnidadeC[i] * Unidade[i][3];
				rec[3] += UnidadeC[i] * Unidade[i][4];
				rec[4] += UnidadeC[i] * Unidade[i][5];
				rec[5] += UnidadeC[i] * Unidade[i][6];
				rec[6] += UnidadeC[i] * Unidade[i][7];
			}
		document.getElementById('cwood').innerHTML = rec[0].toString();
		document.getElementById('cwine').innerHTML = rec[1].toString();
		document.getElementById('cmarble').innerHTML = rec[2].toString();
		document.getElementById('cglass').innerHTML = rec[3].toString();
		document.getElementById('csulfur').innerHTML = rec[4].toString();
		document.getElementById('cgold').innerHTML = rec[5].toString();
		document.getElementById('cpop').innerHTML = rec[6].toString();
		
	}	
}
/*
	função mostra div de tropas/frotas
*/
function mostrarG() {
	document.getElementById('calcularunidades').style.display = "block";
	var i, j;
	for(i = 0; i < player.QtdCity(); i++){
		document.getElementById('cc' + (i + 1)).innerHTML = player.getNome(i);
	}
}
