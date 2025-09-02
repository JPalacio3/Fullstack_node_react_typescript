import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Recuperar los errores de la respuesta del servidor
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
