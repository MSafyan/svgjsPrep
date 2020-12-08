const lineInit = () => {
	var anchor1 = draw.circle(50).fill('gray').cx(awsIcon.x()).cy(awsIcon.y());
	anchor1.draggable();

	var anchor2 = draw
		.circle(50)
		.fill('gray')
		.cx(serverLessIcon.x())
		.cy(serverLessIcon.y());

	anchor2.draggable();

	var line = draw.polyline([
		[0, 0],
		[0, 0],
	]);

	var lineGroup = draw.group();
	lineGroup.add(line);
	lineGroup.add(anchor1);
	lineGroup.add(anchor2);

	document.getElementById('myBtn').addEventListener('click', (e) => {
		if (updatable === 0) {
			updatable = 1;
			update();
			e.innerHTML = 'zero';
		} else if (updatable == 1) {
			e.innerHTML = 'zero';
			updatable = 0;
			update();
		}
	});

	var updatable = 0;

	var update = () => {
		if (updatable === 0) {
			line = line.plot([
				[0, 0],
				[0, 0],
			]);
		} else if (updatable === 1) {
			line.stroke({ color: '#39464e', width: 4, linecap: 'round' });
			line = line.plot([
				[anchor1.cx(), anchor1.cy()],
				[anchor2.cx(), anchor2.cy()],
			]);
		}
	};

	anchor1.on('mouseover', update);
	anchor2.on('mouseover', update);
};
