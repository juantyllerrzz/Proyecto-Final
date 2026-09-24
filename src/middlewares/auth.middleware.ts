import { Request, Response, NextFunction } from "express";


export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const authorization = req.header("Authorization");


  if (!authorization) {

    res.status(401).json({
      ok: false,
      message: "Unauthorized"
    });

    return;

  }


  const validTokens = [
    "Bearer instructor-token",
    "Bearer technician-token"
  ];


  if (!validTokens.includes(authorization)) {

    res.status(401).json({
      ok: false,
      message: "Unauthorized"
    });

    return;

  }


  next();

}
