const logger = (req, res, next) => {
  console.log("------------------------------");
  console.log("url: ", req.path);
  console.log("method: ", req.method);
  console.log("time: ", Date.now());
  console.log("status: ", res.statusCode);
  if (req.query) {
    console.log("query: ", req.query);
  }
  if (req.body) {
    console.log("body: ", req.body);
  }
  if (req.params) {
    console.log("params: ", req.params);
  }
  

  next();
};

module.exports = logger;
