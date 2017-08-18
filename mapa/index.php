<?php
	require_once('../configuracao.php');
	require_once('funcoes.php');
	buscarmundis();
	if(isset($_POST['calcular'])){
		calcular();
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>IkaCalc - O site para auxiliar as estratégias de guerras/construções no Ikariam</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/index.css">
		<link rel="stylesheet" href=<?php echo BASEURL . "inc/cabecalho.css"?>>
	</head>
	<body>
		<?php require_once('../inc/cabecalho.php'); ?>
		<img class='img3' src='../img/f3.png'>
		<img class='img4' src='../img/f4.png'>
		<img class='img5' src='../img/f5.png'>
		<div class="container">
			<form method='POST'>
				<table>
					<tr title="Selecione o mundo para visualizar o mapa">
						<th WIDTH=300>Visualizar mapa Mundi</th>
						<td>
							<select name='selectmundo'>
								<?php
									foreach($mundis as $mundi)
										echo '<option value=' . $mundi['Tables_in_ikacalc']  . '>' . $mundi['Tables_in_ikacalc']  . '</option>';
								?>
							</select>
						</td>
					</tr>
					
					<tr>
					<th colspan=3><input type='submit' value='ENVIAR' name='enviar'></th>
					</tr>
				</table>
				
			</form>
		</div>
	</body>
</html>
