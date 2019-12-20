
const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');
const modal = document.querySelector(".order_modal");
const container = document.querySelector(".order_modal_container");
const sendOpen = document.querySelector("#sendButton");
const hiding = document.querySelector(".order-link");
const text = document.querySelector (".order_modal-title")
const body = document.querySelector('.body');

 myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', myForm.elements.name.value);
  formData.append('phone', myForm.elements.phone.value);
  formData.append('comment', myForm.elements.comment.value);
  formData.append('to', 'form@gmail.com');

   var xhr = new XMLHttpRequest();
   xhr.responseType = 'json';
   xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
   xhr.send(formData);
   xhr.onerror = function(){
   
   }
   xhr.addEventListener('load', () => {
   
    modal.classList.add('order_modal--active');
    text.textContent = xhr.response.message;

    hiding.addEventListener('click', () => {
      modal.classList.remove('order_modal--active');
     
    })
  
});

});


function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.pcomment)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSiblink.textContent = field.validationMassage;

  return field.checkValidity();

}




//   const modal = document.querySelector(".order_modal");
//   const sendOpen = document.querySelector("#sendButton");
//   const hiding= document.querySelector(".order-link");
  
//   sendOpen.addEventListener("click", function () {
//     modal.classList.toggle("order_modal--active");
   
//   });
  
//   hiding.addEventListener("click", function () {
//     modal.classList.toggle("order_modal--active");
//     console.log('click');
//   });
// });