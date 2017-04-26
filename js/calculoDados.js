var City = [];
//Lista de Edificios
var ed =  ['Câmara Municipal', 'Academia', 'Armazém', 'Arquivo de Cartas Náuticas', 'Atelier de Arquitetura', 'Carpintaria', 'Caves de Vinho', 'Depósito', 'Embaixada', 'Espionagem', 'Estaleiro', 'Fábrica de Pirotecnia', 'Fábrica de Vidro', 'Fortaleza dos Piratas', 'Guarda Florestal', 'Mercado Negro', 'Mercado', 'Muralha da cidade', 'Museu', 'Oculista', 'Oficina', 'Palácio', 'Pedreiro', 'Porto Mercantil', 'Quartel', 'Residência do Governador', 'Taberna', 'Templo', 'Torre do Alquimista', 'Viticultor'];
//Lista com as urls das imagens
var url = ['img/ed/townhall_l.png', 'img/ed/academy_l.png', 'img/ed/warehouse_l.png', 'img/ed/marinechartarchive_l.png', 'img/ed/architect_l.png', 'img/ed/carpentering_l.png', 'img/ed/vineyard_l.png', 'img/ed/dump_l.png', 'img/ed/embassy_l.png', 'img/ed/safehouse_l.png', 'img/ed/shipyard_r.png', 'img/ed/fireworker_l.png', 'img/ed/glassblowing_l.png', 'img/ed/pirateFortress.png', 'img/ed/forester_l.png', 'img/ed/branchoffice_l.png', 'img/ed/blackmarket_l.png', 'img/ed/wall.png', 'img/ed/museum_l.png', 'img/ed/optician_l.png', 'img/ed/workshop_l.png', 'img/ed/palace_l.png', 'img/ed/stonemason_l.png', 'img/ed/port_r.png', 'img/ed/barracks_r.png', 'img/ed/palaceColony_l.png', 'img/ed/taverne_l.png', 'img/ed/temple_l.png', 'img/ed/alchemist_l.png', 'img/ed/winegrower_l.png', 'img/ed/baustelle_land_rot.png', 'img/icon_wine.png', 'img/icon_marble.png', 'img/icon_glass.png', 'img/icon_sulfur.png'];
//recursos Gasto por edificios
var Recurso = [[0, 0, 0, 0, 0, 148, 0, 0, 0, 0, 314, 0, 0, 0, 0, 585, 0, 0, 0, 0, 867, 0, 267, 0, 0, 1306, 0, 517, 0, 0, 1894, 0, 879, 0, 0, 2543, 0, 1326, 0, 0, 3441, 0, 1965, 0, 0, 4489, 0, 2768, 0, 0, 5802, 0, 3827, 0, 0, 7589, 0, 5324, 0, 0, 9664, 0, 7178, 0, 0, 12241, 0, 9601, 0, 0, 15438, 0, 12760, 0, 0, 19726, 0, 17158, 0, 0, 23897, 0, 21855, 0, 0, 30347, 0, 29160, 0, 0, 37818, 0, 38163, 0, 0, 46328, 0, 49083, 0, 0, 57534, 0, 63984, 0, 0, 70315, 0, 82077, 0, 0, 88318, 0, 108194, 0, 0, 106252, 0, 136606, 0, 0, 133098, 0, 179589, 0, 0, 160000, 0, 226576, 0, 0, 197410, 0, 293400, 0, 0, 243342, 0, 379595, 0, 0, 296007, 0, 484657, 0, 0, 364397, 0, 626255, 0, 0, 442922, 0, 799029, 0, 0, 538226, 0, 1019235, 0, 0, 653879, 0, 1299857, 0, 0, 803445, 0, 1676697, 0, 0, 975547, 0, 2137265, 0, 0, 1197600, 0, 2754510, 0, 0, 1437459, 0, 3471035, 0, 0, 1763628, 0, 4471052, 0, 0, 2139708, 0, 5695124, 0, 0, 2595613, 0, 7253384, 0, 0],
[60, 0, 0, 0, 0, 63, 0, 0, 0, 0, 108, 0, 0, 0, 0, 247, 0, 0, 0, 0, 359, 0, 0, 211, 0, 588, 0, 0, 402, 0, 923, 0, 0, 699, 0, 1250, 0, 0, 1023, 0, 1883, 0, 0, 1643, 0, 2505, 0, 0, 2306, 0, 3681, 0, 0, 3558, 0, 4846, 0, 0, 4903, 0, 6999, 0, 0, 7390, 0, 9167, 0, 0, 10085, 0, 11985, 0, 0, 13723, 0, 17073, 0, 0, 20329, 0, 22269, 0, 0, 27562, 0, 31443, 0, 0, 40438, 0, 40957, 0, 0, 54720, 0, 53325, 0, 0, 74000, 0, 69403, 0, 0, 100029, 0, 97251, 0, 0, 145565, 0, 135550, 0, 0, 210697, 0, 164554, 0, 0, 265617, 0, 229294, 0, 0, 384344, 0, 298175, 0, 0, 519012, 0, 413569, 0, 0, 747536, 0, 504131, 0, 0, 946249, 0, 699161, 0, 0, 1362756, 0, 965821, 0, 0, 1954871, 0, 1181811, 0, 0, 2483995, 0, 1632482, 0, 0, 3563148, 0],
[150, 0, 0, 0, 0, 270, 0, 0, 0, 0, 415, 0, 0, 0, 0, 588, 0, 90, 0, 0, 796, 0, 198, 0, 0, 1046, 0, 328, 0, 0, 1345, 0, 484, 0, 0, 1704, 0, 671, 0, 0, 2135, 0, 895, 0, 0, 2652, 0, 1165, 0, 0, 3274, 0, 1488, 0, 0, 4018, 0, 1877, 0, 0, 4912, 0, 2342, 0, 0, 5985, 0, 2900, 0, 0, 7272, 0, 3572, 0, 0, 8817, 0, 4376, 0, 0, 10671, 0, 5342, 0, 0, 12895, 0, 6500, 0, 0, 15565, 0, 7890, 0, 0, 18768, 0, 9558, 0, 0, 22612, 0, 11561, 0, 0, 27225, 0, 13963, 0, 0, 32760, 0, 16846, 0, 0, 39402, 0, 20305, 0, 0, 47374, 0, 24457, 0, 0, 56939, 0, 29439, 0, 0, 68416, 0, 35417, 0, 0, 82190, 0, 42591, 0, 0, 98719, 0, 51199, 0, 0, 118553, 0, 61530, 0, 0, 142354, 0, 73926, 0, 0, 170915, 0, 88802, 0, 0, 205188, 0, 106653, 0, 0, 246316, 0, 128074, 0, 0, 295670, 0, 153779, 0, 0, 354895, 0, 184624, 0, 0, 425963, 0, 221639, 0, 0, 511247, 0, 266058, 0, 0, 613586, 0, 319360, 0, 0, 736394, 0, 383322, 0, 0],
[543, 0, 325, 151, 0, 1220, 0, 1002, 574, 0, 2005, 0, 1801, 1073, 0, 2915, 0, 2742, 1662, 0, 3972, 0, 3854, 2357, 0, 5198, 0, 5167, 3177, 0, 6619, 0, 6715, 4145, 0, 8268, 0, 8542, 5287, 0, 10181, 0, 10698, 6634, 0, 12399, 0, 13242, 8225, 0, 14973, 0, 16244, 10101, 0, 17959, 0, 19787, 12314, 0, 21422, 0, 23966, 14927, 0, 25440, 0, 28898, 18009, 0, 30100, 0, 34718, 21647, 0, 35506, 0, 41586, 25939, 0, 41777, 0, 49690, 31004, 0, 49052, 0, 59252, 36981, 0, 57489, 0, 70536, 44033, 0, 67277, 0, 83851, 52355, 0, 78631, 0, 99562, 62175, 0, 91803, 0, 118102, 73761, 0, 107081, 0, 139979, 87435, 0, 124804, 0, 165794, 103569, 0, 145363, 0, 196255, 122607, 0, 169211, 0, 232199, 145073, 0, 196875, 0, 274613, 171581, 0, 228965, 0, 324661, 202861, 0, 266189, 0, 383719, 239772, 0, 309369, 0, 453407, 283327, 0, 359457, 0, 535639, 334722, 0, 417561, 0, 632671, 395367, 0, 484961, 0, 747171, 466929, 0, 563144, 0, 882280, 551372, 0, 653837, 0, 1041708, 651016, 0, 759041, 0, 1229834, 768594, 0, 881077, 0, 1451823, 907337, 0, 1022641, 0, 1713770, 1071054, 0, 1186853, 0, 2022866, 1264239, 0, 1377339, 0, 2387600, 1492199, 0],
[173, 0, 99, 0, 0, 273, 0, 150, 0, 0, 388, 0, 208, 0, 0, 521, 0, 277, 0, 0, 676, 0, 356, 0, 0, 856, 0, 446, 0, 0, 1065, 0, 551, 0, 0, 1306, 0, 673, 0, 0, 1587, 0, 813, 0, 0, 1912, 0, 973, 0, 0, 2290, 0, 1159, 0, 0, 2727, 0, 1372, 0, 0, 3236, 0, 1618, 0, 0, 3825, 0, 1901, 0, 0, 4509, 0, 2226, 0, 0, 5301, 0, 2600, 0, 0, 6221, 0, 3032, 0, 0, 7288, 0, 3527, 0, 0, 8525, 0, 4097, 0, 0, 9962, 0, 4752, 0, 0, 11626, 0, 5505, 0, 0, 13558, 0, 6371, 0, 0, 15799, 0, 7365, 0, 0, 18398, 0, 8508, 0, 0, 21414, 0, 9822, 0, 0, 24911, 0, 11331, 0, 0, 28968, 0, 13065, 0, 0, 33675, 0, 15055, 0, 0, 39135, 0, 17343, 0, 0, 45468, 0, 19971, 0, 0, 52814, 0, 22987, 0, 0, 61336, 0, 26452, 0, 0],
[59, 0, 0, 0, 0, 114, 0, 0, 0, 0, 180, 0, 0, 0, 0, 257, 0, 0, 0, 0, 349, 0, 0, 0, 0, 456, 0, 0, 0, 0, 582, 0, 0, 0, 0, 730, 0, 337, 0, 0, 904, 0, 417, 0, 0, 1107, 0, 513, 0, 0, 1346, 0, 628, 0, 0, 1626, 0, 767, 0, 0, 1953, 0, 933, 0, 0, 2336, 0, 1132, 0, 0, 2786, 0, 1371, 0, 0, 3312, 0, 1659, 0, 0, 3927, 0, 2003, 0, 0, 4648, 0, 2416, 0, 0, 5490, 0, 2912, 0, 0, 6476, 0, 3507, 0, 0, 7629, 0, 4221, 0, 0, 8977, 0, 5077, 0, 0, 10555, 0, 6106, 0, 0, 12398, 0, 7340, 0, 0, 14554, 0, 8820, 0, 0, 17075, 0, 10598, 0, 0, 20021, 0, 12730, 0, 0, 23465, 0, 15289, 0, 0, 27490, 0, 18359, 0, 0, 32194, 0, 22043, 0, 0, 37690, 0, 26464, 0, 0, 44114, 0, 31771, 0, 0],
[318, 0, 115, 0, 0, 397, 0, 186, 0, 0, 488, 0, 267, 0, 0, 593, 0, 363, 0, 0, 712, 0, 473, 0, 0, 850, 0, 601, 0, 0, 1009, 0, 750, 0, 0, 1192, 0, 922, 0, 0, 1402, 0, 1122, 0, 0, 1644, 0, 1353, 0, 0, 1922, 0, 1622, 0, 0, 2240, 0, 1934, 0, 0, 2608, 0, 2296, 0, 0, 3031, 0, 2715, 0, 0, 3516, 0, 3202, 0, 0, 4075, 0, 3767, 0, 0, 4717, 0, 4422, 0, 0, 5456, 0, 5182, 0, 0, 6306, 0, 6063, 0, 0, 7284, 0, 7085, 0, 0, 8407, 0, 8272, 0, 0, 9699, 0, 9647, 0, 0, 11186, 0, 11243, 0, 0, 12894, 0, 13094, 0, 0, 14860, 0, 15241, 0, 0, 17121, 0, 17732, 0, 0, 19720, 0, 20621, 0, 0, 22709, 0, 23972, 0, 0, 26147, 0, 27860, 0, 0, 30099, 0, 32370, 0, 0, 34646, 0, 37601, 0, 0, 39873, 0, 43670, 0, 0], 
[601, 0, 467, 658, 360, 1082, 0, 876, 1077, 794, 1660, 0, 1358, 1567, 1314, 2353, 0, 1927, 2141, 1937, 3184, 0, 2596, 2811, 2686, 4183, 0, 3392, 3314, 3584, 5380, 0, 4327, 4514, 4662, 6817, 0, 5431, 5589, 5955, 8542, 0, 6734, 6846, 7507, 10611, 0, 8271, 8316, 9369, 13095, 0, 10084, 10037, 11605, 16074, 0, 12224, 12049, 14287, 19650, 0, 14749, 14405, 17505, 23941, 0, 17730, 17161, 21367, 29091, 0, 21245, 20385, 26001, 35270, 0, 25395, 24158, 31563, 42685, 0, 30291, 28571, 38236, 51583, 0, 36068, 33735, 46245, 62261, 0, 42885, 39777, 55854, 75074, 0, 50930, 46846, 67386, 90450, 0, 60422, 55116, 81225, 108901, 0, 71623, 64794, 97831, 131043, 0, 84840, 76115, 117758, 157612, 0, 100436, 89362, 141671, 189496, 0, 118839, 104860, 170366, 227756, 0, 140556, 122993, 204800, 273668, 0, 166180, 144209, 246121, 328764, 0, 196418, 169031, 295707, 394877, 0, 232098, 189613, 355209, 474214, 0, 274200, 232053, 426612, 569417, 0, 323881, 271808, 512295, 683662, 0, 382505, 318323, 615115, 820755, 0, 451681, 372744, 738499, 985267, 0, 533309, 436418, 886560, 1182681, 0, 629628, 510916, 1064233, 1419579, 0, 743287, 598078, 1277441, 1703856, 0, 877404, 700058, 1533290, 2044987, 0, 1035661, 819375, 1840308, 2454346, 0, 1222406, 958976, 2208732, 2945577, 0, 1442763, 1122309, 2650838],
[227, 0, 145, 0, 0, 390, 0, 321, 0, 0, 585, 0, 536, 0, 0, 820, 0, 799, 0, 0, 1102, 0, 1118, 0, 0, 1440, 0, 1509, 0, 0, 1846, 0, 1985, 0, 0, 2333, 0, 2566, 0, 0, 2916, 0, 3274, 0, 0, 3618, 0, 4139, 0, 0, 4458, 0, 5195, 0, 0, 5467, 0, 6482, 0, 0, 6678, 0, 8052, 0, 0, 8131, 0, 9967, 0, 0, 9876, 0, 12304, 0, 0, 11969, 0, 15155, 0, 0, 14479, 0, 18634, 0, 0, 17493, 0, 22878, 0, 0, 21109, 0, 28055, 0, 0, 25449, 0, 34372, 0, 0, 30657, 0, 42078, 0, 0, 36905, 0, 51479, 0, 0, 44404, 0, 62948, 0, 0, 53402, 0, 76941, 0, 0, 64201, 0, 94013, 0, 0, 77158, 0, 114839, 0, 0, 92707, 0, 140248, 0, 0, 111366, 0, 171247, 0, 0, 133757, 0, 209066, 0, 0, 160626, 0, 255205, 0, 0, 192869, 0, 311494, 0, 0, 231560, 0, 380167, 0, 0],
[106, 0, 0, 0, 0, 233, 0, 0, 0, 0, 377, 0, 0, 0, 0, 543, 0, 121, 0, 0, 732, 0, 185, 0, 0, 946, 0, 258, 0, 0, 1190, 0, 344, 0, 0, 1470, 0, 442, 0, 0, 1788, 0, 557, 0, 0, 2150, 0, 690, 0, 0, 2564, 0, 846, 0, 0, 3036, 0, 1024, 0, 0, 3572, 0, 1233, 0, 0, 4185, 0, 1474, 0, 0, 4883, 0, 1754, 0, 0, 5679, 0, 2079, 0, 0, 6587, 0, 2456, 0, 0, 7621, 0, 2893, 0, 0, 8801, 0, 3399, 0, 0, 10145, 0, 3988, 0, 0, 11677, 0, 4669, 0, 0, 13425, 0, 5461, 0, 0, 15416, 0, 6379, 0, 0, 17687, 0, 7443, 0, 0, 20275, 0, 8679, 0, 0, 23226, 0, 10112, 0, 0, 26590, 0, 11774, 0, 0, 30425, 0, 13702, 0, 0, 34797, 0, 15938, 0, 0, 39781, 0, 18533, 0, 0, 45463, 0, 21541, 0, 0, 51939, 0, 25033, 0, 0],
[98, 0, 0, 0, 0, 189, 0, 0, 0, 0, 304, 0, 0, 0, 0, 448, 0, 0, 0, 0, 630, 0, 0, 0, 0, 859, 0, 731, 0, 0, 1148, 0, 988, 0, 0, 1512, 0, 1313, 0, 0, 1970, 0, 1722, 0, 0, 2548, 0, 2238, 0, 0, 3275, 0, 2886, 0, 0, 4192, 0, 3705, 0, 0, 5347, 0, 4735, 0, 0, 6803, 0, 6034, 0, 0, 8638, 0, 7671, 0, 0, 10949, 0, 9732, 0, 0, 13861, 0, 12330, 0, 0, 17531, 0, 15604, 0, 0, 22153, 0, 19729, 0, 0, 27979, 0, 24925, 0, 0, 35318, 0, 31474, 0, 0, 44567, 0, 39725, 0, 0, 56219, 0, 50121, 0, 0, 70902, 0, 63220, 0, 0, 89401, 0, 79725, 0, 0, 112711, 0, 100521, 0, 0, 142081, 0, 126725, 0, 0, 179088, 0, 159740, 0, 0, 225716, 0, 201340, 0, 0, 284468, 0, 253756, 0, 0, 358495, 0, 319801, 0, 0, 451768, 0, 403016, 0, 0, 569294, 0, 507868, 0, 0, 717376, 0, 639982, 0, 0, 903959, 0, 806444, 0, 0, 1139053, 0, 1016187, 0, 0, 1435272, 0, 1280464, 0, 0, 1808509, 0, 1613451, 0, 0],
[256, 0, 126, 0, 0, 331, 0, 199, 0, 0, 418, 0, 283, 0, 0, 517, 0, 380, 0, 0, 632, 0, 494, 0, 0, 764, 0, 625, 0, 0, 915, 0, 777, 0, 0, 1089, 0, 954, 0, 0, 1290, 0, 1159, 0, 0, 1520, 0, 1396, 0, 0, 1785, 0, 1672, 0, 0, 2089, 0, 1992, 0, 0, 2440, 0, 2363, 0, 0, 2843, 0, 2793, 0, 0, 3305, 0, 3292, 0, 0, 3838, 0, 3871, 0, 0, 4451, 0, 4543, 0, 0, 5156, 0, 5322, 0, 0, 5966, 0, 6226, 0, 0, 6898, 0, 7274, 0, 0, 7970, 0, 8491, 0, 0, 9202, 0, 9901, 0, 0, 10619, 0, 11538, 0, 0, 12249, 0, 13436, 0, 0, 14123, 0, 15638, 0, 0, 16278, 0, 18192, 0, 0, 18757, 0, 21156, 0, 0, 21607, 0, 24593, 0, 0, 24885, 0, 28580, 0, 0, 28654, 0, 33205, 0, 0, 32990, 0, 38571, 0, 0, 37976, 0, 44793, 0, 0],
[257, 0, 0, 0, 0, 438, 0, 109, 0, 0, 674, 0, 239, 0, 0, 982, 0, 409, 0, 0, 1380, 0, 630, 0, 0, 1899, 0, 918, 0, 0, 2573, 0, 1292, 0, 0, 3450, 0, 1778, 0, 0, 4590, 0, 2410, 0, 0, 6071, 0, 3230, 0, 0, 7997, 0, 4297, 0, 0, 10501, 0, 5686, 0, 0, 13755, 0, 7489, 0, 0, 17986, 0, 9834, 0, 0, 23487, 0, 12882, 0, 0, 30638, 0, 16845, 0, 0, 39934, 0, 21997, 0, 0, 52018, 0, 28695, 0, 0, 67727, 0, 37402, 0, 0, 88151, 0, 48721, 0, 0, 114700, 0, 63435, 0, 0, 149215, 0, 82564, 0, 0, 194083, 0, 107432, 0, 0, 252413, 0, 139760, 0, 0, 328242, 0, 181786, 0, 0, 426819, 0, 236421, 0, 0, 554969, 0, 307444, 0, 0, 721563, 0, 399777, 0, 0, 938137, 0, 519807, 0, 0, 1219683, 0, 675848, 0, 0, 1585692, 0, 878701, 0, 0, 2061504, 0, 1142410, 0, 0],
[423, 0, 235, 0, 0, 851, 0, 474, 0, 0, 1305, 0, 736, 0, 0, 1818, 0, 1045, 0, 0, 2437, 0, 1441, 0, 0, 3221, 0, 1976, 0, 0, 4245, 0, 2710, 0, 0, 5593, 0, 3712, 0, 0, 7363, 0, 5064, 0, 0, 9666, 0, 6858, 0, 0, 12624, 0, 9195, 0, 0, 16370, 0, 12186, 0, 0, 21050, 0, 15951, 0, 0, 26821, 0, 20621, 0, 0, 33854, 0, 26337, 0, 0, 42327, 0, 33247, 0, 0, 52432, 0, 41512, 0, 0, 64373, 0, 51298, 0, 0, 78364, 0, 62785, 0, 0, 94630, 0, 76158, 0, 0, 113409, 0, 91615, 0, 0, 134948, 0, 109360, 0, 0, 159504, 0, 129610, 0, 0, 187350, 0, 152585, 0, 0, 218765, 0, 178520, 0, 0, 254039, 0, 207657, 0, 0, 293477, 0, 240245, 0, 0, 337390, 0, 276545, 0, 0, 386103, 0, 316825, 0, 0, 439950, 0, 361363, 0, 0],
[235, 0, 0, 0, 0, 404, 0, 97, 0, 0, 624, 0, 222, 0, 0, 909, 0, 385, 0, 0, 1282, 0, 596, 0, 0, 1765, 0, 872, 0, 0, 2393, 0, 1230, 0, 0, 3210, 0, 1694, 0, 0, 4271, 0, 2299, 0, 0, 5652, 0, 3085, 0, 0, 7446, 0, 4105, 0, 0, 9778, 0, 5434, 0, 0, 12811, 0, 7159, 0, 0, 16753, 0, 9403, 0, 0, 21877, 0, 12321, 0, 0, 28540, 0, 16113, 0, 0, 37200, 0, 21043, 0, 0, 48458, 0, 27451, 0, 0, 63095, 0, 35783, 0, 0, 82123, 0, 46614, 0, 0, 106859, 0, 60694, 0, 0, 139015, 0, 78999, 0, 0, 180818, 0, 102795, 0, 0, 235162, 0, 133730, 0, 0, 305810, 0, 173944, 0, 0, 397652, 0, 226224, 0, 0, 517046, 0, 294187, 0, 0, 672259, 0, 382538, 0, 0, 874036, 0, 497396, 0, 0, 1136346, 0, 646710, 0, 0, 1477348, 0, 840819, 0, 0, 1920652, 0, 1093161, 0, 0],
[413, 0, 244, 0, 0, 833, 0, 493, 0, 0, 1278, 0, 758, 0, 0, 1776, 0, 1058, 0, 0, 2365, 0, 1418, 0, 0, 3090, 0, 1868, 0, 0, 4007, 0, 2444, 0, 0, 5174, 0, 3186, 0, 0, 6660, 0, 4138, 0, 0, 8540, 0, 5351, 0, 0, 10894, 0, 6876, 0, 0, 13809, 0, 8771, 0, 0, 17379, 0, 11098, 0, 0, 21702, 0, 13923, 0, 0, 26884, 0, 17314, 0, 0, 33034, 0, 21345, 0, 0, 40268, 0, 26091, 0, 0, 48710, 0, 31634, 0, 0, 58484, 0, 38056, 0, 0, 69724, 0, 45447, 0, 0, 82567, 0, 53893, 0, 0, 97154, 0, 63493, 0, 0, 113634, 0, 74341, 0, 0, 132160, 0, 86540, 0, 0, 152888, 0, 100191, 0, 0],
[45, 0, 0, 0, 0, 162, 0, 0, 0, 0, 325, 0, 0, 0, 0, 546, 0, 0, 0, 0, 842, 0, 507, 0, 0, 1235, 0, 744, 0, 0, 1751, 0, 1055, 0, 0, 2425, 0, 1461, 0, 0, 3298, 0, 1988, 0, 0, 4423, 0, 2666, 0, 0, 5866, 0, 3536, 0, 0, 7710, 0, 4648, 0, 0, 10057, 0, 6063, 0, 0, 13034, 0, 7857, 0, 0, 16799, 0, 10127, 0, 0, 21550, 0, 12990, 0, 0, 27528, 0, 16594, 0, 0, 35036, 0, 21120, 0, 0, 44446, 0, 26792, 0, 0, 56218, 0, 33888, 0, 0, 70921, 0, 42753, 0, 0, 89257, 0, 53805, 0, 0, 112090, 0, 67570, 0, 0, 140486, 0, 84687, 0, 0, 175758, 0, 105950, 0, 0, 219518, 0, 132329, 0, 0, 273752, 0, 165022, 0, 0, 340898, 0, 205499, 0, 0, 423954, 0, 255566, 0, 0, 526595, 0, 317440, 0, 0, 653335, 0, 393841, 0, 0, 809707, 0, 488105, 0, 0, 1002670, 0, 604427, 0, 0, 1240786, 0, 747968, 0, 0, 1534621, 0, 925098, 0, 0, 1897214, 0, 1143677, 0, 0, 2344654, 0, 1413402, 0, 0, 2896794, 0, 1746243, 0, 0, 3578135, 0, 2156970, 0, 0],
[107, 0, 0, 0, 0, 339, 0, 190, 0, 0, 617, 0, 485, 0, 0, 951, 0, 838, 0, 0, 1352, 0, 1263, 0, 0, 1833, 0, 1771, 0, 0, 2411, 0, 2382, 0, 0, 3103, 0, 3116, 0, 0, 3934, 0, 3995, 0, 0, 4932, 0, 5051, 0, 0, 6129, 0, 6317, 0, 0, 7566, 0, 7837, 0, 0, 9289, 0, 9662, 0, 0, 11358, 0, 11851, 0, 0, 13840, 0, 14477, 0, 0, 16818, 0, 17629, 0, 0, 20393, 0, 21412, 0, 0, 24682, 0, 25950, 0, 0, 29829, 0, 31397, 0, 0, 36005, 0, 37933, 0, 0, 43417, 0, 45777, 0, 0, 52311, 0, 55188, 0, 0, 62983, 0, 66482, 0, 0, 75791, 0, 80035, 0, 0, 91160, 0, 96299, 0, 0, 109603, 0, 115815, 0, 0, 131734, 0, 139234, 0, 0, 158291, 0, 167337, 0, 0, 190160, 0, 201062, 0, 0, 228403, 0, 241531, 0, 0, 274293, 0, 290093, 0, 0, 329363, 0, 348368, 0, 0, 395446, 0, 418298, 0, 0, 474747, 0, 502214, 0, 0, 569906, 0, 602914, 0, 0, 684099, 0, 723753, 0, 0, 821129, 0, 868760, 0, 0, 985565, 0, 1042769, 0, 0, 1182889, 0, 1251578, 0, 0, 1419677, 0, 1502151, 0, 0, 1703823, 0, 1802838, 0, 0, 2044798, 0, 2163661, 0, 0, 2453968, 0, 2596650, 0, 0, 2944973, 0, 3116237, 0, 0, 3534178, 0, 3739741, 0, 0, 4241224, 0, 4487946, 0, 0, 5089680, 0, 5385792, 0, 0, 6107826, 0, 6463205, 0, 0],
[526, 0, 263, 0, 0, 1348, 0, 1118, 0, 0, 2583, 0, 2418, 0, 0, 4433, 0, 4395, 0, 0, 7208, 0, 7398, 0, 0, 11373, 0, 11965, 0, 0, 17619, 0, 18905, 0, 0, 26987, 0, 29454, 0, 0, 41041, 0, 45490, 0, 0, 62120, 0, 69863, 0, 0, 93740, 0, 106911, 0, 0, 141170, 0, 163224, 0, 0, 212314, 0, 248818, 0, 0, 319030, 0, 378923, 0, 0, 479104, 0, 576682, 0, 0, 719216, 0, 877275, 0, 0, 1079384, 0, 1334177, 0, 0, 1619635, 0, 2028668, 0, 0, 2430013, 0, 3084295, 0, 0, 3645579, 0, 4688847, 0, 0, 5468928, 0, 7127767, 0, 0],
[111, 0, 0, 0, 0, 176, 0, 32, 0, 0, 252, 0, 90, 0, 0, 340, 0, 156, 0, 0, 442, 0, 234, 0, 0, 561, 0, 324, 0, 0, 697, 0, 427, 0, 0, 857, 0, 548, 0, 0, 1041, 0, 689, 0, 0, 1254, 0, 850, 0, 0, 1504, 0, 1039, 0, 0, 1791, 0, 1257, 0, 0, 2125, 0, 1511, 0, 0, 2512, 0, 1805, 0, 0, 2962, 0, 2146, 0, 0, 3483, 0, 2541, 0, 0, 4088, 0, 3000, 0, 0, 4790, 0, 3533, 0, 0, 5604, 0, 4151, 0, 0, 6548, 0, 4867, 0, 0, 7643, 0, 5698, 0, 0, 8913, 0, 6661, 0, 0, 10387, 0, 7779, 0, 0, 12095, 0, 9076, 0, 0, 14079, 0, 10581, 0, 0, 16378, 0, 12326, 0, 0, 19047, 0, 14350, 0, 0, 22141, 0, 16699, 0, 0, 25731, 0, 19423, 0, 0, 29896, 0, 22583, 0, 0, 34727, 0, 26248, 0, 0, 40330, 0, 30501, 0, 0],
[206, 0, 89, 0, 0, 360, 0, 156, 0, 0, 534, 0, 235, 0, 0, 734, 0, 328, 0, 0, 961, 0, 433, 0, 0, 1221, 0, 556, 0, 0, 1516, 0, 699, 0, 0, 1853, 0, 864, 0, 0, 2237, 0, 1057, 0, 0, 2675, 0, 1280, 0, 0, 3174, 0, 1538, 0, 0, 3743, 0, 1838, 0, 0, 4391, 0, 2186, 0, 0, 5130, 0, 2589, 0, 0, 5973, 0, 3057, 0, 0, 6934, 0, 3601, 0, 0, 8029, 0, 4230, 0, 0, 9277, 0, 4961, 0, 0, 10701, 0, 5809, 0, 0, 12324, 0, 6792, 0, 0, 14174, 0, 7932, 0, 0, 16282, 0, 9256, 0, 0, 18687, 0, 10790, 0, 0, 21428, 0, 12570, 0, 0, 24551, 0, 14635, 0, 0, 28114, 0, 17030, 0, 0, 32174, 0, 19809, 0, 0, 36803, 0, 23032, 0, 0, 42080, 0, 26772, 0, 0, 48096, 0, 31109, 0, 0, 54954, 0, 36140, 0, 0, 62772, 0, 41976, 0, 0],
[669, 0, 0, 0, 0, 5474, 0, 1347, 0, 0, 15085, 0, 4273, 0, 2903, 34306, 10244, 10123, 0, 9682, 72748, 20783, 21824, 19916, 23241, 149632, 41861, 45227, 39856, 50358, 303401, 84019, 92031, 79734, 104592, 610939, 168333, 185640, 159491, 213061, 1226015, 336961, 372858, 319005, 429998, 2456167, 674218, 747294, 638034, 863872, 4458906, 1348732, 1496166, 1276091, 1731620],
[257, 0, 0, 0, 0, 438, 0, 109, 0, 0, 674, 0, 239, 0, 0, 982, 0, 409, 0, 0, 1380, 0, 630, 0, 0, 1899, 0, 918, 0, 0, 2573, 0, 1292, 0, 0, 3450, 0, 1778, 0, 0, 4590, 0, 2410, 0, 0, 6071, 0, 3230, 0, 0, 7997, 0, 4297, 0, 0, 10501, 0, 5686, 0, 0, 13755, 0, 7489, 0, 0, 17986, 0, 9834, 0, 0, 23487, 0, 12882, 0, 0, 30638, 0, 16845, 0, 0, 39934, 0, 21997, 0, 0, 52018, 0, 28695, 0, 0, 67727, 0, 37402, 0, 0, 88151, 0, 48721, 0, 0, 114700, 0, 63435, 0, 0, 149215, 0, 82564, 0, 0, 194083, 0, 107432, 0, 0, 252413, 0, 139760, 0, 0, 328242, 0, 181786, 0, 0, 426819, 0, 236421, 0, 0, 554969, 0, 307444, 0, 0, 721563, 0, 399777, 0, 0, 938137, 0, 519807, 0, 0, 1219683, 0, 675848, 0, 0, 1585692, 0, 878701, 0, 0, 2061504, 0, 1142410, 0, 0],
[56, 0, 0, 0, 0, 141, 0, 0, 0, 0, 257, 0, 0, 0, 0, 403, 0, 0, 0, 0, 598, 0, 0, 0, 0, 840, 0, 165, 0, 0, 1134, 0, 306, 0, 0, 1546, 0, 507, 0, 0, 1979, 0, 743, 0, 0, 2570, 0, 1069, 0, 0, 3324, 0, 1502, 0, 0, 4222, 0, 2045, 0, 0, 5347, 0, 2752, 0, 0, 6676, 0, 3627, 0, 0, 8319, 0, 4747, 0, 0, 10428, 0, 6230, 0, 0, 12907, 0, 8052, 0, 0, 16038, 0, 10423, 0, 0, 19831, 0, 13409, 0, 0, 24407, 0, 17146, 0, 0, 29901, 0, 21805, 0, 0, 36838, 0, 27863, 0, 0, 45118, 0, 35377, 0, 0, 55190, 0, 44840, 0, 0, 67637, 0, 56922, 0, 0, 82369, 0, 71784, 0, 0, 100675, 0, 90840, 0, 0, 122930, 0, 114827, 0, 0, 149478, 0, 144528, 0, 0, 182301, 0, 182444, 0, 0, 221698, 0, 229642, 0, 0, 269324, 0, 288743, 0, 0, 327794, 0, 363738, 0, 0, 398550, 0, 457750, 0, 0, 483110, 0, 574332, 0, 0, 587651, 0, 723144, 0, 0, 712687, 0, 907846, 0, 0, 864512, 0, 1140023, 0, 0, 1049052, 0, 1432157, 0, 0, 1272305, 0, 1798288, 0, 0, 1543738, 0, 2259115, 0, 0, 1870810, 0, 2834747, 0, 0, 2266398, 0, 3556013, 0, 0, 2747835, 0, 4464601, 0, 0, 3329085, 0, 5601485, 0, 0, 4034032, 0, 7029508, 0, 0, 4887382, 0, 8820414, 0, 0],
[46, 0, 0, 0, 0, 107, 0, 0, 0, 0, 183, 0, 0, 0, 0, 278, 0, 0, 0, 0, 394, 0, 0, 0, 0, 539, 0, 165, 0, 0, 720, 0, 306, 0, 0, 942, 0, 507, 0, 0, 1219, 0, 167, 0, 0, 1562, 0, 405, 0, 0, 1988, 0, 700, 0, 0, 2515, 0, 1065, 0, 0, 3168, 0, 1519, 0, 0, 3979, 0, 2081, 0, 0, 4985, 0, 2778, 0, 0, 6232, 0, 3642, 0, 0, 7778, 0, 4714, 0, 0, 9695, 0, 6043, 0, 0, 12072, 0, 7692, 0, 0, 15020, 0, 9735, 0, 0, 18675, 0, 12268, 0, 0, 23208, 0, 15411, 0, 0, 28828, 0, 19307, 0, 0, 35798, 0, 24139, 0, 0, 44440, 0, 30130, 0, 0, 55155, 0, 37559, 0, 0, 68443, 0, 46771, 0, 0, 84920, 0, 58194, 0, 0, 105351, 0, 72358, 0, 0, 130686, 0, 89921, 0, 0, 162101, 0, 111700, 0, 0, 201055, 0, 138706, 0, 0, 249359, 0, 172193, 0, 0, 309256, 0, 213717, 0, 0, 383527, 0, 265207, 0, 0, 475624, 0, 329055, 0, 0, 589824, 0, 408226, 0, 0, 731432, 0, 506397, 0, 0, 907027, 0, 628130, 0, 0, 1124764, 0, 779079, 0, 0, 1394757, 0, 966256, 0, 0, 1729550, 0, 1198356, 0, 0, 2144692, 0, 1486158, 0, 0, 2659469, 0, 1843034, 0, 0, 3297792, 0, 2285560, 0, 0, 4089313, 0, 2834292, 0, 0, 5070798, 0, 3514720, 0, 0, 6287839, 0, 4358451, 0, 0, 7796971, 0, 5404676, 0, 0],
[669, 0, 0, 0, 0, 5474, 0, 1347, 0, 0, 15085, 0, 4273, 0, 2903, 34306, 10244, 10123, 0, 9682, 72748, 20783, 21824, 19916, 23241, 149632, 41861, 45227, 39856, 50358, 303401, 84019, 92031, 79734, 104592, 610939, 168333, 185640, 159491, 213061, 1226015, 336961, 372858, 319005, 429998, 2456167, 674218, 747294, 638034, 863872, 4458906, 1348732, 1496166, 1276091, 1731620],
[94, 0, 0, 0, 0, 208, 0, 0, 0, 0, 344, 0, 90, 0, 0, 508, 0, 88, 0, 0, 705, 0, 114, 0, 0, 940, 0, 148, 0, 0, 1223, 0, 193, 0, 0, 1563, 0, 250, 0, 0, 1971, 0, 327, 0, 0, 2459, 0, 424, 0, 0, 3046, 0, 551, 0, 0, 3750, 0, 718, 0, 0, 4594, 0, 933, 0, 0, 5608, 0, 1212, 0, 0, 6825, 0, 1576, 0, 0, 8285, 0, 2050, 0, 0, 10037, 0, 2664, 0, 0, 12139, 0, 3463, 0, 0, 14662, 0, 4503, 0, 0, 17688, 0, 5854, 0, 0, 21322, 0, 7611, 0, 0, 25680, 0, 9894, 0, 0, 30911, 0, 12862, 0, 0, 37188, 0, 16721, 0, 0, 44721, 0, 21737, 0, 0, 53760, 0, 28259, 0, 0, 64607, 0, 36737, 0, 0, 77623, 0, 47757, 0, 0, 93242, 0, 62085, 0, 0, 111985, 0, 80710, 0, 0, 134477, 0, 104923, 0, 0, 161467, 0, 136400, 0, 0, 193856, 0, 177321, 0, 0, 232722, 0, 230518, 0, 0, 279361, 0, 299672, 0, 0, 335328, 0, 389574, 0, 0, 402488, 0, 506447, 0, 0, 483081, 0, 658381, 0, 0, 579792, 0, 855896, 0, 0, 695845, 0, 1112664, 0, 0, 835109, 0, 1446464, 0, 0, 1002225, 0, 1880403, 0, 0, 1202765, 0, 2444524, 0, 0, 1443413, 0, 3177882, 0, 0, 1732190, 0, 4131246, 0, 0, 2078723, 0, 5370621, 0, 0, 2494562, 0, 6981806, 0, 0],
[203, 0, 0, 162, 0, 214, 0, 0, 178, 0, 313, 0, 0, 272, 0, 437, 0, 0, 397, 0, 562, 0, 0, 532, 0, 714, 0, 0, 706, 0, 900, 0, 0, 929, 0, 1125, 0, 0, 1212, 0, 1346, 0, 0, 1513, 0, 1666, 0, 0, 1955, 0, 1985, 0, 0, 2430, 0, 2361, 0, 0, 3017, 0, 2897, 0, 0, 3862, 0, 3435, 0, 0, 4778, 0, 4190, 0, 0, 6082, 0, 4818, 0, 0, 7299, 0, 5858, 0, 0, 9259, 0, 6736, 0, 0, 11111, 0, 8166, 0, 0, 14054, 0, 9632, 0, 0, 17297, 0, 11076, 0, 0, 20757, 0, 13375, 0, 0, 26154, 0, 15747, 0, 0, 32132, 0, 18110, 0, 0, 38558, 0, 21794, 0, 0, 48423, 0, 25064, 0, 0, 58107, 0, 30105, 0, 0, 72828, 0, 34621, 0, 0, 87393, 0, 40661, 0, 0, 107104, 0, 47735, 0, 0, 131202, 0, 56015, 0, 0, 160656, 0, 64417, 0, 0, 192787, 0, 75561, 0, 0, 235971, 0, 90303, 0, 0, 294270, 0, 101889, 0, 0, 346462, 0, 121680, 0, 0, 431745, 0, 139932, 0, 0, 518094, 0, 163901, 0, 0, 633226, 0],
[257, 0, 0, 0, 0, 438, 0, 109, 0, 0, 674, 0, 239, 0, 0, 982, 0, 409, 0, 0, 1380, 0, 630, 0, 0, 1899, 0, 918, 0, 0, 2573, 0, 1292, 0, 0, 3450, 0, 1778, 0, 0, 4590, 0, 2410, 0, 0, 6071, 0, 3230, 0, 0, 7997, 0, 4297, 0, 0, 10501, 0, 5686, 0, 0, 13755, 0, 7489, 0, 0, 17986, 0, 9834, 0, 0, 23487, 0, 12882, 0, 0, 30638, 0, 16845, 0, 0, 39934, 0, 21997, 0, 0, 52018, 0, 28695, 0, 0, 67727, 0, 37402, 0, 0, 88151, 0, 48721, 0, 0, 114700, 0, 63435, 0, 0, 149215, 0, 82564, 0, 0, 194083, 0, 107432, 0, 0, 252413, 0, 139760, 0, 0, 328242, 0, 181786, 0, 0, 426819, 0, 236421, 0, 0, 554969, 0, 307444, 0, 0, 721563, 0, 399777, 0, 0, 938137, 0, 519807, 0, 0, 1219683, 0, 675848, 0, 0, 1585692, 0, 878701, 0, 0, 2061504, 0, 1142410, 0, 0],
[257, 0, 0, 0, 0, 438, 0, 109, 0, 0, 674, 0, 239, 0, 0, 982, 0, 409, 0, 0, 1380, 0, 630, 0, 0, 1899, 0, 918, 0, 0, 2573, 0, 1292, 0, 0, 3450, 0, 1778, 0, 0, 4590, 0, 2410, 0, 0, 6071, 0, 3230, 0, 0, 7997, 0, 4297, 0, 0, 10501, 0, 5686, 0, 0, 13755, 0, 7489, 0, 0, 17986, 0, 9834, 0, 0, 23487, 0, 12882, 0, 0, 30638, 0, 16845, 0, 0, 39934, 0, 21997, 0, 0, 52018, 0, 28695, 0, 0, 67727, 0, 37402, 0, 0, 88151, 0, 48721, 0, 0, 114700, 0, 63435, 0, 0, 149215, 0, 82564, 0, 0, 194083, 0, 107432, 0, 0, 252413, 0, 139760, 0, 0, 328242, 0, 181786, 0, 0, 426819, 0, 236421, 0, 0, 554969, 0, 307444, 0, 0, 721563, 0, 399777, 0, 0, 938137, 0, 519807, 0, 0, 1219683, 0, 675848, 0, 0, 1585692, 0, 878701, 0, 0, 2061504, 0, 1142410, 0, 0]];
//recursos gasto por unidades
Unidade = [['Fundeiro', 20, 0, 0, 0, 0, 2, 1],
['Arqueiro', 30, 0, 0, 0, 25, 4, 1],
['Carabineiro', 50, 0, 0, 0, 150, 3, 1],
['Lanceiro', 30, 0, 0, 0, 0, 1, 1],
['Espadachim', 30, 0, 0, 0, 30, 4, 1],
['Hoplita', 40, 0, 0, 0, 30, 3, 1],
['Gigante a Vapor', 130, 0, 0, 0, 180, 12, 2],
['Girocóptero', 25, 0, 0, 0, 100, 15, 3],
['Balão', 40, 0, 0, 0, 250, 45, 5],
['Ariete', 220, 0, 0, 0, 0, 15, 5],
['Cataputa', 260, 0, 0, 0, 300, 25, 5],
['Morteiro', 300, 0, 0, 0, 1250, 30, 5],
['Medico', 50, 0, 0, 450, 0, 20, 1],
['Cozinheiro', 50, 150, 0, 0, 0, 10, 1],
['Trireme', 250, 0, 0, 0, 0, 15, 3],
['Balista', 180, 0, 0, 0, 160, 20, 6],
['LC', 80, 0, 0, 0, 230, 25, 4],
['BC', 180, 0, 0, 0, 140, 35, 5],
['Morteiro', 220, 0, 0, 0, 900, 50, 5],
['Ariete', 400, 0, 0, 0, 800, 45, 2],
['LF', 200, 0, 0, 0, 1200, 55, 2],
['Submergivel', 160, 0, 0, 750, 100, 50, 3],
['LR', 40, 0, 0, 0, 280, 5, 1],
['PB', 700, 0, 0, 0, 700, 100, 8],
['Reparador', 300, 0, 0, 250, 250, 100, 7]];
TPesquisa = [['Carpintaria', 'Convés de Armas', 'Pirataria', 'Manutenção dos Barcos', 'Calado', 'Expansão', 'Culturas Estrangeiras', 'Piche', 'Mercado', 'Fogo Grego', 'Contrapeso', 'Diplomacia', 'Cartas Náuticas', 'Roda d`Água', 'Calafetagem', 'Anexo de Morteiro', 'Ariete Maciço', 'Base no Mar', 'Futuro da Navegação(1)', 'Futuro da Navegação(2)', 'Futuro da Navegação(3)', 'Futuro da Navegação(4)', 'Futuro da Navegação(5)', 'Futuro da Navegação(6)', 'Futuro da Navegação(7)', 'Futuro da Navegação(8)', 'Futuro da Navegação(9)', 'Futuro da Navegação(10)', 'Futuro da Navegação(11)', 'Futuro da Navegação(12)', 'Futuro da Navegação(13)', 'Futuro da Navegação(14)', 'Futuro da Navegação(15)', 'Futuro da Navegação(16)', 'Futuro da Navegação(17)', 'Futuro da Navegação(18)', 'Futuro da Navegação(19)', 'Futuro da Navegação(20)', 'Futuro da Navegação(21)', 'Futuro da Navegação(22)', 'Futuro da Navegação(23)', 'Futuro da Navegação(24)', 'Futuro da Navegação(25)'],
['Conservação', 'Roldana', 'Riqueza', 'Cultura de Vinho', 'Recolha de Recursos Melhorada', 'Geometria', 'Arquitetura', 'Dia de Descanso', 'Legislação', 'Especialidades de Culinária', 'Mãos Auxiliares', 'Nível da Água', 'Caves de Vinho', 'Depósito', 'Troca de Soldados', 'Burocracia', 'Utopia', 'Futuro Econômico(1)', 'Futuro Econômico(2)', 'Futuro Econômico(3)', 'Futuro Econômico(4)', 'Futuro Econômico(5)', 'Futuro Econômico(6)', 'Futuro Econômico(7)', 'Futuro Econômico(8)', 'Futuro Econômico(9)', 'Futuro Econômico(10)', 'Futuro Econômico(11)', 'Futuro Econômico(12)', 'Futuro Econômico(13)', 'Futuro Econômico(14)', 'Futuro Econômico(15)', 'Futuro Econômico(16)', 'Futuro Econômico(17)', 'Futuro Econômico(18)', 'Futuro Econômico(19)', 'Futuro Econômico(20)', 'Futuro Econômico(21)', 'Futuro Econômico(22)', 'Futuro Econômico(23)', 'Futuro Econômico(24)', 'Futuro Econômico(25)'],
['Poço Artesiano', 'Papel', 'Espionagem', 'Politeísmo', 'Tinta', 'Formação de Governo', 'Invenções', 'Intercâmbio Cultural', 'Anatomia', 'Ótica', 'Ensaios', 'Caneta Mecânica', 'Pássaros Voadores', 'Arquivamento', 'Tubo de Correio a Vácuo', 'Religião do Estado', 'Câmara de Pressão', 'O Princípio de Arquimedes', 'Futuro Científico', 'Futuro Científico(1)', 'Futuro Científico(2)', 'Futuro Científico(3)', 'Futuro Científico(4)', 'Futuro Científico(5)', 'Futuro Científico(6)', 'Futuro Científico(7)', 'Futuro Científico(8)', 'Futuro Científico(9)', 'Futuro Científico(10)', 'Futuro Científico(11)', 'Futuro Científico(12)', 'Futuro Científico(13)', 'Futuro Científico(14)', 'Futuro Científico(15)', 'Futuro Científico(16)', 'Futuro Científico(17)', 'Futuro Científico(18)', 'Futuro Científico(19)', 'Futuro Científico(20)', 'Futuro Científico(21)', 'Futuro Científico(22)', 'Futuro Científico(23)', 'Futuro Científico(24)', 'Futuro Científico(25)'],
['Doca', 'Mapas', 'Exército Profissional', 'Cerco', 'Código de Honra', 'Balística', 'Lei da Alavanca', 'Governador', 'Pirotecnia', 'Logística', 'Pólvora', 'Robótica', 'Construção de Canhões', 'Futuro Bélico', 'Futuro Bélico(1)', 'Futuro Bélico(2)', 'Futuro Bélico(3)', 'Futuro Bélico(4)', 'Futuro Bélico(5)', 'Futuro Bélico(6)', 'Futuro Bélico(7)', 'Futuro Bélico(8)', 'Futuro Bélico(9)', 'Futuro Bélico(10)', 'Futuro Bélico(11)', 'Futuro Bélico(12)', 'Futuro Bélico(13)', 'Futuro Bélico(14)', 'Futuro Bélico(15)', 'Futuro Bélico(16)', 'Futuro Bélico(17)', 'Futuro Bélico(18)', 'Futuro Bélico(19)', 'Futuro Bélico(20)', 'Futuro Bélico(21)', 'Futuro Bélico(22)', 'Futuro Bélico(23)', 'Futuro Bélico(24)', 'Futuro Bélico(25)']];
var idx = 0;