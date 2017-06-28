'use strict';

//
// AUTH 
//

var auth = WeDeploy.auth('auth.portland-reception.wedeploy.io');

if (!auth.currentUser) {document.location.href = '/login';}

function signOut() {
  auth
    .signOut()
    .then(() => {
      location.href = '/login';
    });
}

//
// DATA 
//

var rsvpList = document.querySelector('.rsvpList');
var rsvpNotes = document.querySelector('.rsvpNotes');
var guestListTotal = document.querySelector('#guestListTotal');

var data = WeDeploy.data('data.portland-reception.wedeploy.io');

// Guest List

WeDeploy
	.data('data.portland-reception.wedeploy.io')
	.orderBy('attend')
	.orderBy('timestamp')
	.get('rsvp')
	.then(function(guests) {
		appendRsvp(guests);
		appendNotes(guests);
		countRsvp(guests);
	})
	.catch(function(error) {
		console.error(error);
	});

function appendRsvp(rsvp) {
	var guestList = '';

	rsvp.forEach(function(guest) {
		guestList += '<tr>' +
			'<td class="name">'+guest.first_name+' '+guest.last_name+'</td>' +
			'<td class="attend">'+guest.attend+'</td>' +
			'<td class="group">'+guest.group+'</td>' +
			'<tr>'
	});

	rsvpList.innerHTML = guestList;
}

// Guest Notes

function appendNotes(rsvp) {
	var messages = '';

	rsvp.forEach(function(guest) {
		if (guest.message) {
			messages += '<p class="message-name">'+guest.first_name+' '+guest.last_name+'</p>'+'<p class="message-content">'+guest.message+'</p>'
		}
	});

	rsvpNotes.innerHTML = messages;
}

// List Totals

function countRsvp(rsvp) {
	var guestCount = 0;

	rsvp.forEach(function(guest) {
		if (guest.guest && guest.attend === "Yes") {
			guestCount = guestCount + parseInt(guest.guest, 10);
		}
	});

	guestListTotal.innerHTML = guestCount;
}