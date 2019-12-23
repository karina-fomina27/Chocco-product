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

// Слайдер "меню"
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

// Слайд-шоу "отзывы"
(function () {
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

// Open Page Scroll
const section = $('.section');
const display = $('.maincontent');
let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const performTransition = sectionEq => {
  if (inScroll) return;

    inScroll = true;

    const transitionIsOver = 1000;
    const mouseInversionIsOver = 300;

    const position = sectionEq * -100;

    if (isNaN(position)) console.error("передано неверное значение в performTransition")

    section.eq(sectionEq).addClass("active").siblings().removeClass("active");

    display.css({
      transform: `translateY(${position}%)`
    });

    setTimeout(() => {
      inScroll = false;

    $(".fixed-menu__item")
    .eq(sectionEq)
    .addClass("fixed-menu__dot--active")
    .siblings()
    .removeClass('fixed-menu__dot--active')
    }, transitionIsOver + mouseInversionIsOver);

  }

  const scrollToSection = direction => {
  const activeSection = section.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();
  

  if (direction == "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction == "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }

};

$(window).on("wheel", e => {

  const deltaY = e.originalEvent.deltaY;

  console.log(deltaY);

  if (deltaY > 0) {

    scrollToSection("next");
  }

  if (deltaY < 0) {
    scrollToSection("prev");

  }

});

$(document).on('keydown', e => {

  const tagName = e.target.tagName.toLowerCase();
  const userTypingInInputs = tagName != 'input' && tagName != "textarea"

  if (userTypingInInputs) {
    switch (e.keyCode) {
      case 38:
        scrollToSection('prev');
        break;

      case 40:
        scrollToSection('next');
        break;
    }
  }
});

$("[data-scroll-to]").on("click", e =>{
 e.preventDefault();

 const $this = $(e.currentTarget);
 const target = $this.attr("data-scroll-to");

 performTransition(target);

});
// Open Page Scroll для мобильной версии
if (isMobile){
  $("body").swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    const scrollDirection = direction == 'up' ? "next" : "prev";
  
    scrollToSection(scrollDirection);
    }
  });
  
}

var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 



// Воспроизведение видео

let video;
let durationControl; 
let soundControl;
let intervalId;

// документ полностью загружен
$().ready(function(){
    video = document.getElementById("player"); 

    // вешаем обработчик события onclick на тег video
    video.addEventListener('click', playStop);

    // обработчики событий для кнопок play
    let playButtons = document.querySelectorAll(".duration__play");
    for (let i = 0; i < playButtons.length;i++){
        playButtons[i].addEventListener('click',playStop);
    }

    // обработчик событий для кнопки динамик
    let micControl = document.getElementById("mic");
    micControl.addEventListener('click',soundOf)
    
    // обработчики событий для ползунка продолжительности видео
    durationControl = document.getElementById("durationLevel");    
    durationControl.addEventListener('click',setVideoDuration);
    durationControl.addEventListener('onmousemove',setVideoDuration);
    durationControl.addEventListener('mousedown', stopInterval); 
    durationControl.min = 0;
    durationControl.value = 0;    

    // обработчики событий для ползунка громокости
    soundControl = document.getElementById("micLevel");    
    soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('onmousemove', changeSoundVolume);

    // задаем максимальные и минимальные значения громокости
    soundControl.min = 0;
    soundControl.max = 10;
    // присваиваем ползунку максимальное значение
    soundControl.value = soundControl.max;
    
});


function playStop(){
  durationControl.max = video.duration;
  if (video.paused){
      video.play();
      intervalId = setInterval(updateDuration, 1000/66)
      $(".video__player-img").addClass("video__player-img--active");
      $(".duration__play").addClass("duration__play--active");
  } else{
      video.pause();  
      clearInterval(intervalId);
      $(".video__player-img").removeClass("video__player-img--active");
      $(".duration__play").removeClass("duration__play--active"); 
  }
}

/*
    Управление звуком
*/
function soundOf(){    
    /*
        Делаем проверку уровня громкости. 
        Если у нас нашего видео есть звук, то мы его выключаем. 
        Предварительно запомнив текущую позицию громкости в переменную soundLevel
    */
    if (video.volume ===0){
        video.volume = soundLevel;
        soundControl.value = soundLevel*10;
    }else{
        /*
            Если у нашего видео нет звука, то выставляем уровень громкости на прежний уровень.
            Хранится в перменной soundLevel
        */
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }    
}

function stopInterval(){
    clearInterval(intervalId);
}

/*
    Реализует возможность перемотки нашего видео
*/
function setVideoDuration(){
    video.currentTime = durationControl.value;   
    intervalId = setInterval(updateDuration,1000/66);    
}

/*
    Управление звуком видео
*/
function changeSoundVolume(){
    /*
        Св-во volume может принимать значения от 0 до 1
        Делим на 10 для того что бы, была возможность более точной регулировки видео. 
    */
    video.volume = soundControl.value/10;  
}

/*
  Функция для обновления позиции ползунка продолжительности видео.   
*/
function updateDuration(){    
    durationControl.value = video.currentTime;
}


