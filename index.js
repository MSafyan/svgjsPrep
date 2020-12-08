// const awsIconInit = require('./iconS');
// import { awsIconInit } from './iconS.js';

var draw = SVG().addTo('#create').size(1920, 1080);
var mouseDown = false;
var mouseDownX = 0;
var mouseDownY = 0;
var gridX = 0;
var gridY = 0;

// default size
var gridCellW = 80;
var gridCellH = 80;

var smallGrid = draw.pattern(8, 8, function (add) {
	add
		.path('M 8 0 L 0 0 0 8')
		.fill('none')
		.stroke({ color: 'gray', width: 0.3 })
		.css({ patternUnits: 'userSpaceOnUse' });
});

var biggerGrid = draw.pattern(80, 80, function (add) {
	add.rect().height(100).width(100).fill(smallGrid);
	add
		.path('M 80 0 L 0 0 0 80')
		.fill('none')
		.stroke({ color: 'gray', width: 1 })
		.css({ patternUnits: 'userSpaceOnUse' });
});

var surface = draw.rect(1920, 1080).x(-80).y(-80).fill(biggerGrid).transform({
	translateX: 0,
	translateY: 0,
});
function initializeSurface() {
	surface.on('mousedown', onMouseDown);
	surface.on('mouseup', onMouseUp);
	surface.on('mousemove', onMouseMove);
	surface.on('mouseleave', onMouseLeave);
}

initializeSurface();

const LEFT_MOUSE_BUTTON = 0;

function onMouseDown(evt) {
	if (evt.button == LEFT_MOUSE_BUTTON) {
		evt.preventDefault();
		mouseDown = true;
		mouseDownX = evt.clientX;
		mouseDownY = evt.clientY;
	}
}

function onMouseUp(evt) {
	if (evt.button == LEFT_MOUSE_BUTTON) {
		evt.preventDefault();
		mouseDown = false;
	}
}

function onMouseMove(evt) {
	if (mouseDown) {
		evt.preventDefault();
		var mouseX = evt.clientX;
		var mouseY = evt.clientY;
		var mouseDX = mouseX - mouseDownX;
		var mouseDY = mouseY - mouseDownY;
		gridX += mouseDX;
		gridY += mouseDY;
		mouseDownX = mouseX;
		mouseDownY = mouseY;

		var dx = gridX % gridCellW;
		var dy = gridY % gridCellH;
		surface.transform({ translateX: dx, translateY: dy });

		// serverLessIcon.transform({
		// 	translateX: gridX,
		// 	translateY: gridY,
		// });

		// awsIcon.transform({
		// 	translateX: gridX,
		// 	translateY: gridY,
		// });
		for (var b = 0; b < anchorable.length; b++) {
			var anchorableIcons = SVG(`#${anchorable[b]}`);
			anchorableIcons.transform({
				translateX: gridX,
				translateY: gridY,
			});
			for (var a = 0; a < anchorPoistion.length; a++) {
				// debugger;
				const iconIndex = anchor[`${anchorable[b]}${a}`];
				iconIndex.transform({
					translateX: gridX,
					translateY: gridY,
				});
			}
		}
	}
}

function onMouseLeave(evt) {
	evt.preventDefault();
	mouseDown = false;
}
/* var cursor = document.querySelector('#create'); */

/* document.getElementById("create").addEventListener('click',(e)=>{ 
if(updatable===1){
update();
line.clear();
}
}) */

/* rect2.radius(10) */

/* var box1 = draw.rect(100,100).move(50,50).bbox()
var box2 = draw.rect(100,100).move(200,200).bbox()
var box3 = box1.merge(box2);
box1.draggable(); */

/* var icon =SVG('#aws').size(50,50);
console.log(icon.y()); */
/* icon.draggable(); */
/* console.log(rext1.x()); */

/* var rect1=draw.rect(50,50).fill('#ec7211'); 
rect1.draggable(); */

/* var rect2=draw.rect(50,50).fill('#ec7211').move(120,20); 
rect2.draggable(); */

/* 
resizeGrid(100, 100, 20, 20);

 // Programmatically change the grid spacing for the larger grid cells and smaller grid cells.
function resizeGrid(lw, lh, sw, sh) {
  gridCellW = lw;
  gridCellH = lh;
var elLargeGridRect = document.getElementById("largeGridRect");
  var elLargeGridPath = document.getElementById("largeGridPath");
  var elLargeGrid = document.getElementById("largeGrid");
  
  var elSmallGridPath = document.getElementById("smallGridPath");
  var elSmallGrid = document.getElementById("smallGrid");
  
  var elSvg = document.getElementById("svg");
  var elSurface = document.getElementById("surface");
  var elGrid = document.getElementById("grid");

biggerGrid.x(lw);
biggerGrid.y(lh);

elLargeGridRect.setAttribute("width", lw);
  elLargeGridRect.setAttribute("height", lh);
  elLargeGridPath.setAttribute("d", "M " + lw + " 0 H 0 V " + lh);
  elLargeGrid.setAttribute("width", lw);
  elLargeGrid.setAttribute("height", lh);

  elSmallGridPath.setAttribute("d", "M " + sw + " 0 H 0 V " + sh);
  elSmallGrid.setAttribute("width", sw);
  elSmallGrid.setAttribute("height", sh);

  elGrid.setAttribute("x", -lw);
  elGrid.setAttribute("y", -lh);

  var svgW = +elSvg.getAttribute("width");
  var svgH = +elSvg.getAttribute("height");

  elSurface.setAttribute("width", svgW + lw * 2);
  elSurface.setAttribute("height", svgH + lh * 2);

  elSurface.setAttribute("x", -lw);
  elSurface.setAttribute("y", -lh);

  elSurface.setAttribute("width", svgW + lw * 2);
  elSurface.setAttribute("height", svgH + lh * 2);
}

 */
