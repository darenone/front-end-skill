function Drag(id){
    var that = this;
    this.div1 = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
    this.div1.onmousedown = function(ev){  // this指向的是this.div1所以是错误的,所以要改为that
        that.fnDown(ev);
        return false;
    }
}
Drag.prototype.fnDown = function(ev){
    var that = this;
    var oEvent = ev || event;
    this.disX = oEvent.clientX - this.div1.offsetLeft;
    this.disY = oEvent.clientY - this.div1.offsetTop;
    document.onmousemove = function(ev){
        that.fnMove(ev);
    }
    document.onmouseup = function(){
        that.fnUp();
    }
}
Drag.prototype.fnMove = function(ev){
    var oEvent = ev || event;
    this.div1.style.left = oEvent.clientX - this.disX + 'px';
    this.div1.style.top = oEvent.clientY - this.disY + 'px';
}
Drag.prototype.fnUp = function(){
    document.onmousemove = null;
    document.onmouseup = null;
}
