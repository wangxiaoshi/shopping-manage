define(function (require, exports, module) {
    return [{
        'name': '首页',
        'router': '/index',
        'icon': 'fa-home',
        'permission': 'index',
    },{
        'name': '权限管理',
        'router': '/permissionGroup',
        'icon': 'fa-unlock',
        'permission': 'index',
    },{
        'name': '用户管理',
        'router': '/user',
        'icon': 'fa-users',
        'permission': 'index',
        'subset': [{
            'name': '检索用户',
            'router': '/user/search',
            'icon': 'fa-search',
            'permission': 'user.search',
        },{
            'name': '新建用户',
            'router': '/user/create',
            'icon': 'fa-create',
            'permission': 'user.create',
        },{
            'name': '用户详情',
            'router': '/user/detail',
            'icon': 'fa-create',
            'permission': 'user.detail',
        },]
    },{
        'name': '资源管理',
        'router': '/model',
        'icon': 'fa-image',
        'permission': 'index',
        'subset': [{
            'name': '检索资源',
            'router': '/model/search',
            'icon': 'fa-check-circle',
            'permission': 'model.search',
        }]
    },{
        'name': '项目管理',
        'router': '/project',
        'icon': 'fa-copy',
        'permission': 'index',
        'subset': [{
            'name': '检索项目',
            'router': '/project/search',
            'icon': 'fa-check-circle',
            'permission': 'project.search',
        }]
    },{
        'name': '分润管理',
        'router': '/income',
        'icon': 'fa-credit-card',
        'permission': 'index',
        'subset': [{
            'name': '下载分润',
            'router': '/income/downloadIncome',
            'icon': 'fa-check-circle',
            'permission': 'income.downloadIncome',
        },{
            'name': '项目分润',
            'router': '/income/projectIncome',
            'icon': 'fa-check-circle',
            'permission': 'income.projectIncome',
        },]
    },{
        'name': '社区管理',
        'router': '/forum',
        'icon': 'fa-forumbee',
        'permission': 'index',
        'subset': [{
            'name': '板块管理',
            'router': '/forum/topic',
            'icon': 'fa-grip-horizontal',
            'permission': 'forum.topic',
        },{
            'name': '帖子管理',
            'router': '/forum/post',
            'icon': 'fa-blog',
            'permission': 'forum.post',
        }]
    },{
        'name': '合同管理',
        'router': '/contract',
        'icon': 'fa-file',
        'permission': 'index',
        'subset': [{
            'name': '检索合同',
            'router': '/contract/search',
            'icon': '',
            'permission': 'contract.search',
        },{
            'name': '新建合同',
            'router': '/contract/create',
            'icon': '',
            'permission': 'contract.create',
        }]
    },{
        'name': '统计管理',
        'router': '/statistics',
        'icon': 'fa-file',
        'permission': 'index',
        'subset': [{
            'name': '用户统计',
            'router': '/statistics/userStat',
            'icon': '',
            'permission': 'statistics.userStat',
        },{
            'name': '资源统计',
            'router': '/statistics/modelStat',
            'icon': '',
            'permission': 'statistics.modelStat',
        },{
            'name': '项目统计',
            'router': '/statistics/projectStat',
            'icon': '',
            'permission': 'statistics.projectStat',
        },{
            'name': '合同统计',
            'router': '/statistics/contractStat',
            'icon': '',
            'permission': 'statistics.contractStat',
        },{
            'name': '分润统计',
            'router': '/statistics/incomeStat',
            'icon': '',
            'permission': 'statistics.incomeStat',
        },]
    },{
        'name': '客服管理',
        'router': '/support',
        'icon': 'fa-phone',
        'permission': 'support',
    }
    
    ]
});