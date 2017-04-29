
function carregarPesquisa(id){
	var i;
	if(id == 'pnm'){
		el = document.getElementById(id);
		if(el.length < 2)
		for(i = 0; i < TPesquisa[0].length; i++){
			var option = document.createElement('option');
			option.value = i.toString();
			option.text = TPesquisa[0][i];
			el.add(option);		
		}
	}
	else if(id == 'pec'){
		el = document.getElementById(id);
		if(el.length < 2)
		for(i = 0; i < TPesquisa[1].length; i++){
			var option = document.createElement('option');
			option.value = i.toString();
			option.text = TPesquisa[1][i];
			el.add(option);		
		}
	}
	else if(id == 'pci'){
		el = document.getElementById(id);
		if(el.length < 2)
		for(i = 0; i < TPesquisa[2].length; i++){
			var option = document.createElement('option');
			option.value = i.toString();
			option.text = TPesquisa[2][i];
			el.add(option);		
		}
	}
	else if(id == 'pmi'){
		el = document.getElementById(id);
		if(el.length < 2)
		for(i = 0; i < TPesquisa[3].length; i++){
			var option = document.createElement('option');
			option.value = i.toString();
			option.text = TPesquisa[3][i];
			el.add(option);		
		}
	}
}
/*

*/
function atualizarp(){
	if(Pesquisa.length == 0)
		
}
