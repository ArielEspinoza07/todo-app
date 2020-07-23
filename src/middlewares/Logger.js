const logger = (req, res, next) => {
    console.log('------------------------------');
    console.log('Route: ', req.path);
    console.log('Method: ', req.method);
    console.log('Time: ', Date.now());
    console.log('Query: ', req.query);
    console.log('Body: ', req.body);
    console.log('Params: ', req.params);

    next();
}

module.exports = logger;