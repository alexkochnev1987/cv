/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
}))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills() {
    let itemClass = this.parentNode.className;
    skillsContent.forEach(el => el.className = 'skills__content skills__close');

    if (itemClass === 'skills__content skills__close')
        this.parentNode.className = 'skills__content skills__open'
}

skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => tabContent.classList.remove('qualification__active'))
        target.classList.add('qualification__active')
        tabs.forEach(tab => tab.classList.remove('qualification__active'))
        tab.classList.add('qualification__active')
    })

})


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalButtons = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');
document.addEventListener('click', (e) => {
    if (e.target.className === 'services__modal active-modal') {
        modalViews.forEach(elem => elem.classList.remove('active-modal'))
    }
})
const modal = (index) => {
    modalViews[index].classList.add('active-modal')
};
modalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modal(index)
    })
})

modalCloses.forEach(modal => modal.addEventListener('click', () => {
    modalViews.forEach(elem => elem.classList.remove('active-modal'))
}
))

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});
/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        586: {
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)
/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme';
const light = 'light';
const dark = 'dark';
const action = { add: 'add', remove: 'remove' }
const iconTheme = { sun: 'uil-sun', moon: 'uil-moon' }
const theme = 'selected-theme';

const selectedTheme = localStorage.getItem(theme);

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? dark : light;
const getCurrentIcon = () => themeButton.classList.contains(iconTheme.moon) ? iconTheme.moon : iconTheme.sun;

if (selectedTheme) {
    document.body.classList[selectedTheme === dark ? action.add : action.remove](darkTheme);
    themeButton.classList[selectedTheme === dark ? action.add : action.remove](iconTheme.sun);
}

themeButton.addEventListener('click', ()=>{
    console.log('click');
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme.sun);

    localStorage.setItem(theme, getCurrentTheme())
})