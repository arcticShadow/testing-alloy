$.tabGroup.addEventListener('open', function(e) {
    var activity = $.tabGroup.activity;
 
    if( Alloy.Globals.Android.Api >= 11 ) {
        activity.actionBar.title = "DemoApp";
        activity.actionBar.displayHomeAsUp = true; 
        activity.actionBar.onHomeIconItemSelected = function() {
            alert("Home icon clicked!");
        };  
    }
});

 // Trigger the synchronization
var library = Alloy.Collections.drupalnodes;
library.fetch(1);

$.tabGroup.open();

