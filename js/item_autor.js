const data = db;
const url = window.location.href;

const parametros = url.split('?')[1].replace(/%20/g, ' ');

const $name = document.querySelectorAll(".name");
const $movieR = document.querySelector("#movieR");


$name.forEach(element => {
    element.innerHTML = parametros;
});

data.forEach(element => {
    if (element.producedBy.indexOf(parametros) != -1) {
        RenderMove(element);
    }
});

function RenderMove(element) {
    const div = document.createElement("a");
    div.classList.add("col-4", "col-md-3", "col-lg-2");
    div.setAttribute("href", `../itme_movie.html?${element.id}`);

    const img = document.createElement("img");
    img.classList.add("w-100");
    img.setAttribute("src", `../movie/${element.age}/${element.id}/poster.jpg`);
    div.append(img);
    $movieR.append(div);
}


console.log(parametros);