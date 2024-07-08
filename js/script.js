const global = {
    currentPage: window.location.pathname,
}


// Highlight active link
function highlightActiveLink() {
    let allNavItems = document.querySelectorAll(".nav-link");
    allNavItems.forEach(e => {
        if (e.getAttribute("href") === global.currentPage) {
            e.classList.toggle("active")
        }
    });
}

// Init App
function init() {
    switch(global.currentPage) {
        case "/":
        case "/index.html":
            console.log("Home");
            break;
        case "/shows.html":
            console.log("TV Shows");
            break;
        case "/movie-details.html":
            console.log("Movie Details");
            break;
        case "/tv-details.html":
            console.log("TV Details");
            break;
        case "/search.html":
            console.log("Search");
            break;
    }
}


document.addEventListener("DOMContentLoaded", init)

highlightActiveLink()