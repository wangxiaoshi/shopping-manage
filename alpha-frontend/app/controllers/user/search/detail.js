define(function (require, exports, module) {  
    var _province = require ('./province.js') 

    var addTag = function (data) {
        // console.log("detail接到data: " + data);
        this.data = data;
        this.html = $('<div class="detailForm"></div>');
        this.form = new DevUI.form({
            type: 'all'
        });

        this.form.setOptions([
            //用户编号
            {
                key: 'userID',
                type: 'input',
                box: {
                    size: '3/6',
                    lable: '用户编号:',                   
                    className: '',
                },
                readonly: true,
                element: {
                    verify: {
                        text: '用户编号',
                        rules: []
                    },
                    placeholder: '请输入用户编号',
                }
            },
            //用户名
            {
                key: 'userName',
                type: 'input',
                box: {
                    size: '3/6',
                    lable: '用户名:',                   
                    className: '',
                },
                element: {
                    verify: {
                        text: '用户名',
                        rules: 'notNull'
                    },
                    placeholder: '请输入用户名',
                }
            },
            //邮箱
            {
                key: 'userEmail',
                type: 'input',
                box: {
                    size: '3/6',
                    lable: '邮箱:',                   
                    className: 'userEmail',
                },
                element: {
                    verify: {
                        text: '邮箱',
                        rules: ['notNull','email'],
                    },
                    placeholder: '请输入邮箱',
                }
            },
            //电话
            {
                key: 'userPhone',
                type: 'input',
                box: {
                    size: '3/6',
                    lable: '电话:',                   
                    className: 'userPhone',
                },
                element: {
                    verify: {
                        text: '电话',
                        rules: [],
                    },
                    placeholder: '请输入电话',
                }
            },
            //性别
            {
                key: 'userGender',
                type: 'radio',
                box: {
                    size: '3/6',
                    lable: '性别:',                   
                    // className: 'readyFormItem',
                },
                element: {
                    data: 'OptionSide:Gender',
                    verify: {
                        text: '性别',
                        rules: []
                    },
                    placeholder: '请输入性别',
                }
            },
            //职业
            {
                key: 'userRole',
                type: 'select',
                box: {
                    size: '3/6',
                    lable: '角色:',                   
                    className: '',
                },
                element: {
                    data: 'OptionSide:staffAndUserRoleType',
                    verify: {
                        text: '角色',
                        rules: 'notNull'
                    },
                    placeholder: '- 请选择角色 -',
                }
            },
            //注册时间
            {
                key: 'userRegTime',
                type: 'input',
                box: {
                    size: '3/6',
                    lable: '注册时间:',                   
                    className: 'userRegTime',
                },
                readonly: true,
                element: {
                    verify: {
                        text: '注册时间',
                        rules: [],
                    },
                    placeholder: '请输入注册时间',
                }
            },
            //出生日期
            {
                key: 'userBirthday',
                type: 'inputDate',
                box: {
                    size: '3/6',
                    lable: '生日:',                   
                    className: '',
                },
                readonly: true,
                element: {
                    verify: {
                        text: '生日',
                        rules: 'notNull'
                    },
                    placeholder: '请选择生日',
                }
            },
            //居住地
            {
                key: 'userProvince',
                type: 'select',
                box: {
                    class: 'province',
                    lable: '省份:',
                    size: '3/6',
                    className: 'readyFormItem',
                },
                element: {
                    showKey: 'name',
                    getKey: 'name',
                    setKey: 'name',
                    data: _province(),
                    verify: {  // 验证判断组
                        text: '省份',
                        rules: ['notNull']
                    },
                    placeholder: '- 请选择省份 -'
                },
            }, {
                key: 'userCity',
                type: 'select',
                box: {
                    class: 'city',
                    lable: '城市:',
                    size: '3/6',
                    className: 'readyFormItem',
                },
                element: {
                    showKey: 'name',
                    getKey: 'name',
                    setKey: 'name',
                    verify: {  // 验证判断组
                        text: '城市',
                        rules: ['notNull']
                    },
                    placeholder: '- 请选择城市 -'
                },
            }, {
                key: 'userArea',
                type: 'select',
                box: {
                    class: 'district',
                    lable: '地区:',
                    size: '3/6',
                    className: 'readyFormItem',
                },
                element: {
                    showKey: 'name',
                    getKey: 'name',
                    setKey: 'name',
                    verify: {  // 验证判断组
                        text: '地区',
                        rules: ['notNull']
                    },
                    placeholder: '- 请选择地区 -'
                },
            },
        ])
        //省市区三级联动
        this.form.items.userProvince.onChange(function () {
            this.form.items.userCity.setData(this.valueData.list);
            this.form.items.userArea.clear()
        });
        this.form.items.userCity.onChange(function () {
            this.form.items.userArea.setData(this.valueData.list);
        });

        this.html.append(this.form.html);
        if (this.data) {
            this.form.setData(this.data);          
        };
    }
    return function (data) {
        return new addTag(data);
    }
});