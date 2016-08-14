$(document).ready(function () {
	var ThemeIndex = 0;
	var themes = [{
			label : 'Light',
			group : 'Themes',
			value : 'light'
		}, {
			label : 'Dark',
			group : 'Themes',
			value : 'dark'
		}, {
			label : 'Arctic',
			group : 'Themes',
			value : 'arctic'
		}, {
			label : 'Web',
			group : 'Themes',
			value : 'web'
		}, {
			label : 'Bootstrap',
			group : 'Themes',
			value : 'bootstrap'
		}, {
			label : 'Metro',
			group : 'Themes',
			value : 'metro'
		}, {
			label : 'Metro Dark',
			group : 'Themes',
			value : 'metrodark'
		}, {
			label : 'Office',
			group : 'Themes',
			value : 'office'
		}, {
			label : 'Orange',
			group : 'Themes',
			value : 'orange'
		}, {
			label : 'Fresh',
			group : 'Themes',
			value : 'fresh'
		}, {
			label : 'Energy Blue',
			group : 'Themes',
			value : 'energyblue'
		}, {
			label : 'Dark Blue',
			group : 'Themes',
			value : 'darkblue'
		}, {
			label : 'Black',
			group : 'Themes',
			value : 'black'
		}, {
			label : 'Shiny Black',
			group : 'Themes',
			value : 'shinyblack'
		}, {
			label : 'Classic',
			group : 'Themes',
			value : 'classic'
		}, {
			label : 'Summer',
			group : 'Themes',
			value : 'summer'
		}, {
			label : 'High Contrast',
			group : 'Themes',
			value : 'highcontrast'
		}, {
			label : 'Lightness',
			group : 'UI Compatible',
			value : 'ui-lightness'
		}, {
			label : 'Darkness',
			group : 'UI Compatible',
			value : 'ui-darkness'
		}, {
			label : 'Smoothness',
			group : 'UI Compatible',
			value : 'ui-smoothness'
		}, {
			label : 'Start',
			group : 'UI Compatible',
			value : 'ui-start'
		}, {
			label : 'Redmond',
			group : 'UI Compatible',
			value : 'ui-redmond'
		}, {
			label : 'Sunny',
			group : 'UI Compatible',
			value : 'ui-sunny'
		}, {
			label : 'Overcast',
			group : 'UI Compatible',
			value : 'ui-overcast'
		}, {
			label : 'Le Frog',
			group : 'UI Compatible',
			value : 'ui-le-frog'
		}
	];
	var MenuData = [{
			"id" : "12",
			"text" : "Frappuccino",
			"parentid" : "-1",
			"subMenuWidth" : '250px'
		}, {
			"text" : "Chocolate Beverage",
			"id" : "1",
			"parentid" : "-1",
			"subMenuWidth" : '250px'
		}, {
			"id" : "2",
			"parentid" : "1",
			"text" : "Hot Chocolate"
		}, {
			"id" : "3",
			"parentid" : "1",
			"text" : "Peppermint Hot Chocolate"
		}, {
			"id" : "4",
			"parentid" : "1",
			"text" : "Salted Caramel Hot Chocolate"
		}, {
			"id" : "5",
			"parentid" : "1",
			"text" : "White Hot Chocolate"
		}, {
			"id" : "6",
			"text" : "Espresso Beverage",
			"parentid" : "-1",
			"subMenuWidth" : '200px'
		}, {
			"id" : "7",
			"parentid" : "6",
			"text" : "Caffe Americano"
		}, {
			"id" : "8",
			"text" : "Caffe Latte",
			"parentid" : "6"
		}, {
			"id" : "9",
			"text" : "Caffe Mocha",
			"parentid" : "6"
		}, {
			"id" : "10",
			"text" : "Cappuccino",
			"parentid" : "6"
		}, {
			"id" : "11",
			"text" : "Pumpkin Spice Latte",
			"parentid" : "6"
		}, {
			"id" : "13",
			"text" : "Caffe Vanilla Frappuccino",
			"parentid" : "12"
		}, {
			"id" : "15",
			"text" : "450 calories",
			"parentid" : "13"
		}, {
			"id" : "16",
			"text" : "16g fat",
			"parentid" : "13"
		}, {
			"id" : "17",
			"text" : "13g protein",
			"parentid" : "13"
		}, {
			"id" : "14",
			"text" : "Caffe Vanilla Frappuccino Light",
			"parentid" : "12"
		}
	];
	// prepare the data
	var MenuDataSource = {
		datatype : "json",
		datafields : [{
				name : 'id'
			}, {
				name : 'parentid'
			}, {
				name : 'text'
			}, {
				name : 'subMenuWidth'
			}
		],
		id : 'id',
		localdata : MenuData
	};
	var dataAdapterFrMenu = new $.jqx.dataAdapter(MenuDataSource);
	dataAdapterFrMenu.dataBind();
	var MenuRecords = dataAdapterFrMenu.getRecordsHierarchy('id', 'parentid', 'items', [{
					name : 'text',
					map : 'label'
				}
			]);
	var theme = 'metrodark';
	console.log('GetTheme is being called');
	GetFrmSync('theme');
	console.log('GetTheme is already called');

	console.log('Loaded successfully');
	ClickToCloseNotification("Success!!!", "App loaded successfully.", 10);
	showNotification();

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

	function showNotification() {
		chrome.notifications.create('reminder', {
			type : 'basic',
			iconUrl : '../images/icons/iTunesArtwork@2x.png',
			title : 'Don\'t forget!',
			message : 'You have 5 things to do. Wake up, dude!',
			buttons : [{
					title : 'Close',
					iconUrl : '../images/icons/iTunesArtwork@2x.png'
				}, {
					title : 'Restart',
					iconUrl : '../images/icons/iTunesArtwork@2x.png'
				}
			]
		}, function (notificationId) {
			//chrome.notifications.clear(notificationId);
		});
		chrome.notifications.onClicked.addListener(function (notificationId) {
			chrome.notifications.clear(notificationId);
		});
	}

	function PutToSync(key, value) {
		chrome.storage.sync.set({
			'theme' : value
		}, function () {
			if (chrome.runtime.error)
				console.log("Runtime error.");
		});
	}

	function GetFrmSync(key) {
		chrome.storage.sync.get(key, function (obj) {
			theme = obj.theme;
			MakeGUI();
		});
	}
	function getValue(callback) {
		chrome.storage.sync.get("theme", callback);
	}

	function sleep(sleepDuration) {
		var now = new Date().getTime();
		while (new Date().getTime() < now + sleepDuration) {
			/* do nothing */
		}
	}

	function MakeGUI() {
		for (var i = 0; i < themes.length; i++) {
			if (themes[i].label == theme) {
				$('head').append('<link rel="stylesheet" href="jqwidgets/styles/jqx.' + themes[i].value + '.css" type="text/css" />');
				ThemeIndex = i;
				break;
			}
		}

		theme = themes[ThemeIndex].value;

		$("#MainWind").jqxWindow({
			width : '100%',
			Height : '100%',
			maxHeight : '100%',
			maxWidth : '100%',
			draggable : false,
			resizable : false,
			theme : theme
		});

		$('#MainWind').on('close', function (event) {
			window.close();
		});

		$("#SelectATheme").jqxDropDownList({
			source : themes,
			selectedIndex : ThemeIndex,
			width : '150',
			height : '26px',
			theme : theme
		});
		$('#SelectATheme').on('change', function (event) {
			var args = event.args;
			if (args) {
				var index = args.index;
				chrome.storage.sync.set({
					'theme' : args.item.label
				}, function () {
					if (!chrome.runtime.error)
						ClickToCloseNotification("Theme changed", "Theme is successfully changed. You need to restart the app to see the effect.", 5);
				});
			}
		});

		$('#MainMenu').jqxMenu({
			source : MenuRecords,
			height : 30,
			width : '100%',
			theme : theme
		});
	}

});
