function salvarg(){
	player.setGoverno(document.getElementById('gov').options[document.getElementById('gov').selectedIndex].text);
}
function carregarGoverno(id){
	el = document.getElementById(id);
	var tipo = ['Ikacracia', 'Aristocracia', 'Ditadura', 'Nomocracia', 'Oligarquia', 'Tecnocracia', 'Teocracia'];
	if(el.length < 2)
		for(var i = 0; i < tipo.length; i++){
			var option = document.createElement('option');
			option.value = '' + i;
			option.text = tipo[i];
			el.add(option);
		}
}
