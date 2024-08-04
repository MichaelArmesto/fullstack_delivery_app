import { Router as route, Request, Response } from "express";
import * as admin from "firebase-admin";

const userRoutes = route();

userRoutes.get("/", (req: Request, res: Response) => {
  return res.send("Inside user router");
});

userRoutes.get("/jwtVerification", async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).send({ msg: 'Token not found' });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedValue = await admin.auth().verifyIdToken(token);
    if (!decodedValue) {
      return res.status(401).json({ success: false, msg: 'Unauthorized access' });
    }
    return res.status(200).json({ success: true, decodedValue });
  } catch (err) {
    return res.status(401).json({ success: false, msg: `Error in token: ${err}` });
  }
});

export default userRoutes;
