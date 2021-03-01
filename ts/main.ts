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

// Toggle navbar transparence
let navigation = document.querySelector('.navbar') as HTMLMenuElement;
window.addEventListener("scroll", (e) => {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		navigation.classList.add('fadein');
		navigation.classList.remove('hide');
	} else {
		navigation.classList.add('hide');
	}
}
);


/*const newNav = () => {
  let navigation = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
	if(document.body.scrollTop > 300 ||document.documentElement.scrollTop > 300 ) {
	  navigation.classList.add('fadein');
	  navigation.classList.remove('hide');
	} else {
	  navigation.classList.add('hide');
	}
  });

}

newNav();*/