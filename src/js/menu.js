const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-mobile');
const li = document.querySelectorAll('.nav-mobile .nav__item');
const logo = document.querySelector('.nav-mobile img');
const socials = document.querySelectorAll('.socials img');
const body = document.querySelector('body')

const handleMenu = () => {
	hamburger.classList.toggle('is-active');
	menu.classList.toggle('active');
	body.classList.toggle('menu-active')
};

hamburger.addEventListener('click', handleMenu);
li.forEach((li) => li.addEventListener('click', handleMenu));
logo.addEventListener('click', handleMenu);
socials.forEach((social) => social.addEventListener('click', handleMenu));
