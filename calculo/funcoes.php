<?php	
	$dt = 0; /* desconto tropa */
	$df = 0; /* desconto frota */

	$rec['1'] = 0; /* madeira */
	$rec['2'] = 0; /* vinho */
	$rec['3'] = 0; /* marmore */
	$rec['4'] = 0; /* cristal */
	$rec['5'] = 0; /* enxofre */
	$rec['6'] = 0; /* cidadao */
	$rec['7'] = 0; /* ouro */
	$rec['8'] = 0; /* tempo tropa */
	$rec['9'] = 0; /* tempo frota */
	$rec['10'] = 0; /* generais */
	$un['1']=['Fundeiro',20,0,0,0,0,2,1,90];
	$un['2']=['Arqueiro',30,0,0,0,25,4,1,240];
	$un['3']=['Fuzileiro',50,0,0,0,150,3,1,600];
	$un['4']=['Lanceiro',30,0,0,0,0,1,1,60];
	$un['5']=['Espadachim',30,0,0,0,30,4,1,180];
	$un['6']=['Hoplita',40,0,0,0,30,3,1,300];
	$un['7']=['Gigante',130,0,0,0,180,12,2,900];
	$un['8']=['Girocoptero',25,0,0,0,100,15,3,900];
	$un['9']=['Balão',40,0,0,0,250,45,5,1800];
	$un['10']=['Aríete',220,0,0,0,0,15,5,600];
	$un['11']=['Catapulta',260,0,0,0,300,25,5,1800];
	$un['12']=['Morteiro',300,0,0,0,1250,30,5,2400];
	$un['13']=['Médico',50,0,0,450,0,20,1,1200];
	$un['14']=['Cozinheiro',50,150,0,0,0,10,1,1200];
	$un['15']=['Trireme',250,0,0,0,0,15,3,2400];
	$un['16']=['Barco Balista',180,0,0,0,160,20,6,3000];
	$un['17']=['Lança chamas',80,0,0,0,230,25,4,1800];
	$un['18']=['Barco Catapulta',180,0,0,0,140,35,5,3000];
	$un['19']=['Barco Morteiro',220,0,0,0,900,50,5,3000];
	$un['20']=['Ariete a Vapor',400,0,0,0,800,45,2,2400];
	$un['21']=['Lança Foguetes',200,0,0,0,1200,55,2,3600];
	$un['22']=['Submergível',160,0,0,750,100,50,3,3600];
	$un['23']=['Lancha Rápida',40,0,0,0,280,5,1,1800];
	$un['24']=['Porta Balões',700,0,0,0,700,100,8,3960];
	$un['25']=['Reparador',300,0,0,250,250,100,7,2400];
	
	function imprimetempo($tempo){
		$time = '';
		if($tempo > 604800){
			$time = '' . (int)($tempo/604800) . 's ';
			$tempo %= 604800;
		}
		if($tempo > 86400){
			$time .= (int)($tempo/86400) . 'd ';
			$tempo %= 86400;
		}
		if($tempo > 3600){
			$time .= (int)($tempo/3600) . 'h ';
			$tempo %= 3600;
		}
		if($tempo > 60){
			$time .= (int)($tempo/60) . 'm ';
			$tempo %= 60;
		}
		if($tempo > 0){
			$time .= $tempo;
		}
		return $time;
	}
	function calcular(){
		global $df;
		global $dt;
		global $rec;
		global $un;	
		if($_POST['navegacao'] > 3)
			$df += 2;
		if($_POST['navegacao'] > 7)
			$df += 4;
		if($_POST['navegacao'] > 12)
			$df += 8;
		if($_POST['navegacao'] > 18)
			$df += ($_POST['navegacao'] - 18) * 2;
		if($_POST['militar'] > 1)
			$dt += 2;
		if($_POST['militar'] > 4)
			$dt += 4;
		if($_POST['militar'] > 9)
			$dt += 8;
		if($_POST['militar'] > 13)
			$dt += ($_POST['militar'] - 13) * 2;

		for($j = 1; $j < 9; $j++)
			for($i = 1; $i < 26; $i++){
				if($j < 6){
					if($i < 15)
						$rec[$j] += (int)$_POST['ct' . $i] * $un['' . $i][$j] * (1 - ($dt + (int)$_POST['d' . $j]) / 100);
					else
						$rec[$j] += (int)$_POST['ct' . $i] * $un['' . $i][$j] * (1 - ($df + (int)$_POST['d' . $j]) / 100);
						
					$rec[10] += (int)$_POST['ct' . $i] * $un['' . $i][$j] * 0.02;
				}
				else
					if($j === 6)
							$rec[$j] += (int)$_POST['ct' . $i] * $un['' . $i][$j];
					elseif($j === 7){
						if($i < 15)
							$rec[$j] += (int)$_POST['ct' . $i] * $un['' . $i][$j] * (1 - $dt/100);
						else
							$rec[$j] += (int)$_POST['ct' . $i] * $un['' . $i][$j] * (1 - $df/100);
					}
					else
						if($i < 15)
							$rec[8] += $un['' . $i][$j] * reducao($i) * qtedificio((int)$_POST['ct' . $i], (int)$_POST['nq']);
						else $rec[9] += $un['' . $i][$j] * reducao($i) * qtedificio((int)$_POST['ct' . $i], (int)$_POST['ne']);
			}
		$rec[8] = imprimetempo($rec[8]);
		$rec[9] = imprimetempo($rec[9]);
	}
	function reducao($n){
		switch($n){
			case 1:
				if((int)$_POST['dq'] - 2 > 0)
					return pow(0.95, (int)$_POST['dq'] - 2);
				else return 1;
				break;
			case 2:
				if((int)$_POST['dq'] - 7 > 0)
					return pow(0.95, (int)$_POST['dq'] - 7);
				else return 1;
				break;
			case 3:
				if((int)$_POST['dq'] - 13 > 0)
					return pow(0.95, (int)$_POST['dq'] - 13);
				else return 1;
				break;
			case 4:
				if((int)$_POST['dq'] - 1 > 0)
					return pow(0.95, (int)$_POST['dq'] - 1);
				else return 1;
				break;
			case 5:
				if((int)$_POST['dq'] - 6 > 0)
					return pow(0.95, (int)$_POST['dq'] - 6);
				else return 1;
				break;
			case 6:
			case 10:
				if((int)$_POST['dq'] - 4 > 0)
					return pow(0.95, (int)$_POST['dq'] - 4);
				else return 1;
				break;
			case 7:
				if((int)$_POST['dq'] - 12 > 0)
					return pow(0.95, (int)$_POST['dq'] - 12);
				else return 1;
				break;
			case 8:
				if((int)$_POST['dq'] - 10 > 0)
					return pow(0.95, (int)$_POST['dq'] - 10);
				else return 1;
				break;
			case 9:
				if((int)$_POST['dq'] - 11 > 0)
					return pow(0.95, (int)$_POST['dq'] - 11);
				else return 1;
				break;
			case 11:
				if((int)$_POST['dq'] - 8 > 0)
					return pow(0.95, (int)$_POST['dq'] - 8);
				else return 1;
				break;
			case 12:
				if((int)$_POST['dq'] - 14 > 0)
					return pow(0.95, (int)$_POST['dq'] - 14);
				else return 1;
				break;
			case 13:
				if((int)$_POST['dq'] - 9 > 0)
					return pow(0.95, (int)$_POST['dq'] - 9);
				else return 1;
				break;
			case 14:
				if((int)$_POST['dq'] - 5 > 0)
					return pow(0.95, (int)$_POST['dq'] - 5);
				else return 1;
				break;
			case 15:
				if((int)$_POST['de'] - 1 > 0)
					return pow(0.95, (int)$_POST['de'] - 1);
				else return 1;
				break;
			case 16:
				if((int)$_POST['de'] - 3 > 0)
					return pow(0.95, (int)$_POST['de'] - 3);
				else return 1;
				break;
			case 17:
				if((int)$_POST['de'] - 4 > 0)
					return pow(0.95, (int)$_POST['de'] - 4);
				else return 1;
				break;
			case 18:
				if((int)$_POST['de'] - 3 > 0)
					return pow(0.95, (int)$_POST['de'] - 3);
				else return 1;
				break;
			case 19:
				if((int)$_POST['de'] - 17 > 0)
					return pow(0.95, (int)$_POST['de'] - 17);
				else return 1;
				break;
			case 20:
				if((int)$_POST['de'] - 15 > 0)
					return pow(0.95, (int)$_POST['de'] - 15);
				else return 1;
				break;
			case 21:
				if((int)$_POST['de'] - 11 > 0)
					return pow(0.95, (int)$_POST['de'] - 11);
				else return 1;
				break;
			case 22:
				if((int)$_POST['de'] - 19 > 0)
					return pow(0.95, (int)$_POST['de'] - 19);
				else return 1;
				break;
			case 23:
				if((int)$_POST['de'] - 13 > 0)
					return pow(0.95, (int)$_POST['de'] - 13);
				else return 1;
				break;
			case 24:
				if((int)$_POST['de'] - 7 > 0)
					return pow(0.95, (int)$_POST['de'] - 7);
				else return 1;
				break;
			case 25:
				if((int)$_POST['de'] - 9 > 0)
					return pow(0.95, (int)$_POST['de'] - 9);
				else return 1;
				break;
		}
	}
	function qtedificio($nu, $ne){
		if($ne > 0)
			return ceil($nu / $ne);
		else return $nu;
	}
?>
