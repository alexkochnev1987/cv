/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(n=>n.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
}))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className;
    skillsContent.forEach(el=> el.className = 'skills__content skills__close');

    if(itemClass === 'skills__content skills__close')
    this.parentNode.className ='skills__content skills__open'
}

skillsHeader.forEach(el=>{
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent =>tabContent.classList.remove('qualification__active'))
        target.classList.add('qualification__active')
        tabs.forEach(tab=>tab.classList.remove('qualification__active'))
        tab.classList.add('qualification__active')
    })

})


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalButtons = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');
document.addEventListener('click',(e)=>{
    if(e.target.className === 'services__modal active-modal'){
        modalViews.forEach(elem => elem.classList.remove( 'active-modal'))
    }
})
const modal = (index)=>{
    modalViews[index].classList.add('active-modal')
};
modalButtons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        modal(index)
    })
})

modalCloses.forEach(modal => modal.addEventListener('click', ()=>{
    modalViews.forEach(elem => elem.classList.remove( 'active-modal'))
}
))

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });
/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 