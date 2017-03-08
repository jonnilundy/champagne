'use strict';

var auth = WeDeploy.auth(`auth.jonathan-and-marissa.wedeploy.me`);
var popup = document.getElementById('popup');

function signInWithEmailAndPassword() {
  auth.signInWithEmailAndPassword(signIn.email.value, signIn.password.value)
    .then(() => signIn.reset())
    .catch(() => {
      showAlertWrongEmailOrPassword();
      signIn.reset();
    });
}

function showAlertWrongEmailOrPassword() {
  popup.innerHTML = `
    <p>Wrong email or password.</p>
    <button>
      <span class="close icon-12-close-short" onclick="closeAlert()"></span>
    </button>`;
  popup.classList.add('visible');s
}

function closeAlert() {
  popup.classList.remove('visible');
}

auth.onSignIn((user) => {
  location.href = '/mojo.html';
});