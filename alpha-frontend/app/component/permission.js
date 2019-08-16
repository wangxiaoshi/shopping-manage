
define(function (require, exports, module) {
    var alert = _alert;
    var PerObject = {
        index: true,
        login: true, 
        system: false,
        permissionGroup: true,
        support: true,
        user: {
            create: true,
            editProfile: false,
            changeUserRole: false,
            editOccupation: false,
            search: true,
            detail: true,
        },

        model: {
            search: true,
            review: true,
            encrypt: false,
            comment: false,
            commentReview: false,
            commentReply: false, 
        },
        project: {
            search: true,
            bidding: true,
            review: false,
            publish: false,
            followup: false,
            contact: false,
            turnover: false,
        },
        income: {
            modelIncome: false,
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
            receivable: false,
            arrange: false,
            statement: false,
            complete: false,
        },
        forum: {
            create: false,
            topic: true,
            post: true,
            review: false,
            comment: false,
            commentReply: false,
            commentReview: false,
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
            // if (roleId == '1') {
            //     PerObject.system = true;
            //     PerObject.company.creation = true;
            //     PerObject.company.message = true;
            //     PerObject.company.preserve = true;
            //     PerObject.company.searching = true;                
                
            //     PerObject.order.createorder = true;
            //     PerObject.order.followup = true;
            //     PerObject.order.signing = true;
            //     PerObject.order.turnover = true;
                
            //     PerObject.statistics.company = true;
            //     PerObject.statistics.income = true;
            //     PerObject.statistics.product = true;
            //     PerObject.statistics.order = true;
            //     PerObject.statistics.destine = true;
            //     PerObject.statistics.turnover = true;
            //     PerObject.statistics.complete = true;
            //     PerObject.statistics.creation = true;
            //     PerObject.statistics.underway = true;
                
                
            //     PerObject.contract.create = true;
            //     PerObject.contract.receivable = true;
            //     PerObject.contract.arrange = true;
            //     PerObject.contract.statement = true;
                
                             
            // } else if(roleId == '2'){
            //     PerObject.system = true;
            //     PerObject.company.creation = true;
            //     PerObject.company.message = true;
            //     PerObject.company.preserve = true;
            //     PerObject.company.searching = true;                
                
            //     PerObject.order.createorder = true;
            //     PerObject.order.followup = true;
            //     PerObject.order.signing = true;
            //     PerObject.order.turnover = true;
                
            //     PerObject.statistics.company = true;
            //     PerObject.statistics.income = true;
            //     PerObject.statistics.product = true;
            //     PerObject.statistics.order = true;
            //     PerObject.statistics.destine = true;
            //     PerObject.statistics.turnover = true;
            //     PerObject.statistics.complete = true;
            //     PerObject.statistics.creation = true;
            //     PerObject.statistics.underway = true;
                
                
            //     PerObject.contract.create = true;
            //     PerObject.contract.receivable = true;
            //     PerObject.contract.arrange = true;
            //     PerObject.contract.statement = true;
                
                
            // }else if(roleId == '3'){
               
            //     PerObject.company.creation = true;
            //     PerObject.company.message = true;
            //     PerObject.company.preserve = true;
            //     PerObject.company.searching = true;
                
            //     PerObject.order.createorder = true;
            //     PerObject.order.followup = true;
            //     PerObject.order.signing = true;
            //     PerObject.order.turnover = true;
                
            //     PerObject.statistics.company = true;
            //     PerObject.statistics.income = true;
            //     PerObject.statistics.product = true;
            //     PerObject.statistics.order = true;
            //     PerObject.statistics.destine = true;
            //     PerObject.statistics.turnover = true;
            //     PerObject.statistics.complete = true;
            //     PerObject.statistics.creation = true;
            //     PerObject.statistics.underway = true;
                
                
            //     PerObject.contract.create = true;
            //     PerObject.contract.receivable = true;
            //     PerObject.contract.arrange = true;
            //     PerObject.contract.statement = true;

            // }else if(roleId == '4'){
                
            //     PerObject.contract.arrange = true;
            //     PerObject.statistics.product = true;
               
            // }else if(roleId == '5'){
               
            //     PerObject.company.creation = true;
            //     PerObject.company.message = true;
            //     PerObject.company.preserve = true;
            //     PerObject.company.searching = true;

            //     PerObject.order.createorder = true;
            //     PerObject.order.followup = true;

            //     PerObject.statistics.company = true;
            //     PerObject.statistics.product = true;
            //     PerObject.statistics.order = true;

            // }else {

              
            //     PerObject.company.creation = true;
            //     PerObject.company.message = true;
            //     PerObject.company.preserve = true;
            //     PerObject.company.searching = true;
                
            //     PerObject.order.createorder = true;
            //     PerObject.order.followup = true;

            //     PerObject.statistics.company = true;
            //     PerObject.statistics.product = true;
            //     PerObject.statistics.order = true;



            // }
        }
    }
    // Permission.check('contract');
});

