function salvarp(){
	player.setPesquisa(document.getElementById('pnm').options[document.getElementById('pnm').selectedIndex].text,  document.getElementById('pec').options[document.getElementById('pec').selectedIndex].text,  document.getElementById('pci').options[document.getElementById('pci').selectedIndex].text,  document.getElementById('pmi').options[document.getElementById('pmi').selectedIndex].text);
	document.getElementById('pesquisa').style.display = "none";
}
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
