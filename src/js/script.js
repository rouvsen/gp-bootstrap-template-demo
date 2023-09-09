const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 75) {
        header.style.backgroundColor = "black";
        header.style.opacity = "0.9";
    } else {
        header.style.backgroundColor = "";
        header.style.opacity = "";
    }
})