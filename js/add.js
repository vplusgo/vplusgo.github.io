const data = db;

document.querySelector("#plkpkfap").addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const name = document.querySelector("#name").value;
    const url = document.querySelector("#url").value;
    const age = document.querySelector("#owiiwe").value;
    const sub = document.querySelector("#sub").value;
    const fjfhs = document.querySelector("#fjfhs").value;
    const cmancna = document.querySelector("#cmancna").value;
    const cascasc = document.querySelector("#cascasc").value;
    const asacsca = document.querySelector("#asacsca").value;
    const tutorial = document.querySelector("#tutorial").value;
    const classifications = document.querySelector("#classifications").value;

    const NewItem = {
        id: title.replace(/\s+/g, '_'),
        name: name,
        title: title,
        url: url,
        age: parseInt(age),
        sub: (sub == "true") ? true : false,
        description: fjfhs,
        duration: cmancna,
        director: cascasc,
        producedBy: asacsca.split(","),
        tutorial: tutorial,
        classifications: classifications.split(",")
    };
    data.push(NewItem);
    console.log(NewItem);
    document.querySelector("#ckaosk").value = ViewCode(NewItem);

});

function ViewCode(NewItem) {
    return `,{
    id:"${NewItem.id}",
    name:"${NewItem.name}",
    title:"${NewItem.title}",
    url:"${NewItem.url}",
    age:${NewItem.age},
    sub:${NewItem.sub},
    description:"${NewItem.description}",
    duration:"${NewItem.duration}",
    director:"${NewItem.director}",
    producedBy:[${NewItem.producedBy.map(e => `"${e}"`)}],
    tutorial:"${NewItem.tutorial}",
    classifications:[${NewItem.classifications.map(e => `"${e}"`)}]
}`;
}

document.querySelector("#cajscjasp").addEventListener("click", () => {
    AllViewCode();
    document.querySelector("#ckaosk").focus()
    document.execCommand("selectAll");
    document.execCommand("copy");
});
function AllViewCode() {
    let text = `(function(window, document) {
    const data =[
    `;
    data.forEach(e => {
        text += ViewCode(e)
    })
    text += `]
    if (typeof window.db === "undefined") {
        window.db = data;
    } else {
        console.log("Error en la lib ...")
    }
    })(window, document);`
    document.querySelector("#ckaosk").value = text;
}



function agag() {
    data.map((item) => {
        if (item.age == 2024) {


            const li = document.createElement("li");
            li.classList.add("d-flex");

            const poster = document.createElement("img");
            const urlP = `movie/${item.age}/${item.id}/poster.jpg`;
            poster.setAttribute("src", urlP);
            poster.setAttribute("width", 100);
            poster.setAttribute("height", 175);
            li.append(poster);

            const div = document.createElement("div");

            const fanart = document.createElement("img");
            const urlF = `movie/${item.age}/${item.id}/background.jpg`;
            fanart.setAttribute("src", urlF);
            fanart.setAttribute("width", 175);
            fanart.setAttribute("height", 100);
            div.append(fanart);

            const h2 = document.createElement("h2");
            h2.innerText = item.title;
            div.append(h2);

            const p = document.createElement("p");
            p.innerText = item.description
            div.append(p);

            li.append(div)

            document.querySelector("#caejaep").append(li);
        }

    });

}

document.querySelector("#CopyNewItem").addEventListener("click", () => {
    document.querySelector("#ckaosk").focus()
    document.execCommand("selectAll");
    document.execCommand("copy");
});