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
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "Data",
        id: "__alloyId14"
    });
    $.__views.data.add($.__views.__alloyId14);
    var __alloyId15 = [];
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "1st",
        id: "__alloyId16"
    });
    __alloyId15.push($.__views.__alloyId16);
    $.__views.scroll = Ti.UI.createScrollableView({
        views: __alloyId15,
        id: "scroll",
        layout: "vertical"
    });
    $.__views.data.add($.__views.scroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var collection = Alloy.createCollection("drupalnodes");
    collection.fetch({
        success: function() {
            var myarray = Array();
            _.each(collection.models, function(element) {
                Ti.API.log("Node: Nid:" + element.get("nid") + " Title:" + element.get("title"));
                var label = Ti.UI.createLabel({
                    title: "nid: " + element.get("nid") + " Title: " + element.get("title")
                });
                myarray.push(label);
                $.add(label);
            });
            $.scroll.setViews(myarray);
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;