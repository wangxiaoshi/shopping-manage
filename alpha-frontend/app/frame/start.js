define(function (require, exports, module) {


    require('../config/devConfig.js');

    // AJAX对象

    var request = function (options) {
        var $error = null;

        if (options.error) {
            $error = options.error;
        };
        var _error = function (error) {
            if ($error) {
                $error(error);
            } else if (error.status == '404') {
                _alert.error({
                    text: '服务器出现异常,请刷新重试',
                });
            } else if (error.status == '500') {
                _alert.error({
                    text: error.responseJSON.message,
                });
            } else if (error.status == '403') {
                // 更新 TOKEN 操作

                // _alert.error({
                //     text: error.responseJSON.message,
                // });
            } else {
                _alert.error({
                    text: '出现未知问题,请重试',
                });
            };
        };
        options.error = _error;
        switch (options.type) {
            case 'post':
                _request.POST(options);
                break;
            case 'put':
                _request.PUT(options);
                break;
            case 'delete':
                _request.DELETE(options);
                break;
            default:
                _request.GET(options);
                break;
        }
    };
    var permission = require('./../component/permission.js');
    permission.initPermission(_storage.get('PermissionRole'));

    // 页面布局对象
    var layout = require('./layout');
    // 路由对象
    var routes = require('./router');

    // 操作模式为初始化路由配置文件,加载service,controllers,以及style
    // 由哈希值变化引起刷新页面元素内容操作
    // 路由格式设计为 #/一级路由/二级路由/三级路由

    // 当路由发生变化时 (url哈希值发生变化时)
    // 1 : CSS操作 ,执行删除原来页面的CSS,加载新CSS
    // 2 : 合并 service
    // 3 : 执行 controllers
    // 
    routes.changeEvent(function (newHashData, oldHashData) {
        // 判断是否含有原始 HashData
        if (oldHashData.routerKey) {
            // 转化路径
            var oldStyleUrl = seajs.resolve('./controllers/' + oldHashData.router.style);
            // 移除原有路由的CSS文件
            $('link[href=\'' + oldStyleUrl + '\']').remove();
        };

        // 转化路径
        var newStyleUrl = seajs.resolve('./controllers/' + newHashData.router.style);

        // 创建css标签
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")

        // 插入标签
        fileref.setAttribute("href", newStyleUrl)

        // IE兼容处理
        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)

        // 由于缓存限制,已作废
        // seajs.use('./controllers/' + newHashData.router.style);

        // 新建服务缓存
        var service = [];

        // 合并service(服务)
        for (var i = 0; i < newHashData.router.service.length; i++) {
            var serviceItem = newHashData.router.service[i];
            service.push('./service/' + serviceItem);
        };
        // 加载服务,并把服务合并为统一对象
        seajs.use(service, function () {
            var service = {};
            for (var i = 0; i < arguments.length; i++) {
                var element = arguments[i];
                // 合并对象,使所有 service 使用同一个 request 对象进行请求
                // 实现免写 loading方法
                var serviceItemObj = element(request);
                for (var key in serviceItemObj) {
                    if (serviceItemObj.hasOwnProperty(key)) {
                        var item = serviceItemObj[key];
                        service[key] = item;
                    }
                }
            };
            // 加载 controllers
            seajs.use(['./controllers/' + newHashData.router.controller], function (controllers) {
                //  controllers中回调 传入参数为 
                //  params : url参数
                //  layout : 页面框架对象(用于重绘页面)
                //  service : 服务对象
                controllers.render(newHashData.params, layout(newHashData.router), service);
                // layout.setRouter(router);
            });
        });
        $('#Document_title').text(newHashData.router.title);
    });

    // 设置默认页面
    routes.setDefaultPage('#/index');

    // 初始化路由
    routes.init();
});