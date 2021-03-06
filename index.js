const express = require('express');
const app = express();

app.use(express.static('assets'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server listening on port:', port);
})