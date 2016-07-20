function findMaxAndIndexs(arr) {
	var findArray = {}
	arr.forEach(function(item, index) {
		if (!findArray[item]) {
			findArray[item] = [index];
		} else {
			findArray[item].push(index);
		}
	})
	var max = 0;
	var maxChars = {};
	for (var key in findArray) {
		if (findArray[key].length > max) {
			maxChar = key;
			max = findArray[key].length;
		}
	}

	for (var key in findArray) {
		if (findArray[key].length == max) {
			maxChars[key] = findArray[key];
		}
	}
	return maxChars;
}
var myArray = ['a', 'x', 'x', 'd', 'm', 'a', 'x', 'm', 'p', 'j', 'a'];
var maxChars = findMaxAndIndexs(myArray);
console.log(maxChars);
var maxString = '';
for (var key in maxChars) {
	var maxChar = maxChars[key]
	maxString += '字母：' + key + ' 次数：' + maxChars[key].length + ' 顺序：' + maxChars[key].toString() + '\n  ';
}
var myElement = document.getElementById('myElement');
myElement.innerHTML = '数组：' + myArray.toString();
var maxElement = document.getElementById('maxElement');
maxElement.innerHTML = maxString;