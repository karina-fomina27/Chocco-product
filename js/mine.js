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
  document.body.classList.toggle("body--active");
});

close.addEventListener("click", function () {
  mymodal.classList.toggle("modal--active");
  document.body.classList.toggle("body--active");
  console.log('click');
});


$(function () {

  $('.slider_right').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
      container = $this.closest('.container__product_prise'),
      items = container.find('.slider_item'),
      activeSlide = items.filter('.active'),
      reqItem = activeSlide.next(),
      reqIndex = reqItem.index(),
      list = container.find('.slider_list'),
      duration = 500;

    if (reqItem.length) {
      list.animate({

        'left': - reqIndex * 100 + '%'
      }, duration, function () {

        activeSlide.removeClass('active');
        reqItem.addClass('active');

      });
    }

  });

  $('.slider_left').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
      container = $this.closest('.container__product_prise'),
      items = container.find('.slider_item'),
      activeSlide = items.filter('.active'),
      reqItem = activeSlide.prev(),
      reqIndex = reqItem.index(),
      list = container.find('.slider_list'),
      duration = 500;

    if (reqItem.length) {
      list.animate({

        'left': - reqIndex * 100 + '%'
      }, duration, function () {

        activeSlide.removeClass('active');
        reqItem.addClass('active');

      });
    }
  });


});

// Слайд-шоу
(function() {
  let carouselItems = document.querySelectorAll('.carousel__item'),
    carouselItemsLength = carouselItems.length,
  reviewsBlockItems = document.querySelectorAll('.reviews-list__item');

  for (let i = 0; i < carouselItemsLength; ++i) {
    carouselItems[i].addEventListener('click', function (e) {
      for (let j = 0; j < carouselItemsLength; ++j) {
        carouselItems[j].classList.remove('carousel__item--active');
        reviewsBlockItems[j].classList.remove('reviews-list__item--active');
      };
      e.currentTarget.classList.add('carousel__item--active');
      reviewsBlockItems[i].classList.add('reviews-list__item--active');
    });
  }
})()

// scroll

// $(function(){
 
//   $ ('a[data-target^= "anchor"]').bind('click.smoothscroll', function(){
//    var target = $(this).attr('href'),
//     bl_top = $(target).offset().top
//     $('body, html').animate({
//       scrollTop:bl_top
//     },700)
//     return false;
//   })
// });

// var scrollLink = document.querySelectorAll(".fixed-menu__dot");

// scrollLink.forEach(el =>
//   el.addEventListener("click", function (e) {
//     scrollLink.forEach(el => el.classList.remove("fixed-menu__dot--active"));
//     el.classList.toggle("fixed-menu__dot--active");
//   }));

const section = $('.section');
const display = $('.maincontent');

