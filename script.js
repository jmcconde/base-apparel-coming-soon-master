let form = document.querySelector('.email-form');
let email = document.querySelector('.input-email');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let invalid = document.querySelector('.invalid-label');
    let errorIcon = document.querySelector('.error-icon');
    if(email.value === '' || !validateEmail(email.value)) {
        invalid.style.display = 'inline-block';
        errorIcon.classList.remove('hidden');
        email.classList.add('invalid')
    }
    else {
        invalid.style.display = 'none';
        email.value = '';
        email.classList.remove('invalid');
        errorIcon.classList.add('hidden');
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };