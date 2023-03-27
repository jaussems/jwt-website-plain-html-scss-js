
let isDark = false;
let isModalVisible = false;
let toggleDropDown = false;
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

const darkModeToggle = () => {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    document.getElementById('github-icon').src = './shared/icons/github-mark.svg';

    if (currentTheme === "light") {
        targetTheme = "dark";
        document.getElementById('github-icon').src = './shared/icons/github-mark-white.svg';
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);

}

function addObserver(el) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('p-io-animation__show');
                observer.unobserve(enetry.target);
            }
        })
    })
    observer.observe(el);
}

function scrollTrigger(selector) {
    let element = document.querySelector(selector);
    console.log(element);
    addObserver(element);
}


const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

let myAge = getAge('1996-08-29');


const toggleModal = (event) => {
    const modalElement = document.querySelector('.contact-modal');
    const modalBody = document.querySelector('.contact-modal_body');
    this.isModalVisible = !this.isModalVisible;
    modalBody.classList.remove("run-animation");
    if (this.isModalVisible) {
        modalElement.style.visibility = 'visible'
        document.body.style.overflow = 'hidden';

    }
    else {
        modalElement.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
    }
    modalBody.classList.add("run-animation");

    event.preventDefault();
}



const toggleDropdownMenu = (event) => {

    this.toggleDropDown = !this.toggleDropDown;
    const dropDownElement = document.querySelector('.dropdown-menu');

    if (this.toggleDropDown) {

        dropDownElement.style.opacity = 1;
    }
    else
        dropDownElement.style.opacity = 0;


    event.preventDefault();

}


// scrollTrigger('skills-inner');
console.log(document.querySelector('.skills-inner'));

scrollTrigger('.skills-inner');