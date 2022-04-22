const elhamburgerBtn = document.querySelector(".header__hamburger")
const elheader = document.querySelector(".header")
elhamburgerBtn.addEventListener("click", () => {
    elheader.classList.toggle("header--open")
})