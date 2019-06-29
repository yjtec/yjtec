(function(){
  const Local = require('./local').Local;
  var key = 'global_data_test';
  var db = new Local(key);
  exports.LDB = (function(){
    function LDB(opts){
      this.data = db.get();
      if(!(this instanceof exports.LDB)){
        return new exports.LDB(opts);
      }
    }
    LDB.prototype.get = function(id){
      if(!id){
        return this.data;
      }

      return this.data[id];
    }
    LDB.prototype.set = function(data){
      db.set(data)
    }
    return LDB;
  })()
}).call(this);