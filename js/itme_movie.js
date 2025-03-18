const data = db;
const url = window.location.href;


const parametros = url.split('?')[1];

const item = data.filter(e => e.id == parametros)[0];

const $LinkDownload = document.querySelector("#LinkDownload");
const $background = document.querySelector(".background-header-movies");
const $title = document.querySelector(".movie-title");
const $poster = document.querySelector(".posterDOM");
const $name = document.querySelector(".name");
const $description = document.querySelector(".description");
const $sub = document.querySelector(".sub");
const $duration = document.querySelector(".duration");
const $ProducedBy = document.querySelector(".ProducedBy");


RenderMove(item);

function RenderMove(e) {
    $LinkDownload.setAttribute("href", e.url);
    $background.style.background = `url(../movie/${e.age}/${e.id}/background.jpg)`;
    $background.style.backgroundSize = "cover";
    $background.style.backgroundPosition = "center";
    $title.innerHTML = e.title;
    $poster.setAttribute("src", `movie/${e.age}/${e.id}/poster.jpg`);
    $name.innerHTML = e.name;
    $description.innerHTML = e.description;
    if (!e.sub) {
        $sub.remove();
    }
    $duration.innerHTML = e.duration;

    e.producedBy.forEach(element => {
        const a = document.createElement("a");
        a.classList.add("d-flex", "flex-column", "align-items-center", "mx-2", "text-center", "col-2");
        a.setAttribute("href", "#");

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

const $btn_play_tailer = document.querySelector(".play-tailer");
const $iframeTrailer = document.querySelector(".iframe-trailer");
const $panelTrailer = document.querySelector(".panel-trailer");


$btn_play_tailer.addEventListener("click", () => {
    $btn_play_tailer.classList.add("play");
    $iframeTrailer.setAttribute("src", "#");

    setTimeout(() => {
        $panelTrailer.classList.add("hidden");
    }, 3000);
});