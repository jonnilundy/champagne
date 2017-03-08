'use strict';

var auth = WeDeploy.auth(`auth.jonathan-and-marissa.wedeploy.me`);

function main() {
	if (!auth.currentUser) {
		window.location = "/login.html";
	}
}