/*
	Função recebe um id de uma div principal(cidade/pesquisa/calculos) e muda o estado do seu display(none/block)
*/
function mostrar(id) {
	if(document.getElementById(id).style.display == "block")
		document.getElementById(id).style.display = "none";
	else
		document.getElementById(id).style.display = "block";
}
/*
	função que esconde div com o id 'NovaCity'
*/
function cancelar() {
	document.getElementById('NovaCity').style.display="none";
}
/*
	função exibe mensagem
*/
function naoimplementado(){
	alert('função não implementada');
}
/*
	função de mostrar div de cadastro de nova cidade se há menos do que 12 cidades
*/
function nova() {
	if(City.length < 12)
		document.getElementById('NovaCity').style.display="block";
	else{
		alert('Número Máximo de Cidades Alcançado');
		return false;
	}
	idx = 0;
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
		n = City.length + 1;
	else n = idx;
	
	//armazenando nova cidade
	if(idx == 0)
		City.push(nvcity);
	document.getElementById('NovaCity').style.display="none";
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
		City.splice(id - 1, 1);
		
		//atualizando dados da city
		for(i = 0; i < City.length ; i++){
			document.getElementById('nome'.concat((i + 1).toString())).innerHTML = City[i][0];
			for(j = 1; j < 20; j++){
				document.getElementById('c'.concat((i + 1).toString(), 'ed', j.toString())).src = url[City[i][2 * j - 1]];
				document.getElementById('c'.concat((i + 1).toString(), 'ed', j.toString(), 'l')).innerHTML = City[i][2 * j];
			}
			document.getElementById('c'.concat((i + 1).toString(), 'r1l')).innerHTML = City[i][39];
			document.getElementById('c'.concat((i + 1).toString(), 'r2')).src = url[City[i][40]];
			document.getElementById('c'.concat((i + 1).toString(), 'r2l')).innerHTML = City[i][ 41];
			document.getElementById('c'.concat((i + 1).toString(), 'r3l')).innerHTML = City[i][42];
			document.getElementById('c'.concat((i + 1).toString(), 'r4')).innerHTML = City[i][43];
			document.getElementById('c'.concat((i + 1).toString(), 'r5')).innerHTML = City[i][44];
			document.getElementById('c'.concat((i + 1).toString(), 'r6')).innerHTML = City[i][45];
			document.getElementById('c'.concat((i + 1).toString(), 'r7')).innerHTML = City[i][46];
			document.getElementById('c'.concat((i + 1).toString(), 'r8')).innerHTML = City[i][47];
		}		
	}
	for(; i < 12; i++)
			document.getElementById('nome'.concat((i + 1).toString())).innerHTML = '';
	document.getElementById('city'.concat((City.length + 1).toString())).style.display="none";
}
/*
	função exibe edificios que poderão ser evoluidos
*/
function mostrared() {
	if(document.getElementById('calcularedificios').style.display == "block")
		document.getElementById('calcularedificios').style.display = "none";
	else{
		document.getElementById('calcularedificios').style.display = "block";
		var i, j;
		for(i = 0; i < City.length; i++){
			document.getElementById('tc'.concat((i + 1).toString())).innerHTML = City[i][0];
			
			for(j = 0; j < 19; j++){
				if(City[i][2 * (j + 1) - 1] != 30){
					document.getElementById('imc'.concat((i + 1).toString(), 'ed', (j + 1).toString())).src = url[City[i][2 * (j + 1) - 1]];
					document.getElementById('txtc'.concat((i + 1).toString(), 'ed', (j + 1).toString())).innerHTML = City[i][2 * (j + 1)].toString();
				
					el  = document.getElementById('tc'.concat((i + 1).toString(), 'ed', (j + 1).toString()));
					btnCarregarl2(parseInt(City[i][2 * (j + 1)]), el,  ed[City[i][2 * (j + 1) - 1]]);
				}
			}
		}
	}
}
/*
	função mostra div de tropas/frotas
*/
function mostrarG() {
	if(document.getElementById('calcularguerra').style.display == "block")
		document.getElementById('calcularguerra').style.display = "none";
	else{
		document.getElementById('calcularguerra').style.display = "block";
		var i, j;
		for(i = 0; i < City.length; i++){
			document.getElementById('cc' + (i + 1)).innerHTML = City[i][0];
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
		for(i = 0; i < City.length; i++){
			for(j = 0; j < 19; j++){
				if(City[i][2 * (j + 1) - 1] != 30){
					var edificio = 'tc' + (i + 1) + 'ed' + (j + 1);
					var level = document.getElementById(edificio).options[document.getElementById(edificio).selectedIndex].text;
					
					for(k = City[i][2 * (j + 1)]; k < parseInt(level); k++){
						rec[0] += Recurso[City[i][2 * (j + 1) - 1]][5 * k];
						rec[1] += Recurso[City[i][2 * (j + 1) - 1]][5 * k + 1];
						rec[2] += Recurso[City[i][2 * (j + 1) - 1]][5 * k + 2];
						rec[3] += Recurso[City[i][2 * (j + 1) - 1]][5 * k + 3];
						rec[4] += Recurso[City[i][2 * (j + 1) - 1]][5 * k + 4];
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
		for(i = 0; i < City.length; i++){
			prod[0] += City[i][39];
			if(City[i][40] == 31)
				prod[1] += City[i][41];
			if(City[i][40] ==  32)
				prod[2] += City[i][41];
			if(City[i][40] == 33)
				prod[3] += City[i][41];
			if(City[i][40] == 34)
				prod[4] += City[i][41];
			prod[1] -= City[i][42];
			
			dep[0] += City[i][43];
			dep[1] += City[i][44];
			dep[2] += City[i][45];
			dep[3] += City[i][46];
			dep[4] += City[i][47];
		}
		if((dep[0] - rec[0] < 0 && prod[0] <= 0) || (dep[1] - rec[1] < 0 && prod[1] <= 0) || (dep[2] - rec[2] < 0 && prod[2] <= 0) || (dep[3] - rec[3] < 0 && prod[3] <= 0) || (dep[4] - rec[4] < 0 && prod[4] <= 0)){
			alert('Produção Insuficiente para calcular o Tempo');
		}
	}	
}
/*
	função grava dados do vetor City e pesquisa em um pdf
*/
function salvar(){
	var doc = new jsPDF('p', 'mm', [297, 210]);
	var txt = '';
	for(i = 0; i < City.length; i++){
		txt += '[c],' + City[i][0] + ',\n';
		for(j = 1; j < 43; j++)
			if(j % 22 == 0 && j > 1)
				txt += City[i][j] + ',\n';
			else if(j == 47) txt += City[i][j];
			else txt += City[i][j] + ',';
		txt += '\n' + City[i][43] + ',' + City[i][44] + ',' + City[i][45] + ',' + City[i][46] + ',' + City[i][47] + '\n';
	}
	for(; i < 12; i++){
		txt += '[c],';
		for(j = 0; j < 47; j++)
			txt += ',';
		txt += '\n';
	}
	if(document.getElementById('pnm').options[document.getElementById('pnm').selectedIndex].value != '')
		txt += '[c],' + document.getElementById('pnm').options[document.getElementById('pnm').selectedIndex].value;
	else txt += '[c],' + document.getElementById('pesqn').value;
	if(document.getElementById('pec').options[document.getElementById('pec').selectedIndex].value != '')
		txt += '\n[c],' + document.getElementById('pec').options[document.getElementById('pec').selectedIndex].value;
	else txt += '\n[c]' + document.getElementById('pesqe').value;
	if(document.getElementById('pci').options[document.getElementById('pci').selectedIndex].value != '')
		txt += '\n[c]' + document.getElementById('pci').options[document.getElementById('pci').selectedIndex].value;
	else txt += '\n[c]' + document.getElementById('pesqc').value;
	if(document.getElementById('pmi').options[document.getElementById('pmi').selectedIndex].value != '')
		txt += '\n[c]' +  document.getElementById('pmi').options[document.getElementById('pmi').selectedIndex].value;
	else txt += '\n[c]' +  document.getElementById('pesqm').value;
	doc.text(35, 25, txt);
	doc.save('player.pdf');
}
/*
	função recebe o id do arquivo.txt e gera uma string com o conteudo
*/
function abrir(id){
	var fileToLoad = document.getElementById(id).files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		var texto = textFromFileLoaded;
		listar(texto);
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
/*
	função recebe uma string com o conteudo e alimenta o vetor e html
*/
function listar(texto){
	var city = texto.split('[c]');
	var item = [];
	var i, j;
	for(i = 1; i < 13; i++){
		item = city[i].split(',');
		if(item[1] != ''){
			item.shift();
			for(j = 0; j < item.length; j++)
				if(item[j].indexOf('\n') != -1){
					item[j] = item[j].replace('\n', '');
				}
			City.push(item);
			NVCity(i, item);
		}
	}
	item = city[13].split(',');
	item.shift();
	document.getElementById('pesqn').innerHTML = item;
	item = city[14].split(',');
	item.shift();
	document.getElementById('pesqe').innerHTML = item;
	item = city[15].split(',');
	item.shift();
	document.getElementById('pesqc').innerHTML = item;
	item = city[16].split(',');
	item.shift();
	document.getElementById('pesqm').innerHTML = item;
}
function carregarPesquisa(id){
	var i, n;
	if(id == 'pnm'){
		for(n = TPesquisa[0].length - 1; n >= 0 ; n--)
			if(TPesquisa[0][n] == document.getElementById('pesqn').text)
				break;
		el = document.getElementById(id);
		for(i = n + 1; i < TPesquisa[0].length; i++){
			var option = document.createElement('option');
			option.value = (i - n).toString();
			option.text = TPesquisa[0][i];
			el.add(option);		
		}
	}
}
function editar(id){
	alert('nao implementado');
/*
	document.getElementById('NovaCity').style.display="block";
	
	document.getElementById('nvcity').value = City[id][0];
	
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
	document.getElementById('rec8').value = City[id][47];
	idx = id;*/
}
