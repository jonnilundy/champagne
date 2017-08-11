// MAX LENGTH

function lengthLimit() {
	if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
}


// GOOGLE MAPS

var autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('address')),
      {types: ['geocode']});
}

// DATA //

var form = document.querySelector('.rsvp-form');


form.addEventListener('submit', function(e) {
	e.preventDefault();

	var attending = document.querySelector('input[name="attend"]:checked');

	var formValues = {
		first_name: document.querySelector('input[name="first_name"]').value,
		last_name: document.querySelector('input[name="last_name"]').value,
		email: form.email.value,
		address: form.address.value,
		attend: attending.value,
		plus_one: form.plus_one.value,
		gluten: form.gluten.value,
		dairy: form.dairy.value,
		song: form.song.value,
		artist: form.artist.value,
		message: form.message.value,
		timestamp: new Date().toISOString()
	}

	WeDeploy
		.data('data-jonathanandmarissa.wedeploy.io')
	    .create('rsvp', formValues)
			.then(function(response) {
				form.reset();
				console.info('Saved:', response);
			})
			.catch(function(error) {
				console.error(error);
			});


// EMAIL //

	var message = form.first_name.value +
	", we can't begin to describe how much you mean to us. Whether you are able to come or not (we sure hope you can!)," +
	" please know that a huge part of why we invited you is because Marissa and I want to welcome you into our future lives together.<br/>" +
	'<br/>' + "So lets have a wedding already!! :)<br/>" +
	'<br/>' + "With love,<br/>" + "The Lundys";

	WeDeploy
		.email('email-jonathanandmarissa.wedeploy.io')
		.auth('email@wedeploy.com', 'pass')
		.from('thankyou@jonathanandmarissa.com')
		.to(form.email.value)
		.subject("We can't wait!!")
		.message(message)
		.send()
		.then(function(response) {
			console.log(response);
			if (response.succeeded()) {
				form.reset();

				alert('Yay! Thanks for RSVPing, it truly means the world to us!');
				document.location.href = '/'
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