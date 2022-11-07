let isDarkMode = false;
let elementBody = document.querySelector('inner-div');
const darkModeToggle = () => {

    console.log(elementBody);
    isDarkMode = !isDarkMode;
    isDarkMode ? elementBody.className = 'dark-mode' :  elementBody.className ='light-mode'
}
