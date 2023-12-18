const requestMiddleware = (req, res, next) => {
  console.log(`
        PATH::${req.path} 
        METHOD:: ${req.method}
        BODY::${JSON.stringify(req.body)}`);
  next();
};
module.exports = requestMiddleware;
