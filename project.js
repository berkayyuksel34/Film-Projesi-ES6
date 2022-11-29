const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

// UI Objesi
// const ui = new UI();
// // Storage Objesi 
// const storage = new Storage();

eventListener();
// function getFilm() {
//     return JSON.parse(localStorage.getItem("films"));
// } yedek yöntem.

function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = Storage.getFilmsFromStorage(); // getFilm(); buna gerek kalmadı
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(eventobj) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if( title === "" || director === "" || url === "") {
        UI.displayMessages("Tüm alanları doldurunuz...","danger");
    } else {
        // Yeni film objesi oluşturduk.
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm); // Arayüze filmi ekleme.
        Storage.addFilmToStorage(newFilm); // newFilm objesini storage gönder.
        UI.displayMessages("Film başarıyla eklendi...","success");
    }


    ui.clearInputs(); // inputları temizledik.
    eventobj.preventDefault();
}

function deleteFilm(e) {
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        let filmSil = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        Storage.deleteFilmFromStorage(filmSil)
        UI.displayMessages("Film silinmiştir","info")
    }
   
}

function clearAllFilms() {
    if(confirm("Tüm filmleri silmek istediğinize emin misiniz?") === true) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}
}