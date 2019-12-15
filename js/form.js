const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function(event){
event.preventDefault();

if(validateForm(myForm)){

}

});

function validateForm(form) {
  let valid = true;

  if(!validateField(form.elements.name)) {
    valid = false;
  }
  if(!validateField(form.elements.phone)) {
    valid = false;
  }

  return valid;
}






