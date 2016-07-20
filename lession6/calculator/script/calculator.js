function calculator(str1, str2, cal) {
	console.log('calculator');
	var x = parseFloat(str1);
	var y = parseFloat(str2);
	if (isNaN(x) || isNaN(y)) {
		return 0;
	}
	switch (cal) {
		case 'plus':
			return (x + y) + '';
		case 'sub':
			return (x - y) + '';
		case 'mult':
			return parseFloat((x * y).toFixed(10)) + '';
		case 'division':
			if (y == 0) {
				alert('除数不能为零');
				return '除数不能为零';
			} else {
				return parseFloat((x / y).toFixed(10)) + '';
			}
		default:
			alert('参数错误');
			return '参数错误';
	}
}
var str1 = '';
var str2 = '';
var str3 = '';
var calcul = '';
var calculatorul = document.getElementById('calculatorul');
var calculatorout = document.getElementById('calculatorout');
var calculatformul = document.getElementById('calculatformul');

function clearStr() {
	if (calcul == 'equal') {
		calcul = 'calcul';
		str1 = '';
		str2 = '';
		str3 = '';
	}
}
var btnClick = function(e) {
	console.log('str1 = ' + str1 + 'str2 = ' + str2 + 'calcul = ' + calcul);

	switch (e.target.id) {
		case 'delete':
			console.log('delete');
			if (str2) {
				str2 = str2.substring(0, str2.length - 1);
			} else {
				str1 = str1.substring(0, str1.length - 1);
			}
			var last = parseFloat(str3.charAt(str3.length - 1));
			console.log('last' + last);
			if (!isNaN(last)) {
				str3 = str3.substring(0, str3.length - 1);
			}
			break;
		case 'clearall':
			console.log('clearall');
			str1 = '';
			str2 = '';
			str3 = '';
			calcul = '';
			break;
		case 'clear':
			console.log('clear');
			str1 = '';
			str2 = '';
			str3 = '';
			calcul = '';
			break;
		case 'positive':
			console.log('positive');
			if (str2) {
				str2 = (str2 * -1) + '';
			} else {
				str1 = (str1 * -1) + '';
			}
			break;
		case 'reciprocal':
			console.log('reciprocal');
			if (str2) {
				str2 = (1 / str2) + '';
			} else {
				str1 = (1 / str1) + '';
			}
			break;
		case 'sin':
			console.log('sin');
			if (calcul) {
				str1 = Math.sin(calculator(str1, str2, calcul)) + '';
			} else {
				str1 = Math.sin(str1) + '';
			}
			str2 = '';
			calcul = '';
			break;
		case 'cos':
			console.log('cos');
			if (calcul) {
				str1 = Math.cos(calculator(str1, str2, calcul)) + '';
			} else {
				str1 = Math.cos(str1) + '';
			}
			str2 = '';
			calcul = '';
			break;
		case 'tan':
			console.log('tan');
			if (calcul) {
				str1 = Math.tan(calculator(str1, str2, calcul)) + '';
			} else {
				str1 = Math.tan(str1) + '';
			}
			str2 = '';
			calcul = '';
			break;
		case 'log':
			console.log('log');
			if (calcul) {
				str1 = Math.log(calculator(str1, str2, calcul)) + '';
			} else {
				str1 = Math.log(str1) + '';
			}
			str2 = '';
			calcul = '';
			break;
		case 'sqrt':
			console.log('sqrt');
			if (calcul) {
				str1 = Math.sqrt(calculator(str1, str2, calcul)) + '';
			} else {
				str1 = Math.sqrt(str1) + '';
			}
			str2 = '';
			calcul = '';
			break;
		case 'seven':
			clearStr();
			console.log('seven');
			if (calcul) {
				str2 += '7';
			} else {
				str1 += '7';
			}
			str3 += '7';

			break;
		case 'eight':
			clearStr();
			console.log('eight');
			if (calcul) {
				str2 += '8';
			} else {
				str1 += '8';
			}
			str3 += '8';
			break;
		case 'nine':
			clearStr();
			console.log('nine');
			if (calcul) {
				str2 += '9';
			} else {
				str1 += '9';
			}
			str3 += '9';
			break;
		case 'division':
			console.log('division calcul = ' + calcul);
			if (calcul && str1 && str2) {
				console.log('division2');
				str1 = calculator(str1, str2, calcul)
				str2 = '';
			}
			calcul = 'division';
			str3 += '÷';
			break;
		case 'percent':
			console.log('percent');
			if (str2) {
				str2 = (str2 / 100) + '';
			} else {
				str1 = (str1 / 100) + '';
			}
			break;
		case 'four':
			clearStr();
			console.log('four');
			if (calcul) {
				str2 += '4';
			} else {
				str1 += '4';
			}
			str3 += '4';
			break;
		case 'five':
			clearStr();
			console.log('five');
			if (calcul) {
				str2 += '5';
			} else {
				str1 += '5';
			}
			str3 += '5';
			break;
		case 'six':
			clearStr();
			console.log('six');
			if (calcul) {
				str2 += '6';
			} else {
				str1 += '6';
			}
			str3 += '6';
			break;
		case 'mult':
			console.log('mult');
			if (calcul && str1 && str2) {
				console.log('mult');
				str1 = calculator(str1, str2, calcul)
				str2 = '';
			}
			calcul = 'mult';
			str3 += '*';
			break;
		case 'one':
			clearStr();
			console.log('one');
			if (calcul) {
				str2 += '1';
			} else {
				str1 += '1';
			}
			str3 += '1';
			break;
		case 'two':
			clearStr();
			console.log('two');
			if (calcul) {
				str2 += '2';
			} else {
				str1 += '2';
			}
			str3 += '2';
			break;
		case 'three':
			clearStr();
			console.log('three');
			if (calcul) {
				str2 += '3';
			} else {
				str1 += '3';
			}
			str3 += '3';
			break;
		case 'sub':
			console.log('sub');
			if (calcul && str1 && str2) {
				console.log('sub');
				str1 = calculator(str1, str2, calcul)
				str2 = '';
			}
			calcul = 'sub';
			str3 += '-';
			break;
		case 'equal':
			console.log('equal');
			if (calcul) {
				console.log('equal');
				str1 = calculator(str1, str2, calcul)
				str2 = '';
				calcul = 'equal';
			}
			break;
		case 'zero':
			clearStr();
			console.log('zero');
			if (calcul) {
				str2 += '0';
			} else {
				str1 += '0';
			}
			str3 += '0';
			break;
		case 'float':
			clearStr();
			console.log('float');
			if (calcul) {
				str2 += '.';
			} else {
				str1 += '.';
			}
			str3 += '.';
			break;
		case 'plus':
			console.log('plus');
			if (calcul && str1 && str2) {
				console.log('plus');
				str1 = calculator(str1, str2, calcul)
				str2 = '';
			}
			calcul = 'plus';
			str3 += '+';
			break;
		default:
			break;
	}
	if (str2) {
		if (isNaN(parseFloat(str2))) {
			calculatorout.innerHTML = '0';
		} else {
			try {
				str2 = str2.substring(0, 19);
			} catch (e) {
				str2 = '0';
			}
			calculatorout.innerHTML = str2;
		}
	} else {
		if (isNaN(parseFloat(str1))) {
			calculatorout.innerHTML = '0';
		} else {
			try {
				str1 = str1.substring(0, 19);
			} catch (e) {
				str1 = '0';
			}
			calculatorout.innerHTML = str1;
		}
	}
	calculatformul.innerHTML = str3;
}

function addEvent(element, type, handle) {
	if (element instanceof HTMLCollection || element instanceof Array) {
		for (var i = 0; i < element.length; i++) {
			addEvent(element[i], type, handle);
		}
	}
	try {
		//Chrome FireFox Fafari Opera
		element.addEventListener(type, handle, false);
	} catch (e) {
		try {
			//IE 8.0
			element.attachEvent('on' + type, handle);
		} catch (e) {
			//other
			element['on' + type] = handle;
		}

	}
}
addEvent(calculatorul, 'click', btnClick);