var btn = document.getElementById('btn');
var clipboard = new Clipboard(btn);

clipboard.on('success', function(e) {
	console.log(e);
	document.getElementById('success').innerHTML = "Copied!"
});
clipboard.on('error', function(e) {
    console.log(e);
});