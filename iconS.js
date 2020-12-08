var anchor = [];
var rect = [];
var anchorable = ['awsIcon', 'serverLessIcon'];
// var anchorPoistion = [];

function awsIconCreate() {
	awsIcon = draw.group().css('cursor', 'pointer').id('awsIcon');

	var awsB = draw
		.path(
			'M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z'
		)
		.fill('#f90');

	var awsA = draw
		.path(
			'M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z'
		)
		.fill('#252f3e');

	awsIcon.add(awsA);
	awsIcon.add(awsB);

	awsIcon.width(100).height(100);
	anchorCreate('awsIcon');
}

function serverLessIconInit() {
	serverLessIcon = draw.group().css('cursor', 'pointer').id('serverLessIcon');

	serverLess = draw
		.path(
			'M42 11L47.691 9 42 7 36.309 9zM43 12.667L43 19 48 17.333 48 11zM41 12.667L36 11 36 17.333 41 19zM28 11L33.691 9 28 7 22.309 9zM29 12.667L29 19 34 17.333 34 11zM27 12.667L22 11 22 17.333 27 19zM21 23L26.691 21 21 19 15.309 21zM22 24.667L22 31 27 29.333 27 23zM20 24.667L15 23 15 29.333 20 31zM7 23L12.691 21 7 19 1.309 21zM8 24.667L8 31 13 29.333 13 23zM6 24.667L1 23 1 29.333 6 31zM14 35L19.691 33 14 31 8.309 33zM15 36.667L15 43 20 41.333 20 35zM13 36.667L8 35 8 41.333 13 43z'
		)
		.fill('#ff8f00')
		.x(100)
		.y(100);
	serverLessIcon.add(serverLess);
	serverLessIcon.draggable();
	anchorCreate('serverLessIcon');
}

function anchorCreate(id) {
	var Icon = SVG(`#${id}`);

	anchorPoistion = [
		{ x: Icon.x(), y: Icon.y() },
		{ x: Icon.x() + Icon.width(), y: Icon.y() },
		{ x: Icon.x(), y: Icon.y() + Icon.height() },
		{ x: Icon.x() + Icon.width(), y: Icon.y() + Icon.height() },
	];
	anchorPoistionLength = anchorPoistion.length;

	rect[`${id}`] = draw
		.rect(Icon.rbox().width, Icon.rbox().height)
		.move(Icon.x(), Icon.y())
		.fill('none')
		.stroke('black');
	for (var a = 0; a < anchorPoistion.length; a++) {
		anchor[`${id}${a}`] = draw
			.circle(15)
			.fill('#a99256')
			.center(anchorPoistion[a].x, anchorPoistion[a].y)
			.css({ cursor: 'pointer' })
			.id(`anchor${id}${a}`);
		anchor[`${id}${a}`].draggable();
	}
	Icon.add(rect[`${id}`]);
	Icon.draggable();
	for (var a = 0; a < anchorPoistionLength; a++) {
		// var anchored =SVG(#)
		anchor[`${id}${a}`].on('dragend', awsAnchorDrag);
		anchor[`${id}${a}`].on(['mouseover', 'mouseleave'], pressed);
	}
	// debugger;
	Icon.on('dragmove', awsIconDrag);
	Icon.on(['mousedown', 'mouseup'], pressed);
}

