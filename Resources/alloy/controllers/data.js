function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.data = Ti.UI.createWindow({
        title: "Data",
        layout: "vertical",
        id: "data"
    });
    $.__views.data && $.addTopLevelView($.__views.data);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "Data",
        id: "__alloyId20"
    });
    $.__views.data.add($.__views.__alloyId20);
    var __alloyId21 = [];
    $.__views.__alloyId22 = Ti.UI.createLabel({
        text: "1st",
        id: "__alloyId22"
    });
    __alloyId21.push($.__views.__alloyId22);
    $.__views.scroll = Ti.UI.createScrollableView({
        views: __alloyId21,
        id: "scroll",
        layout: "vertical"
    });
    $.__views.data.add($.__views.scroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var collection = Alloy.createCollection("drupalnodes");
    collection.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;