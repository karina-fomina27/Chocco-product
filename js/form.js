
const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

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
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSiblink.textContent = field.validationMassage;

  return field.checkValidity();

}
