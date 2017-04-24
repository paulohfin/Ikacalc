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
	função recebe um número (1 a 8) e muda o estado da div de adicionar o level de pesquisas futuras
*/
function mostrar2(id) {
	if(id == 1)
		document.getElementById('pnf').style.display = "none";
	if(id == 2)
		document.getElementById('pnf').style.display = "block";
	if(id == 3)
		document.getElementById('pef').style.display = "none";
	if(id == 4)
		document.getElementById('pef').style.display = "block";
	if(id == 5)
		document.getElementById('pcf').style.display = "none";
	if(id == 6)
		document.getElementById('pcf').style.display = "block";
	if(id == 7)
		document.getElementById('pmf').style.display = "none";
	if(id == 8)
		document.getElementById('pmf').style.display = "block";
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
