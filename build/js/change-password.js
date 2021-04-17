/*#oldPassword
#newPassword
#confirnmPassword
*/

$('.changePasswordForm').validate({
  rules: {
    oldPassword: {
      required: true
    },
    newPassword: {
      required: true,
      minlength: 6
    }
  }
});
