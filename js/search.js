
// NavBar
const NavSearch = document.querySelector("#NavSearch");
const listNavSearch = document.querySelector("#listNavSearch");
const LabelNavSearch = document.querySelector("#LabelNavSearch");

NavSearch.addEventListener("focus",()=>{
    NavSearch.classList.add("hide");
    LabelNavSearch.classList.add("d-none");
    listNavSearch.classList.add("hide");

});
NavSearch.addEventListener("blur",()=>{
    NavSearch.classList.remove("hide");
    LabelNavSearch.classList.remove("d-none");
    listNavSearch.classList.remove("hide");
});