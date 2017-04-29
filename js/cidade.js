
/*
	função de mostrar div de cadastro de nova cidade se há menos do que 12 cidades
*/
function nova() {
	if(Cidade.length < 12)
		document.getElementById('nvcidade').style.display="block";
	else{
		alert('Número Máximo de Cidades Alcançado');
		return false;
	}
	idx = 0;
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
	for(j = ed.length - 1; j >= 0; j--)
		for(i = 0; i < temp.length; i++)
			if(temp[i] == ed[23] || temp[i] == ed[10] || temp[i] == ed[17] || temp[i] == ed[13])
				continue;
			else if(ed[j] == temp[i] && cont < 16) cont++;
			
	//Adicionando edifícios em temp2
	for(j = ed.length - 1; j >= 0; j--){
		a = n = p = 0;
		for(i = 0; i < temp.length; i++){
			// Armazem pode ser construído 4 por cidade
			if(temp[i] == ed[2] && j == 2)
				if(a < 3) a++;
				else n = 1;
			// porto/estaleiro podem ser construído 2
			else if((temp[i] == ed[23] || temp[i] == ed[10]) && (j == 23 && j == 10))
				if(p < 1) p++;
				else
					n = 1;
			// palácio ou residência do governador
			else if((temp[i] == ed[21] || temp[i] == ed[25]) && (j == 21 || j == 25))
				n = 1;
			// se já estiver construído, não aparecer na lista
			else if(ed[j] == temp[i])
				n = 1;
		}
		if(n == 0)
			//se tiver 15 edifícios construídos, não colocar nas opções de novos edifícios
			if(cont < 15)
				temp2.push(ed[j]);
			else if(j == 23 || j == 10 || j == 17 || j == 13)
				temp2.push(ed[j]);
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
	função recebe número, select e nome de edifício
	alimenta select com os leveis possíveis de evolução
*/
function btnCarregarl2(lv, el, name){
	if(el.length > 1) return;
	var i, n;
	//Definindo level maximo
	if(name == ed[21] || name == ed[25])
		for(i = lv; i < 11; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[18])
		for(i = lv; i < 21; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[15])
		for(i = lv; i < 25; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[13])
		for(i = lv; i < 30; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[1] || name == ed[8] || name == ed[20] || name == ed[9] || name == ed[14] || name == ed[12] || name == ed[28] || name == ed[29] || name == ed[22] || name == ed[5] || name == ed[19] || name == ed[11] || name == ed[6] || name == ed[4])
		for(i = lv; i < 32; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[10] || name == ed[27])
		for(i = lv; i < 38; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[16])
			for(i = lv; i < 39; i++){
				var option = document.createElement('option');
				option.value = (i - lv).toString();
				option.text = (i + 1).toString();
				el.add(option);
			}
	else if(name == ed[0] || name == ed[2] || name == ed[7] || name == ed[3])
		for(i = lv; i < 40; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[26] || name == ed[23])
		for(i = lv; i < 47; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[17])
		for(i = lv; i < 48; i++){
			var option = document.createElement('option');
			option.value = (i - lv).toString();
			option.text = (i + 1).toString();
			el.add(option);
		}
	else if(name == ed[24])
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
function NVCity(n, nvcity){
	var i;
	//nomeando nova cidade
	document.getElementById('nome'.concat(n.toString())).innerHTML = nvcity[0];
	
	//tornando nova cidade visível
	document.getElementById('city'.concat(n.toString())).style.display = "block";
	
	//alimentando edifícios da nova cidade
	for(i = 1; i < 20; i++){
		document.getElementById('c'.concat(n.toString(), 'ed', i.toString())).src = url[parseInt(nvcity[2 * i - 1])];
		document.getElementById('c'.concat(n.toString(), 'ed', i.toString(), 'l')).innerHTML = nvcity[2 * i ].toString();
	}
	
	document.getElementById('c'.concat(n.toString(), 'r1l')).innerHTML = nvcity[39].toString();
	document.getElementById('c'.concat(n.toString(), 'r2')).src = url[nvcity[40]];
	document.getElementById('c'.concat(n.toString(), 'r2l')).innerHTML = nvcity[41].toString();	
	document.getElementById('c'.concat(n.toString(), 'r3l')).innerHTML = nvcity[42].toString();
	document.getElementById('c'.concat(n.toString(), 'r4')).innerHTML = nvcity[43].toString();	
	document.getElementById('c'.concat(n.toString(), 'r5')).innerHTML = nvcity[44].toString();
	document.getElementById('c'.concat(n.toString(), 'r6')).innerHTML = nvcity[45].toString();	
	document.getElementById('c'.concat(n.toString(), 'r7')).innerHTML = nvcity[46].toString();
	document.getElementById('c'.concat(n.toString(), 'r8')).innerHTML = nvcity[47].toString();	
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
				case ed[0]: n = 0; break;
				case ed[1]: n = 1; break;
				case ed[2]: n = 2; break;
				case ed[3]: n = 3; break;
				case ed[4]: n = 4; break;
				case ed[5]: n = 5; break;
				case ed[6]: n = 6; break;
				case ed[7]: n = 7; break;
				case ed[8]: n = 8; break;
				case ed[9]: n = 9; break;
				case ed[10]: n = 10; break;
				case ed[11]: n = 11; break;
				case ed[12]: n = 12; break;
				case ed[13]: n = 13; break;
				case ed[14]: n = 14; break;
				case ed[15]: n = 15; break;
				case ed[16]: n = 16; break;
				case ed[17]: n = 17; break;
				case ed[18]: n = 18; break;
				case ed[19]: n = 19; break;
				case ed[20]: n = 20; break;
				case ed[21]: n = 21; break;
				case ed[22]: n = 22; break;
				case ed[23]: n = 23; break;
				case ed[24]: n = 24; break;
				case ed[25]: n = 25; break;
				case ed[26]: n = 26; break;
				case ed[27]: n = 27; break;
				case ed[28]: n = 28; break;
				case ed[29]: n = 29; break;
				default:
					n = 30;
			}
			nvcity.push(n, document.getElementById('ed'.concat(i.toString(), 'l')).options[document.getElementById('ed'.concat(i.toString(), 'l')).selectedIndex].text);
	}
	//adicionando produção
	nvcity.push(document.getElementById('rec1').value);
	switch(document.getElementById('rec2').options[document.getElementById('rec2').selectedIndex].value){
		case 'Vinho':
			nvcity.push(31);	
			break;
		case 'Mármore':
			nvcity.push(32);	
			break;
		case 'Cristal':
			nvcity.push(33);	
			break;
		case 'Enxofre':
			nvcity.push(34);
			break;
	}
	nvcity.push(document.getElementById('rec2l').value);
	
	//adicionando consumo de vinho
	nvcity.push(document.getElementById('rec3').value);
	
	//produtos no armazem
	nvcity.push(document.getElementById('rec4').value);
	nvcity.push(document.getElementById('rec5').value);
	nvcity.push(document.getElementById('rec6').value);
	nvcity.push(document.getElementById('rec7').value);
	nvcity.push(document.getElementById('rec8').value);
	
	
	//verificando se nova cidade tem camara municipal
	for(i = 1; i < nvcity.length; i += 2)
		if(nvcity[i] == 0) break;
		else if(i > 36){
			alert('Necessita de uma Câmara Municipal');
			return;
		}
	if(idx == 0)
		n = Cidade.length + 1;
	else n = idx;
	
	//armazenando nova cidade
	if(idx == 0)
		Cidade.push(nvcity);
	document.getElementById('nvcidade').style.display="none";
	//atualizando html
	NVCity(n, nvcity);
}
/*
	função recebe um id da cidade a ser excluída
*/
function excluir(id){
	var decisao = confirm("Tem certeza que quer excluir esta Cidade?");
	var i, j;
	if(decisao == true){
		//removendo dados da cidade
		Cidade.splice(id - 1, 1);
		
		//atualizando dados da city
		for(i = 0; i < Cidade.length ; i++){
			document.getElementById('nome'.concat((i + 1).toString())).innerHTML = Cidade[i][0];
			for(j = 1; j < 20; j++){
				document.getElementById('c'.concat((i + 1).toString(), 'ed', j.toString())).src = url[Cidade[i][2 * j - 1]];
				document.getElementById('c'.concat((i + 1).toString(), 'ed', j.toString(), 'l')).innerHTML = Cidade[i][2 * j];
			}
			document.getElementById('c'.concat((i + 1).toString(), 'r1l')).innerHTML = Cidade[i][39];
			document.getElementById('c'.concat((i + 1).toString(), 'r2')).src = url[Cidade[i][40]];
			document.getElementById('c'.concat((i + 1).toString(), 'r2l')).innerHTML = Cidade[i][ 41];
			document.getElementById('c'.concat((i + 1).toString(), 'r3l')).innerHTML = Cidade[i][42];
			document.getElementById('c'.concat((i + 1).toString(), 'r4')).innerHTML = Cidade[i][43];
			document.getElementById('c'.concat((i + 1).toString(), 'r5')).innerHTML = Cidade[i][44];
			document.getElementById('c'.concat((i + 1).toString(), 'r6')).innerHTML = Cidade[i][45];
			document.getElementById('c'.concat((i + 1).toString(), 'r7')).innerHTML = Cidade[i][46];
			document.getElementById('c'.concat((i + 1).toString(), 'r8')).innerHTML = Cidade[i][47];
		}		
	}
	for(; i < 12; i++)
			document.getElementById('nome'.concat((i + 1).toString())).innerHTML = '';
	document.getElementById('city'.concat((Cidade.length + 1).toString())).style.display="none";
}
