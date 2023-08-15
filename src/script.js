
// when scroll 
let header = document.getElementById("header");
window.addEventListener("scroll",() => {
    if(window.scrollY > 100){
        header.style.backgroundColor = "#0c1524";
        header.style.padding = "1rem 0"
    }
    else{
        header.style.backgroundColor = "transparent",
        header.style.padding = "2rem 0"
    }
})