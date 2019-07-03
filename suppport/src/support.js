const random = require('string-random');
export function isArray(arr) {
  if(typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  } else {
    return Object.prototype.toString.call(arr) === "[object Array]";
  }
}
export function isObj(obj){
  return Object.prototype.toString.call(obj) === '[object Object]';
}
export function isNullArray(arr){
  return typeof thing === 'object' && (arr != null) && arr.length === 0;
}
export function inArray(arr,key,value){
  return arr.filter(item => item && item[key] ==  value).length > 0;
}

export function strRandom(len,opts={}){
  return random(len,opts);
}
export function isStr(str){
  return typeof str =='string'; 
}