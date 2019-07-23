var sass = require('node-sass');
var path = require('path');
var fs = require('fs');
module.exports = function processSass(data, filename) {
    var ext = path.extname(filename);
    if(ext == '.less'){
      //var targetPath = filename.str_replace(path.resolve('src'),path.resolve('lib'));
      var targetPath = filename.replace(path.resolve('src'),path.resolve('lib'));
      var content = fs.readFileSync(filename);
      fs.writeFileSync(targetPath,content)
      console.log(filename +' -> '+ targetPath);
    }
};