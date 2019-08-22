define(function (require, exports, module) {
    var request = null;
    var login = function (data, callback) {
        request({
            type: 'post',
            data: {
                "userName": data.userName,
                "userPassword": data.userPassword,
            },
            url: '/login',
            devUrl: '202',
            unUseToken: true,
            loading: true,
            success: function (result) {
                callback(result);
                _storage.set('token',result.token);
                // console.log('token');
            },
        });
    };

    return function (requestObj) {
        request = requestObj;
        return {
            login: login,
        }
    }
});