define(function (require, exports, module) {

    var routes = require('../config/router');
    var changeEvent = null;
    var permission = require('../component/permission.js');
    var alert = _alert;

    // 格式化方法
    var getRegExp = function (route) {
        route = route.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g, '\\$&')
            .replace(/\((.*?)\)/g, '(?:$1)?')
            .replace(/(\(\?)?:\w+/g, function (match, optional) {
                return optional ? match : '([^/?]+)'
            }).replace(/\*\w+/, '([^?]*?)');
        return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    };

    // 获取参数
    var extractParams = function (route, fragment, routeKey) {
        var fragments = [];
        var result = {};
        var params = route.exec(fragment).slice(1);
        routeKey.replace(/(\(\?)?:\w+/g, function (match, optional) {
            fragments.push(match);
            return match;
        });
        for (var d = 0; d < fragments.length; d++) {
            fragments[d] = fragments[d].replace(':', '');
            result[fragments[d]] = params[d];
        };
        return result;
    };

    // 记录原始哈希值
    var oldHash = null;
    var oldRouter = null;

    // 默认页面
    var defaultPage = "#/index";

    // 当URL的哈希值发生变化时 
    var urlChange = function (isRefreshPage) {
        var isReaded = false;
        var permissionError = false;
        // 是否刷新页面
        var path = location.hash.split("?")[0].split("#")[1];
        if (isRefreshPage) {
            oldHash = path;
            return;
        };

        for (var r in routes) {
            // 检查当前哈希值是否在路由表中
            if (routes.hasOwnProperty(r)) {
                var route = getRegExp(r);
                if (!route.test(path)) {
                    // 不在跳过
                    continue;
                } else {
                    // 获取参数
                    var params = extractParams(route, path, r);
                    if (changeEvent) {
                        if (permission.renderCheck(routes[r].permission)) {
                            isReaded = true;
                            changeEvent({
                                params: params,
                                router: routes[r],
                                routerKey: r,
                            }, {
                                    router: routes[oldRouter],
                                    routerKey: oldRouter,
                                });
                            // 切换完成,记录旧的哈希值
                            oldRouter = r;
                            oldHash = path;
                        } else {
                            permissionError = true;
                            // window.location.hash = oldHash;
                            // oldHash = r;
                        };
                    };
                };
            }
        };
        // 如果记录值不存在,跳转到默认页面
        // 如果存在,跳转到上一次的页面
        if (!isReaded && !oldHash) {
            window.location.hash = defaultPage;
        } else if (!isReaded && oldHash) {
            if (permissionError) {
                alert.error({
                    title: '权限不足',
                    callback: function () {
                        window.location.hash = oldHash;
                    }
                });
            } else {
                window.location.hash = oldHash;
            };
        } else {
            window.location.hash = oldHash;
        };
    };

    return {
        init: function () {
            // 初始化
            urlChange();
            window.addEventListener('hashchange', function () {
                urlChange();
            });
        },
        setDefaultPage: function (data) {
            // 设置默认页面
            defaultPage = data;
        },
        changeEvent: function (event) {
            // 设置切换方法
            changeEvent = event;
        }
    }
});