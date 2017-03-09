

// DATA //

var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();


	var formValues = {
		first-name: form.first-name.value,
		last-name: form.last-name.value,
		email: form.email.value,
		// attend: form.attend.value,
		// party: form.guest-count.value,
		// gluten-free: form.gluten.value,
		// dairy-free: form.dairy.value,
		// song: form.song-name.value,
		// artist: form.artist-name.value
	}

WeDeploy
	.data('data.jonathan-and-marissa.wedeploy.io')
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

	var message = form.first-name.value + 
	" we can't begin to describe how much you mean to us. Whether you are able to come or not (we sure hope you can!)," + 
	" please know that a huge part of why we invited you is because Marissa and I want to invite you into our future lives together.<br/>" +
	'<br/>' + "So lets have a wedding already!! :)<br/>" +
	'<br/>' + "With love,<br/>" + "The Lundys";

	WeDeploy
		.url('contact.jonathan-and-marissa.wedeploy.io/emails')
		.auth('a39314c1-4fd5-41c1-805f-2c34fea896de')
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