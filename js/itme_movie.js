const data = db;
const url = window.location.href;


const parametros = url.split('?')[1];

document.title = `Vplus | ${parametros}`;

const item = data.filter(e => e.id == parametros)[0];

const $LinkDownload = document.querySelector("#LinkDownload");
const $VerTrailer = document.querySelector(".VerTrailer");
const $background = document.querySelector(".background-header-movies");
const $title = document.querySelector(".movie-title");
const $poster = document.querySelector(".posterDOM");
const $name = document.querySelector(".name");
const $description = document.querySelector(".description");
const $age = document.querySelector(".age");
const $sub = document.querySelector(".sub");
const $duration = document.querySelector(".duration");
const $director = document.querySelector(".director");
const $ProducedBy = document.querySelector(".ProducedBy");
const $classifications = document.querySelector(".classifications");

const $breadcrumbAge = document.querySelector(".breadcrumb-age");
const $breadcrumbTitle = document.querySelector(".breadcrumb-title");

breadcrumb(item);

function breadcrumb(item) {
    $breadcrumbAge.setAttribute("herf", `itme_movie.html?${item.age}`);
    $breadcrumbAge.innerText = item.age;
    $breadcrumbTitle.innerText = item.title
}

RenderMove(item);

function RenderMove(e) {
    $LinkDownload.setAttribute("href", e.url);
    $VerTrailer.setAttribute("href", e.tutorial);

    $background.style.background = `url(movie/${e.age}/${e.id}/background.jpg)`;
    $background.style.backgroundSize = "cover";
    $background.style.backgroundPosition = "center";
    $title.innerHTML = e.title;
    $poster.setAttribute("src", `movie/${e.age}/${e.id}/poster.jpg`);
    $name.innerHTML = e.name;
    $description.innerHTML = e.description;

    e.classifications.forEach((e) => {
        const a = document.createElement("a");
        a.classList.add("btn", "bg-filter", "rounded-pill", "mx-1", "border");
        a.setAttribute("href", "#");
        a.innerText = e;
        $classifications.append(a);
    });
    $age.innerHTML = e.age;

    if (!e.sub) {
        $sub.remove();
    }
    $duration.innerHTML = e.duration;
    $director.innerHTML = e.director;

    e.producedBy.forEach(element => {
        const a = document.createElement("a");
        a.classList.add("d-flex", "flex-column", "align-items-center", "mx-2", "text-center", "col-2");
        a.setAttribute("href", `/pages/item_actor.html?${element}`);

        const img = document.createElement("img");
        img.classList.add("rounded-circle", "shadow-lg", "border");
        img.width = 64;
        img.height = 64;
        img.setAttribute("src", "img/Autor/luca-avatar.png");
        a.append(img);

        const span = document.createElement("span");
        span.innerText = element;
        a.append(span);

        $ProducedBy.append(a);
    });
}

/* Sugencias de peliculas*/
const $Sugencias = document.querySelector(".Sugencias");
let suge = []

item.classifications.forEach(c => {
    data.forEach(element => {
        if (element.classifications.indexOf(c) != -1 &&
            suge.indexOf(element) == -1 &&
            element.id != item.id)
            suge.push(element);
    })
});
suge = shuffleArray(suge);

suge.forEach(e => {
    const article = document.createElement("article");
    article.classList.add("col-4", "col-md-3", "col-lg-2", "my-2");

    const a = document.createElement("a");
    a.classList.add("w-100", "h-100");
    a.setAttribute("href", `itme_movie.html?${e.id}`);

    const img = document.createElement("img");
    img.setAttribute("src", `movie/${e.age}/${e.id}/poster.jpg`);
    img.classList.add("w-100", "border", "shadows-lg");
    a.append(img);

    article.append(a);
    $Sugencias.append(article);

});







function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}