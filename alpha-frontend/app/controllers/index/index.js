define (function (require, exports, module) {
    // if(!_storage.get('token')) {
    //     location.href = './index.html#/login';
    // }
    exports.render = function (params, layout, service) {
        var userName;
        if(_storage.get('userName')) {
            userName = _storage.get('userName');
        } else {
            userName = "未登录用户";
        }
        
        // console.log(userName);
        var welcome = $('<div class="welcome" id="title"></div>');
        var content = $('<div id="index"></div>');
        //获取当前时间
        now = new Date();
        hour = now.getHours();
        var greeting = '';
        if(hour < 6){greeting = ("凌晨好！")} 
        else if (hour < 9){greeting = ("早上好！")} 
        else if (hour < 12){greeting = ("上午好！")} 
        else if (hour < 14){greeting = ("中午好！")} 
        else if (hour < 17){greeting = ("下午好！")} 
        else if (hour < 19){greeting = ("傍晚好！")} 
        else if (hour < 22){greeting = ("晚上好！")} 
        else {greeting = ("夜里好！")} 
        console.log(hour);
        content.append(welcome);
        layout.append(content);
        document.getElementById('title').innerHTML = userName + ", " + greeting;


        // content.append(welcome);
        // layout.append(content);
    }
});