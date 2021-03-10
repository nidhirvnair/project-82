canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouse_event="empty";
var last_x ,last_y;

canvas.addEventListner("mousedown", my_mousedown)
function my_mousedown(e){
    mouse_event = "mousedown";
}

canvas.addEventListner("mouseup",my_mouseup)
function my_mouseup(e){
    mouse_event = "mouseup";
}

canvas.addEventListner("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouse_event = "mouseleave";
}

canvas.addEventListner("mousemove",my_mousemove)
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    
    if(mouse_event == "mouseDown"){
        console.log("Last position of X and Y coordinates=");
        console.log("x="+ last_x+"y="+last_y);

        console.log("current position of x and y -")
        console.log("x="+current_x+", y="+current_y);
        circle_draw()

    }
    last_x=current_x;
    last_y=current_y;
}
function circle_draw(){
   ctx.beginPath();
   ctx.strokeStyle = "blue";
   ctx.lineWidth = 5;
   ctx.arc(current_x, current_y, 40 ,0 , 2 * Math.PI);
   ctx.stroke();

}
