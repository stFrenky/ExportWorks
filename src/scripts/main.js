
import '../styles/main.scss';

// гамбургер меню
const menuHamburgerBtn = document.querySelector('.header__menu-hamburger');
const menuHamburgerPage = document.querySelector('.header__menu-hamburger-page');
const menuHamburgerClose = document.querySelector('.header__menu-hamburger-close');
const html = document.querySelector('html')
const feedbackNumbers = document.querySelectorAll('.feedback__number');

menuHamburgerBtn.addEventListener('click', () => {
	menuHamburgerPage.classList.toggle('active');
	html.classList.toggle('no-scroll-and-opas');
})

menuHamburgerClose.addEventListener('click', () => {
	menuHamburgerPage.classList.remove('active');
	html.classList.remove('no-scroll-and-opas');
})

// кнопка вверх
const upBtn = document.querySelector('.up-btn');

window.addEventListener('scroll', () => {
	upBtn.classList.toggle('active', window.scrollY > 1000);
})

upBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

for (let i = 0; i < feedbackNumbers.length; i++) {
	new IMask(feedbackNumbers[i], {
		mask: "+{7}(000)000-00-00",
	});
}


// скролл к форме при нажатии на кнопку в типах работ
document.querySelector('.types-work__btn').addEventListener('click', smoothScroll());

function smoothScroll() {
	document.querySelector('#feedback').scrollIntoView({
		behavior: 'smooth'
	});
}


















