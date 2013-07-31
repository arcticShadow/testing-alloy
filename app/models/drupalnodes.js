exports.definition = {  
    config: {
        "URL": "http://apptest.saturn.netactive.co.nz/apptest/node",
        //"debug": 1, 
        "adapter": {
            "type": "restapi",
            "collection_name": "drupalnodes",
            "idAttribute": "id"
        },
        "headers": { // your custom headers
            //"Accept": "application/vnd.stackmob+json; version=0",
            //"X-StackMob-API-Key": "your-stackmob-key"
            "Authorization": 'Basic '+Ti.Utils.base64encode('netactive:welcomemat')
        },
        "parentNode": undefined //your root node
    },      
    extendModel: function(Model) {      
        _.extend(Model.prototype, {});
        return Model;
    },  
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {});
        return Collection;
    }       
}