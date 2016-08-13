$(document).ready(function () {
	PutToSync('theme', 'energyblue');
	var theme = 'energyblue';
	GetFrmSync('theme');
	$("#MainWind").jqxWindow({
		width : '100%',
		Height : '100%',
		maxHeight : '100%',
		maxWidth : '100%',
		draggable : false,
		resizable : false
	});

	$('#MainWind').on('close', function (event) {
		window.close();
	});

	var source = [
		"Affogato",
		"Americano",
		"Bicerin",
		"Breve",
		"Café Bombón",
		"Café au lait",
		"Caffé Corretto",
		"Café Crema",
		"Caffé Latte",
		"Caffé macchiato",
		"Café mélange",
		"Coffee milk",
		"Cafe mocha",
		"Cappuccino",
		"Carajillo",
		"Cortado",
		"Cuban espresso",
		"Espresso",
		"Eiskaffee",
		"The Flat White",
		"Frappuccino",
		"Galao",
		"Greek frappé coffee",
		"Iced Coffee﻿",
		"Indian filter coffee",
		"Instant coffee",
		"Irish coffee",
		"Liqueur coffee"
	];
	$("#SelectATheme").jqxDropDownList({
		source : source,
		selectedIndex : 1,
		width : '200',
		height : '25'
	});
	console.log('Loaded successfully');
	ClickToCloseNotification("Success!!!", "App loaded successfully.", 10);

function ClickToCloseNotification(title, body, timeout) {
	if (Notification.permission !== "granted")
		Notification.requestPermission();
	else {
		var notification = new Notification(title, {
				icon : '../images/icons/iTunesArtwork@2x.png',
				body : body,
			});

		setTimeout(function () {
			notification.close();
		}, timeout * 1000);

		notification.onclick = function () {
			notification.close();
		};
	}
}

function PutToSync(key, value) {
	chrome.storage.sync.set({key: value}, function () {
		if (chrome.runtime.error)
			console.log("Runtime error.");
	});
}

function GetFrmSync(key) {
	var Pause = true;
	var Deff = $.Deferred();
	chrome.storage.sync.get(key, function (obj) {
		console.log("Obtained theme.");
		Deff.resolve();
		Pause=false;
		theme = obj;
		console.log('Theme got is:' + theme.theme);

		//return obj;
	});
	//while (Pause)
		setTimeout(function () {}, 100);
	return Deff;
}

});
