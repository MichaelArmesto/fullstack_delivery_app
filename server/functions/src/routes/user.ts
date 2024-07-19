import {Router as route, Request, Response} from "express";

const userRoutes = route();

userRoutes.get("/", (req: Request, res: Response) => {
  return res.send("Inside user router");
});

userRoutes.get("/jwtVerification", async (req: Request, res: Response) => {
  console.log("Reached jwtVerification");
  return res.send("JWT verified");
});

export default userRoutes;
