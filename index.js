let hamBurger = document.querySelector("#hamburger img");
let navBar = document.querySelector("#nav-bar");

hamBurger.addEventListener("click", hamBurgerFunction);

status = "OFF";
function hamBurgerFunction() {
    if(status === "OFF"){
    navBar.setAttribute("style", "display: grid !important;");
    hamBurger.setAttribute("src", "./images/icon-close.svg");
    status = "ON"
    } else{
        navBar.setAttribute("style", "display: none !important;");
    hamBurger.setAttribute("src", "./images/icon-hamburger.svg");
    status = "OFF"
    }
}