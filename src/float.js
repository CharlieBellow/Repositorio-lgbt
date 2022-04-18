/*let filtro = document.querySelector(".filter__ret--purple");


filtro.onclick = function () {
	filtro.classList.toggle("active");
};*/

let icon = document.querySelector(".ion-icon"); 
let filtro = document.querySelector(".filter__ret--purple");

let form = document.querySelector(".filter__form");

filtro.onclick = function () {
  filtro.classList.toggle("active");
  form.classList.toggle("active");
  icon.classList.toggle('active');
};

