const app = require('./app.js');

const port = 5000;

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});
