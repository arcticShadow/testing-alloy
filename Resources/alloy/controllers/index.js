function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        id: "tabGroup"
    });
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "__alloyId3"
    });
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue, Droid Sans"
        },
        textAlign: "center",
        text: "I am Window 1",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId3.activity.onCreateOptionsMenu = function(e) {
        var __alloyId6 = {
            id: "menuItem",
            title: "Item 1",
            icon: "images/action_about.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
        var __alloyId7 = {
            id: "menuItem",
            title: "Item 2",
            icon: "images/action_settings.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId7, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId7, Alloy.Android.menuItemCreateArgs));
        var __alloyId8 = {
            id: "menuItem",
            title: "Item 3",
            icon: "images/action_about.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId8, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId8, Alloy.Android.menuItemCreateArgs));
    };
    $.__views.__alloyId2 = Ti.UI.createTab({
        window: $.__views.__alloyId3,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "__alloyId2"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId2);
    $.__views.__alloyId10 = Alloy.createController("scanner", {
        id: "__alloyId10"
    });
    $.__views.__alloyId9 = Ti.UI.createTab({
        window: $.__views.__alloyId10.getViewEx({
            recurse: true
        }),
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId9"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId9);
    $.__views.__alloyId12 = Alloy.createController("data", {
        id: "__alloyId12"
    });
    $.__views.__alloyId11 = Ti.UI.createTab({
        window: $.__views.__alloyId12.getViewEx({
            recurse: true
        }),
        title: "DATA",
        id: "__alloyId11"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId11);
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabGroup.addEventListener("open", function() {
        var activity = $.tabGroup.activity;
        if (Alloy.Globals.Android.Api >= 11) {
            activity.actionBar.title = "DemoApp";
            activity.actionBar.displayHomeAsUp = true;
            activity.actionBar.onHomeIconItemSelected = function() {
                alert("Home icon clicked!");
            };
        }
    });
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;