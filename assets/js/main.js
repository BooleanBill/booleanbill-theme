const crt = document.querySelector('#crt_switch');
crt.addEventListener('click', () => {
	if (document.body.classList.contains('crt')) {
		crt.classList.add('off');
		crt.classList.remove('on');
		document.body.classList.remove('crt');
		localStorage.setItem('crt', 'off');
	} else {
		document.body.classList.add('crt');
		crt.classList.remove('off');
		crt.classList.add('on');
		localStorage.setItem('crt', 'on');
	}
});

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded.');
	let crtChoice = localStorage.getItem('crt');
	if (crtChoice === 'off' || crtChoice === null) {
		document.body.classList.remove('crt');
		crt.classList.add('off');
		crt.classList.remove('on');
	} else {
		document.body.classList.add('crt');
		crt.classList.remove('off');
		crt.classList.add('on');
	}
});
