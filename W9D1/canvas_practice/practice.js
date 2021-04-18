document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    canvas.height = 500;
    canvas.width = 500;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = "yellow";
    ctx.fill();

});
