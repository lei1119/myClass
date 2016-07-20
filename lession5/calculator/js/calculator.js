function calculator(x, y, cal) {
	switch (cal) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return parseFloat((x * y).toFixed(8));
		case '/':
			if (y == 0) {
				alert('除数不能为零');
				return '除数不能为零';
			} else {
				return x / y;
			}
		default:
			alert('参数错误');
			return '参数错误';
	}
}
var show = document.getElementById('show');

function calFunc() {
	var xValue = parseFloat(document.getElementById('x').value);
	var yValue = parseFloat(document.getElementById('y').value);
	var calValue = document.getElementById('cal').value;
	if (isNaN(xValue) || isNaN(yValue)) {
		alert('请输入数字');
	} else {
		show.innerHTML = calculator(xValue, yValue, calValue);
	}

}