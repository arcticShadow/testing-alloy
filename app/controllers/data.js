
var collection = Alloy.createCollection("drupalnodes"); //or model
//the fetch method is an async call to the remote REST API. 
collection.fetch({ 
    success : function(){
    	var myarray = Array();
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            Ti.API.log("Node: Nid:"+element.get('nid') +" Title:"+ element.get('title'));
            var label = Ti.UI.createLabel({'title': 'nid: '+element.get('nid')+' Title: '+element.get('title')});
            myarray.push(label);
            $.add(label);
        });
        $.scroll.setViews(myarray);
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});
 