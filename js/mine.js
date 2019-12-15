//Горизонтальный аккордион 

$(function () {
  var btn = $('.accordion__img');

  var active = "menu_list-item_active";

  btn.click(function (event) {
    event.preventDefault();
    var parent = $(this).parent();

    if (parent.hasClass(active)) {

      parent.removeClass(active);

    } else {

      btn.parent().removeClass(active);
      parent.addClass(active);
    }

  });
});

// Модальное окно "Меню"

// document.getElementById('burger-wrap').addEventListener('click', function(){
// document.getElementById('mymodal').classList.add('modal--active');
// });



// Вертикальный аккордион
const trianglesList = Array.from(document.querySelectorAll('.worker__name-pic'));

for (let triangle of trianglesList) {

  triangle.addEventListener('click', function (e) {
    e.target.classList.toggle('worker__name-pic--rotated');
    const elemToShow = e.target.parentElement.parentElement.querySelector('.worker__descrip');
    elemToShow.classList.toggle('worker__descrip--expanted');

  });

}

// Бургер меню + модальное окно
const mymodal = document.querySelector("#mymodal");
const burgerOpen = document.querySelector("#burger-wrap");
const close = document.querySelector(".burger_active");

burgerOpen.addEventListener("click", function () {
  mymodal.classList.toggle("modal--active");
  document.body.classList.toggle("body--active ");
});

close.addEventListener("click", function () {
  mymodal.classList.toggle("modal--active");
  document.body.classList.toggle("body--active");
  console.log('click');
});

