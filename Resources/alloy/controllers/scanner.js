function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.scanner = Ti.UI.createWindow({
        backgroundColor: "#def3fb",
        layout: "vertical",
        title: "Scanner",
        id: "scanner"
    });
    $.__views.scanner && $.addTopLevelView($.__views.scanner);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#586164",
        font: {
            fontSize: 40
        },
        textAlign: "center",
        text: "This will be your Scanner",
        id: "__alloyId0"
    });
    $.__views.scanner.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#586164",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue, Droid Sans"
        },
        textAlign: "center",
        text: "Scan, Scan, Scan, Scan, Scan, Scan, Scan, Scan, Scan, Scan, Scan",
        id: "__alloyId1"
    });
    $.__views.scanner.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;