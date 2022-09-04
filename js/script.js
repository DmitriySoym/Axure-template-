/*----menu burger------*/

const menuBurgerActive = document.querySelector(".burgermenu");
//console.log(menuBurgerActive);
const naveActive = document.querySelector(".menu");
menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});

/*--------slider-------------*/
const parent = document.querySelector(".slide_navigation");
const labelItem = parent.querySelectorAll(".bar");
parent.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("bar")) {
    for (let i = 0; i < labelItem.length; i++) {
      // Убираем у других
      labelItem[i].classList.remove("activelabel");
    }
    // Добавляем тому на который нажали
    target.classList.add("activelabel");
  }
});
