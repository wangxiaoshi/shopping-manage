define(function (require, exports, module) {
    //_request.develop.urlList['202'] = 'http://192.168.0.202:8080';
    //_request.develop.urlList['202'] = 'http://192.168.1.128/apis';
    _request.develop.urlList['202'] = 'http://127.0.0.1:8080/boot';
    
    DevUI.options.set({

        groupType: [
            {label: '管理人员', value: '1'},
            {label: '普通用户', value: '2'},
        ],
        //职员Options
        staffRoleType: [
            { label: '管理员',  value: '1' },
            { label: '项目经理', value: '2' },
            { label: '项目专员', value: '3' },
            { label: '审核专员', value: '4' },
            { label: '审核主管', value: '5' },
            { label: '会计主管', value: '6' },
            { label: '会计',    value: '7' },
        ],
        //用户Options
        userRoleType: [
            { label: '老师',  value: '8' },
            { label: '学生', value: '9' },
            { label: '专业人士', value: '10' },
            { label: '企业个人代表', value: '11' },
            { label: '企业用户', value: '12' },
        ],
        staffAndUserRoleType: [
            { label: '管理员',  value: '1' },
            { label: '项目经理', value: '2' },
            { label: '项目专员', value: '3' },
            { label: '审核专员', value: '4' },
            { label: '审核主管', value: '5' },
            { label: '会计主管', value: '6' },
            { label: '会计',    value: '7' },
            { label: '老师',  value: '8' },
            { label: '学生', value: '9' },
            { label: '专业人士', value: '10' },
            { label: '企业个人代表', value: '11' },
            { label: '企业用户', value: '12' },
        ],
        modelType: [
            { label: '待审核',  value: '1' },
            { label: '已审核',  value: '2' },
        ],
        //项目状态
        projectType: [
            { label: '待审核', value: '1'},
            { label: '竞标中', value: '2' },
            { label: '已签单',   value: '3' },
            { label: '流失',   value: '4' },

        ],
        //洽谈方式
        discussType: [
            { label: '面谈', value: '1' },
            { label: '电话', value: '2' },
            { label: '微信', value: '3' },

        ],
        //合同状态
        contractType: [
            { label: '生效', value: '1' },
            { label: '部分付款', value: '2' },
            { label: '结单', value: '3' },
            { label: '中止', value: '4' },
        ],
       
    });
    


    return {}
});