// import { draw } from './index.js';

var sidebarS = SVG().addTo('#sidebar').size(300, 500);
var rect = sidebarS
	.rect(90, 90)
	.fill('#fff')
	.stroke({ color: 'gray' })
	.css({ cursor: 'pointer' });
var circle = sidebarS
	.circle(90)
	.fill('#fff')
	.stroke({ color: 'gray' })
	.css({ cursor: 'pointer' })
	.move(100, 0);
var ellipse = sidebarS
	.ellipse(90, 45)
	.fill('#fff')
	.stroke({ color: 'gray' })
	.css({ cursor: 'pointer' })
	.move(200, 25);
var lineSlide = sidebarS
	.polyline([
		[0, 0],
		[90, 90],
	])
	.move(0, 100)
	.fill('black')
	.stroke({ color: 'black', width: 4 })
	.css({ cursor: 'pointer' })
	.draggable();

lineSlide.on('dragstart', function (e) {
	console.log('hello');
});

var sideBar = draw.group();
