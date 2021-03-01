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
// Toggle navbar transparence
var navigation = document.querySelector('.navbar');
window.addEventListener("scroll", function (e) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navigation.classList.add('fadein');
        navigation.classList.remove('hide');
    }
    else {
        navigation.classList.add('hide');
    }
});
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
