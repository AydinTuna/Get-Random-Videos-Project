
EventListeners();

function EventListeners() {
    rastgeleButton.addEventListener("click", getRandomVideo);
}

function getRandomVideo() {
    rastgeleButton.setAttribute("href", "https://www.youtube.com/playlist?list=WL");
    rastgeleButton.setAttribute("target", "_blank");
}

