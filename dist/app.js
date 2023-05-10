/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 547:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 572:
/***/ (function() {

let isDark = false;
let isModalVisible = false;
let toggleDropDown = false;
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

document.querySelector('.contact-button').addEventListener('click', (event) => {
    toggleModal(event);
});

document.querySelector('.modal-btn').addEventListener('click', (event) => {
    toggleModal(event);
});


document.querySelector('.dropdown-icon').addEventListener('click', (event) => {
    toggleDropdownMenu(event);
});



if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
    if (storedTheme === 'light') {
        document.getElementById('github-icon').src = './shared/icons/github-mark.svg';
        document.querySelector('.dropdown-icon').src = './shared/icons/menu.svg';
    }
    if (storedTheme === 'dark') {
        document.getElementById('github-icon').src = './shared/icons/github-mark-white.svg';
        document.querySelector('.dropdown-icon').src = './shared/icons/menu_light.svg';
    }
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
    this.g = !this.g;
    if (this.g) {

        document.body.classList.add("dialogIsOpen")

    }
    else {

        document.body.classList.remove("dialogIsOpen");
    }

    event.preventDefault();
}


const toggleDropdownMenu = (event) => {

    this.J = !this.J;
    const dropDownElement = document.querySelector('.dropdown-menu');

    if (this.J) {

        dropDownElement.style.opacity = 1;
    }
    else
        dropDownElement.style.opacity = 0;


    event.preventDefault();

}
scrollTrigger('.skills-inner');

/***/ }),

/***/ 742:
/***/ (() => {

//update this with your js_form selector
const form_id_js = "modal_form";

const data_js = {
    access_token: "cbccll26waqohl0q9i71mgur",
};

const sendButton = document.getElementById("js_send");

sendButton.addEventListener("click", function (e) {
    sendForm(e);
    e.preventDefault();
});


async function sendForm(e) {
    const errorMessage = document.getElementById("error_message");
    const request = new XMLHttpRequest();
    const subject = document.querySelector(
        "#" + form_id_js + " [name='subject']"
    ).value;
    const message = document.querySelector(
        "#" + form_id_js + " [name='text']"
    ).value;
    data_js["subject"] = subject;
    data_js["text"] = message;
    if (!subject || !message) {
        errorMessage.classList.add("modal_message--danger");
        errorMessage.classList.add("bounce");
        errorMessage.textContent = "Please fill in your email / message 👎";
        return;
    }
    const params = toParams(data_js);
    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    this.errorHandler(request, params);
    document.querySelector("#" + form_id_js + " [name='subject']").value = "";
    document.querySelector("#" + form_id_js + " [name='text']").value = "";
    e.preventDefault();
    e.stopImmediatePropagation();

    return false;
}

function toParams(data_js) {
    const form_data = [];
    for (const key in data_js) {
        form_data.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key])
        );
    }

    return form_data.join("&");
}

function errorHandler(request) {
    const errorMessage = document.getElementById("error_message");
    //needs redesign in future, when mailing service is build.

    if (request) {
        errorMessage.classList.add("modal_message--succes");
        errorMessage.classList.add("bounce");
        errorMessage.textContent = "You have succesfully send your message 👍";
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_modules__[572]();
/******/ 	__webpack_modules__[742]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[547]();
/******/ 	
/******/ })()
;