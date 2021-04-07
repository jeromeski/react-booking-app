// const express = require('express');
import express from 'express';
import { readdirSync } from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// db connection
mongoose
	.connect(process.env.DATABASE, { useUnifiedTopology: true })
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log('DB Connection Failed : ', err));

// middlewares
app.use(cors());

/** 
  *morgan running in dev mode
*/
app.use(morgan('dev'));

// equivalent to body-parser
app.use(express.json());


// route midlleware
/**
  * @desc auto loads all routes from the /routes folder
  * @param string './routes
  * @return  forEach is used as sideEffect
*/
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server connected at port: ${PORT}`);
});
