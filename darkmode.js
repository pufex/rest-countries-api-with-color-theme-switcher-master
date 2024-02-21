const darkmode = document.querySelector(".darkmode")

let color = [ 
    [
        "hsl(209, 23%, 22%)",
        "hsl(0, 0%, 100%)",
    ],
    [
        "hsl(208, 24%, 29%)",
        "hsl(0, 0%, 82%)",
    ],
    [
        "hsl(207, 26%, 17%)",
        "hsl(0, 0%, 98%)",    
    ],
    [
        "hsl(0, 0%, 100%)",
        "hsl(200, 15%, 8%)",
    ],
]

let i = -1;
const switchTheme = () => {
    i++;
    document.documentElement.style.setProperty('--dark-mode-elements', color[0][i%2]);
    document.documentElement.style.setProperty('--dark-mode-elements-hover', color[1][i%2]);
    document.documentElement.style.setProperty('--dark-mode-background', color[2][i%2]);
    document.documentElement.style.setProperty('--dark-mode-text', color[3][i%2]);
}

switchTheme();
darkmode.addEventListener("click", () => {
    darkmode.classList.toggle("active");
    switchTheme();
})
