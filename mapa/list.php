<?php
	require_once('../configuracao.php');
	require_once('funcoes.php');
	buscarmundis();
?>
<html>

<form method='POST'>
	<select name='selectmundo'>
		<?php
			foreach($mundis as $mundi)
				echo '<option value=' . $mundi['Tables_in_ikacalc']  . '>' . $mundi['Tables_in_ikacalc']  . '</option>';
		?>
		</select>
	<input type='submit' name='buscar'>
</form>
