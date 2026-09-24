import { Request, Response, NextFunction } from "express";


export function requestInfoMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {


  req.requestInfo = {

    timestamp: new Date().toISOString(),

    method: req.method,

    path: req.path

  };


  next();

}
