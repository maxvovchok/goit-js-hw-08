import throttle from 'lodash.throttle';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('form');
const submit = document.querySelector('button');

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email: email.value, message: message.value })
    );
  }, 500)
);

const user = JSON.parse(localStorage.getItem('feedback-form-state'));
if (user) {
  email.value = user.email;
  message.value = user.message;
}

submit.addEventListener('click', e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem('feedback-form-state');
});
