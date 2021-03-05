"use strict";
// Toggle Navbar
var btn_burger = document.querySelector(".navbar-toggler-icon");
btn_burger.onclick = function () {
    var _a;
    var listLinks = (_a = btn_burger.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".list-group");
    if (listLinks.style.display == "none") {
        listLinks.style.display = "flex";
    }
    else {
        listLinks.style.display = "none";
    }
};
// Toggle Bg-c Navbar
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    var transparencia = (window.scrollY <= navbar.scrollHeight) ? "0" : "0.7";
    navbar.style.backgroundColor = "rgba(0, 0, 0, " + transparencia + ")";
});
//Nav section hover 
//console.log(pageYOffset, document.getElementById("home")?.scrollHeight)
var hijos = document.querySelector(".container");
var articulos = hijos.querySelectorAll("article");
var nav = document.getElementById("navbar");
var botones = nav.querySelectorAll(".list-group-item");
for (var i = 0; i < articulos.length; i++) {
    var articulo = articulos[i];
    //	console.log(articulo);
    //	console.log(articulo.scrollHeight);
    if (pageYOffset >= articulo.scrollHeight && pageYOffset < articulos[i + 1].scrollHeight) {
    }
}
/**document.addEventListener("scroll", () => {
    if (window.pageYOffset != undefined) {
        console.log([pageXOffset, pageYOffset]);
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        console.log([sx, sy]);
    }
});*/ 
