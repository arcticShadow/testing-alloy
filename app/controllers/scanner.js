// load the Scandit SDK module
/*
var scanditsdk = require("com.mirasense.scanditsdk");

var picker;

// Sets up the scanner and starts it in a new window.
var openScanner = function() {
    // Instantiate the Scandit SDK Barcode Picker view
    picker = scanditsdk.createView({
        width:Ti.UI.FILL,
        height:Ti.UI.FILL
    });
    
    // Initialize the barcode picker, remember to paste your own app key here.
    picker.init("jm7bCviQEeKY1jIWTrugrD5uADUkZ6f1Ltkc0mIbqw4", 0);
 
    picker.showSearchBar(true);
    // add a tool bar at the bottom of the scan view with a cancel button (iphone/ipad only)
    picker.showToolBar(true);
 
    // Set callback functions for when scanning succeedes and for when the
    // scanning is canceled.
    picker.setSuccessCallback(function(e) {
        alert("success (" + e.symbology + "): " + e.barcode);
    });
    picker.setCancelCallback(function(e) {
        closeScanner();
    });
 
    $.scanner.add(picker);
    $.scanner.addEventListener('open', function(e) {
        // Adjust to the current orientation.
        // since window.orientation returns 'undefined' on ios devices
        // we are using Ti.UI.orientation (which is deprecated and no longer
        // working on Android devices.)
		 
		if ( Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight ) {
		    picker.setOrientation(Titanium.UI.LANDSCAPE_LEFT); //ls
		} else {
		    picker.setOrientation(Titanium.UI.PORTRAIT); //pt
		}
 
        picker.setSize(Ti.Platform.displayCaps.platformWidth,
                       Ti.Platform.displayCaps.platformHeight);
                       
        picker.startScanning();     // startScanning() has to be called after the window is opened.
    });
    $.scanner.open();
}


 
// Stops the scanner, removes it from the window and closes the latter.
var closeScanner = function() {
    if (picker != null) {
        picker.stopScanning();
        $.scanner.remove(picker);
    }
    $.scanner.close();
}

openScanner();
*/
// create start scanner button



