define(function (require, exports, module) {

    var config = require('../config/nav');
    var permission = require('../component/permission.js');

    var menuItem = function (options, parent) {
        this.options = options;
        this.subArray = {};
        this.isActive = false;
        this.html = $('<li class="nav_item">' +
            '	<a href="javascript:void(0)">' +
            '		<i class="fa ' + options.icon + '"></i>' +
            '		<span>' + this.options.name + '</span>' +
            '		<span class="pull-right-container">' +
            '		<i class="fa fa-angle-right pull-right"></i>' +
            '		</span>' +
            '	</a>' +
            '</li>');
        this.mainMenu = this.html.find('a');
        if (this.options.hasOwnProperty('subset')) {
            this.subBox = $('<ul class="subList"></ul>');
            for (var d = 0; d < this.options.subset.length; d++) {
                var subItem = this.options.subset[d];
                // console.log(subItem.permission);
                // console.log(subItem.name + ' : ' + permission.renderCheck(subItem.permission));
                if (permission.renderCheck(subItem.permission)) {
                    this.subArray[subItem.router] = $(
                        '<li>' +
                        '	<a href="#' + subItem.router + '">' +
                        '		<i class="fa fa-circle-thin"></i>' +
                        '		<span>' + subItem.name + '</span>' +
                        '	</a>' +
                        '</li>');
                    this.subBox.append(this.subArray[subItem.router]);
                };
            };
            this.html.append(this.subBox);
            this.mainMenu[0].onclick = () => {
                // if (this.subBox.css('display') == 'block') {
                //     return;
                // };
                if (this.subBox.css('display') == 'block') {
                    this.subBox.slideUp(500)
                } else {
                    parent.hideMenu();
                    this.subBox.slideDown(500)
                }
            };
        } else {
            this.html.find('a').attr('href', '#' + this.options.router);
        }
    };

    menuItem.prototype.active = function (url) {
        var _this = this;
        if (url.split('/')[1] == this.options.router.split('/')[1]) {
            this.isActive = true;
            this.html.addClass('active');
            if (this.subBox) {
                setTimeout(function () {
                    _this.subBox.slideDown(500);
                });
            };
            if (this.options.hasOwnProperty('subset')) {
                for (const key in this.subArray) {
                    if (this.subArray.hasOwnProperty(key)) {
                        const item = this.subArray[key];
                        if (key && url.indexOf(key) != -1) {
                            item.addClass('active');
                        } else {
                            item.removeClass('active');
                        }
                    }
                }
            };
        } else {
            this.unActive();
            if (this.subBox) {
                setTimeout(function () {
                    _this.subBox.slideUp(500);
                });
            };
        };
    };

    menuItem.prototype.unActive = function () {
        this.html.removeClass('active');
        this.html.find('li').removeClass('active');
        if (this.subBox) {
            this.subBox.slideUp(500);
        };
    };

    menuItem.prototype.hideMenu = function () {
        if (this.subBox) {
            this.subBox.slideUp(500);
        };
    };

    var menuObj = function (options) {
        this.html = $('<div class="nav"><ul class="nav_menu"></ul></div>');
        this.menuBox = this.html.find('.nav_menu');
        this.items = [];
        for (let i = 0; i < options.length; i++) {
            const subItem = options[i];
            if (subItem.type == 'cap') {
                this.menuBox.append('<li class="nav-small-cap">' + subItem.name + '</li>');
            } else {
                if (permission.renderCheck(subItem.permission)) {
                    var subObj = new menuItem(subItem, this);
                    this.items.push(subObj);
                    this.menuBox.append(subObj.html);
                };
            };
        };
    };
    menuObj.prototype.active = function (url) {
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            element.active(url);
        }
    };
    menuObj.prototype.hideMenu = function () {
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            if (!element.isActive) {
                element.unActive();
            };
        }
    };
    menuObj.prototype.reSetUrl = function () {
        var url = window.location.href.split('#')[1];
        this.active(url);
        return this;
    };

    var navTemplate = function () {
        return new menuObj(config).reSetUrl();
    };

    var lastType = null;
    var header = null;
    var wrapper = $('<div class="wrapper"></div>');
    var footer = null;
    var nav = null;
    var height = $(window).height();
    var initHeader = function () {
        var html = '';
        html += '<div class="header">';
        html += '    <div class="logo">LOGO</div>';
        html += '    <div class="logout"><i class="fa fa-sign-out"></i>退出登录</div>';
        html += '</div>';
        html = $(html)
        html.find('.logout').click(function () {
            location.href = 'index.html#/login';
            _storage.clear();
        });
        return html;
    };

    $('body').append(wrapper);

    wrapper.css({
        'min-height': height + 'px'
    });

    return function (router) {
        $('title').text(router.title);
        $('html').scrollTop(0);
        wrapper.empty();
        // 从全屏切换到主屏
        if (router.layout != lastType && router.layout == 'content') {
            wrapper.addClass('with_content');
            header = initHeader();
            footer = $('<div class="footer"></div>');
            nav = navTemplate();
            $('body').append(header).append(footer).append(nav.html);
            lastType = 'content';
            return wrapper;
        } else
            // 从主屏切换到主全
            if (router.layout != lastType && router.layout == 'full') {
                wrapper.removeClass('with_content');
                if (lastType != null) {
                    // 释放缓存
                    header.remove();
                    footer.remove();
                    nav.html.remove();
                };
                nav = null;
                header = null;
                footer = null;
                lastType = 'full';
                return wrapper;
            } else {
                if (nav) {
                    nav.reSetUrl();
                };
                return wrapper;
            };
    };
});