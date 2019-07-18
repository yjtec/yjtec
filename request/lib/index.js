'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _umiRequest = require('umi-request');

var _antd = require('antd');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  433: '用户登录过期',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
var errorHandler = function errorHandler(error) {
  var _error$response = error.response,
      response = _error$response === undefined ? {} : _error$response;
};
var request = (0, _umiRequest.extend)({
  errorHandler: errorHandler,
  credentials: 'include' // 默认请求是否带上cookie
});
request.interceptors.response.use(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, options) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return response.clone().json();

          case 2:
            data = _context.sent;

            if (!(data.errcode != undefined && data.errcode != 0)) {
              _context.next = 6;
              break;
            }

            _antd.message.error(data.errmsg);
            return _context.abrupt('return', false);

          case 6:
            if (options.method == 'DELETE' && data.errcode == 0) {
              //成功的提示
              _antd.message.success(data.errmsg);
            }
            if (options.alert != undefined) {
              _antd.message.success(data.errmsg);
            }

            return _context.abrupt('return', response);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
exports.default = request;