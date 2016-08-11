chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('scripts/index.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});