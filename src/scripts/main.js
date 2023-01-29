import 'normalize.css';
import '../styles/main.scss';

const menuHamburgerBtn = document.querySelector('.header__menu-hamburger');
const menuHamburgerPage = document.querySelector('.header__menu-hamburger-page');
const menuHamburgerClose = document.querySelector('.header__menu-hamburger-close');
const html = document.querySelector('html')

menuHamburgerBtn?.addEventListener('click', () => {
	menuHamburgerPage.classList.toggle('active');
	html.classList.toggle('no-scroll-and-opas');
})

menuHamburgerClose?.addEventListener('click', () => {
	menuHamburgerPage.classList.remove('active');
	html.classList.remove('no-scroll-and-opas');

})


