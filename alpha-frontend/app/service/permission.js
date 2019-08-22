define(function (require, exports, module) {
    var request = null;

    var createRole = function (data, callback) {
        console.log("service接到data: " + data);
        request({
            type: 'post',
            data: data,
            url: '/role',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        });
    };

    var getAllRole = function (data, callback) {
        request({
            type: 'post',
            data: data,
            url: '/role/list',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        });
    };

    var deleteRole = function (data, callback) {
        request({
            type: 'delete',
            data: data,
            url: '/role/' + data,
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        })
    }

    var updateRole = function (data, callback) {
        console.log("service接到: " + data.name);
        request({
            type: 'put',
            data: data,
            url: '/role',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        })
    }

    var getAllPermission = function (data, callback) {
        request({
            type: 'post',
            data: data,
            url: '/role/permission/list',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        });
    }

    //根据角色id获取它的权限列表
    var getPermissionByRoleID = function (data, callback) {
        request({
            type: 'post',
            data: data,
            url: '/role/permission/' + data,
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        });
    }

    //更新一个角色权限列表
    var updateRolePermission = function (data, roleID, callback) {
        console.log("service接到: " + data.name);
        var json = [];
        for (let index = 0; index < data.length; index++) {
            json.push({"roleID": roleID, "permissionID": data[index]});
        }
        //防止当权限设为空时,后端取roleID值越界
        json.push({"roleID": roleID, "permissionID": -1});
        // console.log(json);
        console.log(_storage.get("token"));
        request({
            type: 'put',
            data: json,
            url: '/role/permission',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        })
    }

    return function (requestObj) {
        request = requestObj;
        return {
            createRole: createRole,
            getAllRole: getAllRole,
            deleteRole: deleteRole,
            updateRole: updateRole,
            getAllPermission: getAllPermission,
            getPermissionByRoleID: getPermissionByRoleID,
            updateRolePermission: updateRolePermission,
        }
    }
});