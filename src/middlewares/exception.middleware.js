const errorTypes = {
  CorsError: 401,
  NotFoundError: 404,
  ValidationError: 422,
};
const errorMessages = {
  NotFoundError: "Not Found"
};
const error = (error, req, res, next) => {
  console.log("------------------------------");
  console.error("Error ");
  console.error("name: ", error.name);
  console.error("message: ", error.message);
  const statusCode =
    res.statusCode === 200 ? errorTypes[error.name] || 500 : res.statusCode;
    console.error("code: ", statusCode);
  res.status(statusCode).json({
    status: false,
    message: errorMessages[error.name] || error.message,
  });
};

module.exports = error;
