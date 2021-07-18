canvas = document.getElementById("myCanvas").value;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 3;
ctx.rect(150 , 143 , 430 , 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(250 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();