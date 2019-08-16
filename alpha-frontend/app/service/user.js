define(function (require, exports, module) {
    var request = null;

    var createUser = function (data, callback) {
        request({
            type: 'post',
            data: data,
            url: '/user',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        });
    };

    var getAllUser = function (data, callback) {
        request({
            type: 'post',
            data: data,
            url: '/user/list',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        })
    }

    var getUser = function (data, callback) {
        // console.log("service接到data: " + data);
        request({
            type: 'get',
            data: data,
            url: '/user/' + data,
            devUrl: '202',
            loading: true,
            success: function (result) {
                // console.log("service收到后端返回: " + result);
                callback(result);
            },
        })
    }  
    
    var updateUser = function (data, callback) {

    }

    return function (requestObj) {
        request = requestObj;
        return {
            createUser: createUser, //创建用户
            getAllUser: getAllUser, //读取所有用户
            getUser: getUser, //读取指定用户
        }
    }
});

