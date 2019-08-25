define (function (require, exports, module) {

    //当点击用户详情时调用该表单
    var detail = require ('./detail.js');

    exports.render = function (params, layout, service) {
        var content = $('<div id="content"></div>');
        var contentA = $('<div  id="contentA"><div>');
        var contentB = $('<div  id="contentB" style="display: none"></div>');

        var table = _table;

        // console.log("测试权限的查询:" + Permission.check(index));

        //搜索框
        var searchValue = new DevUI.form({
            type: 'all' ,
        });
        searchValue.setOptions([
            {
                key: 'keyword',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '用户名或编号:',
                    className: 'keyword',
                },
                element: {
                    verify: {
                        text: '关键词',
                        rules: 'notNull'
                    },
                    placeholder: '请输入用户名或编号',
                }

            },
        ]);
        //搜索按钮
        var seachBtn = $('<div class="seachBtn"><button class="btn btn-info" >搜索</button></div>');
        searchValue.html.append(seachBtn);
        content.append(searchValue.html);

        var tablePartA = new _template.basic({
            title: '用户检索列表',
        });

        var tablePartB = new _template.basic({
            title: '搜索结果列表',
        });

        //一个添加新用户的按钮, 跳转至create
        var addUser = $('<div class="btn btn-default btn-sm tabTitleButton" style="text-align: right;position: absolute;right: 15px;top: 7px;" ><i class="fa fa-plus-square">创建用户</i></div>');
        tablePartA.title.append(addUser);
        tablePartA.title.append(addUser);
        addUser.unbind().bind('click', function () {
            location.href = 'index.html#/user/create';
        });

        //用户表格
        var listA = table({
            config:[
            {
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
                        service.getUser(data.userID,function (res) {
                            // console.log("DEBUG: 查看编号为 " + res.userID + " 的用户详情");
                            // console.log("service返回值: " + user);
                            var detailForm = new detail(res,service);
                            // console.log(data);
                            _dialog({
                                title: '用户信息详情',
                                className: 'modal-lg', 
                            }).show(detailForm.html);
                        });
                    }
                },{
                    name: '删除',
                    event: function(data, element,event) {
                        permList = _storage.get('permissionList');
                        if(permList.indexOf('user_delete') <= -1){
                            element.css('display', 'none');
                        }
                    },
                    click: function (data, element) {
                        _alert.delete({
                            title: '确认删除',
                            text: '即将删除编号为 ' + data.userID + ' 的用户!',
                            callback: function (success, error) {
                                service.deleteUser(data.userID,function(res) {
                                    setTimeout(function () {
                                        success();
                                        location.reload();
                                    }, 100);
                                });
                            }
                        });
                    }
                },]
            }]
        })

        //针对搜索结果的用户表格
        var listB = table({
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
                        service.getUser(data.userID,function (res) {
                            // console.log("DEBUG: 查看编号为 " + res.userID + " 的用户详情");
                            // console.log("service返回值: " + user);
                            var detailForm = new detail(res,service);
                            // console.log(data);
                            _dialog({
                                title: '用户信息详情',
                                className: 'modal-lg',
                            }).show(detailForm.html);
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
                                service.deleteUser(data.userID,function(res) {
                                    setTimeout(function () {
                                        success();
                                        location.reload();
                                    }, 100);
                                });
                            }
                        });
                    }
                },
                //TODO:分配角色按钮应该删掉!!!
                // {
                //     name: '分配角色',
                //     event: function(data, element,event) {
                //     },
                //     click: function (data, element) {
                //         var userRoleForm = new DevUI.form({
                //             type: 'all'
                //         });
                //         userRoleForm.setOptions([
                //             {
                //                 key: 'group',
                //                 type: 'select',
                //                 box: {
                //                     size: '3/6',
                //                     lable: '分组',
                //                 },
                //                 // "default": null,
                //                 element: {
                //                     data: 'OptionSide:groupType',
                //                     verify: {
                //                         text: '分组:',
                //                         rules: 'notNull'
                //                     },
                //                     placeholder: '- 请选择分组 -',
                //                 },
                //             },
                //             {
                //                 key: 'userRole',
                //                 type: 'select',
                //                 box: {
                //                     size: '3/6',
                //                     lable: '角色:',                   
                //                     className: '',
                //                 },
                //                 element: {
                //                     // data: 'OptionSide:userRoleType',
                //                     verify: {
                //                         text: '角色',
                //                         rules: 'notNull'
                //                     },
                //                     placeholder: '- 请选择角色 -',
                //                 }
                //             },
                //         ])
                //         userRoleForm.items.group.onChange(function (value) {
                //             this.nameBox.click();//为了解决下拉栏不收回的蠢办法
                //             if (value == 1) {
                //                 userRoleForm.items.userRole.setData('OptionSide:staffRoleType');
                //             } else {
                //                 userRoleForm.items.userRole.setData('OptionSide:userRoleType');
                //             }
                //         });

                //         _dialog({
                //             title: '为' + data.userName + '分配角色',
                //             // className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                //             buttons: [
                //                 // 以对象形式传入，每一个对象为一个按钮
                //                     {
                //                         className: 'btn-default', // 弹出框按钮的样式
                //                         text: '取消', // 弹出框按钮的文字
                //                         icon: 'fa fa-ban', // 弹出框按钮的图标
                //                         event: function (event) {
                //                             // 点击事件
                //                             // event 代表Dialog对象；
                //                             event.hide();
                //                         }
                //                     },
                //                 // 以对象形式传入，每一个对象为一个按钮
                //                     {
                //                         className: 'btn-info', // 弹出框按钮的样式
                //                         text: '保存', // 弹出框按钮的文字
                //                         icon: 'fa fa-save', // 弹出框按钮的图标
                //                         event: function (event) {
                //                             // 点击事件
                //                             // event 代表Dialog对象；
                //                             var debug = userRoleForm.get();
                //                             console.log(debug);
                //                             _alert.success({
                //                                 title: 'Test! 这里调用保存',
                //                             });
                //                             event.hide();
                //                         }
                //                     },
                //                 ],
                //         }).show(userRoleForm.html);
                //     }
                // }
                ]
            }]
        })

        //分页
        var getPagingA = function (data, callBack) {
            service.getAllUser(data.pageInfo, function (res) {
                // console.log(res);
                callBack(res);
            });
        };
        var pagingA = _paging({
            data: {
                pageInfo: {
                    index: '1',
                    count: '10'
                }
            },
            ajaxEvent: getPagingA,
            success: function (result) {
                listA.set(result);
            }
        });

        //搜索框点击时切换到listB显示搜索结果
        var searchData = false;
        //回车键绑定到提交按钮
        $(document).keydown(function(event){ 
            if(event.keyCode==13){ 
                console.log("enter");
                seachBtn.click(); 
            } 
        }); 
        //提交搜索按钮事件
        seachBtn.unbind().bind('click', function() {
            searchData = searchValue.get();
            if (searchData) {
                //当有搜索关键词传入时, 隐藏全部用户列表A, 显示搜索结果的列表B
                $('#contentA').css('display', 'none');
                $('#contentB').css('display', 'block');

                //这里可以不做分页, 只是为了后端接口的统一
                var getPagingB = function (data, callBack) {
                    // console.log("Ajax中的searchData.keyword: "+searchData.keyword);
                    service.getUserBy(data.pageInfo, searchData.keyword, function (res) {
                        // console.log(res);
                        callBack(res);
                    });
                };
                var pagingB = _paging({
                    data: {
                        pageInfo: {
                            index: '1',
                            count: '10'
                        }
                    },
                    ajaxEvent: getPagingB,
                    success: function (result) {
                        listB.set(result);
                        // var pageboxB = $('<div style="text-align:center;"></div>');
                        // pageboxB.append(pagingB.render());
                        // tablePartB.footer(pageboxB);
                    }
                });
                var pageboxB = $('<div style="text-align:center;"></div>');
                pageboxB.append(pagingB.render());
                tablePartB.footer(pageboxB);
            }
        })

        var pageboxA = $('<div style="text-align:center;"></div>');
        
        tablePartA.body.append(listA.html);
        tablePartB.body.append(listB.html);
        pageboxA.append(pagingA.render());
        tablePartA.footer(pageboxA);

        contentA.append (tablePartA.html);
        contentB.append (tablePartB.html);
        content.append(contentA);
        content.append(contentB);
        layout.append(content);

    }
});