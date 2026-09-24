import { Request, Response, NextFunction } from "express";


export function validateTime(
  req: Request,
  res: Response,
  next: NextFunction
) {


  const { estimatedMinutes, priority } = req.body;



  if (typeof estimatedMinutes !== "number") {

    res.status(400).json({
      ok:false,
      message:"estimatedMinutes must be numeric"
    });

    return;

  }



  if (estimatedMinutes <= 0) {

    res.status(400).json({
      ok:false,
      message:"estimatedMinutes must be greater than zero"
    });

    return;

  }



  if (estimatedMinutes > 480) {

    res.status(400).json({
      ok:false,
      message:"estimatedMinutes cannot exceed 480 minutes"
    });

    return;

  }



  // Regla especial:
  // Un incidente CRITICAL no puede superar 60 minutos

  if (
    priority === "CRITICAL" &&
    estimatedMinutes > 60
  ) {

    res.status(400).json({

      ok:false,

      message:
        "CRITICAL incidents cannot exceed 60 minutes"

    });

    return;

  }



  next();

}
