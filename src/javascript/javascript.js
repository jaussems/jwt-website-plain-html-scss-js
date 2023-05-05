
let isDark = false;
let isModalVisible = false;
let toggleDropDown = false;
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");


document.querySelector('.modal-btn').addEventListener('click', (event) => {
    toggleModal(event)
});



if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
    if (storedTheme === 'light') {
        document.getElementById('github-icon').src = './shared/icons/github-mark.svg';
        document.querySelector('.dropdown-icon').src = './shared/icons/menu.svg';
    }
    if (storedTheme === 'dark')
        document.getElementById('github-icon').src = './shared/icons/github-mark-white.svg';
    document.querySelector('.dropdown-icon').src = './shared/icons/menu_light.svg';
}

const darkModeToggle = () => {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    document.getElementById('github-icon').src = './shared/icons/github-mark.svg';
    document.querySelector('.dropdown-icon').src = './shared/icons/menu.svg';

    if (currentTheme === "light") {
        targetTheme = "dark";
        document.getElementById('github-icon').src = './shared/icons/github-mark-white.svg';
        document.querySelector('.dropdown-icon').src = './shared/icons/menu_light.svg';
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);

}

function addObserver(el, options) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('p-io-animation__show')
                observer.unobserve(entry.target)
            }
        })
    }, options) // Passing the options object to the observer
    observer.observe(el)
}

function scrollTrigger(selector, options = {}) {
    let element = document.querySelector(selector);
    addObserver(element, options);
}


const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

let myAge = getAge('1996-08-29');

const toggleModal = (event) => {
    this.isModalVisible = !this.isModalVisible;
    if (this.isModalVisible) {

        document.body.classList.add("dialogIsOpen")

    }
    else {

        document.body.classList.remove("dialogIsOpen");
    }

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
scrollTrigger('.skills-inner');