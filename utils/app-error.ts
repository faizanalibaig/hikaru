class AppError extends Error {
  status_code: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, status_code: number) {
    super(message);
    this.status_code = status_code;
    this.status = `${status_code}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
