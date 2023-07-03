// Slider-swiper
new Swiper('.swiper-container', {
	navigation: { nextEl: '.swiper-next', prevEl: '.swiper-prev' },
	spaceBetween: 30,
	loop: true,
	autoplay: { delay: 2000 },
	breakpoints: {
		320: { slidesPerView: 1 },
		480: { slidesPerView: 1.5 },
		770: { slidesPerView: 2.5 },
		1430: { slidesPerView: 3.5 },
	},
});

new Swiper('.slider-img', {
	navigation: { prevEl: '.swiper-left', nextEl: '.swiper-right' },
	autoplay: { delay: 2000 },
	loop: true,
	slidesPerView: 1,
});

// Header anchor
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors)
	anchor.addEventListener('click', e => {
		e.preventDefault();
		document
			.querySelector(anchor.getAttribute('href'))
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});

// Show or Hide the "to top-arrow"
window.onscroll = function () {
	document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000
		? (document.querySelector('.arrow-up').style.display = 'block')
		: (document.querySelector('.arrow-up').style.display = 'none');
};

// Menu burger
const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', () => {
	document.body.classList.toggle('lock');
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
});

menuLink.forEach(e => {
	e.addEventListener('click', () => {
		document.body.classList.remove('lock');
		menuIcon.classList.remove('active');
		menuList.classList.remove('active');
	});
});

// Animation
const animationElements = document.querySelectorAll('.animation');
if (animationElements.length > 0) {
	const animate = () => {
		for (let i = 0; i < animationElements.length; i++) {
			const element = animationElements[i];
			const offsetHeight = element.offsetHeight;
			const topSetHeight = element.getBoundingClientRect().top + window.scrollY;
			let totalHeight = window.innerHeight - offsetHeight / 4;
			if (offsetHeight > window.innerHeight) {
				totalHeight = window.innerHeight - window.innerHeight / 4;
			}
			if (
				scrollY > topSetHeight - totalHeight &&
				scrollY < topSetHeight + offsetHeight
			) {
				element.classList.add('active');
			}
		}
	};
	window.addEventListener('scroll', animate);
	setTimeout(animate, 300);
}
