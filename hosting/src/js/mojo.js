'use strict';

var auth = WeDeploy.auth(`auth.acupofmojo.wedeploy.io`);

function main() {
	if (!auth.currentUser) {
		window.location = "/login.html";
	}
}