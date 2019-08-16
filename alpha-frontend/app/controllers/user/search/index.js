define (function (require, exports, module) {
    // var _province = require ('./province.js')
    var detail = require ('./detail.js')

    exports.render = function (params, layout, service) {
        // var test = $('<div>检索所有用户页面</div>');  
        // layout.append (test);  
        var content = $('<div id="content"></div>');
        var table = _table;
        var searchValue = new DevUI.form({
            type: 'all' ,
        });
        searchValue.setOptions([
            {
                key: 'userId',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '用户编号:',
                    className: 'userId',
                },
                element: {
                    verify: {
                        text: '编号',
                        //rules: 'notNull'
                    },
                    placeholder: '请输入用户编号',
                }

            },{
                key: 'userName',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '用户名:',
                    className: 'userName',
                },
                element: {
                    verify: {
                        text: '用户名',
                        //rules: 'notNull'
                    },
                    placeholder: '请输入用户名',
                }
            }
        ]);

        var seachBtn = $('<div class="seachBtn"><button class="btn btn-info" >搜索</button></div>');
        searchValue.html.append(seachBtn);
        content.append(searchValue.html);


        var tablePart = new _template.basic({
            title: '用户检索列表',
        });

        //一个添加新用户的按钮
        var addUser = $('<div class="btn btn-default btn-sm tabTitleButton" style="text-align: right;position: absolute;right: 15px;top: 7px;" ><i class="fa fa-plus-square">创建用户</i></div>');
        tablePart.title.append(addUser);
        addUser.unbind().bind('click', function () {
            location.href = 'index.html#/user/create';
        });

        //用户表格
        var list = table({
            config:[{
                width: '10',
                type: 'string',
                name: '用户编号',
                setValueByDataKey: 'userID',
                format: function (data, element) {
                },
            },{
                width: '10',
                type: 'string',
                name: '用户名',
                setValueByDataKey: 'userName',
                format: function (data, element) {

                },
            },{
                width: '15',
                type: 'string',
                name: '邮箱',
                setValueByDataKey: 'userEmail',
                format: function (data, element) {

                },
            },{
                width: '10',
                type: 'date:YYYY年MM月DD日 HH时mm分ss秒',
                name: '注册时间',
                setValueByDataKey: 'userRegTime',
                format: function (data, element) {

                },
            },{
                width: '8',
                type: 'options:staffAndUserRoleType',
                name: '用户角色',
                setValueByDataKey: 'userRole',
                format: function (data, element) {

                },
            },{
                width: '10',
                type: 'string',
                name: '上传资源数',
                setValueByDataKey: 'uploadSum',
            },{
                width: '5',
                type: 'buttons',
                name: '查看资源',
                setValueByDataKey: '',
                setting: [{
                    name: '查看',
                    click: function(data, element) {
                        _dialog({
                            title: 'test',
                            className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                        }).show('此处应跳转至资源列表');
                    }
                }]
            },{
                width: '15',
                type: 'buttons',
                name: '操作',
                setValueByDataKey: 'buttons',
                setting: [
                    {
                    name: '详情',
                    event: function(data, element,event) {

                    },
                    click: function (data, element) {

                        var user = service.getUser(data.userID,function (res) {
                            console.log("DEBUG: 查看编号为 " + res.userID + " 的用户详情");
                            // console.log("service返回值: " + user);
                            var detailForm = new detail(res);
                            // console.log(data);
                            _dialog({
                                title: '用户信息详情',
                                className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                                buttons: [
                                    // 以对象形式传入，每一个对象为一个按钮
                                        {
                                            className: 'btn-default', // 弹出框按钮的样式
                                            text: '取消', // 弹出框按钮的文字
                                            icon: 'fa fa-ban', // 弹出框按钮的图标
                                            event: function (event) {
                                                // 点击事件
                                                // event 代表Dialog对象；
                                                event.hide();
                                            }
                                        },
                                    // 以对象形式传入，每一个对象为一个按钮
                                        {
                                            className: 'btn-info', // 弹出框按钮的样式
                                            text: '保存', // 弹出框按钮的文字
                                            icon: 'fa fa-save', // 弹出框按钮的图标
                                            event: function (event) {
                                                // 点击事件
                                                // event 代表Dialog对象；
                                                _alert.success({
                                                    title: 'Test! 这里调用保存',
                                                });
                                                event.hide();
                                            }
                                        },
                                    ],
                            }).show(detailForm.html);
                            // callBack(res);
                        });
                    }
                },{
                    name: '删除',
                    event: function(data, element,event) {

                    },
                    click: function (data, element) {
                        _alert.delete({
                            title: '确认删除',
                            text: '即将删除编号为 ' + data.userID + ' 的用户!',
                            callback: function (success, error) {
                         
                                // 操作成功，执行 success 方法
                                setTimeout(function () {
                                    success();
                                }, 1500);
                         
                                // // 操作失败，执行 error 方法，并传入错误提示
                                // setTimeout(function () {
                                //     error('服务器错误');
                                // }, 1500);
                         
                            }
                        });
                    }
                },{
                    name: '分配角色',
                    event: function(data, element,event) {
                    },
                    click: function (data, element) {
                        var userRoleForm = new DevUI.form({
                            type: 'all'
                        });
                        userRoleForm.setOptions([
                            {
                                key: 'group',
                                type: 'select',
                                box: {
                                    size: '3/6',
                                    lable: '分组',
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
                        ])
                        userRoleForm.items.group.onChange(function (value) {
                            this.nameBox.click();//为了解决下拉栏不收回的蠢办法
                            if (value == 1) {
                                userRoleForm.items.userRole.setData('OptionSide:staffRoleType');
                            } else {
                                userRoleForm.items.userRole.setData('OptionSide:userRoleType');
                            }
                        });

                        _dialog({
                            title: '为' + data.userName + '分配角色',
                            // className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                            buttons: [
                                // 以对象形式传入，每一个对象为一个按钮
                                    {
                                        className: 'btn-default', // 弹出框按钮的样式
                                        text: '取消', // 弹出框按钮的文字
                                        icon: 'fa fa-ban', // 弹出框按钮的图标
                                        event: function (event) {
                                            // 点击事件
                                            // event 代表Dialog对象；
                                            event.hide();
                                        }
                                    },
                                // 以对象形式传入，每一个对象为一个按钮
                                    {
                                        className: 'btn-info', // 弹出框按钮的样式
                                        text: '保存', // 弹出框按钮的文字
                                        icon: 'fa fa-save', // 弹出框按钮的图标
                                        event: function (event) {
                                            // 点击事件
                                            // event 代表Dialog对象；
                                            var debug = userRoleForm.get();
                                            console.log(debug);
                                            _alert.success({
                                                title: 'Test! 这里调用保存',
                                            });
                                            event.hide();
                                        }
                                    },
                                ],
                        }).show(userRoleForm.html);
                    }
                }]
            }]
        })

        //分页
        var getPaging = function (data, callBack) {
            service.getAllUser(data.pageInfo, function (res) {
                console.log(res);
                callBack(res);
            });
        };
        var paging = _paging({
            data: {
                pageInfo: {
                    index: '1',
                    count: '10'
                }
            },
            ajaxEvent: getPaging,
            success: function (result) {
                list.set(result);
            }
        });

        // list.set([
        //     {userID: '19231212', userName: '谢广坤', userEmail: 'tom123@gmail.com', registrationDate: '2017-06-23', userRole: '4', uploadSum: '4'},
        //     {userID: '65645340', userName: '刘英', userEmail: 'alice.wolfgang@gmx.de', registrationDate: '2018-11-14', userRole: '2', uploadSum: '23'},
        // ])

        var pagebox = $('<div style="text-align:center;"></div>')
        tablePart.body.append(list.html);
        pagebox.append(paging.render());
        tablePart.footer(pagebox);

        content.append (tablePart.html);

        layout.append(content);

    }
});