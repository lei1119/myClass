define('main', ['jquery-sea', 'index'], function(require, exports, module) {

	var index = require('index');

	// 头部菜单
	index.tabMenu();
	// tab切换
	index.tabMain();
	//搜索
	index.search();
})