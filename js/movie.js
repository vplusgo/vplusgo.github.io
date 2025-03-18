const data = db;
const db_header = header;
const url = window.location.href;


const parametros = url.split('?')[1];
const obtions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
}
const observer = new IntersectionObserver(MoreMovies, obtions);
let listMoviesHome = [];

// Variables DOM
let $listMovies;
const $main = document.querySelector("#main");

/* --------------------------------------------
    header
-------------------------------------------- */
const random1 = Math.floor(Math.random() * db_header.length);
const random2 = Math.floor(Math.random() * db_header.length);
document.querySelector("#titlePage").innerText = db_header[random1].title;
document.querySelector("#subTitlePage").innerText = db_header[random1].subTitle;


/* Control de acceso */
if (parametros === undefined) {
    RemderAge();
    RemderLoaderMore();
} else {
    let temp;
    for (let index = 2025; index > 2010; index--) {
        if (index == parseInt(parametros))
            temp = index;
    }
    RemderAge();
    document.querySelector("#age_" + temp).classList.add("btn-primary")
    ShowsMoviesAllListForAge(temp);

}

function RemderAge() {
    const section = document.createElement("section");
    section.setAttribute("data-aos", "fade-up")
    for (let index = 2025; index > 2010; index--) {
        const a = document.createElement("a");
        a.classList.add("btn", "bg-filter", "mx-1", "age");
        a.setAttribute("href", "movie.html?" + index);
        a.setAttribute("id", "age_" + index);
        a.innerHTML = index;
        section.append(a);
    }
    $main.append(section);
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
    section.classList.add("w-100", "d-flex", "z-3", "top-0", "start-0");
    section.setAttribute("data-aos", "fade-up")

    const div = document.createElement("div");
    div.classList.add("m-auto", "rounded-circle", "p-5", "border-bottom", "border-5", "fa-spin")
    section.append(div);
    observer.observe(section)
    $main.append(section);

}

function MoreMovies() {
    let cont = 1;
    while (cont < 10 && listMoviesHome.length != data.length) {
        if (listMoviesHome.length == data.length) {

        }
        const temp = data[Math.floor(Math.random() * data.length)];
        // if (listMoviesHome.filter(e => e.id == temp.id)[0] != undefined)
        //     break
        ShowMovie(temp);
        listMoviesHome.push(temp);
        cont++;
    }
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
            ShowMovie(item);
        }
    });

}

function ShowMovie(item, DOM) {
    const li = document.createElement("li");
    li.classList.add("rounded-3", "shadow-lg", "col-4", "col-md-3", "col-lg-2", "posterOfmovies");
    li.setAttribute("data-aos", "zoom-in")

    const a = document.createElement("a");
    a.classList.add("text-light", "w-100", "h-100", "d-flex", "flex-column")
    a.setAttribute("href", "itme_movie.html?" + item.id);

    const img = document.createElement("img");
    img.setAttribute("src", `movie/${item.age}/${item.id}/poster.jpg`);
    img.setAttribute("width", "100%");
    // img.setAttribute("height", 250);
    img.classList.add("rounded-3", "rounded-top");
    a.append(img);

    const p = document.createElement("p");
    p.classList.add("m-0", "my-1", "w-170");
    p.innerText = item.title;
    a.append(p);

    const div = document.createElement("div");
    div.classList.add("d-flex", "mt-auto");

    const span = document.createElement("span");
    span.innerText = ` ${item.duration} / `;
    div.append(span);

    const i = document.createElement("i");
    i.classList.add("fa-duotone", "fa-tasks-alt");
    div.append(i);

    const age = document.createElement("span");
    age.innerHTML = ` / ${item.age}`
    div.append(age);

    a.append(div);
    li.append(a);
    if (DOM === undefined) {
        $listMovies.append(li)

    } else {
        DOM.append(li)
    }

}