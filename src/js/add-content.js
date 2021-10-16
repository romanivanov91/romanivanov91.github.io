/*Этот сценарий выводит на экран приветствие пользавателю, основываясь на текущем времени*/

var today = new Date();                    //Создаем новый объект данных
var hourNow = today.getHours();            //Находим текущий час
var greeting;
                                           //Отображаем приветствие в зависимости от текущего времени
if (hourNow>18) {
	greeting='Добрый вечер!';
} else if (hourNow>12){
	greeting='Добрый день!';
} else if (hourNow>0){
	greeting='Доброе утро!';
} else {
	greeting='Приветствуем!';
}

document.write('<h3>'+greeting+'</h3>');