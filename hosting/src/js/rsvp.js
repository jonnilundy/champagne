

// DATA //

var DOMAIN = window.location.hostname.split(".").slice(-3).join(".");

var form = document.querySelector('.rsvp-form');

form.addEventListener('submit', function(e) {
	e.preventDefault();


	var formValues = {
		first_name: form.first_name.value,
		last_name: form.last_name.value,
		email: form.email.value,
		// attend: form.attend.value,
		// party: form.guest_count.value,
		// gluten_free: form.gluten.value,
		// dairy_free: form.dairy.value,
		// song: form.song_name.value,
		// artist: form.artist_name.value
	}

WeDeploy
	.data(`data.${DOMAIN}`)
    .create('rsvp', formValues)
		.then(function(response) {
			form.reset();
			form.email.focus();
			console.info('Saved:', response);
		})
		.catch(function(error) {
			console.error(error);
		});


// EMAIL // 

	var message = form.first_name.value + 
	" we can't begin to describe how much you mean to us. Whether you are able to come or not (we sure hope you can!)," + 
	" please know that a huge part of why we invited you is because Marissa and I want to invite you into our future lives together.<br/>" +
	'<br/>' + "So lets have a wedding already!! :)<br/>" +
	'<br/>' + "With love,<br/>" + "The Lundys";

	WeDeploy
		.url(`email.${DOMAIN}/emails`)
		.auth('dummyToken')
		.form('from',  'jelundy@me.com')
		.form('to', form.email.value)
		.form('subject', "We can't wait!!")
		.form('message', message )
		.post()
		.then(function(response) {
			console.log(response);
			if (response.succeeded()) {
				form.reset();

				alert('Yay! Thanks for RSVPing, it truly means the world to us!');

				console.info('Email ID:', response.body());
			}
			else {
				alert('Email was not sent');
			}
		})

		.catch(function(error) {
			alert('Oops, some error has happened.');
		});
});