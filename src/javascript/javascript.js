let isDark = false;
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

const darkModeToggle = () => {
    let style = {};
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    
    if (currentTheme === "light") {
        targetTheme = "dark";
    }


    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    
    
    // isDark = !isDark;
    
    // isDark ? setDarkTheme() : setLightTheme();
 // If document have an attribute data-theme with value dark, set attribute to light, else set to dark.


}


// const  setDarkTheme = () => {
//     const body = document.body;
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
// }

// const  setLightTheme = () => {
//     const body = document.body;
//     body.style.backgroundColor = 'white';
//     body.style.color = 'black';
// }