"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'src', 'build')));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/src/build/index.html'));
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
