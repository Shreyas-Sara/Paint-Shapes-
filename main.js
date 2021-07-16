canvas = document.getElementById("myCanvas");
sst = canvas.getContext("2d");

mouse_event = "empty";

canvas.addEventListener("mousedown", down);
function down(e) {
    color = document.getElementById("color").value;
    figure = document.getElementById("shape").value;
    width = document.getElementById("width").value;
    mouse_event = "mousedown";
}

canvas.addEventListener("mousemove", move);
function move(e) {
    current_x = e.clientX-canvas.offsetLeft;
    current_y = e.clientY-canvas.offsetTop;
    if (mouse_event == "mousedown"){
        if (figure == "rectangle") {
            sst.beginPath();
            sst.strokeStyle = color;
            sst.lineWidth = width;
            sst.rect (current_x, current_y, 100, 80);
            sst.stroke();
        }
        if (figure == "square"){
            sst.beginPath();
            sst.strokeStyle = color;
            sst.lineWidth = width;
            sst.rect (current_x, current_y, 100, 100);
            sst.stroke();
        }
        if (figure == "circle"){
            sst.beginPath();
            sst.strokeStyle = color;
            sst.lineWidth = width;
            sst.arc(current_x, current_y, 40, 0, 360);
            sst.stroke();
        }
    }
}

canvas.addEventListener("mouseup", up);
function up(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", leave);
function leave(e) {
    mouse_event = "mouseleave";
}
function clear_area() {
    sst.clearRect(0, 0, sst.canvas.width, sst.canvas.height);
}