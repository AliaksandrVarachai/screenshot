var frame = frames[0];
var htmlFrame = document.getElementsByTagName('iframe')[0];
var frameCORS = frames[1];
// var frameWindow = frame.window;
// var frameDocument = frameWindow.document;

// console.log('frame.window', frame.window);
// console.log('frameCORS.window', frameCORS.window);
// console.log('frameCORS.window.frames', frameCORS.window.document);

// when iframe is added to the doc its src="about:blank"
frame.window.onload = function() {
  takeScreenshot();
  console.log('frame: frame\'s window is loaded, src=', frame.location.href)
};

// frameCORS.onload = function() {
//   console.log('frameCORS is loaded');
// };

function takeScreenshot() {
  setTimeout(function() {
    const options = {
      foreignObjectRendering: true,
    };
    html2canvas(document.body, options).then(function(canvas) {
      document.getElementById('screenshot').src = canvas.toDataURL();
      console.log('timeout: frame.src=', frame.location.href)
    });
  }, 100);
}

