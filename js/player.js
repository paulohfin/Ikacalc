function Edificio(){
	var nome, level, url;
	this.getNome = getNome;
	this.getLevel = getLevel;
	this.getUrl = getUrl;
	this.setNome = setNome;
	this.setLevel = setLevel;
	this.setUrl = setUrl;
	this.nvEdificio = nvEdificio;
	function getNome(){ return nome;}
	function setNome(_nome){ nome = _nome;}
	function getLevel(){ return level;}
	function setLevel(_level){ level = _level;}
	function getUrl(){ return url;}
	function setUrl(_url){ url = _url;}
	function nvEdificio(_nome, _level){
		nome = _nome;
		level = _level;
	}
}
function City(nome){
	var nome;
	var edificio = [];
	
	this.getNome = getNome;
	this.setNome = setNome;
	this.addEdificio = addEdificio;
	this.tamanho = tamanho;
	
	function getNome(){ return nome;}
	function setNome(_nome){ nome = _nome;}
	function addEdificio(ed){edificio.push(ed);}
	function tamanho(){return edificio.length;}
}
function Recursos(){
	var pmc, pv, pm, pc, pe, cv, dmc, dv, dm, dc, de;
	this.getPmc = getPmc;
	this.getPv = getPv;
	this.getPm = getPm;
	this.getPc = getPc;
	this.getPe = getPe;
	this.getCv = getCv;
	this.getDmc = getDmc;
	this.getDv = getDv;
	this.getDm = getDm;
	this.getDc = getDc;
	this.getDe = getDe;
	this.setPmc = setPmc;
	this.setPv = setPv;
	this.setPm = setPm;
	this.setPc = setPc;
	this.setPe = setPe;
	this.setCv = setCv;
	this.setDmc = setDmc;
	this.setDv = setDv;
	this.setDm = setDm;
	this.setDc = setDc;
	this.setDe = setDe;
	function getPmc(){ return pmc;}
	function getPv(){ return pv;}
	function getPm(){ return pm;}
	function getPc(){ return pc;}
	function getPe(){ return pe;}
	function getCv(){ return cv;}
	function getDmc(){ return dmc;}
	function getDv(){ return dv;}
	function getDm(){ return dm;}
	function getDc(){ return dc;}
	function getDe(){ return de;}
	function setPmc(_pmc){ pmc = _pmc;}
	function setPv(_pv){ pv = _pv;}
	function setPm(_pm){pm  = _pm;}
	function setPc(_pc){pc  = _pc;}
	function setPe(_pe){  pe = _pe;}
	function setCv(_cv){ cv =  _cv;}
	function setDmc(_dmc){ dmc =  _dmc;}
	function setDv(_dv){ dv =  _dv;}
	function setDm(_dm){ dm = _dm;}
	function setDe(_de){ de = _de;}
	function setDc(_dc){ dc = _dc;}
}
function Player(){
	var city = [];
	var pesquisa = [];
	var recursos = new Recursos();
	
	this.addCity = addCity;
	this.addPesquisa = addPesquisa;
	this.QtdCity = QtdCity;
	this.QtdEd = QtdEd;
	
	function addCity(_nv){city.push(_nv);}
	function addPesquisa(p){pesquisa.push(p);}
	function QtdCity(){return city.length;}
	function QtdEd(_i){return city[_i].tamanho();}
}

var player = new Player();

function exibe(){
	var i, txt = '', j;
	for(i = 0; i < player.QtdCity(); i++){
		for(j = 0; j < player.QtdEd(i); j++)
		txt += player.city[i].edificio[j].getNome() + ' ' +  player.city[i].edificio[j].getLevel() + ' '; 
		txt += '\n';
	}
	alert(txt);
}
