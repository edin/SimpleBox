
function SimpleBox (options) {
	
	SimpleBox.list = [];
	
	
	this.settings = {};
	this.settings.onClose = function() { };
	this.settings.onOpen = function() { };
}

SimpleBox.prototype.log = function(message){
	if (typeof window.console != "undefined"){
		console.log(message);
	}
}


SimpleBox.prototype.show = function(){
	alert("Hello");
	
	SimpleBox.list.push(this);
}