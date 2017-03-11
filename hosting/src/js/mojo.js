'use strict';


// AUTH //

var DOMAIN = window.location.hostname.split(".").slice(-3).join(".");

var auth = WeDeploy.auth(`auth.${DOMAIN}`);

if (!auth.currentUser) {
  document.location.href = '/login.html';
}


// DATA //

var rsvpList = document.querySelector('.rsvpList');

WeDeploy
  .data(`data.${DOMAIN}`)
  .orderBy('last_name')
  .get('rsvp')
	.then(function(response) {
		appendRsvp(response);
	})
	.catch(function(error) {
		console.error(error);
	});

function appendRsvp(rsvp) {
	var guestList = '';

	rsvp.forEach(function(guest) {
		guestList += '<tr>' +
			'<td class="first_name">'+guest.first_name+'</td>' +
			'<td class="last_name">'+guest.last_name+'</td>' +
			'<td class="email">'+guest.email+'</td>' +
			'<td class="attending">'+guest.attend+'</td>' +
			'<td class="message">'+guest.message+'</td>' +
			'<tr>'
	});

	rsvpList.innerHTML = guestList;
}