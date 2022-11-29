// UI Costructoru.



// function UI() {

// }

class UI {

    static addFilmToUI = function(newFilm){
        // console.log(newFilm);
        const filmList = document.querySelector("#films");
        filmList.innerHTML += `
        <tr class="text-center fs-5">
        <td style="max-width: 300px;"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td style="vertical-align: middle;">${newFilm.title}</td>
        <td style="vertical-align: middle;">${newFilm.director}</td>
        <td style="vertical-align: middle;"><a href="#" id = "delete-film" class = "btn btn-outline-danger btn-lg">Filmi Sil</a></td>
        </tr>
        `;
        // newFilm olarak yaratılan film objesinden veriler alınıp inner html e eklendi.
        
    }
    static clearInputs = function(){
        titleElement.value = "";
        directorElement.value = "";
        urlElement.value = "";
        // bu değişkenler addFilms'in içinde tanımlı.
        // o fonksiyon içerisinde clearInputs'u çağırmalıyız çalışması için.
    }
    static isplayMessages = function(message,type) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.setAttribute("role","alert");
        alert.innerText = message;
        const cardbody = document.querySelectorAll(".card-body")[0];
        cardbody.appendChild(alert);
        setTimeout(function(){
            // cardbody.removeChild(cardbody.lastChild);
            alert.remove(); // daha kısa yoldan silme.
        },1500);
    
    }
    
    static loadAllFilms = function(films){
        const filmList = document.getElementById("films");
        // let filmT = films;
        // console.log(filmT);
        films.forEach(film => {
            filmList.innerHTML += `
            <tr class="text-center fs-5">
            <td style="max-width: 300px"><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td style="vertical-align: middle;">${film.title}</td>
            <td style="vertical-align: middle;">${film.director}</td>
            <td style="vertical-align: middle;"><a href="#" id = "delete-film" class = "btn btn-outline-danger btn-lg">Filmi Sil</a></td>
            </tr>
            `;
    });
    
    }
    
    static deleteFilmFromUI = function(element){
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUI = function () {
        const filmList = document.querySelector("#films");
        filmList.innerHTML = ""; // en kolay yöntem
        while (filmList.firstChild !== null) {
            filmList.firstChild.remove();
        }
    }
}

