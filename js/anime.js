const data = db;
const db_header_img = listHeaderImgAnime;



const imgHeader = db_header_img[Math.floor(Math.random() * db_header_img.length)]
document.querySelector("#header_img").setAttribute("src", `img/AnimeSinFondo/${imgHeader.url}`);