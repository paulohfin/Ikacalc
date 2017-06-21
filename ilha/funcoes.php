<?php 
	require_once('../configuracao.php');
	require_once DBAPI;
	
	$ilhas = null;
	
	if(isset($_POST['buscar'])){
		if($_POST['radio'] === 'recurso')
			buscar_recurso();
		elseif($_POST['radio'] === 'milagre')
			buscar_santuario();
		else{
			global $ilhas;
			$ilhas = find_ilhas($_POST['radio']);		
		}
	}
	function buscar_recurso(){
		global $ilhas;
		$ilhas = find_ilhas_recurso($_POST['recurso']);	
	}
	function buscar_santuario(){
		global $ilhas;
		$ilhas = find_ilhas_santuario($_POST['milagre']);	
	}
	function tiporecurso($tipo){
		if($tipo === '1')
			return "<img src='../img/icon_wine.png'>";
		if($tipo === '2')
			return "<img src='../img/icon_marble.png'>";
		if($tipo === '3')
			return "<img src='../img/icon_glass.png'>";
		if($tipo === '4')
			return "<img src='../img/icon_sulfur.png'>";
	}
	function tipomilagre($tipo){
		if($tipo === '1')
			return "Forja de Hefesto";
		if($tipo === '2')
			return "Bosque Sagrado de Hades";
		if($tipo === '3')
			return "Jardim de Demeter";
		if($tipo === '4')
			return "Templo de Atena";
		if($tipo === '5')
			return "Templo de Hermes";
		if($tipo === '6')
			return "Fortaleza de Ares";
		if($tipo === '7')
			return "Templo de Poseidon";
		if($tipo === '8')
			return "Colosso";
	}
?>