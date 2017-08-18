function calcular(){		
	if(document.getElementById('d1').value > 32)
		document.getElementById('d1').value = 32;
	if(document.getElementById('d2').value > 32)
		document.getElementById('d2').value = 32;
	if(document.getElementById('d3').value > 32)
		document.getElementById('d3').value = 32;
	if(document.getElementById('d4').value > 32)
		document.getElementById('d4').value = 32;
	if(document.getElementById('d5').value > 32)
		document.getElementById('d5').value = 32;
	if(document.getElementById('dq').value > 49)
		document.getElementById('dq').value = 49;
	if(document.getElementById('nq').value > 12)
		document.getElementById('nq').value = 12;
	if(document.getElementById('de').value > 38)
		document.getElementById('de').value = 38;
	if(document.getElementById('ne').value > 12)
		document.getElementById('ne').value = 12;
		
	var dt = 0;
	var df = 0;
	
	var rec = [0,0,0,0,0,0,0,0,0,0];
	var un = [['Fundeiro',20,0,0,0,0,2,1,90],
			['Arqueiro',30,0,0,0,25,4,1,240],
			['Fuzileiro',50,0,0,0,150,3,1,600],
			['Lanceiro',30,0,0,0,0,1,1,60],
			['Espadachim',30,0,0,0,30,4,1,180],
			['Hoplita',40,0,0,0,30,3,1,300],
			['Gigante',130,0,0,0,180,12,2,900],
			['Girocoptero',25,0,0,0,100,15,3,900],
			['Balão',40,0,0,0,250,45,5,1800],
			['Aríete',220,0,0,0,0,15,5,600],
			['Catapulta',260,0,0,0,300,25,5,1800],
			['Morteiro',300,0,0,0,1250,30,5,2400],
			['Médico',50,0,0,450,0,20,1,1200],
			['Cozinheiro',50,150,0,0,0,10,1,1200],
			['Trireme',250,0,0,0,0,15,3,2400],
			['Barco Balista',180,0,0,0,160,20,6,3000],
			['Lança chamas',80,0,0,0,230,25,4,1800],
			['Barco Catapulta',180,0,0,0,140,35,5,3000],
			['Barco Morteiro',220,0,0,0,900,50,5,3000],
			['Ariete a Vapor',400,0,0,0,800,45,2,2400],
			['Lança Foguetes',200,0,0,0,1200,55,2,3600],
			['Submergível',160,0,0,750,100,50,3,3600],
			['Lancha Rápida',40,0,0,0,280,5,1,1800],
			['Porta Balões',700,0,0,0,700,100,8,3960],
			['Reparador',300,0,0,250,250,100,7,2400]];
	
	if(document.getElementById('navegacao').value > 3)
		df += 2;
	if(document.getElementById('navegacao').value > 7)
		df += 4;
	if(document.getElementById('navegacao').value > 12)
		df += 8;
	if(document.getElementById('navegacao').value > 18)
		df += (document.getElementById('navegacao').value - 18) * 2;
		
	if(document.getElementById('militar').value > 1)
		dt += 2;
	if(document.getElementById('militar').value > 4)
		dt += 4;
	if(document.getElementById('militar').value > 9)
		dt += 8;
	if(document.getElementById('militar').value > 13)
		dt += (document.getElementById('militar').value - 13) * 2;
	
	for(var j = 1; j < 9; j++)
		for(var i = 1; i < 26; i++){
			if(j < 6){
				if(i < 15)
					if(document.getElementById("d" + j).value != '')
						rec[j - 1] += document.getElementById('ct' + i).value * un[i - 1][j] * (1 - (dt + parseInt(document.getElementById("d" + j).value, 10)) / 100);
					else rec[j - 1] += document.getElementById('ct' + i).value * un[i - 1][j] * (1 - dt / 100);
				else
					if(document.getElementById("d" + j).value != '')
						rec[j - 1] += document.getElementById('ct' + i).value * un[i - 1][j] * (1 - (df + parseInt(document.getElementById("d" + j).value, 10)) / 100);
					else rec[j - 1] += document.getElementById('ct' + i).value * un[i - 1][j] * (1 - df / 100);
				
				rec[9] += document.getElementById('ct' + i).value * un[i - 1][j] * 0.02; //generais
			}
			else
				if(j == 7)
						rec[j - 1] += document.getElementById('ct' + i).value * un[i - 1][j]; //cidadaos 
				else if(j == 6){
					if(i < 15)
						rec[j - 1] += document.getElementById('ct' + i).value * un[i - 1][j] * (1 - dt/100); //ouro
					else
						rec[j - 1] += document.getElementById('ct' + i).value * un[i - 1][j] * (1 - df/100); //ouro
				}
				else
					if(i < 15)
						rec[7] += un[i - 1][j] * reducao(i) * qtedificio(document.getElementById('ct' + i).value, document.getElementById('nq').value);	//tempo tropa
					else rec[8] += un[i - 1][j] * reducao(i) * qtedificio(document.getElementById('ct' + i).value, document.getElementById('ne').value);	//tempo frota
		}
	rec[7] = imprimetempo(rec[7]);
	rec[8] = imprimetempo(rec[8]);
	
	document.getElementById("rec0").innerHTML = parseInt(rec[0], 10);
	document.getElementById("rec1").innerHTML = parseInt(rec[1], 10);
	document.getElementById("rec2").innerHTML = parseInt(rec[2], 10);
	document.getElementById("rec3").innerHTML = parseInt(rec[3], 10);
	document.getElementById("rec4").innerHTML = parseInt(rec[4], 10);
	document.getElementById("rec5").innerHTML = parseFloat(rec[5].toFixed(2)); //ouro
	document.getElementById("rec6").innerHTML = rec[6]; //cidadaos 
	document.getElementById("rec7").innerHTML = rec[7];	//tempo tropa
	document.getElementById("rec8").innerHTML = rec[8];	//tempo frota
	document.getElementById("rec9").innerHTML = parseFloat(rec[9].toFixed(2)); //generais
}
function imprimetempo(tempo){
	var time = " ";
	if(tempo > 604800){
		time = time + parseInt(tempo/604800, 10) + "s";
		tempo %= 604800;
	}
	if(tempo > 86400){
		time = time + " " + parseInt(tempo/86400, 10) + "d";
		tempo %= 86400;
	}
	if(tempo > 3600){
		time = time + " " + parseInt(tempo/3600, 10) + "h";
		tempo %= 3600;
	}
	if(tempo > 60){
		time = time + " " + parseInt(tempo/60, 10) + "m";
		tempo %= 60;
	}
	if(tempo > 0){
		time = time + " " + parseInt(tempo, 10);
	}
	return time;
}
function reducao(n){
	switch(n){
		case 1:
			if(document.getElementById('dq').value - 2 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 2);
			else return 1;
			break;
		case 2:
			if(document.getElementById('dq').value - 7 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 7);
			else return 1;
			break;
		case 3:
			if(document.getElementById('dq').value - 13 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 13);
			else return 1;
			break;
		case 4:
			if(document.getElementById('dq').value - 1 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 1);
			else return 1;
			break;
		case 5:
			if(document.getElementById('dq').value - 6 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 6);
			else return 1;
			break;
		case 6:
		case 10:
			if(document.getElementById('dq').value - 4 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 4);
			else return 1;
			break;
		case 7:
			if(document.getElementById('dq').value - 12 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 12);
			else return 1;
			break;
		case 8:
			if(document.getElementById('dq').value - 10 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 10);
			else return 1;
			break;
		case 9:
			if(document.getElementById('dq').value - 11 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 11);
			else return 1;
			break;
		case 11:
			if(document.getElementById('dq').value - 8 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 8);
			else return 1;
			break;
		case 12:
			if(document.getElementById('dq').value - 14 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 14);
			else return 1;
			break;
		case 13:
			if(document.getElementById('dq').value - 9 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 9);
			else return 1;
			break;
		case 14:
			if(document.getElementById('dq').value - 5 > 0)
				return Math.pow(0.95, document.getElementById('dq').value - 5);
			else return 1;
			break;
		case 15:
			if(document.getElementById('de').value - 1 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 1);
			else return 1;
			break;
		case 16:
			if(document.getElementById('de').value - 3 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 3);
			else return 1;
			break;
		case 17:
			if(document.getElementById('de').value - 4 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 4);
			else return 1;
			break;
		case 18:
			if(document.getElementById('de').value - 3 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 3);
			else return 1;
			break;
		case 19:
			if(document.getElementById('de').value - 17 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 17);
			else return 1;
			break;
		case 20:
			if(document.getElementById('de').value - 15 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 15);
			else return 1;
			break;
		case 21:
			if(document.getElementById('de').value - 11 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 11);
			else return 1;
			break;
		case 22:
			if(document.getElementById('de').value - 19 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 19);
			else return 1;
			break;
		case 23:
			if(document.getElementById('de').value - 13 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 13);
			else return 1;
			break;
		case 24:
			if(document.getElementById('de').value - 7 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 7);
			else return 1;
			break;
		case 25:
			if(document.getElementById('de').value - 9 > 0)
				return Math.pow(0.95, document.getElementById('de').value - 9);
			else return 1;
			break;
	}
}
function qtedificio(nu, ne){
	if(ne > 0)
		return Math.ceil(nu / ne);
	else return nu;
}
