"use strict"

let tipSaita = prompt ("Тип сайта. Введите порядковый номер из списка:\n1 - Интернет магазин;\n2 - Сайт услуг;\n3 - Landing Page;\n4 - Визитка;\n5 - Информационный сайт.");

let cenaSaita;
let srokSaita;

if (tipSaita == 1) {cenaSaita = 100000; srokSaita = 40
} else if (tipSaita == 2) {cenaSaita = 50000; srokSaita = 20
} else if (tipSaita == 3) {cenaSaita = 15000; srokSaita = 2
} else if (tipSaita == 4) {cenaSaita = 10000; srokSaita = 2
} else if (tipSaita == 5) {cenaSaita = 70000; srokSaita = 30
} else {cenaSaita == "not"};

console.log (cenaSaita);
console.log (srokSaita);

let disign = prompt ("Дизайн. Введите порядковый номер из списка:\n1 - Минимализм ;\n2 - Класический стиль;\n3 - Корпоративный стиль;\n4 - Рисованный стиль;\n5 - Информационный стиль.");

let cenaDisign;
let srokDisign;

if (disign == 1) {cenaDisign = 5000; srokDisign = 1
} else if (disign == 2) {cenaDisign = 10000; srokDisign = 2
} else if (disign == 3) {cenaDisign = 15000; srokDisign = 3
} else if (disign == 4) {cenaDisign = 20000; srokDisign = 10
} else if (disign == 5) {cenaDisign = 25000; srokDisign = 15
} else {disign == "not"};

console.log (cenaDisign);
console.log (srokDisign);

let adaptivnost = prompt ("Адаптивность. Введите порядковый номер из списка:\n1 - Адаптированность под размер дисплея персональноых компьютеров ;\n2 - Адаптированность под размеры экранов мобильных устройств;\n3 - Адаптивность под экраны всех устройств.");

let cenaAdaptivnost;
let srokAdaptivnost;

if (adaptivnost == 1) {cenaAdaptivnost = 10000; srokAdaptivnost = 1
} else if (adaptivnost == 2) {cenaAdaptivnost = 15000; srokAdaptivnost = 3
} else if (adaptivnost == 3) {cenaAdaptivnost = 30000; srokAdaptivnost = 10
} else {adaptivnost == "not"};

console.log (cenaAdaptivnost);
console.log (srokAdaptivnost);


let itogCena = cenaSaita + cenaDisign + cenaAdaptivnost;
let itogTimes = srokSaita + srokDisign + srokAdaptivnost;
 
alert ("Ориентировочная цена разработки сайта: " + itogCena + " рублей" + "\nОриентировочный срок разработки сайта: " + itogTimes + " рабочих дней");


/*alert (itogCena - Ориентировочная итоговая цена \n itogTimes - ориентировочный срок разработки сайта)*/




/*let tipSaita = prompt ("Тип сайта. Введите порядковый номер из списка:\n1 - Интернет магазин;\n2 - Сайт услуг;\n3 - Landing Page;\n4 - Визитка;\n5 - Информационный сайт.");
console.log (tipSaita)
let viborTipaSaita = tipSaita;



function cenaTipaSaita (cenasaita) {
	let cenasaita = viborTipaSaita
	if (viborTipaSaita = 1) {cenasaita = 100000};
	if (viborTipaSaita = 2) {cenasaita = 50000};
	if (viborTipaSaita = 3) {cenasaita = 15000};
	if (viborTipaSaita = 4) {cenasaita = 10000};
	if (viborTipaSaita = 5) {cenasaita = 70000};
}

let cena = function cenaTipaSaita (cenasaita);

console.log (cena)

function cenaTipaSaita (viborTipaSaita, cena) {
	let nomerTipaSaita = viborTipaSaita;
	if (viborTipaSaita = 1) {cena (100000)};
	if (viborTipaSaita = 2) {cena (50000)}; 
	if (viborTipaSaita = 3) {cena (15000)};
	if (viborTipaSaita = 4) {cena (10000)}; 
	if (viborTipaSaita = 5) {cena (70000)};
	return cena;
};

let cenasaita = cenaTipaSaita (cena);
console.log (cenasaita)
*/

