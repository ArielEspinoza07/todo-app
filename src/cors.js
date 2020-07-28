const { CorsError } = require("./exceptions/index");

const whitelist = process.env.APP_WHITE_LIST;
const corsOptions = {
  origin: (origin, callback) => {
    if (process.env.APP_ENV === "development") {
      callback(null, true);
    } else if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new CorsError());
    }
  },
};

module.exports = corsOptions;
