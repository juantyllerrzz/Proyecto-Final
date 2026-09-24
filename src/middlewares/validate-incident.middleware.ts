import { Request, Response, NextFunction } from "express";


export function validateIncident(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const {
    title,
    description,
    reporter,
    location
  } = req.body;


  if (!title || typeof title !== "string") {

    res.status(400).json({
      ok:false,
      message:"Title is required"
    });

    return;

  }


  if (!description || typeof description !== "string") {

    res.status(400).json({
      ok:false,
      message:"Description is required"
    });

    return;

  }


  if (!reporter || typeof reporter !== "string") {

    res.status(400).json({
      ok:false,
      message:"Reporter is required"
    });

    return;

  }


  if (!location || typeof location !== "string") {

    res.status(400).json({
      ok:false,
      message:"Location is required"
    });

    return;

  }


  next();

}
