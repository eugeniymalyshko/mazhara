//---------- Device type-------------------
const deviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		 return "tablet";
	}
	else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
		 return "mobile";
	}
	return "desktop";
};

if (deviceType() == "mobile" || deviceType() == "tablet" ) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
			menuArrow.parentElement.classList.toggle('_active');
			});
		}
	} 
} else {
	document.body.classList.add('_pc');
}