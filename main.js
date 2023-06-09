let nav__ul = document.querySelector(".nav__ul")
let burger = document.querySelector(".burger")
const handleClick = () => {
    nav__ul.classList.toggle("active_nav__ul")
}
burger.addEventListener("click", handleClick)