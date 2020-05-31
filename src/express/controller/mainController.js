const mainService = require('../service/mainService');
const sMain = new mainService();



exports.main = async function (req, res) {
  const a = await sMain.pingPong(50);
  res.send(JSON.stringify({
    status: true,
    data: a
  }));
};

exports.testView = async function (req, res) {
  res.render('index', {
    csrfToken: req.csrfToken()
  });
};