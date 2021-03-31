const express = require('express');
const app = express();

app.get('/api/:message', (req, res) => {
	res.status(200).send(req.params.message);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server connected at port: ${PORT}`);
});
