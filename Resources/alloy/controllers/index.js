function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        id: "tabGroup"
    });
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "__alloyId1"
    });
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 1",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId1.activity.onCreateOptionsMenu = function(e) {
        var __alloyId4 = {
            id: "menuItem",
            title: "Item 1",
            icon: "images/action_about.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId4, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId4, Alloy.Android.menuItemCreateArgs));
        var __alloyId5 = {
            id: "menuItem",
            title: "Item 2",
            icon: "images/action_settings.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId5, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId5, Alloy.Android.menuItemCreateArgs));
        var __alloyId6 = {
            id: "menuItem",
            title: "Item 3",
            icon: "images/action_about.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
    };
    $.__views.__alloyId0 = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "__alloyId0"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId0);
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId8"
    });
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 2",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId7"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId7);
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