const video = document.querySelector(".video");
const giris = document.querySelector(".giris");
const form = document.querySelector("form");
const rastgeleButton = document.querySelector("body > div.header > div.video > div > button");
const email = document.querySelector("input[type=email]:nth-child(1)");
const sifre = document.querySelector("input[type=sifre]:nth-child(2)");
const basarili = document.querySelector(".basarili");

const data = {
    email : "aydinbahadirtuna@gmail.com",
    sifre : "1234567890"
}

function videoBlur() {
    video.style.filter = "blur(5px)";
    rastgeleButton.setAttribute("disabled", "disabled");
}

function girisKontrol() {
    if (email.value === data.email && sifre.value === data.sifre) {
        basarili.style.display = "flex";
    }
    else basarili.style.display = "none";

    
}

document.addEventListener("load", videoBlur());
form.addEventListener("submit", girisKontrol());




