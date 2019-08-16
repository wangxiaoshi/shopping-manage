define(function (require, exports, module) {
    var premission = [
        {
            name: '用户管理权限',
            list: [{
                url: 'key1',
                name: '检索用户',
                setArray: [],
                value: [1],
            }, {
                url: 'key2',
                name: '权限2',
                setArray: [],
                value: [2],
            }, {
                url: 'key3',
                setArray: [],
                name: '权限3',
                value: [3, 4],
            }, {
                url: 'key4',
                setArray: [],
                name: 'user manage',
                value: [5, 6, 7],
            }],
        }, {
            name: '资源管理权限',
            list: [{
                url: 'key5',
                name: '检索资源',
                setArray: [],
                value: [8],
            }, {
                url: 'key6',
                name: '权限2',
                setArray: [],
                value: [9],
            }, {
                url: 'key7',
                name: '权限3',
                setArray: [],
                value: [10, 11],
            }, {
                url: 'key8',
                name: '权限4',
                setArray: [],
                value: [12],
            }],
        },{
            name: '统计管理权限',
            list: [{
                url: 'key9',
                name: '用户统计',
                setArray: [],
                value: [13],
            },{
                url: 'key10',
                name: '资源统计',
                setArray: [],
                value: [14],
            }]
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