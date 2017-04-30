
/*
	função de mostrar div de cadastro de nova cidade se há menos do que 12 cidades
*/
function nova() {
	if(player.QtdCity() < 12)
		document.getElementById('nvcidade').style.display="block";
	else{
		alert('Número Máximo de Cidades Alcançado');
		return false;
	}
}
/*
	função que esconde div com o id 'nvcidade'
*/
function cancelar() {
	document.getElementById('nvcidade').style.display="none";
}
/*
	função recebe um id de um select
	alimenta select com edifícios disponíveis
*/
function btnCarregar(id){

	//Pegando elemento identificado pelo id
	var edc = document.getElementById(id);
	var temp = [];	//vetor temporário para salvar os edifícios de todos os selectores
	var temp2 = [];	//vetor temporário para salvar edifícios que faltam para serem marcados
	var edt;
	var i, j, n = 0, a, p, c = 1, cont = 0;
		
	// Lendo os elementos de todos os selectores
	for(i = 1; i < 20; i++){
		edt = 'ed'.concat( i.toString());
		temp.push(document.getElementById(edt).options[document.getElementById(edt).selectedIndex].text);
	}
	//contando edifícios que não sao porto, estaleiro, muralha ou pirata		
	for(j = Recurso.length - 1; j >= 0; j--)
		for(i = 0; i < temp.length; i++)
			if(temp[i] == Recurso[23][0] || temp[i] == Recurso[10][0] || temp[i] == Recurso[17][0] || temp[i] == Recurso[13][0])
				continue;
			else if(Recurso[j][0] == temp[i] && cont < 16) cont++;
			
	//Adicionando edifícios em temp2
	for(j = Recurso.length - 1; j >= 0; j--){
		a = n = p = 0;
		for(i = 0; i < temp.length; i++){
			// Armazem pode ser construído 4 por cidade
			if(temp[i] == Recurso[2][0] && j == 2)
				if(a < 3) a++;
				else n = 1;
			// porto/estaleiro podem ser construído 2
			else if((temp[i] == Recurso[23][0] || temp[i] == Recurso[10][0]) && (j == 23 && j == 10))
				if(p < 1) p++;
				else
					n = 1;
			// palácio ou residência do governador
			else if((temp[i] == Recurso[21][0] || temp[i] == Recurso[25][0]) && (j == 21 || j == 25))
				n = 1;
			// se já estiver construído, não aparecer na lista
			else if(Recurso[j][0] == temp[i])
				n = 1;
		}
		if(n == 0)
			//se tiver 15 edifícios construídos, não colocar nas opções de novos edifícios
			if(cont < 15)
				temp2.push(Recurso[j][0]);
			else if(j == 23 || j == 10 || j == 17 || j == 13)
				temp2.push(Recurso[j][0]);
	}

	//alimentando selector
	for(j = temp2.length - 1; j >= 0; j--){
		n = 0;
		// adicionar apenas se não existir no selector
		for(i = 0; i < edc.options.length; i++)
			if(temp2[j] == edc.options[i].text)
				n = 1;
		if(n == 0){
			var option = document.createElement('option');
			option.value = c.toString();
			option.text = temp2[j];
			c++;
			edc.add(option);
		}
	}
}
/*
	função recebe número(level), select e nome de edifício
	alimenta select com os leveis possíveis de evolução
*/
function btnCarregarl2(lv, el, name){
	if(el.length > 1) return;
	var i, n;
	//Definindo level maximo
	if(name == Recurso[21][0] || name == Recurso[25][0])
		for(i = lv; i < 11; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[18][0])
		for(i = lv; i < 21; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[15][0])
		for(i = lv; i < 25; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[13][0])
		for(i = lv; i < 30; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[1][0] || name == Recurso[8][0] || name == Recurso[20][0] || name == Recurso[9][0] || name == Recurso[14][0] || name == Recurso[12][0] || name == Recurso[28][0] || name == Recurso[29][0] || name == Recurso[22][0] || name == Recurso[5][0] || name == Recurso[19][0] || name == Recurso[11][0] || name == Recurso[6][0] || name == Recurso[4][0])
		for(i = lv; i < 32; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[10][0] || name == Recurso[27][0])
		for(i = lv; i < 38; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[16][0])
			for(i = lv; i < 39; i++){
				var option = document.createElement('option');
				option.value = (i - lv).toString();
				option.text = (i + 1).toString();
				el.add(option);
			}
	else if(name == Recurso[0][0] || name == Recurso[2][0] || name == Recurso[7][0] || name == Recurso[3][0])
		for(i = lv; i < 40; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[26][0] || name == Recurso[23][0])
		for(i = lv; i < 47; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[17][0])
		for(i = lv; i < 48; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == Recurso[24][0])
		for(i = lv; i < 49; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(lv == 0)
			alert('Edifício não selecionado');
}
/*
	função recebe um id de um select de level
	chama função btnCarregarl2 para alimentar o select
*/
function btnCarregarl(id){
	var i, n;
	//Pegando elemento identificado pelo id
	var el = document.getElementById(id);
	
	//Encontrando sua posição
	for(i = 1; i < 20; i++)
		if(id == 'ed'.concat(i.toString(), 'l'))
			n = i;
	btnCarregarl2(0, el, document.getElementById('ed'.concat(n.toString())).options[document.getElementById('ed'.concat(n.toString())).selectedIndex].text);
}
/*
	função recebe o indice n(1 a 12) e o vetor de construções/level
	atualiza html
*/
function Atualizar(){
	var i, j;
	for(i = 0; i < player.QtdCity(); i++){
		var arr = player.getCity(i);
		document.getElementById('nome'.concat((i + 1).toString())).innerHTML = arr[0];
		document.getElementById('city'.concat((i + 1).toString())).style.display = "block";
		for(j = 0; j < arr[1].length; j++){
			var ed = arr[1][j];
			document.getElementById('c'.concat((i + 1).toString(), 'ed', (j + 1).toString())).src = Recurso[ed[0]][1];
			document.getElementById('c'.concat((i + 1).toString(), 'ed', (j + 1).toString(), 'l')).innerHTML = ed[1].toString();
		}
		for(;j < 19; j++){
			document.getElementById('c'.concat((i + 1).toString(), 'ed', (j + 1).toString())).src = Recurso[30];
			document.getElementById('c'.concat((i + 1).toString(), 'ed', (j + 1).toString(), 'l')).innerHTML = '-';		
		}
		var rec = arr[2];
		document.getElementById('c'.concat((i + 1).toString(), 'r1l')).innerHTML = rec[0].toString();
		document.getElementById('c'.concat((i + 1).toString(), 'r2')).src = url[rec[1]];
		document.getElementById('c'.concat((i + 1).toString(), 'r2l')).innerHTML = rec[2].toString();	
		document.getElementById('c'.concat((i + 1).toString(), 'r3l')).innerHTML = rec[3].toString();
		document.getElementById('c'.concat((i + 1).toString(), 'r4')).innerHTML = rec[4].toString();	
		document.getElementById('c'.concat((i + 1).toString(), 'r5')).innerHTML = rec[5].toString();
		document.getElementById('c'.concat((i + 1).toString(), 'r6')).innerHTML = rec[6].toString();	
		document.getElementById('c'.concat((i + 1).toString(), 'r7')).innerHTML = rec[7].toString();
		document.getElementById('c'.concat((i + 1).toString(), 'r8')).innerHTML = rec[8].toString();	
	}
	for(; i < 12; i++){
		document.getElementById('nome'.concat((i + 1).toString())).innerHTML = '';
		document.getElementById('city'.concat((i + 1).toString())).style.display = "none";
	}
}
/*
	função adiciona nova cidade
*/
function adicionar(){
	//verificando se nova cidade tem nome
	if(document.getElementById('nvcity').value == ''){
		document.getElementById('nvcity').style.background = 'red';
		return;	
	}
	var i, n;
	//alimentando vetor de dados da nova cidade
	var nvcity = [];
	
	nvcity.push(document.getElementById('nvcity').value);
	for(i = 1; i < 20; i++)
		if(document.getElementById('ed'.concat(i.toString())).options[document.getElementById('ed'.concat(i.toString())).selectedIndex].text == null) nvcity.push(null, null)
		else{	
			switch(document.getElementById('ed'.concat(i.toString())).options[document.getElementById('ed'.concat(i.toString())).selectedIndex].text){
				case Recurso[0][0]: n = 0; break;
				case Recurso[1][0]: n = 1; break;
				case Recurso[2][0]: n = 2; break;
				case Recurso[3][0]: n = 3; break;
				case Recurso[4][0]: n = 4; break;
				case Recurso[5][0]: n = 5; break;
				case Recurso[6][0]: n = 6; break;
				case Recurso[7][0]: n = 7; break;
				case Recurso[8][0]: n = 8; break;
				case Recurso[9][0]: n = 9; break;
				case Recurso[10][0]: n = 10; break;
				case Recurso[11][0]: n = 11; break;
				case Recurso[12][0]: n = 12; break;
				case Recurso[13][0]: n = 13; break;
				case Recurso[14][0]: n = 14; break;
				case Recurso[15][0]: n = 15; break;
				case Recurso[16][0]: n = 16; break;
				case Recurso[17][0]: n = 17; break;
				case Recurso[18][0]: n = 18; break;
				case Recurso[19][0]: n = 19; break;
				case Recurso[20][0]: n = 20; break;
				case Recurso[21][0]: n = 21; break;
				case Recurso[22][0]: n = 22; break;
				case Recurso[23][0]: n = 23; break;
				case Recurso[24][0]: n = 24; break;
				case Recurso[25][0]: n = 25; break;
				case Recurso[26][0]: n = 26; break;
				case Recurso[27][0]: n = 27; break;
				case Recurso[28][0]: n = 28; break;
				case Recurso[29][0]: n = 29; break;
				default:
					n = 30;
			}
			nvcity.push(n, document.getElementById('ed'.concat(i.toString(), 'l')).options[document.getElementById('ed'.concat(i.toString(), 'l')).selectedIndex].text);
	}
	//adicionando produção
	nvcity.push(document.getElementById('rec1').value);
	switch(document.getElementById('rec2').options[document.getElementById('rec2').selectedIndex].value){
		case 'Vinho':
			nvcity.push(0);	
			break;
		case 'Mármore':
			nvcity.push(1);	
			break;
		case 'Cristal':
			nvcity.push(2);	
			break;
		case 'Enxofre':
			nvcity.push(3);
			break;
	}
	nvcity.push(document.getElementById('rec2l').value);	
	nvcity.push(document.getElementById('rec3').value);
	nvcity.push(document.getElementById('rec4').value);
	nvcity.push(document.getElementById('rec5').value);
	nvcity.push(document.getElementById('rec6').value);
	nvcity.push(document.getElementById('rec7').value);
	nvcity.push(document.getElementById('rec8').value);
	
	for(i = 1; i < nvcity.length; i += 2)
		if(nvcity[i] == 0) break;
		else if(i > 36){
			alert('Necessita de uma Câmara Municipal');
			return;
		}
	player.addCity(nvcity);
	Atualizar();
}
/*
	função recebe um id da cidade a ser excluída
*/
function excluir(id){
	var decisao = confirm("Tem certeza que quer excluir esta Cidade?");
	var i, j;
	if(decisao == true){
		player.removeCity(id - 1);
		document.getElementById('city'.concat((Cidade.length + 1).toString())).style.display="none";
		Atualizar();
	}
}
function editar(id){/*
	document.getElementById('NovaCity').style.display="block";
	var arr = player.getCity(id - 1);
	document.getElementById('nvcity').value = arr[0];
	
	var i, n;
	for(i = 1; i < 20; i++){
		document.getElementById('ed'.concat(i.toString())).value = ed[City[id][ 2 * i + 1]];
		document.getElementById('ed'.concat(i.toString(), 'l')).text = City[id][2 * (i + 1)];
	}
	//adicionando produção
	document.getElementById('rec1').value = City[id][39];
	document.getElementById('rec2').value = City[id][40];
	document.getElementById('rec2l').value = City[id][41];
	
	//adicionando consumo de vinho
	document.getElementById('rec3').value = City[id][42];
	
	//produtos no armazem
	document.getElementById('rec4').value = City[id][43];
	document.getElementById('rec5').value = City[id][44];
	document.getElementById('rec6').value = City[id][45];
	document.getElementById('rec7').value = City[id][46];
	document.getElementById('rec8').value = City[id][47];*/
}
