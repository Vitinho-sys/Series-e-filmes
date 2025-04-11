//API key
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGMxNDVhOTRlZTVhYzIyNDNmNWEyMGJkYjQ4YzdkZCIsIm5iZiI6MTc0NDMzMTUyMS40NzQsInN1YiI6IjY3Zjg2MzAxMzE3NzUyNzZkNmQ5Y2Y4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P8L5ha8n3cajOv1yT-NZQaLr78XTVNMau-pDdJWDx_A'
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
    
    if (window.scrolly > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled")
    }
 });