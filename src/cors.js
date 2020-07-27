const CorsError = require("./exceptions/cors");

const whitelist = process.env.APP_WHITE_LIST;
const corsOptions = {
  origin: (origin, callback) => {
    if (process.env.APP_ENV === "local") {
      callback(null, true);
    } else if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new CorsError());
    }
  },
};

module.exports = corsOptions;
