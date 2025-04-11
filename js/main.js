//API key
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'bearer 80c145a94ee5ac2243f5a20bdb48c7dd'
    }
};

// Exibir loading
function toggleLoading() {
    let loader = document.querySelector(".loader")
    loader.style.display = loader.style.display == "none" ? "block" : "none";
 }

 // Page Scrool

 window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    
    if (this.window.scrolly > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled")
    }
 })