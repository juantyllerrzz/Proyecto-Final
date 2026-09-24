import { Request, Response, NextFunction } from "express";


export function validatePriority(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const allowed = [
    "LOW",
    "MEDIUM",
    "HIGH",
    "CRITICAL"
  ];


  if (!allowed.includes(req.body.priority)) {

    res.status(400).json({
      ok: false,
      message: "Invalid priority"
    });

    return;

  }


  next();

}
