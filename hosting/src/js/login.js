'use strict';

var DOMAIN = window.location.hostname.split(".").slice(-3).join(".");

var auth = WeDeploy.auth(`auth.${DOMAIN}`);


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
  popup.classList.add('visible');
}

function closeAlert() {
  popup.classList.remove('visible');
}

auth.onSignIn((user) => {
  document.location.href = '/mojo.html';
});

function signOut() {
  auth
    .signOut()
    .then(() => {
      location.href = '/login.html';
    });
}