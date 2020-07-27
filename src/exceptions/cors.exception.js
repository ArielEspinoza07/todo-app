class CorsError extends Error {
  constructor(message) {
    message = message || "Not allowed by CORS";
    super(message);
    this.name = "CorsError";
  }
}

module.exports = CorsError;