const featuresBtns = document.querySelectorAll('.features__btn');
const feature = document.querySelectorAll('.feature');


const switchFeatures = (e) => {
	for (let i = 0; i < featuresBtns.length; i++) {
		if (e.target !== featuresBtns[i]) {
			featuresBtns[i].classList.remove('active');
			feature[i].classList.remove('active');
		} else {
			featuresBtns[i].classList.add('active');
			feature[i].classList.add('active');
		}
	}
};

featuresBtns.forEach((btn) => btn.addEventListener('click', switchFeatures))

// Get all accordion buttons
const accordionButtons = document.querySelectorAll('.label');

const openAccordion = function () {
	this.classList.toggle('active');
};

accordionButtons.forEach((btn) => btn.addEventListener('click', openAccordion));
