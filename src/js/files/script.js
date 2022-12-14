document.addEventListener('DOMContentLoaded', function () {
	/*------------ Menu Burger ---------------*/
	const menuBurger = document.querySelector('.burger-icon');
	const menuBody = document.querySelector('.header__hidden-menu');

	if (menuBurger) {
		menuBurger.addEventListener('click', () => {
			document.body.classList.toggle('_lock');
			menuBurger.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		});
	}
	const searchButton = document.querySelector('.actions-header__item_search');
	const searchForm = document.querySelector('.search-header__form');

		searchButton.addEventListener('click', () => {
			toggleClassActive(searchForm);
			toggleClassActive(searchButton);
		})
});

function toggleClassActive(item) {
	item.classList.toggle('_active');
}
/*--------- Change color theme ------------*/
window.addEventListener('load', windowLoad);

function windowLoad() {
	// HTML
	const htmlBlock = document.documentElement;

	// отримуємо збережену тему
	const saveUserTheme = localStorage.getItem('user-theme');

	// Робота з системними налаштуваннями
	let userTheme;
	if (window.matchMedia) {
		userTheme =  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		!saveUserTheme ? changeTheme() : null;
	});

	// Зміна по кліку
	const themeDarkButton = document.querySelector('.btn_dark');
	const themeLightButton = document.querySelector('.btn_light');
	const resetButton = document.querySelector('.btn_reset');

	if (themeLightButton) {
		themeLightButton.addEventListener('click', (e) => {
			changeTheme(true);
		}) 
	}
	if (themeDarkButton) {
		themeDarkButton.addEventListener('click', (e) => {
			changeTheme(true);
		});
	}
	if (resetButton) {
		resetButton.addEventListener('click', (e) => {
			localStorage.setItem('user-theme', '');
		});
	} 

	// Функція додавання класу теми
	function setThemeClass() {
		if (saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
		}else {
			htmlBlock.classList.add(userTheme);
		}
	}
	// Додаємо клас теми
	setThemeClass();

	// Функція зміни теми
	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}