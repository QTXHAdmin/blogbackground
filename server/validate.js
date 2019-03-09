const validateUser = function(req, res, next) {
  // console.log(req.baseUrl);
  var urlReg = new RegExp('/admin');
  console.log(req.originalUrl);
  // console.log(urlReg.test(req.originalUrl));
  if (urlReg.test(req.originalUrl)) {
    req.session.user ? next() : res.send('请先登录!');
  } else {
    next();
  }
};

module.exports = validateUser;
