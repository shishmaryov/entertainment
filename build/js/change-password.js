/*#old-password
#new-password
#confirnm-password
*/
$(".change-password-page__inputs").validate({
  rules: {
    oldPassword: {
      required: true,
      minlength: 6
    },
    newPassword: {
      required: true,
      minlength: 6
    }
  },
  messages: {
    oldPassword: {
      required: "Поле email обязательно для заполнения",
    },
    newPassword: {
      required: "Поле имя обязательно для заполнения",
      minlength: jQuery.validator.format("Длина имени должна быть больше 5-ти символов")
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('.change-password-page__inputs');
  form.addEnetListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
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
          $('.change-password-page__error--new').toggleClass('change-password-page__error--new-active');
        }
      }


    }
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
