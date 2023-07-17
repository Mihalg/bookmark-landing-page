'use strict';

const email = document.querySelector('.contact input');
const submitBtn = document.querySelector('form .btn');
const icon = document.querySelector('form img');
const alert = document.querySelector('.alert');

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function ValidateEmail(e) {
	if (email.value.match(validRegex)) {
		icon.style.opacity = '0';
		alert.classList.remove('active');
		submitBtn.classList.remove('active');
		email.value = '';
	} else {
		e.preventDefault();
		icon.style.opacity = '1';
		alert.classList.add('active');
		submitBtn.classList.add('active');
	}
}

submitBtn.addEventListener('click', ValidateEmail);
