const canvas = document.getElementById("canvas");
const button = document.getElementById('button');
const triangle = document.getElementById('triangle');
const circle = document.getElementById('circle');
button.addEventListener('click', sayHello);
triangle.addEventListener('click', addTriangle);
circle.addEventListener('click', addCircle);

let assembly;
let drawRedTriangle;

function initialize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    Module({
        canvas: (() => canvas)()
    }).then((module) => {
        assembly = module;
        assembly.ccall('init', 'null', ['number', 'number'], [canvas.width, canvas.height]);
        drawRedTriangle = assembly.cwrap('drawRedTriangle', '', ['number','number']);
    });
}

function helloJS(from){
    console.info(`Hello ${from}`);
}

function sayHello(event){
    event.preventDefault();
    assembly.ccall('hello_c', 'null', ['string'], ['js']);
}

function addTriangle(event){
    event.preventDefault();
    drawRedTriangle(10, 10);
}

function addCircle(event){
    event.preventDefault();

}

initialize();
