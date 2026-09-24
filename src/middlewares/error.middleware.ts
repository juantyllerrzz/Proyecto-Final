import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error";


export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {


  if (error instanceof AppError) {

    res.status(error.statusCode).json({
      ok: false,
      message: error.message
    });

    return;

  }


  console.error(error);


  res.status(500).json({
    ok: false,
    message: "Internal server error"
  });

}
