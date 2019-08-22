define(function (require, exports, module) {
    _request.develop.urlList['202'] = 'http://127.0.0.1:8080/boot';

    //动态获取当前角色列表
    var staffAndUserRoleType = [];
    _request.POST({
        type: 'POST',
        url : '/role/list',
        data : {},
        devUrl: '202',
        loading : true,
        success : function (res) {  
            // console.log(res);
            for (let index = 0; index < res.list.length; index++) {
                // console.log(1);
                staffAndUserRoleType.push({label: (res.list)[index].roleName, value: (res.list)[index].roleID});
            }
            // console.log(staffAndUserRoleType);
        },
    })

    DevUI.options.set({
        staffAndUserRoleType,
        //下面的这些为固定选项
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