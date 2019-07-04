export function isEqual(obj1,obj2){
  return JSON.stringify(obj1) == JSON.stringify(obj2);
}
export function length(obj){
  var n = 0;
  for(var i in obj){
    n++
  }
  return n;
}

export function isNull(obj){
  if(obj == undefined){
    return true;
  }

  if(length(obj) == 0){
    return true;
  }

  return false;
}
export function in_keys(obj,key){
  var flag = false;
  if(typeof key =='string'){
    for(var i in obj){
      if(i == key){
        flag = true;
        break;
      }
    }
  }
  return flag;
}