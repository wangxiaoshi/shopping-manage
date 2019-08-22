define(function (require, exports, module) {
    var premission = [
        {
            name: '系统管理权限',
            list: [{
                url: 'key1',
                name: '浏览权限',
                setArray: [],
                value: [1],
            },{
                url: 'key2',
                name: '修改权限',
                setArray: [],
                value: [2],
            },{
                url: 'key3',
                name: '进入主页',
                setArray: [],
                value: [3],
            },{
                url: 'key4',
                name: '登录系统',
                setArray: [],
                value: [4],
            },]
        },
        {
            name: '用户管理权限',
            list: [{
                url: 'key5',
                name: '创建用户',
                setArray: [],
                value: [5],
            }, {
                url: 'key6',
                name: '修改用户',
                setArray: [],
                value: [6],
            }, {
                url: 'key7',
                setArray: [],
                name: '浏览用户',
                value: [7],
            }, {
                url: 'key8',
                setArray: [],
                name: '删除用户',
                value: [8],
            },],
        },
    ];

    return {
        get: function () {
            return $.extend(true, [], premission);
        },
        set: function (data) {

        },
    }

});