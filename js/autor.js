const data = db;


let listAutor = [];
data.forEach(element => {
    element.producedBy.forEach(e => {
        if (listAutor.indexOf(e) == -1) {
            listAutor.push(e);
        }
    });
})

const $listActor = document.querySelector(".listActor");
const $InputSearch = document.querySelector("#InputSearch");

RenderGroupAndSort();
const $random = document.querySelector("#Random");
$random.addEventListener("click", () => {
    $listActor.innerHTML = "";
    shuffleArray(listAutor).forEach(element => {
        RenderAutor(element);
    });
});

const $GroupAndSort = document.querySelector("#GroupSort");
$GroupAndSort.addEventListener("click", () => {
    $listActor.innerHTML = "";
    RenderGroupAndSort();
});

function RenderGroupAndSort() {
    const list = GroupAndSort(listAutor);
    list.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("display-4", "border-bottom", "border-2", "bg-filter", "ps-3");
        div.innerText = element[0].charAt(0);
        $listActor.append(div)
        element.forEach(e => {
            RenderAutor(e);
        });
    });
}

function GroupAndSort(list) {
    let returnList = list.sort();

    returnList = returnList.reduce((accumulator, elemento) => {
        const firstLetter = elemento.charAt(0).toLowerCase();
        if (!accumulator[firstLetter]) {
            accumulator[firstLetter] = [];
        }
        accumulator[firstLetter].push(elemento);
        return accumulator;
    }, {});

    return Object.values(returnList);
};

$InputSearch.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    console.log(value);
    $listActor.innerHTML = "";
    Search(value).forEach(e => {
        RenderAutor(e);
    });
});

function Search(value) {
    return listAutor.filter(element => {
        if (element.toLowerCase().indexOf(value) != -1) {
            return element;
        }
    });
}


function RenderAutor(item, DOM) {
    const a = document.createElement("a");
    a.classList.add("w-100", "py-2", "bg-filter-hover");
    a.setAttribute("href", `item_actor.html?${item}`);
    a.innerText = item;

    $listActor.append(a);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}