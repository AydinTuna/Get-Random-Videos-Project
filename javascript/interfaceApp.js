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
    giris.addEventListener("load", videoBlur());
    form.addEventListener("submit", girisKontrol);
    basariliKapat.addEventListener("click", uyariKapat);
    girisButton.addEventListener("click", saveData);
}

function saveData() {
    data.email = email.value;
    data.password = sifre.value;
}

function disabled() {
    girisButton.setAttribute("disabled", "disabled");
    email.setAttribute("disabled", "disabled");
    sifre.setAttribute("disabled", "disabled");
}

function uyariKapat() {
    basarili.style.display = "none";
    giris.style.filter = "blur(5px)";
    video.style.filter = "blur(0px)";
    rastgeleButton.style.pointerEvents = "auto";
    // giris.style.display = "none";
    // Giriş yaparken video kısmı gözükmeyecek yaptıktan sonra da giriş kısmı gözükmeyecek
    disabled();
}

function uyariKapatTimer() {
    setTimeout(function() {
        uyariKapat();
    }, 3000);
}

function videoBlur() {
    video.style.filter = "blur(5px)";
    rastgeleButton.style.pointerEvents = "none";
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







