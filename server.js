var express = require('express'),
	api = require('./api'),
	path = require('path'),
	app = express();


app
	.use(express.static('./public'))
	.use('/api', api)
	.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, './public', 'main.html') );
	})
	.listen(3000);