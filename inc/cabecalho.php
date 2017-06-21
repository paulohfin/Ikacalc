<!DOCTYPE html>

<html>
	<head>
		<title>IkaCalc - O site para auxiliar as estratégias de guerras/construções no Ikariam</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="cabecalho.css">
	</head>

    <body>
    	<div>
    		<a href= <?php echo BASEURL; ?>><img class='img01' src=<?php echo BASEURL . 'img/logo.png'?> alt="IkaCalc"></a>
		<nav class="menu-opcoes">
			<ul>
				<!--<li><a href="/cadastrar/">Cadastrar Cidades</a></li>-->
				<li><a href=<?php echo BASEURL . 'calculo/'; ?> >Calcular</a></li>
				<li><a href=<?php echo BASEURL . 'ilha/'; ?> >Ilhas</a></li>
				<li><a href=<?php echo BASEURL . 'mapa/Mundi.png'; ?>>Mapa</a></li>
				<li><a href=<?php echo BASEURL . '#'; ?>>Sobre</a></li>
			</ul>
		</nav>
    	</div>
    </body>
</html>
