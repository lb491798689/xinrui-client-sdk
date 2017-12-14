//返回一个JSON Object
module.exports = {
    WX_SUCCESS_CODE:0,
 

    WX_HEADER_CODE: 'X-WX-Code',
    WX_HEADER_ENCRYPTED_DATA: 'X-WX-Encrypted-Data',
    WX_HEADER_IV: 'X-WX-IV',
    WX_HEADER_ID: 'X-WX-Id',
    WX_HEADER_SKEY: 'X-WX-Skey',
    WX_SESSION_MAGIC_ID: 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A',
    ERR_INVALID_PARAMS: 'ERR_INVALID_PARAMS',
    ERR_WX_LOGIN_FAILED: 'ERR_WX_LOGIN_FAILED',
    ERR_WX_GET_USER_INFO: 'ERR_WX_GET_USER_INFO',
    ERR_LOGIN_TIMEOUT: 'ERR_LOGIN_TIMEOUT',
    ERR_LOGIN_FAILED: 'ERR_LOGIN_FAILED',
    ERR_LOGIN_SESSION_NOT_RECEIVED: 'ERR_LOGIN_MISSING_SESSION',
    ERR_INVALID_SESSION: 'ERR_INVALID_SESSION',
    ERR_CHECK_LOGIN_FAILED: 'ERR_CHECK_LOGIN_FAILED',

    MA_HEADER_ERR   : 2003,    // 请求头未包含，请配合客户端 SDK 登录后再进行请求
    MA_AUTH_NET_ERR : 2001,    // 鉴权 API 失败，网络异常或鉴权服务器错误
    MA_AUTH_JSON_ERR: 2002,    // 鉴权服务器响应格式错误，无法解析 JSON 字符串

  
    MA_MYSQL_ERR                          : 1001,    // Mysql错误等
    MA_NO_INTERFACE                       : 1002,    // 接口参数不存在
    MA_PARA_ERR                           : 1003,    //参数错误
    MA_DECRYPT_ERR                        : 60021,   //解密失败
    MA_WEIXIN_NET_ERR                     : 1005,    //连接微信服务器失败
    MA_WEIXIN_CODE_ERR                    : 40029,   //CODE无效
    MA_CHANGE_SESSION_ERR                 : 1006,    //新增修改SESSION失败
    MA_WEIXIN_RETURN_ERR                  : 1007,    //微信返回值错误
    MA_SKEY_EXPIRED                       : 60011,   // Session过期
    MA_AUTH_ERR                           : 60012,   //鉴权失败
    MA_UPDATE_LASTVISITTIME_ERR           : 1008,    //更新最近访问时间失败
    MA_REQUEST_ERR                        : 1009,    //请求包不是json
    MA_INTERFACE_ERR                      : 1010,    //接口名称错误
    MA_NO_PARA                            : 1011,    //不存在参数
    MA_NO_APPID                           : 1012,    //不能获取AppID
    MA_INIT_APPINFO_ERR                   : 1013,    //初始化AppID失败
};