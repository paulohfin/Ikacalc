<?php
	require_once('../configuracao.php');
	require_once('funcoes.php');
	buscarmundis();
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
					<tr>
					<th>Selecione o mundo</th>
					<th colspan=3>					
							<select name='selectmundo'>
								<?php
									foreach($mundis as $mundi)
										echo '<option value=' . $mundi['Tables_in_ikacalc']  . '>' . $mundi['Tables_in_ikacalc']  . '</option>';
								?>
							</select>
					</th>
					</tr>
					<th colspan=4 title="Selecione a opção para ordenar/selecionar as ilhas">Ordenar por:</th>
					<tr>
						<td title="Ordenar por nome">
							<label>
								<input type='radio' name='radio' value='nome' required>Nome
							</label>
						</td>
						<td title="Ordenar por tipo de Recurso">
							<label><input type='radio' name='radio' value='recurso' required>
							<select name='recurso'>
								<option value='1'>Vinho</option>
								<option value='2'>Mármore</option>
								<option value='3'>Cristal</option>
								<option value='4'>Enxofre</option>
							</select>
							</label>
						</td>
						<td title="Ordenar por tipo de Santuário">
							<label>
								<input type='radio' name='radio' value='milagre' required>
								<select name='milagre'>
									<option value='1'>Forja de Hefesto</option>
									<option value='2'>Bosque Sagrado de Hades</option>
									<option value='3'>Jardins de Demeter</option>
									<option value='4'>Templo de Atena</option>
									<option value='5'>Templo de Hermes</option>
									<option value='6'>Fortaleza de Ares</option>
									<option value='7'>Templo de Poseidon</option>
									<option value='8'>Colosso</option>
								</select>
							</label>
						</td>
					</tr>
					<tr>
						<td title="Ordenar por level da Floresta">
							<label>
								<input type='radio' name='radio' value='levelFloresta'>Level da Floresta
							</label>
						</td>
						<td title="Ordenar por Quantidade de Cidades na Ilha">
							<label>
								<input type='radio' name='radio' value='qtdCity'>Quantidade de Cidades
							</label>
						</td>
					</tr>
					<tr>
						<th colspan=3>
							<input type='submit' name='buscar' value='Ordenar'>
						</th>
					</tr>			
				</table>
			</form>

			<table border=1>
				<thead>
					<tr>
						<th WIDTH=50 title="Posição"></th>	
						<th WIDTH=50 title="Coordenadas">x</th>				
						<th WIDTH=50 title="Coordenadas">y</th>				
						<th WIDTH=100 title="Nome da Ilha">Nome</th>				
						<th WIDTH=100 title="Tipo de Recurso">Recurso</th>				
						<th WIDTH=100 title="Tipo de Santuário">Santuário</th>				
						<th WIDTH=100 title="Level da Floresta">Floresta</th>				
						<th WIDTH=100 title="Quantidade de Cidades na Ilha">Cidades</th>
					</tr>
				</thead>
				</table>
			<div class='tabela'>
				<table border=1>
					<tbody>
						<?php 
							$i = 1;
							if ($ilhas){
								foreach ($ilhas as $ilha)
									echo "<tr><td WIDTH=50 >" . $i++ . "</td>"
											. "<td WIDTH=50 >" . $ilha['x'] . "</td>"
											. "<td WIDTH=50 >" . $ilha['y'] . "</td>"
											. "<td WIDTH=100 >" . $ilha['nome'] . "</td>"
											. "<td WIDTH=100 >" . tiporecurso($ilha['recurso']) . "</td>"
											. "<td WIDTH=100 >" . tipomilagre($ilha['milagre']) . "</td>"
											. "<td WIDTH=100 >" . $ilha['levelFloresta'] . "</td>"
											. "<td WIDTH=100 >" . $ilha['qtdCity'] . "</td></tr>";
								}
						?>
					</tbody>
				</table>
			</div>
		</div>
	</body>
</html>
