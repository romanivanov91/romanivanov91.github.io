"use strict"


/*$(document).ready (function() {  //отложенная анимация)

	let options = {threshold: [0.5]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.webdisign, ')
	elements.each ((i, el) => {
		observer.observe (el);
	})
	$('.elementanimation').css('opacity', '1');
	$('.elementanimation').spincrement({
        thousandSeparator: "",
        duration: 1200
    });

})*/

function onEntry (entry) {
	entry.forEach (change => {
		if (change.isIntersecting) {
			change.target.classList.add ('show-animation');
		}
	})
}


$(document).ready(function () {

    var show = true;
    var countbox = ".statistics";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.elementanimation').css('opacity', '1');
            $('.elementanimation').spincrement({
                thousandSeparator: "",
                duration: 5000
            });

            show = false;
        }
    });

});

$('a[href^="#"]').click (function() {
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"})
})


let select = document.querySelector ("select");
let cenaSaita;
let srokSaita;

$("select").on('change', raschetcenasrocksaita);

function raschetcenasrocksaita() {
	let znachvibortip = select.value;	
	if (znachvibortip == 'internetmag') {cenaSaita = 100000; srokSaita = 40
	} else if (znachvibortip == 'saityslyg') {cenaSaita = 50000; srokSaita = 20
	} else if (znachvibortip == 'landingpage') {cenaSaita = 15000; srokSaita = 2
	} else if (znachvibortip == 'visitka') {cenaSaita = 10000; srokSaita = 2
	} else if (znachvibortip == 'informsait') {cenaSaita = 70000; srokSaita = 30
	} else {znachvibortip == 'not'};
}
console.log (cenaSaita);
console.log (srokSaita);

/*
let selectTip = document.querySelector('select');
/*let selectTip = document.querySelector('select.tip');
let selectDizain = document.querySelector('select.dizain');
let selectAdaptivnost = document.querySelector('select.adaptivnost');
let srok = document.querySelector('td.prav1');
let stoimost = document.querySelector('td.prav2');
let cenaSaita;
let srokSaita;
let cenaDisign;
let srokDisign;
let cenaAdaptivnost;
let srokAdaptivnost;

$("select").on('change', raschetcenasrocksaita());
selectTip.addEventListener('change', raschetcenasrocksaita());

function raschetcenasrocksaita() {	
	let znachvibortip = selectTip.value;	
	if (znachvibortip == 'internetmag') {cenaSaita = 100000; srokSaita = 40
	} else if (znachvibortip == 'saityslyg') {cenaSaita = 50000; srokSaita = 20
	} else if (znachvibortip == 'landingpage') {cenaSaita = 15000; srokSaita = 2
	} else if (znachvibortip == 'visitka') {cenaSaita = 10000; srokSaita = 2
	} else if (znachvibortip == 'informsait') {cenaSaita = 70000; srokSaita = 30
	} else {znachvibortip == "not"};
	/*return cenaSaita, srokSaita
}

console.log (cenaSaita);
console.log (srokSaita);

$("select").on("change", raschetcenasrocksaitadisign());

function raschetcenasrocksaitadisign() {
	let znachvibordisign = selectDizain.value;

	if (znachvibordisign == 'minimalizm') {cenaDisign = 5000; srokDisign = 1
	} else if (znachvibordisign == 'classikstyle') {cenaDisign = 10000; srokDisign = 2
	} else if (znachvibordisign == 'korpstyle') {cenaDisign = 15000; srokDisign = 3
	} else if (znachvibordisign == 'risstyle') {cenaDisign = 20000; srokDisign = 10
	} else if (znachvibordisign == 'informstyle') {cenaDisign = 25000; srokDisign = 15
	} else {znachvibordisign == "not"};
	return cenaDisign, srokDisign
}

$("select").on("change", raschetcenasrocksaitaadaptivnost());

function raschetcenasrocksaitaadaptivnost() {
	let znachviboradaptivnost = selectAdaptivnost.value;

	if (znachviboradaptivnost == 'pc') {cenaAdaptivnost = 10000; srokAdaptivnost = 1
	} else if (znachviboradaptivnost == 'mobail') {cenaAdaptivnost = 15000; srokAdaptivnost = 3
	} else if (znachviboradaptivnost == 'pcmobail') {cenaAdaptivnost = 30000; srokAdaptivnost = 10
	} else {znachviboradaptivnost == "not"};
	return cenaAdaptivnost, srokAdaptivnost
}


console.log (cenaDisign);
console.log (srokDisign);
console.log (cenaAdaptivnost);
console.log (srokAdaptivnost);


srok.textContent = srokSaita + srokDisign + srokAdaptivnost;
stoimost.textContent = cenaSaita + cenaDisign + cenaAdaptivnost;
*/




	/*console.log (cenaSaita);
	console.log (srokSaita);


/*if (znachvibortip === 'internetmag') {cenaSaita = 100000; srokSaita = 40
	} else if (znachvibortip === 'saityslyg') {cenaSaita = 50000; srokSaita = 20
	} else if (znachvibortip === 'landingpage') {cenaSaita = 15000; srokSaita = 2
	} else if (znachvibortip === 'visitka') {cenaSaita = 10000; srokSaita = 2
	} else if (znachvibortip === 'informsait') {cenaSaita = 70000; srokSaita = 30
	} else {znachvibortip === "not"};

/*
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

