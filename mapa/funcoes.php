<?php
	require_once('../configuracao.php');
	require_once DBAPI;
	$mundis = null;
	
	function buscarmundis(){
		global $mundis;
		$mundis = buscarmundi();
	}
	if(isset($_POST['enviar'])){
		echo '<script>location.href="mundi.php?img=' . $_POST['selectmundo'] . '"</script>';
	}
	if(isset($_POST['buscar'])){
		$dados = buscardados($_POST['selectmundo']);
		foreach($dados as $dado)
			echo $dado['x'] . ' ' . $dado['y'] . ' ' . $dado['qtdCity'] . '<br>';
	}
?>
