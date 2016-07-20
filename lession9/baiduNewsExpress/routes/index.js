var express = require('express');
var router = express.Router();
var dbManager = require('./dbmanager')(router);

var db = require('./dbmanager');
var dbManager = db(router);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/manager', function(req, res, next) {
	res.render('manager');
});

router.post('/manager/select', dbManager.select, function(req, res, next) {
	res.send(res.locals.result);
});

router.post('/manager/delete', dbManager.delete, function(req, res, next) {
	// res.render('manager');
	console.log(req.body.newsId);
	res.send(res.locals.result);
});

router.post('/manager/insert', dbManager.insert, function(req, res, next) {
	res.send(res.locals.result);
});

router.post('/manager/update', dbManager.update, function(req, res, next) {
	console.log('zhanglei')
	res.send(res.locals.result);
});

module.exports = router;