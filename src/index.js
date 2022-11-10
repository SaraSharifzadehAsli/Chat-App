import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import express from "express";

// var express = require('express');
// var cors = require('cors');
// var app = express();
// app.use(cors());

// var cors = require('cors')
// var app = express()
// app.use(cors())

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);