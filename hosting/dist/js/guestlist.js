'use strict';


// AUTH //

var auth = WeDeploy.auth('auth.jonathan-and-marissa.wedeploy.me');

if (!auth.currentUser) {
  document.location.href = '/login';
}


// DATA //

var rsvpList = document.querySelector('.rsvpList');

WeDeploy
  .data('data.jonathan-and-marissa.wedeploy.io')
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
			'<td class="attend">'+guest.attend+'</td>' +
			'<td class="plus_one">'+guest.plus_one+'</td>' +
			'<td class="gluten">'+guest.gluten+'</td>' +
			'<td class="dairy">'+guest.dairy+'</td>' +
			'<tr>'
	});

	rsvpList.innerHTML = guestList;
}

var dataConfig = WeDeploy.data('data.jonathan-and-marissa.wedeploy.io')