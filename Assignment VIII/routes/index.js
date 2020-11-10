exports.form = (req, res) => {
  res.render('form', {});
};

exports.formdata = (req, res) => {
  res.render('formdata', req.body);
};

exports.jsondata = (req, res) => {
  res.render('jsondata', req.body);
};