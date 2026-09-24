import { Request, Response, NextFunction } from "express";


export function adminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const authorization = req.header("Authorization");


  if (authorization !== "Bearer instructor-token") {

    res.status(403).json({
      ok: false,
      message: "Forbidden"
    });

    return;

  }


  next();

}
