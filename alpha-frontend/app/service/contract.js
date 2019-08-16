define(function (require, exports, module) {

    var request = null;

    var contractformlist = function (data, callback) {
        request({
            type: 'post',
            data: data,
            url: '/contract/list',
            devUrl: '202',
            loading: true,
            success: function (result) {
                callback(result);
            },
        });
    };

    return function (requestObj) {
        request = requestObj;
        return {
            // createcontractform: createcontractform,//创建合同
            contractformlist: contractformlist,//合同列表
            // contractdetail: contractdetail, //合同详情
            // staginglist: staginglist,//分期列表
            // confirm: confirm,//确认收款
            // accountbill: accountbill,////结单
            // addproduction: addproduction,//添加生产计划
            // productionlist: productionlist,//根据合同获得生产安排列表
            // producePlan: producePlan,//添加生产安排
            // productionschedule: productionschedule,//生产计划进度条
            // moneyschedule: moneyschedule,//收款进度条
            // productionpercentage: productionpercentage,//获得生产计划总百分比
            // productionplansub:productionplansub,//生产计划提交
            // productactual:productactual,//获得生产计划总百分比
            // producestaticl:producestaticl,//生产统计
        }
    }
});