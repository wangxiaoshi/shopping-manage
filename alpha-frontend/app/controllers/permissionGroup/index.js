define(function (require, exports, module) {
    var template = _template;
    var list = require('./premissionlist.js');

    exports.render = function (params, layout, service) {
        var premissionRender = require('./premissionRender.js');
        var groupList = require('./groupList.js');

        var content = $('<div class="content"></div>');
        var row = template.row('3/9');

        // 角色
        var group = template.basic({ title: '角色列表' });
        group.html.addClass('premissionGroupList');
        row.item[0].append(group.html);

        // 添加按钮
        var addbutton = $('<button class="btn btn-box-tool btn-default btn-sm" style="margin:0 0 0 5px;"><i class="fa fa-plus"></i> 添加角色</button>');
        group.headerButtonBox.append(addbutton);


        // 右侧列表
        var premission = template.basic({ title: '权限列表' });
        row.item[1].append(premission.html);
        // premission.body.append(premissionRender.render(list.get()));

        var premissionObj = null;

        // 右侧权限列表赋值操作
        // premissionRender.set([1, 2, 3, 4, 5, 10]);

        // 界面渲染
        var height = $(window).height();
        group.body.css('height', height - 227);
        premission.body.css('height', height - 227);
        var save = $('<div class="btn btn-default btn-success" style="display:none"><i class="fa fa-save"></i> 保 存 </div>');
        // 渲染保存按钮


        var closeAll = $('<button class="btn btn-box-tool btn-default btn-sm" style="margin:0 0 0 5px;display:none"><i class="fa fa-plus-square-o"></i>&nbsp;&nbsp;全部收齐</button>');
        closeAll.click(function () {
            premissionRender.closeAll();
        });

        var openAll = $('<button class="btn btn-box-tool btn-default btn-sm" style="margin:0 0 0 5px;display:none"><i class="fa fa-minus-square-o"></i>&nbsp;&nbsp;全部展开</button>');
        openAll.click(function () {
            premissionRender.openAll();
        });
        premission.headerButtonBox.append(closeAll).append(openAll);

        // 左侧列表渲染
        groupList.render(group.body, save, premissionRender, 
            {
            delete: function (data, callback) {
                // data 删除对象的原数据
                // console.log("删除: " + data);
                service.deleteRole(data.roleID,function(res) {
                    location.reload();
                });
                // callback(false);
            },
            editor: function (inputValue, data, callback) {
                // inputValue 修改后的字符串
                // data 修改前的原对象
                if (data == inputValue) {
                    _alert.error({
                        title: '未作出修改',
                    });
                } else {
                    modData = data;
                    modData.roleName = inputValue;
                    // console.log(data);
                    service.updateRole(modData, function(res) {
                        _alert.success({
                            title: '修改成功',
                            callback: function (success) {
                                location.reload();
                            }
                        })
                    });
                }
            },
            creat: function (name, callback) {
                // console.log("index调用时的name:" + name);
                service.createRole(name, function(res) {
                    _alert.success({
                        title: '注册成功',
                        callback: function (success) {
                            location.reload();
                        }
                    });
                });
                // callback({
                //     name: name,
                //     id: 2
                // });
            },
            active: function (data, callback) {
                service.getPermissionByRoleID(data.roleID, function(res){
                    // 从后端拿到的列表进行格式转换, 生成一个符合权限树赋值格式的数组
                    var permList = [];
                    for (let index = 0; index < res.list.length; index++) {
                        // console.log(res.list[index].permissionID);
                        // 后端传来时是string类型, 使用Number转成数字类型
                        permList.push(Number(res.list[index].permissionID));
                    }
                    // console.log(permList);

                    //对权限树赋值
                    if (premissionObj) {
                        premissionObj.set(permList);
                    } else {
                        premission.body.append(premissionRender.render(list.get()));
                        premissionObj = premissionRender;
                        premissionObj.set(permList);
                    }
                })
                save.css('display', 'inline-block');
                closeAll.css('display', 'inline-block');
                openAll.css('display', 'inline-block');
                premission.body.css('height', height - 200);
                premission.footer(save);
                
                callback();
            },
            save: function (newData, oldData, callback) {
                // console.log("点击保存: " + newData + "旧数据: ");
                // console.log(oldData);
                // var dataToSend = new Map();
                // dataToSend.set("permList", newData);
                // dataToSend.set("roleID", oldData.roleID);
                service.updateRolePermission(newData, oldData.roleID, function(res) {
                    _alert.success({
                        title: '修改成功',
                            callback: function (success) {
                                //r如果修改了本身角色的权限, 将强制登出要求重新登录
                                if (oldData.roleID == _storage.get('PermissionRole')) {
                                    var logOutButton
                                    (document.getElementById('logOutButton')).click();
                                }
                                location.reload();
                            }
                    })
                })
                callback();
            }
        });

        // 左侧列表赋值操作
        service.getAllRole(_storage.get("token"), function(res){
                // console.log(res.list);
                groupList.set(res.list);
        });

        // groupList.set([
        //     { name: '角色1', id: '1', value: [1, 2, 3, 4, 5, 10] },
        //     { name: '角色2', id: '2', value: [3,7,9] },
        //     { name: '角色3', id: '3', value: [1,2,3] },
        //     { name: '角色4', id: '4', value: [1,7] },
        //     { name: '角色5', id: '5', value: [4,8,10] },
        // ]);

        // 绑定添加事件
        addbutton.click(() => {
            groupList.add();
        });
        content.append(row.html.addClass('premissionGroup'));
        layout.append(content);
    }
});