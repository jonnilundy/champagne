'use strict';


// AUTH //

var auth = WeDeploy.auth(`auth.jonathan-and-marissa.wedeploy.io`);

function main() {
	if (!auth.currentUser) {
		window.location = "/login.html";
	}
}

var rsvpList = document.querySelector('.rsvpList');


// DATA //

WeDeploy
  .data('data.jonathan-and-marissa.wedeploy.io')
  .orderBy('last-name')
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
			'<td class="first-name">'+guest.first-name+'</td>' +
			'<td class="last-name">'+guest.last-name+'</td>' +
			'<td class="email">'+guest.email+'</td>' +
			'<tr>'
	});

	rsvpList.innerHTML = guestList;
}