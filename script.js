/*============== toggle navbar ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let readMoreBtn = document.querySelector('.read-more');
let container = document.querySelector('.about-content');
readMoreBtn.onclick = () =>  {
    container.classList.toggle('expanded');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    /*============== sticky navbar ==============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== remove toggle icon and navbar when click navbar links */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================= SCROLL REVEAL ===================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================= Multiple text ===================*/
const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Crypto Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typed1 = new Typed('.multiple-text1', {
    strings: ['Data Analyst', 'Crypto Analyst'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

function sendEmail() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Create email link
    var link = "mailto:firdausfisal123@gmail.com"
               + "?subject=" + encodeURIComponent("New message from " + name + "\nSubject " + subject)
               + "&body=" + encodeURIComponent("Name: " + name + "\n\nContact: " + number + "\n\nEmail: " + email + "\n\nMessage: " + message);
  
    // Open email client
    window.location.href = link;
}

let sendMsg = document.getElementById("contact-form");
sendMsg.addEventListener("submit", function(event) {
    event.preventDefault();
    sendEmail();
});