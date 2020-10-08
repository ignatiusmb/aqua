for (const formWrapper of document.querySelectorAll('.aqua-form-slide')) {
	formWrapper.querySelector('#sign-up').addEventListener('click', () => {
		formWrapper.classList.add('toggled');
	});
	formWrapper.querySelector('#sign-in').addEventListener('click', () => {
		formWrapper.classList.remove('toggled');
	});
}