function awsAnchorDrag(e) {
	console.log(this.node.id);
	// anchor[`${anchorable}`];
	var index;
	debugger;
	for (var a = 0; a < anchorable.length; a++) {
		const res = this.node.id.match(/awsIcon/);
		if (this.node.id.match(`/${anchorable[a]}/`)) {
			index = a;
			break;
		}
	}
	var Icon = SVG(`#${anchorable[index]}`);
	if (anchor[`${anchorable[index]}0`].hasClass('active')) {
		if (
			anchor[`${anchorable[index]}0`].cx() !==
			anchor[`${anchorable[index]}2`].cx()
		) {
			anchor[`${anchorable[index]}2`].cx(anchor[`${anchorable[index]}0`].cx());
			Icon.width(
				anchor[`${anchorable[index]}1`].cx() -
					anchor[`${anchorable[index]}0`].cx()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
		if (
			anchor[`${anchorable[index]}0`].y() !==
			anchor[`${anchorable[index]}1`].y()
		) {
			anchor[`${anchorable[index]}1`].cy(anchor[`${anchorable[index]}0`].cy());
			Icon.height(
				anchor[`${anchorable[index]}2`].cy() -
					anchor[`${anchorable[index]}0`].cy()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
	} else if (anchor[`${anchorable[index]}1`].hasClass('active')) {
		if (
			anchor[`${anchorable[index]}1`].cx() !==
			anchor[`${anchorable[index]}3`].cx()
		) {
			anchor[`${anchorable[index]}3`].cx(anchor[`${anchorable[index]}1`].cx());
			Icon.width(
				anchor[`${anchorable[index]}3`].cx() -
					anchor[`${anchorable[index]}2`].cx()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
		if (
			anchor[`${anchorable[index]}1`].cy() !==
			anchor[`${anchorable[index]}0`].cy()
		) {
			anchor[`${anchorable[index]}0`].cy(anchor[`${anchorable[index]}1`].cy());
			Icon.height(
				anchor[`${anchorable[index]}3`].cy() -
					anchor[`${anchorable[index]}1`].cy()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
	} else if (anchor[`${anchorable[index]}2`].hasClass('active')) {
		if (
			anchor[`${anchorable[index]}2`].cx() !==
			anchor[`${anchorable[index]}0`].cx()
		) {
			anchor[`${anchorable[index]}0`].cx(anchor[`${anchorable[index]}2`].cx());
			Icon.width(
				anchor[`${anchorable[index]}3`].cx() -
					anchor[`${anchorable[index]}2`].cx()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
		if (
			anchor[`${anchorable[index]}3`].cy() !==
			anchor[`${anchorable[index]}2`].cy()
		) {
			anchor[`${anchorable[index]}3`].cy(anchor[`${anchorable[index]}2`].cy());
			Icon.height(
				anchor[`${anchorable[index]}3`].cy() -
					anchor[`${anchorable[index]}1`].cy()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
	} else if (anchor[`${anchorable[index]}3`].hasClass('active')) {
		if (
			anchor[`${anchorable[index]}3`].cx() !==
			anchor[`${anchorable[index]}1`].cx()
		) {
			anchor[`${anchorable[index]}1`].cx(anchor[`${anchorable[index]}3`].cx());
			Icon.width(
				anchor[`${anchorable[index]}3`].cx() -
					anchor[`${anchorable[index]}2`].cx()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
		if (
			anchor[`${anchorable[index]}3`].cy() !==
			anchor[`${anchorable[index]}2`].cy()
		) {
			anchor[`${anchorable[index]}2`].cy(anchor[`${anchorable[index]}3`].cy());
			Icon.height(
				anchor[`${anchorable[index]}3`].cy() -
					anchor[`${anchorable[index]}1`].cy()
			);
			Icon.move(
				anchor[`${anchorable[index]}0`].cx(),
				anchor[`${anchorable[index]}0`].cy()
			);
		}
	}
}
function pressed(e) {
	// console.log(this);
	if (e.type === 'mouseover') {
		this.fill({ color: '#482ff7' });
		this.toggleClass('active');
	} else if (e.type === 'mouseleave') {
		this.fill({ color: '#a99256' });
		this.removeClass('active');
	}
}

function awsIconDrag() {
	// debugger;
	const id = this.node.id;
	anchorPoistionDragged = [
		{ x: this.x(), y: this.y() },
		{ x: this.x() + this.width(), y: this.y() },
		{ x: this.x(), y: this.y() + this.height() },
		{ x: this.x() + this.width(), y: this.y() + this.height() },
	];
	for (var a = 0; a < anchorPoistionDragged.length; a++) {
		// debugger;
		anchor[`${id}${a}`].center(
			anchorPoistionDragged[a].x,
			anchorPoistionDragged[a].y
		);
	}
	// awsAnchor1.center(awsIcon.x(), awsIcon.y());
	// awsAnchor2.center(awsIcon.x() + awsIcon.width(), awsIcon.y());
	// awsAnchor3.center(awsIcon.x(), awsIcon.y() + awsIcon.height());
	// awsAnchor4.center(
	// 	awsIcon.x() + awsIcon.width(),
	// 	awsIcon.y() + awsIcon.height()
	// );
}

function IconInit() {
	awsIconCreate();
	serverLessIconInit();
}
IconInit();

// function awsIconAnchorEventInit(id) {
// 	for (var a = 0; a < anchorPoistionLength; a++) {
// 		anchor[`${id}${a}`].on('dragmove', awsAnchorDrag);
// 		anchor[`${id}${a}`].on(
// 			['mousedown', 'mouseup', 'mouseover', 'mouseleave'],
// 			pressed
// 		);
// 	}
// 	awsIcon.on('dragmove', awsIconDrag);
// 	awsIcon.on(['mousedown', 'mouseup'], pressed);
// }

// function anchorEventInit() {
// 	var a;
// 	var element;
// 	for (a = 1; a < 5; a++) {
// 		element = 'awsAnchor' + a;
// 		console.log(element);
// 		`awsAnchor1`.on('dragstart', awsAnchorDrag);
// 		// element.mousedown(pressed);
// 		// element.mouseup(pressed);
// 	}
// }
// anchorEventInit();
// awsAnchor4.on('dragend', function () {
// 	console.log(this);
// });

// var rbox = Icon.rbox(draw);

// anchor[`${id}2`] = draw
// 	.circle(15)
// 	.fill('#a99256')
// 	.center(Icon.x() + Icon.width(), Icon.y())
// 	.css({ cursor: 'pointer' })
// 	.id('awsAnchor2');
// // debugger;
// anchor[`${id}3`] = draw
// 	.circle(15)
// 	.fill('#a99256')
// 	.center(Icon.x(), Icon.y() + Icon.height())
// 	.css({ cursor: 'pointer' })
// 	.id('awsAnchor3');

// anchor[`${id}4`] = draw
// 	.circle(15)
// 	.fill('#a99256')
// 	.center(Icon.x() + Icon.width(), Icon.y() + Icon.height())
// 	.css({ cursor: 'pointer' })
// 	.id('awsAnchor4');

// Icon.add(awsAnchor1);
// anchor[`${id}0`].draggable();
// anchor[`${id}`].draggable();
// anchor[`${id}3`].draggable();
// anchor[`${id}4`].draggable();

// awsAnchor2.on('dragmove', awsAnchorDrag);
// awsAnchor2.on(['mousedown', 'mouseup', 'mouseover', 'mouseleave'], pressed);

// awsAnchor3.on('dragmove', awsAnchorDrag);
// awsAnchor3.on(['mousedown', 'mouseup', 'mouseover', 'mouseleave'], pressed);

// awsAnchor4.on('dragmove', awsAnchorDrag);
// awsAnchor4.on(['mousedown', 'mouseup', 'mouseover', 'mouseleave'], pressed);
