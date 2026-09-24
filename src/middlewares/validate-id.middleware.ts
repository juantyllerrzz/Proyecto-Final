import { Request, Response, NextFunction } from "express";


export function validateId(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const id = Number(req.params.id);


  if (Number.isNaN(id)) {

    res.status(400).json({
      ok: false,
      message: "Invalid incident id"
    });

    return;

  }


  if (!Number.isInteger(id) || id <= 0) {

    res.status(400).json({
      ok: false,
      message: "Invalid incident id"
    });

    return;

  }


  next();

}
