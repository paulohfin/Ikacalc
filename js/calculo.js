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
	for(i = 0; i < player.QtdCity(); i++){
		txt += '[c],' + player.getCitytxt(i) + '\n';
	}
	for(; i < 12; i++){
		txt += '[c],';
		for(j = 0; j < 47; j++)
			txt += ',';
		txt += '\n';
	}
	txt += '[c],' + player.getPesquisa();
	txt += '\n[c],' + player.getGoverno();
	doc.text(10, 10, txt);
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
	while(texto.indexOf('\n') != -1)
		texto =  texto.replace('\n', '');
	var city = texto.split('[c]');
	var item = [];
	var i, j;
	for(i = 1; i < 13; i++){
		item = city[i].split(',');
		if(item[1] != ''){
			item.shift();
			player.addCity(item);
		}
	}
	item = city[13].split(',');
	player.setPesquisa(item[1], item[2], item[3], item[4]);
	item = city[14].split(',');
	player.setGoverno(item[1]);
	Atualizar();
}
