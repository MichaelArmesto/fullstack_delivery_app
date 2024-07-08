import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express = require("express");
import cors = require("cors");
import {Request, Response, NextFunction} from "express";
import userRoutes from "./routes/user";
import {config} from "dotenv";

const serviceAccountKey = require("../serviceAccountKey.json");

config();

const app = express();

// body parser for JSON
app.use(express.json());

// enable cross origin
app.use(cors({origin: true}));

// enable access control
app.use((req: Request, res: Response, next: NextFunction) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// firebase credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey as admin.ServiceAccount),
  });

// API endpoints
app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});

// Use the user routes
app.use("/api/users", userRoutes);

exports.app = functions.https.onRequest(app);
