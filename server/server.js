// const express = require('express');
import express from 'express';
import router from './routes/auth';

const app = express();

// route midlleware
app.use('/api', router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server connected at port: ${PORT}`);
});
