var constants = require('./core/constants');
var login   = require('./core/login');
var Session = require('./core/session');
var request = require('./core/request'); 

var exports = module.exports = {
    login: login.login,
    setLoginUrl: login.setLoginUrl,
    LoginError: login.LoginError,
    clearSession: Session.clear,
    request: request.request,
    buildSessionHeader: request.buildSessionHeader,
    RequestError: request.RequestError,
    //Tunnel: Tunnel,
};

// 导出错误类型码
Object.keys(constants).forEach(function(key){
    if(key.indexOf('ERR_') === 0){
        exports[key] = constants[key];
    }
});