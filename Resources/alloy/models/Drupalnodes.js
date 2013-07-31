exports.definition = {
    config: {
        URL: "http://apptest.saturn.netactive.co.nz/apptest/node",
        adapter: {
            type: "restapi",
            collection_name: "drupalnodes",
            idAttribute: "id"
        },
        headers: {
            Authorization: "Basic " + Ti.Utils.base64encode("netactive:welcomemat")
        },
        parentNode: void 0
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("drupalnodes", exports.definition, []);

collection = Alloy.C("drupalnodes", exports.definition, model);

exports.Model = model;

exports.Collection = collection;