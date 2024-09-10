
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {

	initCRTToggle();
	initAnnouncementForm();


});

function initCRTToggle() {
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
}


function initAnnouncementForm() {
	const announcementForm = document.querySelector('#announcement-form');
	announcementForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(announcementForm);
		const message = formData.get('announcement');
		axios.post('https://api-v2.voicemonkey.io/announcement', {
			token: '463dbaebc4a7b9d4e1af86d7957480fe_d550edb6d4f4665e4bdb548433bcc610',
			device: 'echo-dot-martin',
			text: message,
			language: 'en-GB'
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			console.log('Announcement sent');
		}).catch((error) => {
			alert('Failed to send announcement');
		});
	});

}