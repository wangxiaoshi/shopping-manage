define (function (require, exports, module) {
    // var _gender = require ('./gender.js')
    var _province = require ('./province.js')

    exports.render = function (params, layout, service) {
        var content = $('<div id="content"></div>');
        
        //一个用户的详情表单 
        var userForm = new DevUI.form({
            type: 'all'
        });
        userForm.setOptions([
            //用户编号
            {
                key: 'userName',
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
        userForm.items.userProvince.onChange(function () {
            userForm.items.userCity.setData(this.valueData.list);
            userForm.items.userArea.clear()
        });
        userForm.items.userCity.onChange(function () {
            userForm.items.userArea.setData(this.valueData.list);
        });
        //邮箱自动补全 FIXME: 发送的请求里拿不到自动补全的部分
        // userForm.items.userEmail.html.autoMail({
        //     emails:['qq.com','163.com','126.com','sina.com','sohu.com','yahoo.cn','gmail.com','hotmail.com','live.cn']
        // });
        content.append(userForm.html);

        //如果要更改用户信息 TODO: update接口
        var button = $('<div class="btn btn-info btn-block" id="submit">提交更改</div>');
        content.append(button);
        button.unbind().bind('click', function () {
            var dataToSend = userForm.get();
            // //DEBUG
            // console.log(dataToSend);
            if(dataToSend){
                // service.createUser ({
                //     userName: dataToSend.userName,
                //     userPassword: dataToSend.userPassword,
                //     userEmail: dataToSend.userEmail,
                //     userGender: dataToSend.userGender,
                //     group: dataToSend.group,
                //     userRole: dataToSend.userRole,
                //     userBirthday: DevUI.formatDate("-",dataToSend.userBirthday),
                //     userProvince: dataToSend.userProvince,
                //     userCity: dataToSend.userCity,
                //     userArea: dataToSend.userArea,
                // }, function(res){
                //     _alert.success({
                //         title: '注册成功',
                //         callback: function (success) {
                //             location.href = 'index.html#/user/search';
                //         }
                //     });
                // });
            } else {
                _alert.error({
                    text: userForm.errorMessage,
                });
            };
        });

        layout.append(content);
    }
});