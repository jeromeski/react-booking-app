// const express = require('express');
import express from 'express';
import fs from 'fs';

const app = express();

// route midlleware
/**
  * @desc auto loads all routes from the /routes folder
  * @param string './routes
  * @return nothing is returned. forEach is used as sideEffects
*/
fs.readdirSync('./routes').forEach((r) => app.use('/api', require(`./routes/${r}`)));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server connected at port: ${PORT}`);
});
