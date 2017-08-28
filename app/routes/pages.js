var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

module.exports = function() {

	app.get('/', function(req, res) {
		req.username='jitendra@atxlearning.com';
		req.password='aligarh@0571';
		app.post('http://localhost:8080/api/session',function(req,res){
			alert('5555');
		});
		//console.log(res.user);
		res.render('pages/home',res);
	});
	app.get('/dashboard', function(req, res) {

		req.username='jitendra@atxlearning.com';
		req.password='aligarh@0571';
		app.post('http://localhost:8080/api/session',function(req,res){
			alert('5555');
		});

		res.render('pages/home');
	});
	app.get('/about', function(req, res) {
		res.render('pages/about');
	});
}
