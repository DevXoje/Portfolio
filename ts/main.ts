// Toggle Navbar
const btn_burger = document.querySelector(".navbar-toggler-icon") as HTMLLIElement;

btn_burger.onclick = () => {
	const listLinks = btn_burger.parentElement?.querySelector(".list-group") as HTMLUListElement;
	if (listLinks.style.display == "none"
	) {
		listLinks.style.display = "flex";
	} else {
		listLinks.style.display = "none"
	}
}

// Toggle Bg-c Navbar
const navbar = document.getElementById("navbar") as HTMLDivElement;
window.addEventListener("scroll", () => {
	let transparencia = (window.scrollY <= navbar.scrollHeight) ? "0" : "0.7";
	navbar.style.backgroundColor = `rgba(0, 0, 0, ${transparencia})`;
});








//Nav section hover 
//console.log(pageYOffset, document.getElementById("home")?.scrollHeight)
const hijos = document.querySelector(".container") as HTMLDivElement;
const articulos = hijos.querySelectorAll("article");
const nav = document.getElementById("navbar") as HTMLDivElement;
const botones = nav.querySelectorAll(".list-group-item");

for (let i = 0; i < articulos.length; i++) {
	const articulo = articulos[i];
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