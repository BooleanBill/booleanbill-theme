const crt = document.querySelector('#crt_switch')
crt.addEventListener('click', () => {
	if (document.body.classList.contains('crt')) {
		crt.classList.add('off')
		crt.classList.remove('on')
		document.body.classList.remove('crt')
	} else {
		document.body.classList.add('crt')
		crt.classList.remove('off')
		crt.classList.add('on')
	}
})
