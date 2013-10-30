function SimpleBox (options) {

    if (typeof SimpleBox.list == "undefined")
    {
        SimpleBox.list = [];
    }
   
    this.settings = {};
    this.settings.onClose = function() { };
    this.settings.onOpen = function() { };

}

SimpleBox.prototype.setTemplate = function(html) {
    this.view = $(html);
    this.view.hide();
    
    
    
    $("body").append(this.view);
    this.view.data("instance", this); 
    
    console.log(this.view);
    console.log(this.view.data("instance"));
    
    var box = this;
    $(this.view).on("click", ".sb-close", function(event){  
        box.onCloseClick($(this));
    });
}

SimpleBox.prototype.onCloseClick = function(el) {
    
    var root = $(el).closest(".sb-main");
    var box = root.data("instance");
    
    box.hide();
}

SimpleBox.prototype.getBody = function() {
    return this.view.find(".sb-body");
}

SimpleBox.prototype.show = function(message) {
    
    this.getBody().html(message);
    this.view.fadeIn();
}

SimpleBox.prototype.hide = function() {

    var box = this;
    this.view.fadeOut(function() {
        box.remove(box);
    });
    
}

SimpleBox.prototype.log = function(message){
    if (typeof window.console != "undefined"){
        console.log(message);
    }
}

SimpleBox.prototype.add = function(box) {
    SimpleBox.list.push(box);
}

SimpleBox.prototype.remove = function(box) {
    
    var i = jQuery.inArray(box, SimpleBox.list);
    if (i > -1) {
        SimpleBox.splice(i, 1);
    }
}

