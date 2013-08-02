function Controller() {
    function __alloyId17() {
        var models = __alloyId16.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId14 = models[i];
            __alloyId14.__transform = {};
            var __alloyId15 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId14.__transform["title"] ? __alloyId14.__transform["title"] : __alloyId14.get("title")
            });
            rows.push(__alloyId15);
        }
        $.__views.__alloyId12.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("drupalnodes");
    $.__views.tabGroup = Ti.UI.createTabGroup({
        id: "tabGroup"
    });
    $.__views.__alloyId6 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "__alloyId6"
    });
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue, Droid Sans"
        },
        textAlign: "center",
        text: "I am Window 1",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId6.activity.onCreateOptionsMenu = function(e) {
        var __alloyId9 = {
            id: "menuItem",
            title: "Item 1",
            icon: "images/action_about.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId9, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId9, Alloy.Android.menuItemCreateArgs));
        var __alloyId10 = {
            id: "menuItem",
            title: "Item 2",
            icon: "images/action_settings.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId10, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId10, Alloy.Android.menuItemCreateArgs));
        var __alloyId11 = {
            id: "menuItem",
            title: "Item 3",
            icon: "images/action_about.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId11, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId11, Alloy.Android.menuItemCreateArgs));
    };
    $.__views.__alloyId12 = Ti.UI.createTableView({
        id: "__alloyId12"
    });
    $.__views.__alloyId6.add($.__views.__alloyId12);
    var __alloyId16 = Alloy.Collections["drupalnodes"] || drupalnodes;
    __alloyId16.on("fetch destroy change add remove reset", __alloyId17);
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.__alloyId6,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "__alloyId5"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId5);
    $.__views.__alloyId19 = Alloy.createController("scanner", {
        id: "__alloyId19"
    });
    $.__views.__alloyId18 = Ti.UI.createTab({
        window: $.__views.__alloyId19.getViewEx({
            recurse: true
        }),
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId18"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId18);
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {
        __alloyId16.off("fetch destroy change add remove reset", __alloyId17);
    };
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
    var library = Alloy.Collections.drupalnodes;
    library.fetch();
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;