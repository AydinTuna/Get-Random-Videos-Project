const video = document.querySelector(".video");
const giris = document.querySelector(".giris");
const form = document.querySelector("form");
const rastgeleButton = document.querySelector(".video a");
const email = document.querySelector("input[type=email]");
const sifre = document.querySelector("input[type=password]");
const basarili = document.querySelector(".basarili");
const basariliKapat = document.querySelector(".basarili i");
const girisButton = document.querySelector("form .button");

const data = {
    email: "",
    password: ""
}

EventListeners();

function EventListeners() {
    form.addEventListener("submit", girisKontrol);
    basariliKapat.addEventListener("click", uyariKapat);
    girisButton.addEventListener("click", saveData);
}


function saveData() {
    data.email = email.value;
    data.password = sifre.value;
}

function uyariKapat() {
    basarili.style.display = "none";
    giris.style.display = "none";
    video.style.display = "block";
    rastgeleButton.style.pointerEvents = "auto";
}

function uyariKapatTimer() {
    setTimeout(function() {
        uyariKapat();
    }, 3000);
}

function girisKontrol(e) {
    if (email.value === data.email && sifre.value === data.password) {
        giris.style.filter = "blur(5px)";
        basarili.style.display = "flex";
        uyariKapatTimer();
        e.preventDefault();
    }
    else {
        basarili.style.display = "none";
        e.preventDefault();
    } 

}







