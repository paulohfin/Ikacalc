function Player(){
	var city = [];
	var pesquisa = ['', '', '', ''];
	var governo;
	
	this.getCity = function(id){
		return city[id];
	}
	this.getCitytxt = function(id){
		var txt = city[id][0] + ',\n';
		var i, arr = city[id][1];
		for(i = 0; i < 19; i++){
			if(i > 0 && i % 14 == 0)
				txt += '\n';
			if(i < arr.length)
				txt += arr[i] + ',';
			else txt += ',,';
		}
		txt += city[id][2];
		return txt;
	}
	this.addCity = function(_nv){
		var cidade = [],  i, edificio = [], recurso = [];
		cidade.push(_nv[0]);
		for(i = 1; i < 39; i += 2)
			if(_nv[i] != 30){
				var ed = [];
				ed.push(_nv[i])
				ed.push(_nv[i + 1]);
				edificio.push(ed);
			}
		cidade.push(edificio);
		recurso.push(_nv[39]);
		recurso.push(_nv[40]);
		recurso.push(_nv[41]);
		recurso.push(_nv[42]);
		recurso.push(_nv[43]);
		recurso.push(_nv[44]);
		recurso.push(_nv[45]);
		recurso.push(_nv[46]);
		recurso.push(_nv[47]);
		cidade.push(recurso);
		city.push(cidade);
	}
	this.editCity =  function(id, _city){
		city[id] = _city;
	}
	this.setPesquisa = function(p1, p2, p3, p4){
		pesquisa = [];
		pesquisa.push(p1);
		pesquisa.push(p2);
		pesquisa.push(p3);
		pesquisa.push(p4);
	}
	this.getPesquisa = function(){ return pesquisa;}
	this.QtdCity = function(_nv){
		return city.length;
	}
	this.setGoverno = function(_nv){
		governo = _nv;
	}
	this.getGoverno = function(){ return governo;}
	this.removeCity = function(id){
		city.splice(id, 1);
	}
	this.getNome = function(id){ return city[id][0];}
}
var player = new Player();

function exibe(){
	var i, txt = '', j;
	if(player.QtdCity() > 0){
		for(i = 0; i < player.QtdCity(); i++){
			txt += player.getCitytxt(i)+ '\n';
		}
		txt += player.getPesquisa() + '\n' + player.getGoverno();
		alert(txt);
	}
	else alert('Não há dados para mostrar');
}
