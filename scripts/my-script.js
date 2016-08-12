 $(window).load(function () {
	$("#Heyasf").jqxWindow({
		width: '100%',
		Height: '100%',
		maxHeight: '100%',
		maxWidth: '100%',
		draggable: false,
		resizable: false
	});
	 $('#Heyasf').on('close', function (event) {
 		window.close();
 	}); 
});
