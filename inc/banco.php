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
	function find_ilhas($ord, $mundi){
		$database = open_database();
		$encontrar = null;
		
		/*Buscando o id informado para a pesquisa no banco*/
		try {
if($ord === 'nome') $sql = "select * from " . $mundi . " order by nome";
if($ord === 'levelFloresta' || $ord === 'qtdCity') $sql = "select * from " . $mundi . " order by " . $ord . " DESC, x asc, y asc";

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
	function find_ilhas_recurso($tipo, $mundi){
		$database = open_database();
		$encontrar = null;

		/*Buscando o id informado para a pesquisa no banco*/
		try {
			$sql = "select * from " . $mundi . " where recurso = " . $tipo . " order by levelFloresta desc, qtdCity desc, x asc, y asc";
			
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
	function find_ilhas_santuario($tipo, $mundi){
		$database = open_database();
		$encontrar = null;

		/*Buscando o id informado para a pesquisa no banco*/
		try {
			$sql = "select * from " . $mundi . " where milagre = " . $tipo . " order by levelFloresta desc, qtdCity desc, x asc, y asc";

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
	function atualizarbd($mundi, $entrada){	
		$database = open_database();	
		
		try{
			$sql = 'CREATE TABLE IF NOT EXISTS ' . $mundi . '('
				. 'x int,'
				. 'y int,'
				. 'dx int,'
				. 'nome varchar(50) primary key,'
				. 'recurso int,'
				. 'milagre int,'
				. 'dy int,'
				. 'tilha int,'
				. 'levelFloresta int,'
				. 'qtdCity int,'
				. 'v1 int,'
				. 'v2 int,'
				. 'v3 int,'
				. 'v4 int			
			)';
			
			$database->query($sql);
		}
		
		/*Mensagem caso o id pesquisado não foi encontrado*/
		catch (Exception $e) {
			$_SESSION['message'] = $e->GetMessage();
			$_SESSION['type'] = 'danger';
	  	}
		$linhas = explode(';', $entrada);
		$x = 0;
		$i = 0;
		try{
			$sql = '';
			foreach($linhas as $linha){
				$coluna = explode(',', $linha);
			
				if(count($coluna) == 14){
					$x = $coluna[0];
					$i = 1;
				}
				else $i = 0;
				for($j = 0; $j < count($coluna); $j++)
					$a[$j] = $coluna[$j + $i];
				$sql .= 'INSERT INTO ' . $mundi
					. ' VALUES(' . $x . ', ' . $a[0] . ', ' . $a[1] . ', "' . $a[2] . '", ' . $a[3]
					. ', ' . $a[4] . ', ' . $a[5] . ', ' . $a[6] . ', ' . $a[7] . ', ' . $a[8]
					. ', ' . $a[9] . ', ' . $a[10] . ', ' . $a[11] . ', ' . $a[12] . ')
					ON DUPLICATE KEY UPDATE
					  levelFloresta     = VALUES(levelFloresta),
					  qtdCity = VALUES(qtdCity),
					  v1 = VALUES(v1),
					  v2 = VALUES(v2),
					  v3 = VALUES(v3),
					  v4 = VALUES(v4);';
			
			}
			$database->multi_query($sql);
		} 
		
		/*Mensagem caso o id pesquisado não foi encontrado*/
		catch (Exception $e) {
			$_SESSION['message'] = $e->GetMessage();
			$_SESSION['type'] = 'danger';
	  	}
		close_database($database);
	}
	function buscarmundi(){
		$database = open_database();
		try{
			$sql = 'show tables';
			$result = $database->query($sql);
		} 
		
		/*Mensagem caso o id pesquisado não foi encontrado*/
		catch (Exception $e) {
			$_SESSION['message'] = $e->GetMessage();
			$_SESSION['type'] = 'danger';
	  	}	
		close_database($database);
		return $result->fetch_all(MYSQLI_ASSOC);
	}
	function buscardados($mundi){
		$database = open_database();
		try{
			$sql = 'select x, y, qtdCity from ' . $mundi;
			$result = $database->query($sql);
		} 
		
		/*Mensagem caso o id pesquisado não foi encontrado*/
		catch (Exception $e) {
			$_SESSION['message'] = $e->GetMessage();
			$_SESSION['type'] = 'danger';
	  	}	
		close_database($database);
		return $result->fetch_all(MYSQLI_ASSOC);		
	}
?>
