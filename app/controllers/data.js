
var collection = Alloy.createCollection("drupalnodes"); //or model
//the fetch method is an async call to the remote REST API. 
collection.fetch(/*{ 
    success : function(){
    	
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            Ti.API.log("Node: Nid:"+element.get('nid') +" Title:"+ element.get('title'));
            
        });
        
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
}*/);
 


