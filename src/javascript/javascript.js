
let isDark = false;
let isModalVisible = false;
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
    document.getElementById('dark-mode-button').src = `./shared/icons/${targetTheme}-mode.png`;

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);

}


const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

let myAge = getAge('1996-08-29');

//document.querySelector("myAge").innerText = '23';

//console.log(myAge);


//document.getElementById('contact').addEventListener('click', this.toggleModal());

//console.log(document.querySelector('contact'))
const toggleModal = (event) => {
    const modalElement = document.querySelector('.contact-modal');
    this.isModalVisible = !this.isModalVisible;
    console.log({}, modalElement)
    // document.getElementsByName('body').style.overflow = 'hidden';

    if (this.isModalVisible) {
        modalElement.style.visibility = 'visible'
        document.body.style.overflow = 'hidden';
        //document.getElementsByName('body').addClass('body.modal-open');
        //event.preventDefault();
    }
    else {
        modalElement.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
        //event.preventDefault();
    }
    // this.isModalVisible ?
    //     modalElement.style.visibility = 'visible'
    //     : modalElement.style.visibility = 'hidden';

    //document.getElementsByName('body').style.overflow = 'hidden';

    event.preventDefault();
}
