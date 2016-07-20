var colorset = document.getElementById('colorset');
var myHeader = document.getElementById('myheader');
var myNav = document.getElementById('mynav');
var rightfirst = document.getElementById('rightfirst');
var rightSecond = document.getElementById('rightsecond');
var myImport = document.getElementById('myimport');

colorset.onclick = function(e) {
	localStorage.myColor = e.target.id
	changeColor();
}


function changeColor() {
	for (var i = 1; i <= 4; i++) {
		rightfirst.classList.remove('borderColor' + i);
		myNav.classList.remove('borderColor' + i);

		myNav.classList.remove('backgroundColor' + i);
		for (var key in myImport.children) {
			var element = myImport.children[key];
			if (element.classList) {
				element.classList.remove('color' + i);
			}
		}

		for (var key in rightSecond.children) {
			var element = rightSecond.children[key];
			// console.log(element.classList);
			if (element.classList) {
				element.classList.remove('color' + i);
			}
		}
	}
	var colorId = localStorage.myColor;
	var borderColor, color, backgroundColor;
	switch (colorId) {
		case 'color1':
			borderColor = 'borderColor1';
			color = 'color1';
			backgroundColor = 'backgroundColor1';
			break;
		case 'color2':
			borderColor = 'borderColor2';
			color = 'color2';
			backgroundColor = 'backgroundColor2';
			break;
		case 'color3':
			borderColor = 'borderColor3';
			color = 'color3';
			backgroundColor = 'backgroundColor3';
			break;
		case 'color4':
			borderColor = 'borderColor4';
			color = 'color4';
			backgroundColor = 'backgroundColor4';
			break;
		default:
			borderColor = 'borderColor1';
			color = 'color5';
			backgroundColor = 'backgroundColor1';
			break;
	}

	rightfirst.classList.add(borderColor);
	myNav.classList.add(borderColor);
	myNav.classList.add(backgroundColor);
	rightSecond.classList.add(color);
	for (var key in myImport.children) {
		var element = myImport.children[key];
		if (element.classList) {
			element.classList.add(color);
		}
	}
	for (var key in rightSecond.children) {
		var element = rightSecond.children[key];
		if (element.classList) {
			element.classList.add(color);
		}
	}
}

changeColor();