const  functions = require('firebase-functions');
const admin = require('firebase-admin');
require('dotenv').config();

import { Request, Response, NextFunction } from "express";

const serviceAccountKey = require('../serviceAccountKey.json');

const express = require('express');

const app = express();


// body parser for JSON
app.use(express.json());

// enable cross origin
const cors = require('cors');
app.use(cors({origin: true}));

// enable access control
app.use((req: Request, res: Response, next: NextFunction) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
})

// firebase credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
});

// API endpoints
app.get("/", (req: Request, res: Response) => {
    return res.send("Hello World")
} )

exports.app = functions.https.onRequest(app);