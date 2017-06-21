<?php

	/*Estrutura presente em configuracao.php*/
	mysqli_report(MYSQLI_REPORT_STRICT);

	/*Função para abrir o banco de dados*/
	function open_database() {
		try {
			$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
			mysqli_set_charset( $conn, 'utf8');
			return $conn;
		} catch (Exception $e) {
			echo $e->getMessage();
			return null;
		}
	}

	/*Função para fechar o banco de dados*/
	function close_database($conn) {
		try {
			mysqli_close($conn);
		} catch (Exception $e) {
			echo $e->getMessage();
		}
	}
	function find_ilhas($ord){
		$database = open_database();
		$encontrar = null;
		
		/*Buscando o id informado para a pesquisa no banco*/
		try {
if($ord === 'nome') $sql = "select * from ilha order by " . $ord;
if($ord === 'levelFloresta' || $ord === 'qtdCity') $sql = "select * from ilha order by " . $ord . " DESC, x asc, y asc";

			$result = $database->query($sql);

			$encontrar = $result->fetch_all(MYSQLI_ASSOC);
		} 
		
		/*Mensagem caso o id pesquisado não foi encontrado*/
		catch (Exception $e) {
			$_SESSION['message'] = $e->GetMessage();
			$_SESSION['type'] = 'danger';
	  	}
		

		/*Em ambas as ocasiões, fechar o banco após a pesquisa*/
		close_database($database);
		return $encontrar;
	}
	function find_ilhas_recurso($tipo){
		$database = open_database();
		$encontrar = null;

		/*Buscando o id informado para a pesquisa no banco*/
		try {
			$sql = "select * from ilha where recurso = " . $tipo . " order by x asc, y asc";

			$result = $database->query($sql);

			$encontrar = $result->fetch_all(MYSQLI_ASSOC);
		} 
		
		/*Mensagem caso o id pesquisado não foi encontrado*/
		catch (Exception $e) {
			$_SESSION['message'] = $e->GetMessage();
			$_SESSION['type'] = 'danger';
	  	}
		

		/*Em ambas as ocasiões, fechar o banco após a pesquisa*/
		close_database($database);
		return $encontrar;
	}
	function find_ilhas_santuario($tipo){
		$database = open_database();
		$encontrar = null;

		/*Buscando o id informado para a pesquisa no banco*/
		try {
			$sql = "select * from ilha where milagre = " . $tipo . " order by x asc, y asc";

			$result = $database->query($sql);

			$encontrar = $result->fetch_all(MYSQLI_ASSOC);
		} 
		
		/*Mensagem caso o id pesquisado não foi encontrado*/
		catch (Exception $e) {
			$_SESSION['message'] = $e->GetMessage();
			$_SESSION['type'] = 'danger';
	  	}
		

		/*Em ambas as ocasiões, fechar o banco após a pesquisa*/
		close_database($database);
		return $encontrar;
	}
?>