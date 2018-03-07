var pic = document.getElementById("vimage");
var button = document.getElementById("clear");

var width = pic.getAttribute("width");
var height = pic.getAttribute("height");

var drawDot = function(x, y){
    var cl = document.createElementNS("http://www.w3.org/2000/svg","circle");
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "25");
    cl.setAttribute("fill", "red");
    cl.setAttribute("stroke", "black");
    cl.addEventListener("click", updateDot);
    pic.appendChild(cl);
}

var clickDot = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    drawDot(x, y);
    e.stopPropagation();
};

var randomDot = function(e){
    var x = Math.random() * width;
    var y = Math.random() * height;
    drawDot(x, y);
}

var updateDot = function(e){
    if (this.getAttribute("fill") == "red")
        this.setAttribute("fill", "blue");
    else {
        pic.removeChild(this);
        randomDot();
    }
    e.stopPropagation();
};

var clear = function(){
    while(pic.firstChild){
        pic.removeChild(pic.firstChild);
    }
};

pic.addEventListener("click", clickDot);
button.addEventListener("click", clear);
