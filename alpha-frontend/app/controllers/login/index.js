define(function (require, exports, module) {
    var permission = require('./../../component/permission.js');
    var permissionList = require('../permissionGroup/premissionlist.js');
    exports.render = function (params, layout, service) {
        var content = $('<div id="login"></div>');
        var loginBox = $('<div class="loginBox"></div>');
        var loginTitle = $('<div class="title" >管理平台</div>');

        var userName = $('<input type="text" class="userName" placeholder="用户名"/>');
        var userPassword = $('<input type="password" class="userPassword" placeholder="密码"/>');
        var loginButton = $('<div class="loginButton" id="loginButton">登&nbsp;录</div>');

        loginBox.append(loginTitle);
        loginBox.append(userName);
        loginBox.append(userPassword);
        loginBox.append(loginButton);

        //回车键绑定到提交按钮
        $(document).keydown(function(event){ 
            if(event.keyCode==13){ 
                // console.log("enter");
                loginButton.click(); 
            } 
        }); 
        //提交按钮调用登录服务, 成功之后从后端获取token
        loginButton.click(function () {
            if (!userName.val()) {
                _alert.error({
                    title: '请输入用户名'
                });
                return;
            };
            if (!userPassword.val()) {
                _alert.error({
                    title: '请输入密码'
                });
                return;
            };
            var postdata = {
                userName: userName.val(),
                userPassword: userPassword.val()
            };
            service.login(postdata, function (result) {
                // console.log(result);
                _storage.clear();
                _storage.set('token', result.token);
                permission.initPermission(result.roleID);
                _storage.set('PermissionRole', result.roleID);
                _storage.set('userName', result.userName);
                _storage.set('permissionList', result.permList);
                // _storage.set('userId', result.userId);
                // permission.initPermission(result.roleId);
                location.href = './index.html#/index'; 
                // location.reload();
            })

        });

        content.append(loginBox);
        layout.append(content);
    }
});