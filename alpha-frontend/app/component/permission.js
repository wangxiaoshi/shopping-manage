
define(function (require, exports, module) {
    var alert = _alert;

    //动态获取当前权限状态   FIXME: 在其他页面会出现ajax空参数错误
    var getPermissionListByRoleID = function (data, callback) {
        _request.POST({
            type: 'POST',
            url : '/role/permission/' + data,
            data : data,
            devUrl: '202',
            loading : true,
            success : function (res) {
                callback(res);
            },
        })
    }

    //该表应与permissionGroup/premissionlist保持同步!!!
    var PerObject = {
        index: true,
        login: true, 
        permissionGroup: false,
        support: true,
        user: {
            create: false,
            edit: false,
            search: false,
            delete: false,
        },

        model: {
            search: true,
            review: true,
        },
        project: {
            search: true,
            bidding: true,
        },
        income: {
            downloadIncome: true,
            projectIncome: true,
        },
        statistics: {
            userStat: true,
            contactStat: true,
            incomeStat: true,
            modelStat: true,
            projectStat: true,
        },
        contract: {
            create: true,
            search: true,
        },
        forum: {
            create: false,
            topic: true,
            post: true,
        }
    };

    var checkHaveTrue = function (obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const item = obj[key];
                if (item === true) {
                    return true;
                } else {
                    var isObject = DevUI.verify.is('object', item);
                    if (isObject) {
                        if (checkHaveTrue(item)) {
                            return true;
                        };
                    };
                };
            }
        };
        return false;
    };

    var checkAllTrue = function (obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const item = obj[key];
                if (item === false) {
                    return false;
                } else {
                    var isObject = DevUI.verify.is('object', item);
                    if (isObject) {
                        if (!checkAllTrue(item)) {
                            return false;
                        };
                    };
                };
            }
        };
        return true;
    };

    var stringToObject = function (str, isRender) {
        try {
            var testObj = null;
            eval('testObj = PerObject.' + str);
            var isObject = DevUI.verify.is('object', testObj);
            if (isObject) {
                if (isRender) {
                    return checkHaveTrue(testObj);
                } else {
                    return checkAllTrue(testObj);
                };
            } else {
                return testObj;
            }
        } catch (error) {
            return false;
        }
    };


    return {

        // 拥有权限验证
        // 当拥有权限，或者权限对象中，有一项为true时，返回true
        renderCheck: function (str, callback) {
            var permissionAns = stringToObject(str, true);
            if (callback && permissionAns) {
                callback();
            } else if (callback && !permissionAns) {
                alert.error({
                    text: '权限不足',
                });
            };
            return permissionAns;
        },

        // 严格权限验证
        // 当拥有权限，或者权限对象中，有全部为true时，返回true
        check: function (str, callback) {
            var permissionAns = stringToObject(str, false);
            if (callback && permissionAns) {
                callback();
            } else if (callback && !permissionAns) {
                alert.error({
                    text: '权限不足',
                });
            };
            return permissionAns;
        },
        setPermission: function (data) {
            PerObject = data;
            // _Strage.set('PermissionRole', data);
        },
        initPermission: function (roleId) {
            // per = this.PerObject;
            // console.log(per);
            // console.log("权限初始化");
            //实现动态获取该角色当前所持有权限
            //通过ajax从后端获取角色权限列表, 经过整理对上面的前端权限赋值, 获取的列表序号参照permissionGroup/premissionlist
            var newList = [];
            getPermissionListByRoleID(roleId, function(res){
                for (let index = 0; index < res.list.length; index++) {
                    // console.log(res.list[index].permissionID);
                    newList = newList.concat([res.list[index].permissionID]);
                }
                // console.log(newList);
                //现在的list应该有着该用户持有角色对应permissionGroup/premissionlist的序号
                PerObject.permissionGroup = (newList.indexOf(1) > -1);
                PerObject.index = (newList.indexOf(3) > -1);
                PerObject.user.create = (newList.indexOf(5) > -1);
                PerObject.user.edit = (newList.indexOf(6) > -1);
                PerObject.user.search = (newList.indexOf(7) > -1);
                PerObject.user.delete = (newList.indexOf(8) > -1);
                //TODO: 在这里给新的权限赋值!!!
                return PerObject;
                // console.log(PerObject);
            });
            // console.log(PerObject);
        }
    }
});

