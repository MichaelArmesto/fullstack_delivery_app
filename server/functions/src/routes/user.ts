import {Router as route, Request, Response} from "express";
import * as admin from "firebase-admin";
const userRoutes = route();

userRoutes.get("/", (req: Request, res: Response) => {
  return res.send("Inside user router");
});

userRoutes.get("/jwtVerification", async (req: Request, res: Response) => {
 if(!req.headers.authorization) {
    return res.status(500).send({ msg: 'Token not found'})
  }

  const token = req.headers.authorization.split(" ")[1];
  try{
    const decodedValue = await admin.auth().verifyIdToken(token);
    if(!decodedValue){
      return res.status(500).json({success: false, msg : 'Unathorized access'})
    }
    return res.status(200).json({success : true, decodedValue})
  }catch(err){
    return res.send({success : false, msg : `Error in token: ${err}`});
  }
});

export default userRoutes;
