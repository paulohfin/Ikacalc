<?php
	require_once('../configuracao.php');
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
			<div class='table'>
			<table cellpadding="2">
				<tr title="Selecione o tipo de governo">
					<th colspan=12 bgcolor="#D2B48C">Governo</th>
				</tr>
				<tr title="Selecione o tipo de governo">
					<th colspan=6>Tipo de Governo</th><td colspan=6>
						<select id='governo' onblur="calcular()">
							<option value=0>Selecione um tipo de Governo</option>
							<option value=1>Ikacracia</option>
							<option value=2>Aristocracia</option>
							<option value=3>Democracia</option>
							<option value=4>Ditadura</option>
							<option value=5>Nomocracia</option>
							<option value=6>Oligarquia</option>
							<option value=7>Tecnocracia</option>
							<option value=8>Teocracia</option>
						</select>
					</td>
				</tr>
				<tr title="Selecione as pesquisas">
					<th colspan=12 bgcolor="#D2B48C">Pesquisas</th>
				</tr>
				<tr title="Selecione as pesquisas">
				<td colspan=6>
					<select id='navegacao' onblur="calcular()">
						<option value=0>Pesquisa de Navegação Marítma</option>
						<option value=1>Carpintaria</option>
						<option value=2> Convés de Armas</option>
						<option value=3> Pirataria</option>
						<option value=4> Manutenção dos Barcos</option>
						<option value=5> Calado</option>
						<option value=6> Expansão</option>
						<option value=7> Culturas Estrangeiras</option>
						<option value=8> Piche</option>
						<option value=9> Mercado</option>
						<option value=10> Fogo Grego</option>
						<option value=11> Contrapeso</option>
						<option value=12> Diplomacia</option>
						<option value=13> Cartas Náuticas</option>
						<option value=14> Roda d`Água</option>
						<option value=15> Calafetagem</option>
						<option value=16> Anexo de Morteiro</option>
						<option value=17> Ariete Maciço</option>
						<option value=18> Base no Mar</option>
						<option value=19> Futuro da Navegação(1)</option>
						<option value=20> Futuro da Navegação(2)</option>
						<option value=21> Futuro da Navegação(3)</option>
						<option value=22> Futuro da Navegação(4)</option>
						<option value=23> Futuro da Navegação(5)</option>
						<option value=24> Futuro da Navegação(6)</option>
						<option value=25> Futuro da Navegação(7)</option>
						<option value=26> Futuro da Navegação(8)</option>
						<option value=27> Futuro da Navegação(9)</option>
						<option value=28> Futuro da Navegação(10)</option>
						<option value=29> Futuro da Navegação(11)</option>
						<option value=30> Futuro da Navegação(12)</option>
						<option value=31> Futuro da Navegação(13)</option>
						<option value=32> Futuro da Navegação(14)</option>
						<option value=33> Futuro da Navegação(15)</option>
						<option value=34> Futuro da Navegação(16)</option>
						<option value=35> Futuro da Navegação(17)</option>
						<option value=36> Futuro da Navegação(18)</option>
						<option value=37> Futuro da Navegação(19)</option>
						<option value=38> Futuro da Navegação(20)</option>
						<option value=39> Futuro da Navegação(21)</option>
						<option value=40> Futuro da Navegação(22)</option>
						<option value=41> Futuro da Navegação(23)</option>
						<option value=42> Futuro da Navegação(24)</option>
						<option value=43> Futuro da Navegação(25)</option>
					</select>
				</td>
				<td colspan=6>
					<select id='militar' onblur="calcular()">
						<option value=0>Pesquisa Militar</option>
						<option value=1>Doca</option>
						<option value=2>Mapas</option>
						<option value=3>Exército Profissional</option>
						<option value=4>Cerco</option>
						<option value=5>Código de Honra</option>
						<option value=6>Balística</option>
						<option value=7>Lei da Alavanca</option>
						<option value=8>Governador</option>
						<option value=9>Pirotecnia</option>
						<option value=10>Logística</option>
						<option value=11>Pólvora</option>
						<option value=12>Robótica</option>
						<option value=13>Construção de Canhões</option>
						<option value=14>Futuro Bélico(1)</option>
						<option value=15>Futuro Bélico(2)</option>
						<option value=16>Futuro Bélico(3)</option>
						<option value=17>Futuro Bélico(4)</option>
						<option value=18>Futuro Bélico(5)</option>
						<option value=19>Futuro Bélico(6)</option>
						<option value=20>Futuro Bélico(7)</option>
						<option value=21>Futuro Bélico(8)</option>
						<option value=22>Futuro Bélico(9)</option>
						<option value=23>Futuro Bélico(10)</option>
						<option value=24>Futuro Bélico(11)</option>
						<option value=25>Futuro Bélico(12)</option>
						<option value=26>Futuro Bélico(13)</option>
						<option value=27>Futuro Bélico(14)</option>
						<option value=28>Futuro Bélico(15)</option>
						<option value=29>Futuro Bélico(16)</option>
						<option value=30>Futuro Bélico(17)</option>
						<option value=31>Futuro Bélico(18)</option>
						<option value=32>Futuro Bélico(19)</option>
						<option value=33>Futuro Bélico(20)</option>
						<option value=34>Futuro Bélico(21)</option>
						<option value=35>Futuro Bélico(22)</option>
						<option value=36>Futuro Bélico(23)</option>
						<option value=37>Futuro Bélico(24)</option>
						<option value=38>Futuro Bélico(25)</option>
					</select>
				</td>
			</tr>
				<tr title="Selecione o level dos edifícios na cidade de produção">
					<th colspan=12 bgcolor="#D2B48C">Edifício Minimizadores</th>
				</tr>
			<tr title="Selecione o level dos edifícios na cidade de produção">
				<td><img src='../img/ed/carpentering_l.png'></td>
				<td><input type='text' size=1 id='d1' onblur="calcular()"></td>
				<td><img src='../img/ed/vineyard_l.png'></td>
				<td><input type='text' size=1 id='d2' onblur="calcular()"></td>
				<td><img src='../img/ed/architect_l.png'></td>
				<td><input type='text' size=1 id='d3' onblur="calcular()"></td>
				<td><img src='../img/ed/optician_l.png'></td>
				<td><input type='text' size=1 id='d4' onblur="calcular()"></td>
				<td><img src='../img/ed/fireworker_l.png'></td>
				<td><input type='text' size=1 id='d5' onblur="calcular()"></td>
				<td></td>
			</tr>
				<tr title="Selecione o level dos edifícios de produção">
					<th colspan=12 bgcolor="#D2B48C">Edifício para Construção</th>
				</tr>
			<tr title="Selecione o level dos edifícios de produção">
				<td colspan=2>Edifício</td>
				<td colspan=2>Level</td>
				<td colspan=2>Quantidade</td>
				<td colspan=2>Edifício</td>
				<td colspan=2>Level</td>
				<td colspan=2>Quantidade</td>
			</tr>
			<tr title="Selecione o level dos edifícios de produção">
				<td colspan=2><img src='../img/ed/barracks_r.png'></td>
				<td colspan=2><input type='text' size=1 id='dq' onblur="calcular()"></td>
				<td colspan=2><input type='text' size=1 id='nq' onblur="calcular()"></td>
				<td colspan=2><img src='../img/ed/shipyard_r.png'></td>
				<td colspan=2><input type='text' size=1 id='de' onblur="calcular()"></td>
				<td colspan=2><input type='text' size=1 id='ne' onblur="calcular()"></td>
			</tr>
				<tr title="Insira a quantidade de unidades a serem produzidas">
					<th colspan=12 bgcolor="#D2B48C">Unidades</th>
				</tr>
				<tr title="Insira a quantidade de unidades a serem produzidas">
					<th colspan=6>Tropa</th>
					<th colspan=6>Frota</th>
				</tr>
				<tr title="Insira a quantidade de unidades a serem produzidas">
					<td><img src='../img/un/301.png'></td>
					<td><input type='text' size=1 id='ct1' onblur="calcular()"></td>
					<td><img src='../img/un/313.png'></td>
					<td><input type='text' size=1 id='ct2' onblur="calcular()"></td>
					<td><img src='../img/un/304.png'></td>
					<td><input type='text' size=1 id='ct3' onblur="calcular()"></td>
					<td><img src='../img/un/210.png'></td>
					<td><input type='text' size=1 id='ct15' onblur="calcular()"></td>
					<td><img src='../img/un/213.png'></td>
					<td><input type='text' size=1 id='ct16' onblur="calcular()"></td>
					<td><img src='../img/un/211.png'></td>
					<td><input type='text' size=1 id='ct17' onblur="calcular()"></td>
				</tr>
				<tr title="Insira a quantidade de unidades a serem produzidas">
					<td><img src='../img/un/315.png'></td>
					<td><input type='text' size=1 id='ct4' onblur="calcular()"></td>
					<td><img src='../img/un/302.png'></td>
					<td><input type='text' size=1 id='ct5' onblur="calcular()"></td>
					<td><img src='../img/un/303.png'></td>
					<td><input type='text' size=1 id='ct6' onblur="calcular()"></td>
					<td><img src='../img/un/214.png'></td>
					<td><input type='text' size=1 id='ct18' onblur="calcular()"></td>
					<td><img src='../img/un/215.png'></td>
					<td><input type='text' size=1 id='ct19' onblur="calcular()"></td>
					<td><img src='../img/un/216.png'></td>
					<td><input type='text' size=1 id='ct20' onblur="calcular()"></td>
				</tr>
				<tr title="Insira a quantidade de unidades a serem produzidas">
					<td><img src='../img/un/308.png'></td>
					<td><input type='text' size=1 id='ct7' onblur="calcular()"></td>
					<td><img src='../img/un/312.png'></td>
					<td><input type='text' size=1 id='ct8' onblur="calcular()"></td>
					<td><img src='../img/un/309.png'></td>
					<td><input type='text' size=1 id='ct9' onblur="calcular()"></td>
					<td><img src='../img/un/217.png'></td>
					<td><input type='text' size=1 id='ct21' onblur="calcular()"></td>
					<td><img src='../img/un/212.png'></td>
					<td><input type='text' size=1 id='ct22' onblur="calcular()"></td>
					<td><img src='../img/un/218.png'></td>
					<td><input type='text' size=1 id='ct23' onblur="calcular()"></td>
				</tr>
				<tr title="Insira a quantidade de unidades a serem produzidas">
					<td><img src='../img/un/307.png'></td>
					<td><input type='text' size=1 id='ct10' onblur="calcular()"></td>
					<td><img src='../img/un/306.png'></td>
					<td><input type='text' size=1 id='ct11' onblur="calcular()"></td>
					<td><img src='../img/un/305.png'></td>
					<td><input type='text' size=1 id='ct12' onblur="calcular()"></td>
					<td><img src='../img/un/219.png'></td>
					<td><input type='text' size=1 id='ct24' onblur="calcular()"></td>
					<td><img src='../img/un/220.png'></td>
					<td><input type='text' size=1 id='ct25' onblur="calcular()"></td>
				</tr>
				<tr title="Insira a quantidade de unidades a serem produzidas">
					<td><img src='../img/un/311.png'></td>
					<td><input type='text' size=1 id='ct13' onblur="calcular()"></td>
					<td><img src='../img/un/310.png'></td>
					<td><input type='text' size=1 id='ct14' onblur="calcular()"></td>
				</tr>
			<tr>
				<td colspan=2 title="Consumo de Materiais de Construção"><img src='../img/icon_wood.png'></td>
				<td colspan=4 title="Consumo de Materiais de Construção"><text id='rec0'></text></td>
				<td colspan=2 title="Consumo de Ouro"><img src='../img/icon_gold.jpg'></td>
				<td colspan=4 title="Consumo de Ouro"><text id='rec5'></text></td>
			</tr>
			<tr>
				<td colspan=2 title="Consumo de Vinho"><img src='../img/icon_wine.png'></td>
				<td colspan=4 title="Consumo de Vinho"><text id='rec1'></text></td>
				<td colspan=2 title="Cidadãos para produção"><img src='../img/icon_population.png'></td>
				<td colspan=4 title="Cidadãos para produção"><text id='rec6'></text></td>
			</tr>
			<tr>
				<td colspan=2 title="Consumo de Mármore"><img src='../img/icon_marble.png'></td>
				<td colspan=4 title="Consumo de Mármore"><text id='rec2'></text></td>
				<td colspan=2 title="Tempo para produção de tropa">Tempo Tropa:</td>
				<td colspan=4 title="Tempo para produção de tropa"><text id='rec7'></text></td>
			</tr>
			<tr>
				<td colspan=2 title="Consumo de Cristal"><img src='../img/icon_glass.png'></td>
				<td colspan=4 title="Consumo de Cristal"><text id='rec3'></text></td>
				<td colspan=2 title="Tempo para produção de frota">Tempo Frota:</td>
				<td colspan=4 title="Tempo para produção de frota"><text id='rec8'></text></td>
			</tr>
			<tr>
				<td colspan=2 title="Consumo de Enxofre"><img src='../img/icon_sulfur.png'></td>
				<td colspan=4 title="Consumo de Enxofre"><text id='rec4'></text></td>
				<td colspan=2 title="Pontos de Generais">Generais :</td>
				<td colspan=4 title="Pontos de Generais"><text id='rec9'></text></td>
			</tr>
			</table>
			</div>
		</div>
		<script src="calculo.js"></script>
	</body>
</html>
