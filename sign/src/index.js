import qs from 'qs';
import url from 'url';
import md5 from 'md5';
class ApiSign{
  constructor(appId,secret,extra = {}){
    this.appId = appId,
    this.secret = secret;
    this.debug = false;
    if(extra.debug){
      this.debug = extra.debug;
    }
  }
  sign(uri,options){
    if(process.env.NODE_ENV != 'production'){
      return {...options}
    }
    const urlParams = qs.parse(url.parse(uri).query);

    let postParams = {};
    const isPost = options.method == 'post' || options.method == 'put';
    if(isPost){
      postParams = options.data;
    }

    const signParam = {};
    signParam.appId = this.appId;
    signParam.timeStamp = this.timeStamp();
    const signStr = this.makeSign({
      ...urlParams,
      ...postParams,
      ...signParam
    });
    signParam.sign = signStr;
    const defaultOptions ={...options};

    if(isPost){
      defaultOptions.data = {
        ...options.data,
        ...signParam
      }
    }else{
      defaultOptions.params = {
        ...signParam
      }
    }
    return {...options,...defaultOptions};
  }

  timeStamp(){
    return Math.floor(Date.parse(new Date()) / 1000);
  }

  makeSign(params){
    const tmpParams = {};
    const {timeStamp} = params;
    Object.keys(params).sort().map(key => tmpParams[key] = params[key]);
    let paramStr = '';
    for(const i in tmpParams){
      if(typeof tmpParams[i] !== 'undefined' && tmpParams[i]){
        paramStr += `${i}${tmpParams[i]}`;
      }else if(typeof tmpParams[i] === 0){
        paramStr += `${i}0`;
      }else if(typeof tmpParams[i] === false){
        paramStr += `${i}false`;
      }else{
        paramStr += `${i}`;
      }
    }
    const secret = this.secret;
    if(this.debug){
      console.log(paramStr);
      console.log(`${secret}-${paramStr}-${timeStamp}`);
    }
    return md5(`${secret}-${paramStr}-${timeStamp}`);
  }
}

export default ApiSign;