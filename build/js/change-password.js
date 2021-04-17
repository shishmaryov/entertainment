/*#old-password
#new-password
#confirnm-password
*/

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('.change-password-page__inputs');
  form.addEnetListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error==0){

    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('_req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('change-password-page__input--old')) {
        if (input.value === '') {
          formAddError(input);
          error++;
          $('change-password-page__input--old').toggleClass('change-password-page__input--old-active');
        }
      }


    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
});
