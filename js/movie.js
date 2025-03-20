const data = db;
const db_header = header;
const url = window.location.href;


const parametros = url.split('?')[1];

const observer = new IntersectionObserver(MoreMovies);

// Variables DOM
let $listMovies;
const $main = document.querySelector("#main");

let shuffleData = shuffleArray(data);
let lsD = 0;


/* --------------------------------------------
    header
-------------------------------------------- */
const random1 = Math.floor(Math.random() * db_header.length);
const random2 = Math.floor(Math.random() * db_header.length);
document.querySelector("#titlePage").innerText = db_header[random1].title;
document.querySelector("#subTitlePage").innerText = db_header[random1].subTitle;


/* Control de acceso */
if (parametros === undefined) {
    RemderLoaderMore();
    ActiveAge();
} else {
    const IntAge = parseInt(parametros);
    if (IntAge <= 2025 && IntAge >= 1996) {
        ActiveAge(IntAge);
        breadcrumb(IntAge);
    } else {

    }
    ShowsMoviesAllListForAge(IntAge);

}

function ActiveAge(e) {
    if (e <= 2015 && e > 2006) {
        document.querySelector('.id_tab_2015').classList.add("active");
        document.querySelector('#id_tab_2015').classList.add("active");
    } else if (e <= 2005 && e > 1996) {
        document.querySelector('.id_tab_2005').classList.add("active");
        document.querySelector('#id_tab_2005').classList.add("active");
    } else {
        document.querySelector('.id_tab_2025').classList.add("active");
        document.querySelector('#id_tab_2025').classList.add("active");
    }
    try {

        document.querySelector(`[href="movie.html?${e}"]`).classList.add("btn-primary");
        document.querySelector(`[href="movie.html?${e}"]`).classList.remove("bg-filter");

    } catch (error) {

    }
}
/*-------------------------------
    Home
-------------------------------*/
function RemderLoaderMore() {
    // Section list de Moves
    const ol = document.createElement("ol");
    ol.classList.add("d-flex", "flex-wrap", "list-unstyled");
    ol.setAttribute("id", "MoviesListForAge")
    ol.setAttribute("data-aos", "fade-up")
    $listMovies = ol;
    $main.append($listMovies);
    // oservador para cargar mas peliculas
    const section = document.createElement("section");
    section.classList.add("form-text", "text-center");
    section.innerText = "Up! ... Go of End."
    observer.observe(section)
    $main.append(section);

}

function breadcrumb(IntAge) {
    const $breadcrumbAge = document.querySelector(".breadcrumb-age");
    $breadcrumbAge.setAttribute("href", `movie.html?${IntAge}`);
    $breadcrumbAge.innerHTML = IntAge;
}

function MoreMovies() {
    let end = lsD + 12
    for (let i = lsD; i < end; i++) {
        if (i < data.length) {
            RenderMove(shuffleData[i]);
        }
    }
    lsD = end;
}
/*-------------------------------
Mostrar peliculas por año
-------------------------------*/

function ShowsMoviesAllListForAge(mAge) {
    const ol = document.createElement("ol");
    ol.classList.add("row", "list-unstyled");
    ol.setAttribute("id", "MoviesListForAge")
    ol.setAttribute("data-aos", "fade-up")
    $listMovies = ol;
    $main.append($listMovies);
    data.map((item) => {
        if (item.age == mAge) {
            RenderMove(item);
        }
    });

}

function RenderMove(item, DOM) {
    const li = document.createElement("li");
    li.classList.add("rounded-3", "shadow-lg", "col-4", "col-md-3", "col-lg-2", "posterOfmovies");
    li.setAttribute("data-aos", "zoom-in")

    const a = document.createElement("a");
    a.classList.add("text-light", "w-100", "h-100", "d-flex", "flex-column")
    a.setAttribute("href", "itme_movie.html?" + item.id);

    const img = document.createElement("img");
    img.setAttribute("src", `movie/${item.age}/${item.id}/poster.jpg`);
    img.classList.add("w-100", "border");
    a.append(img);

    li.append(a);
    if (DOM === undefined) {
        $listMovies.append(li)

    } else {
        DOM.append(li)
    }

};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}