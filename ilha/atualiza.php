<?php
	require_once('../configuracao.php');
	require_once('funcoes.php');
	
	if(isset($_POST['atualizar'])){
		atualizarbd($_POST['mundi'], $_POST['entrada']);
	}
?>
<html>
	<form method='POST'>
		<input type='text' name='mundi'>
		<input type='text' name='entrada'>
		<input type='submit' name='atualizar'>
	</form>
</html>
