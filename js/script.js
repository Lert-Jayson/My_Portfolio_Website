/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Programmer', 'Developer'],
    typeSpeed: 100,
    backSpeed: 100, 
    backDelay: 2000,
    loop: true
});

/*==================== scroll reveal ====================*/

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-img',  { origin: 'top' });
ScrollReveal().reveal('.education',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .social-media',  { origin: 'left' });
ScrollReveal().reveal('.about-content',  { origin: 'right' });



// ______________________________clickable-boxes___________________

document.addEventListener("DOMContentLoaded", function () {
    const clickableBoxes = document.querySelectorAll(".clickable");

    clickableBoxes.forEach(function (box) {
        box.addEventListener("click", function (event) {
            const link = box.querySelector("a");
            if (link) {
                link.click();
            }
        });
    });
});

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// _____________________________modal popup_______________________

let preveiwContainer = document.querySelector('.projects-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
let body = document.body; // Reference to the body element

document.querySelectorAll('.portfolio-container .pop-up').forEach(clickable =>{
    clickable.onclick = () =>{
        console.log('Pop-up clicked');
        preveiwContainer.style.display = 'flex';
        let name = clickable.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        console.log('Pop-up clicked');
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});



// __________________________seemore_________________________________

function hideShow() {
    var div = document.querySelector('.manual');
    var button = document.querySelector('.btnsee');
    if (div) { // Check if the element is found
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block'; // Show the element
            button.textContent = 'Hide';
        } else {
            div.style.display = 'none'; // Hide the element
            button.textContent = 'See More';
        }
    }
}

function showhide() {
    var div = document.querySelector('.manual1');
    var button = document.querySelector('.btnsee1');
    if (div) { // Check if the element is found
        if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block'; // Show the element
            button.textContent = 'Hide';
        } else {
            div.style.display = 'none'; // Hide the element
            button.textContent = 'See More';
        }
    }
}





