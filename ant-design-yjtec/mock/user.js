function getFakeCaptcha(req, res) {
  return res.json({
    code: '123456',
    errcode: 0,
    errmsg: 'success'
  });
}
export default {
  'POST /api/user': (req, res) => {
    const {
      password,
      account,
      type
    } = req.body;
    if (password === '123456' && account === 'admin') {
      res.send({
        errmsg: '登陆成功',
        errcode: 0,
        type,
        currentAuthority: 'admin',
      });
      return;
    }
    res.send({
      errmsg: '登陆失败',
      errcode: -1,
      type,
      currentAuthority: 'guest',
    });
  },
  'GET /api/captcha': getFakeCaptcha,
  'GET /api/currentUser': {
    name: 'Serati Ma',
    avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564632580831&di=ef5f48ed921597a5121a74ed7dc3b796&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01786557e4a6fa0000018c1bf080ca.png'
  }
};