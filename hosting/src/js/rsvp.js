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
	var first = document.querySelector('input[name="first_name"]');
	var last = document.querySelector('input[name="last_name"]');

	var formValues = {
		first_name: first.value,
		last_name: last.value,
		email: form.email.value,
		address: form.address.value,
		attend: attending.value,
		group: form.group.value,
		message: form.message.value,
		timestamp: new Date().toISOString()
	}

	WeDeploy
		.data('data.portland-reception.wedeploy.io')
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
	'<br/>' + "So let's celebrate already!! :)<br/>" +
	'<br/>' + "With love,<br/>" + "The Lundys :)";

	WeDeploy
		.url('email.portland-reception.wedeploy.io/emails')
		.auth('email@wedeploy.com', 'pass')
		.form('from',  'thankyou@jonathanandmarissa.com')
		.form('to', form.email.value)
		.form('subject', "Thank You for RSVPing!")
		.form('message', message )
		.post()
		.then(function(response) {
			console.log(response);
			if (response.succeeded()) {
				form.reset();

				alert('Yay! Thanks for RSVPing. :)');
				document.location.href = '/'
			}
			else {
				alert('Oops, your thank you email was not sent.');
			}
		})

		.catch(function(error) {
			alert('Oops, something went wrong.');
		});
});