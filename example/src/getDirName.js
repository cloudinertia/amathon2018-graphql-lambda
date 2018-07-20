const fs = require("fs");
const files = fs.readdirSync(__dirname);
const dirs = files.filter(file => {
  return !/.+\.js/g.test(file);
});
module.exports = dirs;
