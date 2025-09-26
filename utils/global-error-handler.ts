import { Request, Response, NextFunction } from 'express';

exports.global_error_handler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.status_code = err.status_code || 500;
  err.status = err.status || 'error';

  res.status(err.status_code).json({
    status: err.status,
    message: err.message,
  });
};
