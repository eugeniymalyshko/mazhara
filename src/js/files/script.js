/*---------------- IBG -------------------*/
function ibg(){
	let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}
	ibg();	
/*------------ Menu Burger ---------------*/
const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');

if (menuBurger) {
	menuBurger.addEventListener('click', function () {
		document.body.classList.toggle('_lock');
		menuBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
