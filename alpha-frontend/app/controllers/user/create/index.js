define (function (require, exports, module) {
    // var _gender = require ('./gender.js')
    var _province = require ('./province.js')

    exports.render = function (params, layout, service) {
        var content = $('<div id="content"></div>');
        

        //创建一个新用户的表单 TODO: 生日年份
        var userForm = new DevUI.form({
            type: 'all'
        });
        userForm.setOptions([
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
            //密码
            {
                key: 'userPassword',
                type: 'password',
                box: {
                    size: '3/6',
                    lable: '密码:',                   
                    className: '',
                },
                element: {
                    verify: {
                        text: '密码',
                        rules: 'notNull'
                    },
                    placeholder: '请输入密码',
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
                    // showKey: 'name',
                    // getKey: 'name',
                    // setKey: 'name',
                    // data: _gender(),
                    verify: {
                        text: '性别',
                        rules: 'notNull'
                    },
                    placeholder: '请输入性别',
                }
            },
            //职业
            {
                key: 'group',
                type: 'select',
                box: {
                    size: '3/6',
                    lable: '分组:',
                },
                // "default": null,
                element: {
                    data: 'OptionSide:groupType',
                    verify: {
                        text: '分组:',
                        rules: 'notNull'
                    },
                    placeholder: '- 请选择分组 -',
                },
            },
            {
                key: 'userRole',
                type: 'select',
                box: {
                    size: '3/6',
                    lable: '角色:',                   
                    className: '',
                },
                element: {
                    // data: 'OptionSide:userRoleType',
                    verify: {
                        text: '角色',
                        rules: 'notNull'
                    },
                    placeholder: '- 请选择角色 -',
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
        userForm.items.userProvince.onChange(function () {
            userForm.items.userCity.setData(this.valueData.list);
            userForm.items.userArea.clear()
        });
        userForm.items.userCity.onChange(function () {
            userForm.items.userArea.setData(this.valueData.list);
        });
        //分组职业二级联动
        userForm.items.group.onChange(function (value) {
            this.nameBox.click();//为了解决下拉栏不收回的蠢办法
            if (value == 1) {
                userForm.items.userRole.setData('OptionSide:staffRoleType');
            } else {
                userForm.items.userRole.setData('OptionSide:userRoleType');
            }
        });
        //邮箱自动补全
        // userForm.items.userEmail.html.autoMail({
        //     emails:['qq.com','163.com','126.com','sina.com','sohu.com','yahoo.cn','gmail.com','hotmail.com','live.cn']
        // });

        content.append(userForm.html);
        var button = $('<div class="btn btn-info btn-block" id="submit">提交</div>');
        content.append(button);
        //提交按钮的操作
        button.unbind().bind('click', function () {
            var dataToSend = userForm.get();
            // //DEBUG
            // console.log(dataToSend);
            if(dataToSend){
                // console.log(DevUI.formatDate("-",dataToSend.userBirthday));
                service.createUser ({
                    userName: dataToSend.userName,
                    userPassword: dataToSend.userPassword,
                    userEmail: dataToSend.userEmail,
                    userGender: dataToSend.userGender,
                    group: dataToSend.group,
                    userRole: dataToSend.userRole,
                    userBirthday: DevUI.formatDate("-",dataToSend.userBirthday),
                    userProvince: dataToSend.userProvince,
                    userCity: dataToSend.userCity,
                    userArea: dataToSend.userArea,
                }, function(res){
                    _alert.success({
                        title: '注册成功',
                        callback: function (success) {
                            location.href = 'index.html#/user/search';
                        }
                    });
                });
            } else {
                _alert.error({
                    text: userForm.errorMessage,
                });
            };
        });
        layout.append(content);
    }
});