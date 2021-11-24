"use strict"


$(document).ready (function() {  //отложенная анимация)

	let options = {threshold: [1]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.resumeh2, .resumeimg, .resumep, .resumeinput, .webdisign, .razrabotka, .ceo, .marketing')
	elements.each ((i, el) => {
		observer.observe (el);
	})
	
})

function onEntry (entry) {
	entry.forEach (change => {
		if (change.isIntersecting) {
			change.target.classList.add ('animClass');
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
            $('.elementanimation1').css('opacity', '1');
            $('.elementanimation1').spincrement({
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



let selectTip = document.querySelector ("select.tip");
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

$("select").on('change', raschetcenysaita);

function raschetcenysaita () {
	
	let znachvibortip = selectTip.value;	
	if (znachvibortip == 'internetmag') {cenaSaita = 100000; srokSaita = 40
	} else if (znachvibortip == 'saityslyg') {cenaSaita = 50000; srokSaita = 20
	} else if (znachvibortip == 'landingpage') {cenaSaita = 15000; srokSaita = 2
	} else if (znachvibortip == 'visitka') {cenaSaita = 10000; srokSaita = 2
	} else if (znachvibortip == 'informsait') {cenaSaita = 70000; srokSaita = 30
	} else {znachvibortip == 'not'};
	console.log (cenaSaita);
	console.log (srokSaita);

	let znachvibordisign = selectDizain.value;
	if (znachvibordisign == 'minimalizm') {cenaDisign = 5000; srokDisign = 1
	} else if (znachvibordisign == 'classikstyle') {cenaDisign = 10000; srokDisign = 2
	} else if (znachvibordisign == 'korpstyle') {cenaDisign = 15000; srokDisign = 3
	} else if (znachvibordisign == 'risstyle') {cenaDisign = 20000; srokDisign = 10
	} else if (znachvibordisign == 'informstyle') {cenaDisign = 25000; srokDisign = 15
	} else {znachvibordisign == "not"};
	console.log (cenaDisign);
	console.log (srokDisign);

	let znachviboradaptivnost = selectAdaptivnost.value;
	if (znachviboradaptivnost == 'pc') {cenaAdaptivnost = 10000; srokAdaptivnost = 1
	} else if (znachviboradaptivnost == 'mobail') {cenaAdaptivnost = 15000; srokAdaptivnost = 3
	} else if (znachviboradaptivnost == 'pcmobail') {cenaAdaptivnost = 30000; srokAdaptivnost = 10
	} else {znachviboradaptivnost == "not"};
	console.log (cenaAdaptivnost);
	console.log (srokAdaptivnost);

	srok.textContent = srokSaita + srokDisign + srokAdaptivnost + " рабочих дней";
	stoimost.textContent = cenaSaita + cenaDisign + cenaAdaptivnost + " рублей";
};

var delay_popup = 10000;
    setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);



