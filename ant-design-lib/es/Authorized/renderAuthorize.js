/* eslint-disable import/no-mutable-exports */
var CURRENT = 'NULL';
/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */

var renderAuthorize = function renderAuthorize(Authorized) {
  return function (currentAuthority) {
    if (currentAuthority) {
      if (typeof currentAuthority === 'function') {
        CURRENT = currentAuthority();
      }

      if (Object.prototype.toString.call(currentAuthority) === '[object String]' || Array.isArray(currentAuthority)) {
        CURRENT = currentAuthority;
      }
    } else {
      CURRENT = 'NULL';
    }

    return Authorized;
  };
};

export { CURRENT };
export default (function (Authorized) {
  return renderAuthorize(Authorized);
});