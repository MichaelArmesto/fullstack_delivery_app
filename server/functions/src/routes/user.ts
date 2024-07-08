import {Router as route, Request, Response} from "express";

const userRoutes = route();

userRoutes.get("/", (req: Request, res: Response) => {
  return res.send("Inside user router");
});

export default userRoutes;
