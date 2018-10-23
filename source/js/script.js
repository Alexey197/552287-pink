var burger = document.querySelector(".main-nav__button--burger");
var cross = document.querySelector(".main-nav__button--cross");
var menu = document.querySelector(".site-list");
var tops = document.querySelector(".top-menu");
var downloader = document.querySelector(".page-header__download");

burger.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("site-list__open");
  tops.classList.add("top-menu--close");
  downloader.classList.add("page-header__download--menu")
});

cross.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("site-list__open");
  tops.classList.remove("top-menu--close");
});
