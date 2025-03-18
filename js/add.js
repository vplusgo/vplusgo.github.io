const data = db;



document.querySelector("#plkpkfap").addEventListener("click",()=>{
    const t = document.querySelector("#asafef").value;
    const ghte = document.querySelector("#ghte").value;
    const age = document.querySelector("#owiiwe").value;
    const saafaf = document.querySelector("#saafaf").value;
    const jifje = document.querySelector("#jifje").value;
    const fjfhs = document.querySelector("#fjfhs").value;
    const cmancna = document.querySelector("#cmancna").value;
    const cascasc = document.querySelector("#cascasc").value;
    const asacsca = document.querySelector("#asacsca").value;
    const gojrgsojgs = document.querySelector("#gojrgsojgs").value;

    const j = {
        id:t.replace(/\s+/g, '_'),
        name:ghte,
        title:t,
        url:gojrgsojgs,
        age:age,
        language:saafaf,
        sub:jifje,
        description:fjfhs,
        duration:cmancna,
        director:cascasc,
        producedBy:asacsca,
    }
    data.push(j);

    const temp =`
    {
        id:"${t.replace(/\s+/g, '_')}",
        name:"${ghte}",
        title:"${t}",
        url:"${gojrgsojgs}",
        age:"${age}",
        language:"${saafaf}",
        sub:${jifje},
        description:"${fjfhs}",
        duration:"${cmancna}",
        director:"${cascasc}",
        producedBy:"${asacsca}",
    }
    `;
    document.querySelector("#ckaosk").value = temp;


});




function namea() {
    let t = "";
    t+=`(function(window, document) {
    const data =[
    `
    data.map((item)=>{
    t+=`    {
            id:"${item.id}",
            name:"${item.name}",
            title:"${item.title}",
            url:"${item.url}",
            age:"${item.age}",
            language:"${item.language}",
            sub:${item.sub},
            description:"${item.description}",
            duration:"${item.duration}",
            director:"${item.director}",
            producedBy:"${item.producedBy}"	
        },`
    });
    t+=`]

    if (typeof window.db === "undefined") {
        window.db = data;
    } else {
        console.log("Error en la lib ...")
    }
    })(window, document);`
    document.querySelector("#ckaosk").value = t;

}

document.querySelector("#cajscjasp").addEventListener("click",()=>{
    namea();
    console.log(data);
    document.querySelector("#ckaosk").focus()
    document.execCommand("selectAll");
    document.execCommand("copy");
});



function agag(){
    data.map((item)=>{
        if (item.age == 2024) {
            

        const li = document.createElement("li");
        li.classList.add("d-flex");

        const poster = document.createElement("img");
        const urlP = `movie/${item.age}/${item.id}/poster.jpg`;
        poster.setAttribute("src",urlP);
        poster.setAttribute("width",100);
        poster.setAttribute("height",175);
        li.append(poster);

        const div = document.createElement("div");

        const fanart = document.createElement("img");
        const urlF = `movie/${item.age}/${item.id}/background.jpg`;
        fanart.setAttribute("src",urlF);
        fanart.setAttribute("width",175);
        fanart.setAttribute("height",100);
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
agag();