'use strict';

//
// AUTH 
//

var auth = WeDeploy.auth('auth.jonathan-and-marissa.wedeploy.io');

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
var glutonListTotal = document.querySelector('#glutonListTotal');
var dairyListTotal = document.querySelector('#dairyListTotal');

var data = WeDeploy.data('data.jonathan-and-marissa.wedeploy.io');

// Guest List

WeDeploy
	.data('data.jonathan-and-marissa.wedeploy.io')
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
			'<td class="plus_one">'+guest.plus_one+'</td>' +
			'<td class="gluten">'+guest.gluten+'</td>' +
			'<td class="dairy">'+guest.dairy+'</td>' +
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
	var glutenCount = 0;
	var dairyCount = 0;

	rsvp.forEach(function(guest) {
		if (guest.plus_one && guest.attend === "Yes") {
			guestCount = guestCount + parseInt(guest.plus_one, 10);
		}
		if (guest.gluten) {
			glutenCount = glutenCount + parseInt(guest.gluten, 10);
		}
		if (guest.dairy) {
			dairyCount = dairyCount + parseInt(guest.dairy, 10);
		}
	});

	guestListTotal.innerHTML = guestCount;
	glutonListTotal.innerHTML = glutenCount;
	dairyListTotal.innerHTML = dairyCount;
}