<?php
	require_once('../configuracao.php');
	require_once('funcoes.php');
	
?>
<!DOCTYPE html>
<html>
	<head>
		<title>IkaCalc - O site para auxiliar as estratégias de guerras/construções no Ikariam</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/index.css">
	</head>
	<body>
		<?php require_once('../inc/cabecalho.php'); ?>

		<img class='img3' src='../img/f3.png'>
		<img class='img4' src='../img/f4.png'>
		<img class='img5' src='../img/f5.png'>
		<div class="container">
			<form method='POST'>
<table>
<th colspan=4>Ordenar por:</th>
<tr>
<td><label><input type='radio' name='radio' value='nome' required>Nome</label></td>
<td><label><input type='radio' name='radio' value='recurso' required>
<select name='recurso'>
<option value='1'>Vinho</option>
<option value='2'>Mármore</option>
<option value='3'>Cristal</option>
<option value='4'>Enxofre</option>
</select>
</label></td>
				<td><label><input type='radio' name='radio' value='milagre' required>
<select name='milagre'>
<option value='1'>Forja de Hefesto</option>
<option value='2'>Bosque Sagrado de Hades</option>
<option value='3'>Jardins de Demeter</option>
<option value='4'>Templo de Atena</option>
<option value='5'>Templo de Hermes</option>
<option value='6'>Fortaleza de Ares</option>
<option value='7'>Templo de Poseidon</option>
<option value='8'>Colosso</option>
</select></label></td></tr>
				<tr><td><label><input type='radio' name='radio' value='levelFloresta'>Level da Floresta</label></td>
				<td><label><input type='radio' name='radio' value='qtdCity'>Quantidade de Cidades</label></td></tr>
<tr><td colspan=3><input type='submit' name='buscar' value='Ordenar'></td></tr>			
</table>
			</form>

			<div class='tabela'>
			<table border=1>
				<thead>
					<tr>
						<th WIDTH=50></th>	
						<th WIDTH=50>x</th>				
						<th WIDTH=50>y</th>				
						<th WIDTH=100>Nome</th>				
						<th WIDTH=100>Recurso</th>				
						<th WIDTH=100>Santuário</th>				
						<th WIDTH=100>Floresta</th>				
						<th WIDTH=100>Cidades</th>
					</tr></thead><tbody>
			<?php 
$i = 1;
				if ($ilhas){
					foreach ($ilhas as $ilha)
						echo "<tr><td>" . $i++ . "</td>"
								. "<td>" . $ilha['x'] . "</td>"
								. "<td>" . $ilha['y'] . "</td>"
								. "<td>" . $ilha['nome'] . "</td>"
								. "<td>" . tiporecurso($ilha['recurso']) . "</td>"
								. "<td>" . tipomilagre($ilha['milagre']) . "</td>"
								. "<td>" . $ilha['levelFloresta'] . "</td>"
								. "<td>" . $ilha['qtdCity'] . "</td></tr>";
					}
			?>

			</tbody>
		</table>
		</div>
		</div>
		<script src="js/index.js"></script>
	</body>
</html>