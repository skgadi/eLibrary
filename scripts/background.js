chrome.app.runtime.onLaunched.addListener(function () {
	chrome.app.window.create('scripts/index.html', {
		frame : "none",
		'id' : 'mainWind'
	});
});

