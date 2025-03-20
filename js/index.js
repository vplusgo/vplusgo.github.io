/*---- import Variables ----*/
const data = db;

let desData = shuffleArray(data);

/* Variables globales */
let listHeader = [
    "Flight_Risk",
    "Venom_The_Last_Dance",
    "Alarum",
    "Wallace_&_Gromit_Vengeance_Most_Fowl",
    "Sons"
];

/* Variables DOM */


listHeader = listHeader.map((e) => {
    return data.filter(item => item.id == e)[0]
});
const $listHeaderMovies = document.querySelector("#carousel-header .list");
const $thumbnail = document.querySelector("#carousel-header .thumbnail");
listHeader.forEach(e => {
    const article = document.createElement("article");
    article.classList.add("item");

    const bImg = document.createElement("img");
    bImg.setAttribute("src", `movie/${e.age}/${e.id}/background.jpg`);
    article.append(bImg);

    const content = document.createElement("div");
    content.classList.add("content");

    const author = document.createElement("p");
    author.classList.add("author");
    author.innerText = e.name;
    content.append(author);

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = e.title;
    content.append(title);

    const des = document.createElement("div");
    des.classList.add("des", "mb-2");
    des.innerText = e.description;
    content.append(des);

    const hr = document.createElement("hr");
    content.append(hr);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const play = document.createElement("a");
    play.setAttribute("href", `itme_movie.html?${e.id}`);
    play.classList.add("btn", "btn-primary");
    play.innerHTML = '<i class="fa-duotone fa-play"></i> Play';
    buttons.append(play)

    const link = document.createElement("a");
    link.setAttribute("href", e.url);
    link.setAttribute("target", "_blank");
    link.classList.add("btn", "mx-3");
    link.innerHTML = '<i class="fa-duotone fa-link-simple"></i> Link Download';
    buttons.append(link)

    content.append(buttons);
    article.append(content)

    $listHeaderMovies.append(article);

    const articleT = document.createElement("article");
    articleT.classList.add("item");

    const img = document.createElement("img");
    img.setAttribute("src", `movie/${e.age}/${e.id}/poster.jpg`);
    articleT.append(img);

    $thumbnail.append(articleT)
});

function SearchMoves(id) {
    return data.filter((item) => {
        if (item.id == id) {
            return item;
        }
    })[0]
}



/* --------------------------------
    Carusel
-------------------------------- */

let allCalasif = [];
data.forEach(element => {
    element.classifications.forEach(e => {
        if (allCalasif.indexOf(e) == -1)
            allCalasif.push(e)
    });
});
/* De la semana */
const $listDeLaSemana = document.querySelector("#listDeLaSemana");
for (let i = 0; i < 15; i++) {
    newItemCarusel(desData[i], $listDeLaSemana);
}
/* Peliculas */
const $listPeliculas = document.querySelector("#listPeliculas");
for (let i = 0; i < 15; i++) {
    newItemCarusel(data[Math.floor(Math.random() * data.length)], $listPeliculas);
}
const $classifications = document.querySelector(".classifications");
allCalasif.forEach(e => {
    const section = document.createElement("section");
    section.classList.add("container", "my-3", "carousel-index");

    const span = document.createElement("span");
    span.classList.add("display-5", "w-100", "d-flex", "align-items-center");
    span.innerHTML = e;

    const article = document.createElement("article");
    article.classList.add("d-flex", "align-items-center", "ms-auto");

    const prev = document.createElement("button");
    prev.classList.add("btn", "border-0", "prev");
    prev.setAttribute("data-id", `#id_clasif${e}`);
    prev.innerHTML = '<i class="fa-duotone fa-angles-left"></i>';
    article.append(prev);

    const next = document.createElement("button");
    next.classList.add("btn", "border-0", "next");
    next.setAttribute("data-id", `#id_clasif${e}`);
    next.innerHTML = '<i class="fa-duotone fa-angles-right"></i>';
    article.append(next);

    span.append(article);

    section.append(span);

    const div = document.createElement("div");
    div.classList.add("carousel", "d-flex", "overflow-x-auto");
    div.setAttribute("id", `id_clasif${e}`);

    section.append(div)
    $classifications.append(section);

    let list = shuffleArray(
        desData.filter(element => {
            if (element.classifications.indexOf(e) != -1)
                return element;
        })
    );
    list.forEach(element => {
        newItemCarusel(element, div);
    });
});

document.querySelectorAll(".carousel-index .next").forEach(element => {
    element.addEventListener("click", () => {
        const id = element.getAttribute("data-id");
        const $cont = document.querySelector(id);
        $cont.scrollLeft = $cont.scrollLeft + 250;
    });
});
document.querySelectorAll(".carousel-index .prev").forEach(element => {
    element.addEventListener("click", () => {
        const id = element.getAttribute("data-id");
        const $cont = document.querySelector(id);
        console.log($cont.scrollLeft);
        $cont.scrollLeft = $cont.scrollLeft - 250;
    });
});

function newItemCarusel(e, DOM) {
    const article = document.createElement("article");
    article.classList.add("col-4", "col-md-3", "col-lg-2", "position-relative", "carousel-items");

    const img = document.createElement("img");
    img.classList.add("w-100", "h-poster");
    img.setAttribute("src", `movie/${e.age}/${e.id}/poster.jpg`);
    article.append(img);

    const div = document.createElement("div");
    div.classList.add("info", "position-absolute", "top-0", "start-0", "w-100", "h-100", "d-flex", "flex-column", "bg-filter");

    const h3 = document.createElement("h3");
    h3.classList.add("h5", "mt-auto", "text-center");
    h3.innerText = e.title;
    div.append(h3);

    const span = document.createElement("span");
    span.classList.add("w-50", "mx-auto");
    if (e.sub) {
        span.innerHTML = `<i class="fa-duotone fa-credit-card-blank"></i> | ${e.duration}`;
    } else {
        span.innerHTML = `${e.duration}`;
    }
    div.append(span);

    const dDiv = document.createElement("div");
    dDiv.classList.add("d-flex", "rounded-pill", "border", "mx-auto", "my-1", "bg-filter");


    const a1 = document.createElement("a");
    a1.classList.add("btn", "btn-sm", "btn-primary", "rounded-pill");
    a1.setAttribute("href", `itme_movie.html?${e.id}`);
    a1.innerHTML = `<i class="fa-duotone fa-play"></i> Play`;
    dDiv.append(a1);

    const a2 = document.createElement("a");
    a2.classList.add("btn", "btn-sm");
    a2.setAttribute("href", e.url);
    a2.setAttribute("target", "_blank");
    a2.innerHTML = `<i class="fa-duotone fa-link-simple"></i> Link`;
    dDiv.append(a2);

    div.append(dDiv);

    article.append(div);
    DOM.append(article);

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}