const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let pencilSelected = true;
let eraserSelected = false;

let isPainting = true; 
let isErasering = false;
let lineWidth = 5;

let startX;
let startY;


toolbar.addEventListener('click',e =>{
    if(e.target.id === 'clear'){
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }

    if(e.target.id === 'Eraser'){
        isErasering = true;
        isPainting = false;
    }

    if(e.target.id === 'Pencil'){
        isErasering = false;
        isPainting = true;
    }

});


toolbar.addEventListener('change',e =>{
    if(e.target.id === 'stroke'){
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth'){
        lineWidth = e.target.value;
    }

});




const draw = (e) =>{
    if(!isPainting){
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke;
}


const eraser = (e) =>{
    if(!isErasering){
        return;
    }

    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();



}

canvas.addEventListener('mousedown', (e)=>{
    if(pencilSelected === true){
        eraserSelected = false
        isPainting = true;
        startX = e.clientX;
        startY = e.clientY;
    }
    if(eraserSelected === true){
        
    }

});


canvas.addEventListener('mouseup', (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();

});

canvas.addEventListener('mousemove',draw);