/*------------------------------- Form ----------------------------------------*/
const form = document.getElementById('form');
const reqFields = document.querySelectorAll('._req');
const formAnsver = document.querySelector('.contact__success span');

document.addEventListener('DOMContentLoaded', function () {
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				formAnsver.innerHTML = result.message;
				setTimeout(function () {
					formAnsver.innerHTML = '';
				}, 10000);
				form.reset();
				form.classList.remove('_sending');
			} else {
				formAnsver.innerHTML = '<span style=" color: red;">Something went wrong, please try again later</span>';
				form.classList.remove('_sending');
				setTimeout(function () {
					formAnsver.innerHTML = '';
				}, 10000);
			}
		}
	}

	function formValidate(form) {
		let error = 0
		for (let index = 0; index < reqFields.length; index++) {
			const input	= reqFields[index]
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			}else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
		input.parentElement.children[2].classList.add('_error');
	}
	
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
		input.parentElement.children[2].classList.remove('_error');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});