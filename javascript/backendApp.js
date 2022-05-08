const rastgeleButton = document.querySelector(".video a");
rastgeleButton.addEventListener("click", openYT);

function openYT() {
    rastgeleButton.setAttribute("href", "https://www.youtube.com/playlist?list=WL");
    rastgeleButton.setAttribute("target", "_blank");
    console.log("ağğ");
    getLinks();
}

// function getLinks() {
    
// }

