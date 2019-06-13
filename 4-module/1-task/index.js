'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
	let ul = document.createElement('ul');
	let li;
	let res;
	document.body.appendChild(ul);

	for(let i=0; i < friends.length; i++){

		li = document.createElement('li');
		li.innerHTML = friends[i]['firstName'] + ' ' + friends[i]['lastName'];
		document.body.getElementsByTagName('ul')[0].appendChild(li);

	}

	return res = document.body.getElementsByTagName('ul')[0];

}