const video = document.querySelector(".video");
const giris = document.querySelector(".giris");
const rastgeleButton = document.querySelector("body > div.header > div.video > div > button")

function videoBlur() {
    video.style.filter = "blur(5px)";
    rastgeleButton.setAttribute("disabled", "disabled");
}

document.addEventListener("load", videoBlur());





