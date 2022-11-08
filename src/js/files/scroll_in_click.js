//--------------------------- Прокрутка при клике --------------------------------
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
	
	function	onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto));
		const goToBlock = document.querySelector(menuLink.dataset.goto);
		const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

		if (menuBurger.classList.contains('_active')) {
			document.body.classList.remove('_lock');
			menuBurger.classList.remove('_active');
			menuBody.classList.remove('_active');
		}

		window.scrollTo ({
			top: goToBlockValue,
			behavior: 'smooth'
		});
		e.preventDefault();
	}
}