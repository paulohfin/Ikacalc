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
	função exibe mensagem
*/
function naoimplementado(){
	alert('função não implementada');
}
/*
	função grava dados do vetor City e pesquisa em um pdf
*/
function salvar(){
	var doc = new jsPDF('p', 'mm', [297, 210]);
	var txt = '';
	for(i = 0; i < Cidade.length; i++){
		txt += '[c],' + Cidade[i][0] + ',\n';
		for(j = 1; j < 43; j++)
			if(j % 22 == 0 && j > 1)
				txt += Cidade[i][j] + ',\n';
			else if(j == 47) txt += Cidade[i][j];
			else txt += Cidade[i][j] + ',';
		txt += '\n' + Cidade[i][43] + ',' + Cidade[i][44] + ',' + Cidade[i][45] + ',' + Cidade[i][46] + ',' + Cidade[i][47] + '\n';
	}
	for(; i < 12; i++){
		txt += '[c],';
		for(j = 0; j < 47; j++)
			txt += ',';
		txt += '\n';
	}
	txt += '[c],' + Pesquisa[0] + ',' + Pesquisa[1] + ',' + Pesquisa[2] + ',' + Pesquisa[3];
	txt += '[c],' + Governo;
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
	texto =  texto.replace('\n', '');
	var city = texto.split('[c]');
	var item = [];
	var i, j;
	for(i = 1; i < 13; i++){
		item = city[i].split(',');
		if(item[1] != ''){
			item.shift();
			Cidade.push(item);
			NVCity(i, item);
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
