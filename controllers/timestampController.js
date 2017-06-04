const timestamp = require('../api/dateAndTimestamp');

exports.homePage = (req, res) => {
  res.render('index', { title: 'Timestamp' });
};

exports.getResult = (req, res) => {
  const userInput = req.body.input;
  const results = timestamp.getDateAndTimestamp(userInput);
  res.render('index', { title: 'Timestamp', results });
};

