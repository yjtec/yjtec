export function isNull(arr){
  if(arr == undefined){
    return true;
  }
  if(arr.length == 0){
    return true;
  }
  return false;
}

export function sum(a,b){
  return a + b;
}