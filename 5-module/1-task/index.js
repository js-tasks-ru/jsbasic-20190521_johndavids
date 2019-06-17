'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	let tr = table.getElementsByTagName('tr');
	
	for(let i = 1; i < tr.length; i++){

		// Start - Проставит в "<tr>" класс male/female, в зависимости от содержимого ячекйки Gender

		if(tr[i].children[2].textContent === 'm'){
			tr[i].classList.add("male");
		}else if (tr[i].children[2].textContent === 'f'){
			tr[i].classList.add("female");
		}

		// End - Проставит в "<tr>" класс male/female, в зависимости от содержимого ячекйки Gender

		// Start - Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status

		if(tr[i].children[3].getAttribute("data-available") === "true"){
			tr[i].classList.add("available");
		}else if(tr[i].children[3].getAttribute("data-available") === "false"){
			tr[i].classList.add("unavailable");
		}else{
			tr[i].setAttribute("hidden", 'true');
		}
		
		// End - Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status

		// Start - Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18

		if(tr[i].children[1].textContent < 18){
			tr[i].style = "text-decoration: line-through";
		}

		// End - Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18

	}
return table;
}