define(function (require, exports, module) {
    var permission = require('./../../component/permission.js');

    exports.render = function (params, layout, service) {
        var content = $('<div id="login"></div>');
        var loginBox = $('<div class="loginBox"></div>');
        var loginTitle = $('<div class="title" >管理平台</div>');

        var username = $('<input type="text" class="username" placeholder="用户名"/>');
        var password = $('<input type="password" class="password" placeholder="密码"/>');
        var loginButton = $('<div class="loginButton" >登&nbsp;录</div>');

        loginBox.append(loginTitle);
        loginBox.append(username);
        loginBox.append(password);
        loginBox.append(loginButton);


        loginButton.click(function () {
            if (!username.val()) {
                _alert.error({
                    title: '请输入用户名'
                });
                return;
            };
            if (!password.val()) {
                _alert.error({
                    title: '请输入密码'
                });
                return;
            };
            var postdata = {
                userName: username.val(),
                password: password.val()
            };
            service.login(postdata, function (result) {

                _storage.set('token', result.token);
                _storage.set('PermissionRole', result.roleId);
                _storage.set('name', result.name);
                _storage.set('userId', result.userId);
                permission.initPermission(result.roleId);
                
                location.href = './index.html#/index'; 

                // if(result.roleId == '3'){
                //     location.href = './index.html#/company';                   
                // }else if(result.roleId == '4'){
                //     location.href = './index.html#/contract';                   
                // }else if(result.roleId == '5' || result.roleId == '6' ){
                //     location.href = './index.html#/company';
                // }else{
                //     location.href = './index.html#/index'; 
                // }

               
                
               


            })

        });

        content.append(loginBox);
        layout.append(content);
    }
});