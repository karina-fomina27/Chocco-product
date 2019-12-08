
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

// const elem = document.querySelector('burger-wrap')
// elem.addEventListener('click', function(){
// document.querySelector('modal').classList.add('modal_active');
// });

