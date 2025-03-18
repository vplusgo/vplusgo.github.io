document.querySelectorAll(".logoSite").forEach(element => {
    element.innerHTML =
        `<svg class="svg" viewBox="0 0 128.13 211.74">
            <defs>
                <style>
                    .cls-1{
                        fill:url(#Degradado_sin_nombre_29);
                    }
                    .cls-2{
                        fill:none;
                        stroke-miterlimit:10;
                        stroke-width:15px;
                        stroke:url(#Degradado_sin_nombre_29-2);
                    }
                </style>
                <linearGradient id="Degradado_sin_nombre_29" x1="96.75" y1="179.75" x2="153.82" y2="179.75" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#951b81"/>
                    <stop offset="1" stop-color="#312783"/>
                </linearGradient>
                <linearGradient id="Degradado_sin_nombre_29-2" x1="154.91" y1="286.17" x2="154.91" y2="74.42" xlink:href="#Degradado_sin_nombre_29"/>
            </defs>
            <title>Logo Site</title>
            <path class="cls-1" d="M101.59,126.41L153,177.74a2.83,2.83,0,0,1,0,4l-51.4,51.33a2.83,2.83,0,0,1-4.84-2V128.42A2.83,2.83,0,0,1,101.59,126.41Z" transform="translate(-90.85 -74.42)"/>
            <path class="cls-2" d="M99.44,81.92h12.65a3.27,3.27,0,0,1,2,.82L210.64,178a2.83,2.83,0,0,1,0,4l-95.82,95.82a2.83,2.83,0,0,1-2,.83H99.06a0.71,0.71,0,0,1-.5-1.21l97-95.76a2.83,2.83,0,0,0,0-4.05L98.94,83.14A0.71,0.71,0,0,1,99.44,81.92Z" transform="translate(-90.85 -74.42)"/>
        </svg>`
});

const navbar = document.querySelector("nav");
window.onscroll = () => {
    const sc = window.pageYOffset
    if (sc < 80) {
        navbar.classList.remove("nav-filter");
    } else {
        navbar.classList.add("nav-filter");
    }
}

setTimeout(() => {
    document.querySelector(".Loader .logoSite").classList.add("cl");
}, 1100);

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector(".logoSite").classList.remove("show", "cl");
        document.querySelector(".Loader").classList.add("hide");
    }, 3000);
});