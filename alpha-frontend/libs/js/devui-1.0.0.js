!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function (a) { function b(b) { var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height"); j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height"); j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect(); o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } } function c() { f = null } function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice; if (a.event.fixHooks) for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function () { if (this.addEventListener) for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b; a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function () { if (this.removeEventListener) for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null; a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function (b) { var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function (b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } }; a.fn.extend({ mousewheel: function (a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function (a) { return this.unbind("mousewheel", a) } }) });

// loading 组件
!(function ($, undefined) {
    var loadingEX = function (ele, opt) {
        this.$element = ele;
        this.defaultSetting = {
            className: '',
            loadingText: 'LOADING',
            type: 'box',
        };
        this.options = $.extend({}, this.defaultSetting, opt);
        this.stutas = false;
    };

    var svg = '';
    svg += '<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->';
    svg += '<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">';
    svg += '    <defs>';
    svg += '        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">';
    svg += '            <stop stop-color="#fff" stop-opacity="0" offset="0%"/>';
    svg += '            <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>';
    svg += '            <stop stop-color="#fff" offset="100%"/>';
    svg += '        </linearGradient>';
    svg += '    </defs>';
    svg += '    <g fill="none" fill-rule="evenodd">';
    svg += '        <g transform="translate(1 1)">';
    svg += '            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">';
    svg += '                <animateTransform';
    svg += '                    attributeName="transform"';
    svg += '                    type="rotate"';
    svg += '                    from="0 18 18"';
    svg += '                    to="360 18 18"';
    svg += '                    dur="0.9s"';
    svg += '                    repeatCount="indefinite" />';
    svg += '            </path>';
    svg += '            <circle fill="#fff" cx="36" cy="18" r="1">';
    svg += '                <animateTransform';
    svg += '                    attributeName="transform"';
    svg += '                    type="rotate"';
    svg += '                    from="0 18 18"';
    svg += '                    to="360 18 18"';
    svg += '                    dur="0.9s"';
    svg += '                    repeatCount="indefinite" />';
    svg += '            </circle>';
    svg += '        </g>';
    svg += '    </g>';
    svg += '</svg>';

    //定义loadingEX的方法
    loadingEX.prototype = {
        render: function () {
            var html = '';
            html += '<div class="loadingEx ' + this.options.SclassName + '">';
            html += '   <div class="loadingBody">';
            html += '       <div class="loadingImg"></div>';
            html += '       <div class="loadingText">' + this.options.loadingText + '</div>';
            html += '   </div>';
            html += '</div>';
            this.html = $(html);
            this.html.find('.loadingImg').append(svg);
        },
        show: function () {
            if (this.$element.find(' > .loadingEx').length != 0) {
                return this.$element.find('> .loadingEx').remove();
            } else {
                this.render();
                if (this.$element.selector == 'body') {
                    this.html.css('position', 'fixed');
                };
                return this.$element.append(this.html);
            };
        }
    };
    //在插件中使用loadingEX对象
    $.fn.loading = function (options) {
        new loadingEX(this, options).show();
        //创建loadingEX的实体
        //调用其方法
        return this;
    };
})(jQuery);

// 弹出框组件
(function () {
    var Dialog = function (options) {
        var _this = this;
        var defaultSetting = {
            className: '',
            title: '',
            buttons: [],
            close: function () { },
        };
        var setting = $.extend({}, defaultSetting, options);
        this.options = setting;
        this.html = $(
            '<div class="modal fade" style="overflow: auto;background-color:rgba(0,0,0,0.3)">' +
            '    <div class="modal-dialog custom ' + setting.className + '" style="">' +
            '        <div class="modal-content">' +
            '            <div class="modal-header">' +
            '                <h4 class="modal-title" style="display: inline-block;">' + setting.title + '</h4>' +
            '                <button type="button" class="close" style="margin-top: 3px;">' +
            '                    <span aria-hidden="true">&times;</span>' +
            '                </button>' +
            '            </div>' +
            '            <div class="modal-body"></div>' +
            '            <div class="modal-footer"></div>' +
            '        </div>' +
            '    </div>' +
            '</div>');
        this.body = this.html.find('.modal-body');
        this.closeEvent = this.html.find('.modal-header .close');
        this.footer = this.html.find('.modal-footer');

        this.closeEvent.click(function (e) {
            _this.hide(e);
        });

        this.html.mousewheel(function (event) {
            event.stopPropagation();
        });

        // this.html

        this.dialogBox = this.html.find('.modal-dialog');
        if (this.options.buttons.length > 0) {
            for (var i = 0; i < setting.buttons.length; i++) {
                var buttonSetting = setting.buttons[i];
                this.renderButtons(buttonSetting);
            };
        } else {
            this.footer.css('display', 'none');
        };

    };
    Dialog.prototype = {
        constructor: this,
        show: function (html) {
            var _this = this;
            this.body.append(html);
            $('body').append(this.html);

            $('body').css({
                'overflow': 'hidden'
            });
            this.html.css('display', 'block');
            setTimeout(function () {
                _this.html.addClass('show');
                _this.html.css({
                    'opacity': '1',
                });
                _this.dialogBox.css({
                    'transform': 'translate(0,0)',
                });
            }, 10);
        },
        onClose: function (event) {
            this.options.close = event;
        },
        hide: function (e) {
            var _this = this;
            this.options.close(this, e);
            this.html.removeClass('show');
            this.html.css({
                'opacity': '0',
            });
            this.dialogBox.css({
                'transform': 'translate(0,-25%)',
            });

            if ($('body').find('.modal.show').length == 0) {
                $('body').css({
                    'overflow': 'auto',
                });
            };

            setTimeout(function () {
                _this.html.css('display', 'none');
                _this.html.remove();
            }, 300);

        },
        renderButtons: function (setting) {
            var defaultButtonSetting = {
                className: 'btn-default',
                text: '',
                icon: '',
                event: function (event) { }
            };
            this.footer.css('display', 'block');
            var buttonSetting = $.extend({}, defaultButtonSetting, setting);
            var buttonHtml = $('<div class="btn ' + buttonSetting.className + ' float-right" style="margin-right:15px;"></div>');
            if (buttonSetting.icon) {
                buttonHtml.append('<i class="' + buttonSetting.icon + '"></i>');
            };
            buttonHtml.append('&nbsp;' + buttonSetting.text);
            var _this = this;

            (function (buttonHtml, buttonSetting) {
                buttonHtml.click(function () {
                    buttonSetting.event(_this);
                });
            })(buttonHtml, buttonSetting);
            this.footer.append(buttonHtml);
        },
    };
    window._dialog = function (options) {
        return new Dialog(options);
    };
})();

// 分页组件
(function () {

    var paging = function (options, type) {
        var defaultSetting = {
            data: {},
            ajaxEvent: function (data, callback) { },
            before: function (event) { },
            success: function (result) { },
        };
        this.options = $.extend({}, defaultSetting, options);
        this.type = type;
        this.html = $('<ul class="pagination"></ul>');
        this.pageCount = null;
    };
    paging.prototype = {
        constructor: this,
        render: function () {
            this.init();
            return this.html;
        },
        init: function () {
            var _this = this;
            this.options.before(this);
            if (this.options) {
                this.options.ajaxEvent(this.options.data, function (result) {
                    if (!result) {
                        _this.options.success(result);
                    } else {
                        _this.pageCount = _this.hasPaging(result.totalRecord, _this.options.data);
                        _this.template();
                        _this.options.success(result.list);
                    };
                });
            } else {
                console.error('paging error : parameters must be an object');
            };
        },
        template: function () {
            var _this = this;
            _this.html.empty();
            var pages = this.pageCount;
            if (!pages) {
                return;
            };
            var option = $.extend(true, {}, _this.options);
            var index = parseInt(option.data.pageInfo.index);
            // 上一页
            var prev = '';
            if (index > 1) {
                prev = $('<li class="page-item" style="cursor:pointer"><span class="page-link">上一页</span></li>');
                prev.unbind().bind('click', function () {
                    var newData = $.extend(true, {}, option);
                    newData.data.pageInfo.index = parseInt(newData.data.pageInfo.index) - 1;
                    _this.options = newData;
                    _this.init();
                });
            } else {
                prev = $('<li class="page-item disabled"><span class="page-link">上一页</span></li>');
            };
            _this.html.append(prev);
            // 中间页
            if (_this.type == 'wap') {
                _this.html.addClass('forwap');
                // select
                var html = $('<div class="select">当前第<span class="page-link"><select></select></span>页</div>');
                for (var i = 0; i < pages; i++) {
                    html.find('select').append(_this.pageOption(i + 1, index));
                };
                html.find('select').change(function () {
                    var newData = $.extend(true, {}, option);
                    newData.data.pageInfo.index = $(this).find('option:selected').val();
                    _this.options = newData;
                    _this.init();
                });
                _this.html.append(html);
            } else {
                if (index != 1 && index >= 4 && pages != 4) {
                    var first = $('<li class="page-item" style="cursor:pointer"><span class="page-link">' + 1 + '</span></li>');
                    first.click(function () {
                        var newData = $.extend(true, {}, option);
                        newData.data.pageInfo.index = 1;
                        _this.options = newData;
                        _this.init();
                    });
                    _this.html.append(first);
                };
                if (index - 2 > 2 && index <= pages && pages > 5) {
                    _this.html.append('<li class="page-item disabled"><span class="page-link">...</span></li>');
                };
                var start = index - 2,
                    end = index + 2;
                if ((start > 1 && index < 4) || index == 1) {
                    end++;
                };
                if (index > pages - 4 && index >= pages) {
                    start--;
                };

                function middleButton(index, middleElement) {
                    middleElement.bind('click', function () {
                        var newData = $.extend(true, {}, option);
                        newData.data.pageInfo.index = parseInt(index);
                        _this.options = newData;
                        _this.init();
                    });
                };
                for (; start <= end; start++) {
                    if (start <= pages && start >= 1) {
                        if (start != index) {
                            var middle = $('<li class="page-item" style="cursor:pointer"><span class="page-link">' + start + '</span></li>');
                            middleButton(start, middle);
                            _this.html.append(middle);
                        } else {
                            _this.html.append('<li class="page-item active"><span class="page-link">' + start + '</span></li>');
                        }
                    }
                };
                if (index + 2 < pages - 1 && index >= 0 && pages > 5) {
                    _this.html.append('<li class="page-item disabled"><span class="page-link">...</span></li>');
                };
                if (index != pages && index < pages - 2 && pages != 4) {
                    var last = $('<li class="page-item" style="cursor:pointer"><span class="page-link">' + pages + '</span></li>');
                    last.click(function () {
                        var newData = $.extend(true, {}, option);
                        newData.data.pageInfo.index = parseInt(pages);
                        _this.options = newData;
                        _this.init();
                    });
                    _this.html.append(last);
                };
            };
            // 下一页
            var next = '';
            if (index < pages) {
                next = $('<li class="page-item"><span class="page-link">下一页</span></li>');
                next.click(function () {
                    var newData = $.extend(true, {}, option);
                    newData.data.pageInfo.index = parseInt(newData.data.pageInfo.index) + 1;
                    _this.options = newData;
                    _this.init();
                });
            } else {
                next = $('<li class="page-item disabled"><span class="page-link">下一页</span></li>');
            }
            _this.html.append(next);
        },
        hasPaging: function (totalCount) {
            var pages = Math.ceil(parseInt(totalCount) / parseInt(this.options.data.pageInfo.count));
            if (pages <= 1 && this.options.data.pageInfo.index == 1) {
                return false;
            } else {
                return pages;
            };
        },
        pageOption: function (data, index) {
            var html = '';
            html += '<option value="' + data + '" ' + (data == index ? 'selected="selected"' : '') + '>' + data + '</option>';
            return html;
        },
        refresh: function (data) {
            this.options.data = data;
            this.init();
        }
    }

    window._paging = function (options) {
        return new paging(options);
    };
})();

// storage 组件
!(function () {
    var ms = "mystorage";
    var storage = window.localStorage || window.sessionStorage;
    var storageObj = {};
    (function () {
        var set = function (key, value) {
            //存储
            var mydata = storage.getItem(ms);
            if (!mydata) {
                this.init();
                mydata = storage.getItem(ms);
            }
            mydata = JSON.parse(mydata);
            mydata.data[key] = value;
            storage.setItem(ms, JSON.stringify(mydata));
            return mydata.data;
        };
        var get = function (key) {
            //读取
            var mydata = storage.getItem(ms);
            if (!mydata) {
                return false;
            }
            mydata = JSON.parse(mydata);
            return mydata.data[key];
        };
        var remove = function (key) {
            //读取
            var mydata = storage.getItem(ms);
            if (!mydata) {
                return false;
            };
            mydata = JSON.parse(mydata);
            delete mydata.data[key];
            storage.setItem(ms, JSON.stringify(mydata));
            return mydata.data;
        };
        var clear = function () {
            //清除对象
            storage.removeItem(ms);
        };
        var init = function () {
            storage.setItem(ms, '{"data":{}}');
        };
        storageObj = {
            set: set,
            get: get,
            remove: remove,
            init: init,
            clear: clear
        }
    })();
    window._storage = storageObj;
})();

// alert 
!(function () {
    window._alert = {
        success: function (options) {
            var _options = $.extend({}, {
                title: '操作成功',
                text: '',
                buttonColor: "#7bc351",
                ButtonText: "确定",
                callback: function () { },
            }, options);
            swal({
                title: _options.title,
                text: _options.text,
                type: "success",
                confirmButtonColor: _options.buttonColor,
                confirmButtonText: _options.ButtonText,
                closeOnConfirm: true
            }, function () {
                _options.callback();
            });
        },
        warning: function (options) {
            var _options = $.extend({}, {
                title: '',
                text: '',
                buttonColor: "#e28b3e",
                ButtonText: "确定",
                callback: function () { },
            }, options);
            swal({
                title: _options.title,
                text: _options.text,
                type: "warning",
                confirmButtonColor: _options.buttonColor,
                confirmButtonText: _options.ButtonText,
            }, function () {
                _options.callback();
            });
        },
        normal: function (options) {
            var _options = $.extend({}, {
                title: '',
                text: '',
                buttonColor: "#1e88e5",
                ButtonText: "确定",
                callback: function () { },
            }, options);
            swal({
                title: _options.title,
                text: _options.text,
                confirmButtonColor: _options.buttonColor,
                confirmButtonText: _options.ButtonText,
            }, function () {
                _options.callback();
            });
        },
        error: function (options) {
            var _options = $.extend({}, {
                title: '',
                text: '',
                buttonColor: "#e44c4c",
                ButtonText: "确定",
                callback: function () { },
            }, options);
            swal({
                title: _options.title,
                text: _options.text,
                type: "error",
                confirmButtonColor: _options.buttonColor,
                confirmButtonText: _options.ButtonText,
            }, function () {
                _options.callback();
            });
        },
        delete: function (options) {
            var _options = $.extend({}, {
                title: '',
                text: '',
                buttonColor: "#e44c4c",
                ButtonText: "确定",
                deleteText: '确认删除',
                callback: function () { },
            }, options);
            swal({
                title: _options.title,
                text: _options.text,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: _options.deleteText,
                cancelButtonText: "取消",
                closeOnConfirm: false
            }, function () {
                swal({
                    title: '',
                    text: '操作中,请稍等',
                    showConfirmButton: false,
                });
                _options.callback(function () {
                    swal({
                        title: '操作成功',
                        text: '',
                        type: "success",
                        confirmButtonColor: "#7bc351",
                        confirmButtonText: "确定",
                        closeOnConfirm: true
                    }, function () { });
                }, function (text) {
                    swal({
                        title: '操作失败',
                        text: text,
                        type: "error",
                        confirmButtonColor: "#e44c4c",
                        confirmButtonText: "确定",
                        closeOnConfirm: true
                    }, function () { });
                });
            });
        }
    };
})();

// form 表单相关及其他
!(function () {
    // IE 8 下忽略 console.log();
    window.console = window.console || (function () {
        var c = {};
        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
        return c;
    })();
    // 常用正则表达式
    var regulars = {
        year: /^(19|20)\d{2}$/,
        number: /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,
        bankNum: /^\d{16}|\d{19}$/,
        telephone: /^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/,
        int: /^[0-9]*$/,
        phone: /^[1][0-9]{10}$/,
        allChinese: /^([\u4E00-\u9FA5]+，?)+$/,
        haveChinese: "[\\u4E00-\\u9FFF]+",
        idCard15: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,
        idCard18: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$/,
        url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
        email: /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,
        Special: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "{", "}", "[", "]", "(", ")", ":", ";", "'", "|", "\\", "<", ">", "?", "/", "<<", ">>", "||", "//", "administrators", "administrator", "管理员", "系统管理员", "admin", "select", "delete", "update", "insert", "create", "drop", "alter", "trancate"],
        'null': "^[ ]+$"
    };
    // 正则表达式的对应错误信息语句
    var regularsErrorText = {
        year: '只能为年份(四位,1900-2099)',
        number: '只能为数字',
        bankNum: '格式错误',
        telephone: '格式错误',
        int: '只能为正整数',
        phone: '格式错误',
        allChinese: '只能为中文',
        haveChinese: '中含有汉字',
        isIdCard: '格式错误',
        url: '格式错误',
        email: '格式错误',
        isSpecial: '不能包含特殊字符',
        notNull: "不能为空",
    };
    // 验证用方法集合
    var verifyFunctions = {
        'default': function (str, type) {
            var re = new RegExp(regulars[type]);
            return re.test(str) ? true : false;
        },
        haveChinese: function (str) {
            var re = new RegExp(regulars.haveChinese);
            return !re.test(str) ? true : false;
        },
        notNull: function (str) {
            if (str == "" || str == undefined || str == null || str == NaN) return false;
            var re = new RegExp(regulars['null']);
            return !re.test(str);
        },
        isSpecial: function (str) {
            str = str.toLowerCase();
            for (var i = 0; i < regulars.Special.length; i++) {
                if (str.indexOf(regulars.Special[i]) >= 0) {
                    return false;
                }
            }
            return true;
        },
        isIdCard: function (str) {
            var re1 = new RegExp(regulars.idCard15);
            var re2 = new RegExp(regulars.idCard18);
            return re1.test(str) || re2.test(str) ? true : false;
        }
    };
    var _verify = {};
    _verify.is = function (type, obj) {
        var result = null;
        var mold = null;
        if (obj) {
            var objectString = Object.prototype.toString.call(obj);
            switch (type) {
                case "string":
                    result = objectString == "[object String]";
                    break;
                case "function":
                    result = objectString == "[object Function]";
                    break;
                case "array":
                    result = objectString == "[object Array]";
                    break;
                case "number":
                    result = objectString == "[object Number]";
                    break;
                case "date":
                    result = objectString == "[object Date]";
                    break;
                case "object":
                    result = objectString == "[object Object]";
                    break;
                case "bool":
                    result = objectString == "[object Boolean]";
                    break;
                case "regExp":
                    result = objectString == "[object RegExp]";
                    break;
            };
            return result;
        } else {
            var objectString = Object.prototype.toString.call(type);
            switch (objectString) {
                case "[object String]":
                    mold = "string";
                    break;
                case "[object Function]":
                    mold = "function";
                    break;
                case "[object Array]":
                    mold = "array";
                    break;
                case "[object Number]":
                    mold = "number";
                    break;
                case "[object Date]":
                    mold = "date";
                    break;
                case "[object Object]":
                    mold = "object";
                    break;
                case "[object Boolean]":
                    mold = "bool";
                    break;
                case "[object RegExp]":
                    mold = "regExp";
                    break;
            };
            return mold;
        };
    };
    _verify.jude = function (type, value) {
        var SpecialArray = ['notNull', 'isSpecial', 'isIdCard', 'haveChinese'];
        if ($.inArray(type, SpecialArray) != -1) {
            var answer = verifyFunctions[type](value);
            return {
                answer: answer,
                errorText: (answer ? null : regularsErrorText[type])
            };
        } else if (type.indexOf('$') != -1) {
            var answer = this.custom(type.split('$'), value);
            return {
                answer: answer.result,
                errorText: answer.text
            };
        } else {
            var answer = verifyFunctions['default'](value, type);
            return {
                answer: answer,
                errorText: (answer ? null : regularsErrorText[type])
            };
        };
    };
    _verify.inArray = function (str, _array) {
        if ($.inArray(str, _array) == -1) {
            return false
        } else {
            return true
        }
    };
    _verify.isEqual = function (a, b) {
        if (a === b) {
            return a !== 0 || 1 / a === 1 / b;
        };
        if (a == null || b == null) {
            return a === b;
        };
        var A = Object.prototype.toString.call(a);
        var B = Object.prototype.toString.call(b);
        if (A !== B) {
            return false;
        };
        switch (A) {
            case '[object RegExp]':
            case '[object String]':
                return '' + a === '' + b;
            case '[object Number]':
                if (+a !== +a) {
                    return +b !== +b;
                };
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
        };
        if (A == '[object Object]') {
            if (JSON.stringify(a) != JSON.stringify(b)) {
                return false;
            };
            return true;
        };
        if (A == '[object Array]') {
            if (a.toString() == b.toString()) {
                return true;
            }
            return false;
        };
    };
    _verify.custom = function (type, str) {
        var name = type[0];
        if (name == 'les') {
            var nums = type[1];
            nums = parseInt(nums);
            var length = str.toString().length;
            return {
                result: length >= nums ? true : false,
                text: '不能小于' + nums + '位'
            };
            // if (type[1].indexOf('les') != -1) {

            // } else if (type[1].indexOf('gre') != -1) {

            // };
        } else if (name == 'gre') {
            var nums = type[1];
            nums = parseInt(nums);
            var length = str.toString().length;
            return {
                result: length <= nums ? true : false,
                text: '不能大于' + nums + '位'
            }
        };
    };
    var verify = _verify;
    // 单个验证判断流程
    var verifyRule = function (singleRule, value, text) {
        // 返回对象类型
        var ruleType = verify.is(singleRule);
        if (ruleType == 'string') {
            // 当为String类型时,去默认验证方法中寻找
            var result = verify.jude(singleRule, value);
            if (!result.answer) {
                return text + result.errorText;
            } else {
                return false;
            };
        } else if (ruleType == 'function') {
            // 当为方法类型时,执行方法,并返回验证 (方法通过,返回false,否则返回错误语句);
            var result = singleRule(value);
            if (result) {
                return result;
            } else {
                return false;
            };
        } else if (ruleType == 'object' && singleRule.regExp && verify.is('regExp', singleRule.regExp)) {
            // 当对象方法为正则表达式时,直接使用正则表达式进行判断
            var errorText = singleRule.errorText;
            var regular = singleRule.regExp;
            var re = new RegExp(regular);
            if (re.test(value)) {
                return false;
            } else {
                return errorText;
            };
        } else {
            // 其他类型直接跳过,控制台输出错误信息
            console.error('rule模块 : 未识别的判断类型');
            return false;
        };
    };
    var rules = function (rulesObj, value) {
        var text = rulesObj.text;
        var rulesArray = rulesObj.rules;
        if (!rulesArray) {
            return false;
        };
        // 判断是否为数组
        if (verify.is('array', rulesArray)) {
            // 跳过非空验证
            if ($.inArray("notNull", rulesArray) == -1 && (value == '' || value === null)) {
                return false;
            };
            // 进行循环验证
            var _text = false;
            for (var i = 0; i < rulesArray.length; i++) {
                var element = rulesArray[i];
                var result = verifyRule(element, value, text);
                if (result) {
                    _text = result;
                    break;
                };
            };
            if (_text) {
                return _text;
            } else {
                return false;
            };
        } else if (verify.is('string', rulesArray)) {
            // 跳过非空验证
            if (rulesArray != 'notNull' && (value == '' || value === null)) {
                return false;
            };
            // 进行单条验证
            var result = verifyRule(rulesArray, value, text);
            if (result) {
                return result;
            } else {
                return false;
            };
        } else if (verify.is('function', rulesArray)) {
            // 进行单条验证
            var result = verifyRule(rulesArray, value, text);
            if (result) {
                return result;
            } else {
                return false;
            };
        }
    };
    var isNumber = function (obj) {
        return obj === +obj
    };
    function formatDate(format, str, calibrat) {
        try {
            str = str.split('.')[0];
        } catch (error) {

        };

        if (str instanceof Date) {
            var date = str;
        } else {
            if (verifyFunctions.default(str, 'int')) {
                var date = new Date(parseInt(str));
            } else if (str) {
                str = str.replace(/年/g, '/').replace(/月/g, '/').replace(/日/g, '').replace(/时/g, ':').replace(/分/g, ':').replace(/秒/g, '');
                str = str.replace(/\//g, '-');
                str = str.replace(/\./g, '/');
                var date = new Date(str);
            } else {
                var date = new Date();
            };
        };
        if (date == 'Invalid Date') {
            console.error('ExDate :非法事件格式' + str);
            return 'error';
        };

        var formatStr = format || 'yyyy-MM-DD';
        if (format == '中' || format == 'zh') {
            formatStr = 'yyyy年M月D日';
        } else if (format == 'ZH') {
            formatStr = 'yyyy年MM月DD日';
        } else if (format == 'ZH:') {
            formatStr = 'yyyy年MM月DD日 HH时mm分ss秒';
        } else if (format == 'zh:') {
            formatStr = 'yyyy年M月D日 T h时m分s秒';
        } else if (format == '-') {
            formatStr = 'yyyy-MM-DD';
        } else if (format == '/') {
            formatStr = 'yyyy/MM/DD';
        };

        if (formatStr == 'z') {
            date = new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate());
            formatStr = 'Z';
        };
        if (formatStr == 'Z') {
            return date.getTime();
        };
        if (calibrat) {
            var calibratMillisecond = calibrat * 60 * 1000;
            if (!calibratMillisecond) {
                console.error('ExDate : 非法偏差格式' + str);
                return 'error';
            };

            var newTime = data.getTime();
            newTime += calibratMillisecond;
            data = new Date(newTime);

            if (date == 'Invalid Date') {
                console.error('ExDate : 非法事件格式' + str);
                return 'error';
            };
        };
        var zeroize = function (value, length) {
            if (!length) length = 2;
            value = String(value);
            for (var i = 0, zeros = ''; i < (length - value.length); i++) {
                zeros += '0';
            }
            return zeros + value;
        };
        return formatStr.replace(/d{1,2}|D{1,2}|m{1,2}|yy(?:yy)|YY(?:YY)|([hHMstTZ]){1,2}/g, function ($0) {
            switch ($0) {
                case 'd':
                    return date.getDate();
                case 'dd':
                    return zeroize(date.getDate());
                case 'D':
                    return date.getDate();
                case 'DD':
                    return zeroize(date.getDate());
                case 'M':
                    return date.getMonth() + 1;
                case 'MM':
                    return zeroize(date.getMonth() + 1);
                case 'yy':
                    return String(date.getFullYear()).substr(2);
                case 'yyyy':
                    return date.getFullYear();
                case 'YY':
                    return String(date.getFullYear()).substr(2);
                case 'YYYY':
                    return date.getFullYear();
                case 'h':
                    return date.getHours() % 12 || 12;
                case 'hh':
                    return zeroize(date.getHours() % 12 || 12);
                case 'H':
                    return date.getHours();
                case 'HH':
                    return zeroize(date.getHours());
                case 'm':
                    return date.getMinutes();
                case 'mm':
                    return zeroize(date.getMinutes());
                case 's':
                    return date.getSeconds();
                case 'ss':
                    return zeroize(date.getSeconds());
                case 'tt':
                    return date.getHours() < 12 ? ' am ' : ' pm ';
                case 'TT':
                    return date.getHours() < 12 ? ' AM ' : ' PM ';
                case 'T':
                    return date.getHours() < 12 ? ' 上午 ' : ' 下午 ';
                case 'Z':
                    return date.getTime();
                default:
                    return $0.substr(1, $0.length - 2);
            }
        })
    };
    var optionsDate = {
        Gender: [
            { label: '男', value: '0', },
            { label: '女', value: '1', },
            { label: '未知', value: '2', }
        ],

        fileType: [
            { label: '成长型AAA级信用企业', value: '0', },
            { label: '中国AAA级信用企业', value: '1', },
            { label: '中国诚信品牌', value: '2', },
            { label: '全国诚信经营示范单位', value: '3', },
            { label: '全国优秀诚信企业家', value: '4', },
        ],
        // newsType: [
        //     { label: '卡片', value: 'card', },
        //     { label: '图文', value: 'news', },
        // ],
        newsType: [
            { label: '国家政策', value: '1' },
            { label: '中国企业改革与发展研究会', value: '2' },
            { label: '中企研会员公示', value: '3' },
            { label: '评价结果', value: '4' },
            { label: '新闻', value: '5' },
            { label: '其他', value: '6' },
        ]
    };
    var formatOptions = function (key, type) {
        if (type == 'list' && optionsDate.hasOwnProperty(key)) {
            var data = [];
            for (var i = 0; i < optionsDate[key].length; i++) {
                var item = optionsDate[key][i];
                data.push(item);
            };
        } else if (type == 'data' && optionsDate.hasOwnProperty(key)) {
            var data = {};
            for (var i = 0; i < optionsDate[key].length; i++) {
                var item = optionsDate[key][i];
                data[item.value.toString()] = item;
            };
        } else {
            console.error('OptionSide => 没有找到对应的Key值 : ' + key);
            if (type == 'list') {
                var data = [];
            } else if (type == 'data') {
                var data = {};
            } else {
                var data = [];
            }
        };
        return data;
    };
    var optionSide = {
        get: function (name, callback, type) {
            if (verify.is('string', name)) {
                callback(formatOptions(name, type));
            } if (verify.is('array', name)) {
                var data = {};
                var _name = $.extend(true, [], name);
                var loop = function (_name) {
                    if (_name.length == 0) { 
                        callback(data);
                    } else {
                        var name = _name.shift();
                        data[name] = callback(formatOptions(name, type));
                        loop(_name);
                    };
                };
                loop(_name);
            };
        },
        set: function (data) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var element = data[key];
                    optionsDate[key] = element;
                }
            };
        },
    };
    // 单行文本输入框组件
    var input = function (options, layout) {
        if (options === undefined) {
            options = {};
        };
        // 合并参数
        this.options = $.extend({}, {
            size: 'normal',
            verify: {
                text: '',
                rules: []
            },
            readonly: false,
            placeholder: '',
            'default': null,
            onChange: function () { },
            onError: function () { },
        }, options);
        var _this = this;
        this.layout = layout;
        // 主要元素
        this.html = $('<input spellcheck="false" class="form-control ' + this.options.size + '" />');
        // 事件集合
        this.event = {
            change: this.options.onChange,
            error: this.options.onError
        };
        // 绑定change方法(支持拼音输入法)
        this.html.unbind().bind('input propertychange', function () {
            _this.change();
            // _this.changeEvent(_this);
        });
        // 默认值
        this.value = null;
        // 兼容IE 的 placeHolder
        if (!!(this.options.placeholder) && !('placeholder' in document.createElement('input'))) {
            this.html.val(this.html.attr('placeholder', _this.options.placeholder));
            this.html.val(this.html.attr('placeholder')).addClass('ie-placeholder');
            this.html.bind('focus', function () {
                if (_this.html.val() == _this.html.attr('placeholder')) {
                    _this.html.val("").removeClass('ie-placeholder');
                }
            }).bind('blur', function () {
                if (_this.html.val().length == 0) {
                    _this.html.val(_this.html.attr('placeholder')).addClass('ie-placeholder');
                }
            });
        } else {
            this.html.attr('placeholder', this.options.placeholder);
        };
        // 初始化中,生成元素是否只读
        this.readonly(this.options.readonly);
        // 添加默认值
        this.set(this.options['default']);
        // 储存错误信息
        this.errorMessage = null;
        // 如果在 Form 对象中,则直接输出,不用Render(); 
        if (this.layout) {
            this.layout.append(this.html);
        };

    };
    input.prototype = {
        constructor: this,

        // 绑定事件集合方法
        on: function (str, event) {
            if (this.event.hasOwnProperty(str)) {
                this.event[str] = event;
            };
            return this;
        },
        // 单独绑定 change 方法
        onChange: function (event) {
            this.event.change = event;
            return this;
        },
        // 单独绑定 error 方法
        onError: function (event) {
            this.event.error = event;
            return this;
        },
        // 当值发生变化时
        change: function () {
            // 改变变量作用域,使调用函数可以使用 this 方法
            this.value = this.html.val();
            this.event.change.apply(this, [this.html.val()]);
            // 执行验证方法
            this.verify();
            return this;
        },
        verify: function () {
            var text = rules(this.options.verify, this.html.val());
            // 父级模板的显示错误信息及关闭错误信息
            if (this.layout) {
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.layout.showError(text);
                    this.errorMessage = text;
                } else {
                    this.layout.hideError();
                    this.errorMessage = null;
                }
            } else {
                // 如果错误信息不为空,则触发error方法,并保留错误信息
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.errorMessage = text;
                } else {
                    // 如果错误信息为空,侧清空错误信息
                    this.errorMessage = null;
                };
            };
            return this;
        },
        // 操作元素是否只读
        readonly: function (isReadonly) {
            var _isReadonly = null;
            if (verify.is(isReadonly) == 'function') {
                _isReadonly = isReadonly();
            };
            _isReadonly = !!isReadonly;
            if (_isReadonly) {
                this.html.attr('readonly', 'readonly');
                this.html.addClass('readonly');
            } else {
                this.html.attr('readonly', _isReadonly);
                this.html.removeClass('readonly');
            };
            return this;
        },
        // 为输入框赋值
        set: function (data, doChange) {
            if (data === null) {
                return;
            };
            this.value = data;
            this.html.val(data);
            if (doChange) {
                this.change();
            };
            return this;
        },
        // 取值方法
        get: function (callBack, ignore) {
            if (ignore) {
                callBack(this.value);
            } else {
                this.verify();
                if (this.errorMessage) {
                    callBack(this.errorMessage);
                } else {
                    callBack(false, this.value);
                };
            };
            return this;
        },
    };
    var textarea = function (options, layout) {
        if (options === undefined) {
            options = {};
        };
        // 合并参数
        this.options = $.extend({}, {
            size: 'normal',
            verify: {  // 验证规则
                text: '',
                rules: []
            },
            readonly: false, // 是否只读
            placeholder: '', // 提示信息项
            'default': null, // 默认值
            height: 150, //初始高度
            width: '',
            resize: 'none', //是否可拖拽 // vertical 纵向 // horizontal 横向 // both 任意方向 // none 不能
            useTabSpace: true, // 是否使用tab进行缩进
            useTabSpaceWidth: 4, // 缩进的空格数量
            aotoHeight: true, // 自动行高
            onChange: function () { }, // 值改变时的方法
            onError: function () { }, // 错误时的方法
        }, options);
        this.layout = layout;
        // 事件集合
        this.event = {
            change: this.options.onChange,
            error: this.options.onError
        };
        this.html = $('<textarea spellcheck="false" style="height:' + this.options.height + 'px;resize: ' + this.options.resize + ';width:' + this.options.width + 'px" class="form-control ' + this.options.size + '"></textarea>');
        // 默认值
        this.value = null;
        var _this = this;
        // 兼容IE 的 placeHolder
        if (!!(this.options.placeholder) && !('placeholder' in document.createElement('input'))) {
            this.html.val(this.html.attr('placeholder', _this.options.placeholder));
            this.html.val(this.html.attr('placeholder')).addClass('ie-placeholder');
            this.html.bind('focus', function () {
                if (_this.html.val() == _this.html.attr('placeholder')) {
                    _this.html.val("").removeClass('ie-placeholder');
                }
            }).bind('blur', function () {
                if (_this.html.val().length == 0) {
                    _this.html.val(_this.html.attr('placeholder')).addClass('ie-placeholder');
                }
            });
        } else {
            this.html.attr('placeholder', this.options.placeholder);
        };
        // 判断tab按键是切换下一行,还是切换下一个输入框
        if (this.options.useTabSpace) {
            this.html.on('keydown', function (e) {
                if (e.keyCode == 9) {
                    e.preventDefault();
                    var indent = '';
                    for (var i = 0; i < _this.options.useTabSpaceWidth; i++) {
                        indent += ' ';
                    };
                    var start = this.selectionStart;
                    var end = this.selectionEnd;
                    var selected = window.getSelection().toString();
                    selected = indent + selected.replace(/\n/g, '\n' + indent);
                    this.value = this.value.substring(0, start) + selected
                        + this.value.substring(end);
                    this.setSelectionRange(start + indent.length, start
                        + selected.length);
                }
            });
        };
        // 绑定change方法(支持拼音输入法)
        this.html.unbind().bind('input propertychange', function () {
            _this.change();
            // 自动增加高度  ** 首先收缩高度,让滚动条出现,然后让元素高度等于滚动条的总高度实现自动增加高度
            if (_this.options.aotoHeight) {
                $(this).height(_this.options.height).height(_this.html[0].scrollHeight);
            };
        });
        // 初始化中,生成元素是否只读
        this.readonly(this.options.readonly);
        // 添加默认值
        this.set(this.options['default']);
        // 储存错误信息
        this.errorMessage = null;
        // 如果在 Form 对象中,则直接输出,不用Render(); 
        if (this.layout) {
            this.layout.append(this.html);
        };
    };
    textarea.prototype = {
        constructor: this,
        // 绑定事件集合方法
        on: function (str, event) {
            if (this.event.hasOwnProperty(str)) {
                this.event[str] = event;
            };
            return this;
        },
        // 单独绑定 change 方法
        onChange: function (event) {
            this.event.change = event;
            return this;
        },
        // 单独绑定 error 方法
        onError: function (event) {
            this.event.error = event;
            return this;
        },
        // 开关自动高度
        autoHeight: function (bool) {
            this.options.aotoHeight = !!bool;
            if (!this.options.aotoHeight) {
                this.html.height(this.options.height);
            };
        },
        // 当值发生变化时
        change: function () {
            // 改变变量作用域,使调用函数可以使用 this 方法
            this.value = this.html.val();
            this.event.change.apply(this, [this.html.val()]);
            // 执行验证方法
            this.verify();
            return this;
        },
        verify: function () {
            // 执行验证方法
            var text = rules(this.options.verify, this.html.val());
            // 父级模板的显示错误信息及关闭错误信息
            if (this.layout) {
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.layout.showError(text);
                    this.errorMessage = text;
                } else {
                    this.layout.hideError();
                    this.errorMessage = null;
                }
            } else {
                // 如果错误信息不为空,则触发error方法,并保留错误信息
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.errorMessage = text;
                } else {
                    // 如果错误信息为空,侧清空错误信息
                    this.errorMessage = null;
                };
            };
            return this;
        },
        // 操作元素是否只读
        readonly: function (isReadonly) {
            var _isReadonly = null;
            if (verify.is(isReadonly) == 'function') {
                _isReadonly = isReadonly();
            };
            _isReadonly = !!isReadonly;
            if (_isReadonly) {
                this.html.attr('readonly', 'readonly');
                this.html.addClass('readonly');
            } else {
                this.html.attr('readonly', _isReadonly);
                this.html.removeClass('readonly');
            };
            return this;
        },
        // 为输入框赋值
        set: function (data, doChange) {
            if (data === null) {
                return;
            };
            this.value = data;
            this.html.val(data);
            if (doChange) {
                this.change();
            };
            return this;
        },
        // 取值方法
        get: function (callBack, ignore) {
            if (ignore) {
                callBack(this.value);
            } else {
                this.verify();
                if (this.errorMessage) {
                    callBack(this.errorMessage);
                } else {
                    callBack(false, this.value);
                };
            };
            return this;
        },
    };
    var selectOption = function (key, data, parent) {
        this.parent = parent;
        this.data = data;
        this.name = data[key];
        this.value = data[parent.options.setKey];
        // 生成HTML模板
        this.html = $('<div class="form_select_option">' + this.name + '</div>');
        this.selectStutas = false;
        var _this = this;
        this.html.unbind().bind('click', function () {
            // 所有的change操作放到父级中执行
            _this.parent.clear().change(_this);
        });
    };
    selectOption.prototype = {
        constructor: this,
        select: function () {
            // 当元素被选中时
            this.selectStutas = true;
            this.html.addClass('active');
            this.html.unbind();
        },
        unSelect: function () {
            // 取消选中时
            var _this = this;
            this.selectStutas = false;
            this.html.removeClass('active');
            this.html.unbind().bind('click', function () {
                _this.parent.clear().change(_this);
            });
        },
    };
    var select = function (options, layout) {
        if (options === undefined) {
            options = {};
        };
        var _this = this;
        this.layout = layout;
        this.options = $.extend({}, {
            className: '', // 自定义元素样式
            verify: {  // 验证判断组
                text: '',
                rules: []
            },
            showKey: 'label', // 根据子对象的数据Key值进行显示
            showUnSelect: false, // 是否显示置空项
            UnSelectData: {
                showName: ' - 请选择 - ',
                data: null,
            },
            setKey: 'value', // 根据子对象的数据Key值进行赋值
            getKey: 'setKey', // 根据子对象的数据Key值进行取值
            "default": null, // 默认值
            readonly: false, // 是否只读
            size: 'normal', // 默认大小
            data: [], // 数据来源
            placeholder: '- 请选择 -',  // 当未选值时,元素显示内容
            onChange: function () { }, // 当值发生改变时,调用方法
            onError: function () { } // 当值发生错误时(不符合验证时),调用方法
        }, options);
        // 生成模板元素
        var html = '';
        html += '   <div class="form_select ' + (this.options.size ? this.options.size : '') + ' ' + this.options.className + '">';
        html += '       <div class="form_select_nameBox">';
        html += '           <div class="form_select_name">' + this.options.placeholder + '</div>';
        html += '           <span class="fa fa-angle-down"></span>';
        html += '       </div>';
        html += '       <div class="form_select_optionBox"></div>';
        html += '   </div>';
        this.html = $(html);
        // 显示主元素
        this.nameBox = this.html.find('.form_select_nameBox');
        // 文字显示元素
        this.name = this.html.find('.form_select_name');
        // 下拉列表元素
        this.optionBox = this.html.find('.form_select_optionBox');
        // 下拉菜单显示状态
        this.showOptionBox = false;
        // 事件集合
        this.event = {
            change: this.options.onChange,
            error: this.options.onError
        };
        // 子对象储存集合
        this.child = [];
        // 子对象取值数据
        this.valueData = null;
        // 子对象根据getKey 值获取的真实值
        this.value = null;
        // 赋值缓存 
        this.cache = null;
        // 存在Data,直接生成子对象
        if (this.options.data.length != 0) {
            this.setData(this.options.data);
        };
        // 存在模板对象,直接输出元素
        if (this.layout) {
            this.layout.append(this.html);
        };
        this.errorMessage = null;
        // this.readonly(this.options.readonly);
    };
    select.prototype = {
        constructor: this,
        on: function (str, event) {
            if (this.event.hasOwnProperty(str)) {
                this.event[str] = event;
            };
            return this;
        },
        // 单独绑定 change 方法
        onChange: function (event) {
            this.event.change = event;
            return this;
        },
        // 单独绑定 error 方法
        onError: function (event) {
            this.event.error = event;
            return this;
        },
        // 遍历子对象方法
        eachChild: function (event) {
            for (var i = 0; i < this.child.length; i++) {
                var element = this.child[i];
                event(element);
            };
            return this;
        },
        // 取消点击事件
        clearClick: function () {
            // this.name.text('加载中 ... ');
            this.nameBox.unbind('click');
            this.html.removeClass('active');
            this.optionBox.css('display', 'none');
            this.showOptionBox = false;
            $(document).unbind('click', this.documentClick);
            return this;
        },
        // 绑定点击事件
        bindClick: function () {
            var _this = this;
            _this.documentClick = function () {
                _this.html.removeClass('active');
                _this.showOptionBox = false;
                _this.optionBox.css('display', 'none');
                $(document).unbind('click', _this.documentClick);
            };

            this.nameBox.unbind('click').bind('click', function (e) {
                e.stopPropagation();
                if (_this.showOptionBox) {
                    _this.documentClick();
                } else {
                    _this.html.addClass('active');
                    _this.showOptionBox = true;
                    _this.optionBox.css('display', 'block');
                    $(document).click();
                    $(document).unbind('click', _this.documentClick).bind('click', _this.documentClick);
                };
            });
            return this;
        },
        // 只读状态
        readonly: function (isReadonly) {
            var _isReadonly = null;
            if (verify.is(isReadonly) == 'function') {
                _isReadonly = isReadonly();
            };
            _isReadonly = !!isReadonly;
            // this.options.readonly = _isReadonly;
            if (_isReadonly) {
                this.clearClick();
            } else {
                this.bindClick();
            };
        },
        // 选项赋值方法
        setData: function (data) {
            var _this = this;
            var dataType = verify.is(data);
            this.child = [];
            // 让select 支持 'optionSide:sex' 方式进行赋值
            if (dataType == 'string') {
                this.readonly(true);
                this.name.text('加载中 ...');
                var optionsName = data.split(':');
                if (optionsName[1] && optionsName[0] == 'OptionSide') {
                    optionSide.get(optionsName[1], function (result) {
                        _this.setData(result)
                        if (_this.cache || _this.cache == 0) {
                            _this.set(_this.cache);
                            _this.cache = null;
                        } else {
                            _this.defaultValue();
                        };
                    }, 'list');
                };
            } else if (dataType == 'array') {
                var _data = $.extend([], {}, data);
                this.child = [];
                this.optionBox.empty();
                this.valueData = null;
                this.options.data = _data;
                if (this.options.showUnSelect) {
                    var UnSelectData = {};
                    UnSelectData[this.options.showKey] = this.options.UnSelectData.showName;
                    UnSelectData[this.options.setKey] = this.options.UnSelectData.data;
                    UnSelectData[this.options.getKey] = this.options.UnSelectData.data;
                    this.options.data.unshift(UnSelectData);
                };
                for (var i = 0; i < _data.length; i++) {
                    var item = _data[i];
                    var child = new selectOption(this.options.showKey, item, this);
                    this.child.push(child);
                    this.optionBox.append(child.html);
                };
                this.defaultValue().readonly(this.options.readonly);
            };
            return this;
        },
        // 清除选择方法
        clear: function () {
            this.valueData = null;
            this.value = null;
            this.name.text(this.options.placeholder);
            this.eachChild(function (child) {
                child.unSelect();
            });
            return this;
        },
        // 制空方法
        clearData: function () {
            this.clear();
            this.child = [];
            this.optionBox.empty();
        },
        // 赋值方法
        set: function (data) {
            if (data === null) {
                this.clear();
            } else {
                var isComplete = false;
                var dataType = verify.is(data);
                if (dataType == 'array') {
                    this.clear();
                    this.setData(data);
                    isComplete = true;
                } else {
                    if (this.child.length === 0) {
                        this.cache = data;
                        isComplete = true;
                    } else {
                        var _this = this;
                        // this.options.default = data;
                        if (dataType == 'string' || dataType == 'number') {
                            this.clear().eachChild(function (clild) {
                                if (data == clild.data[_this.options.setKey]) {
                                    _this.select(clild);
                                    isComplete = true;
                                };
                            });
                        } else if (dataType == 'object') {
                            this.clear().eachChild(function (clild) {
                                if (verify.isEqual(clild.data, data)) {
                                    _this.select(clild);
                                };
                            });
                            isComplete = true;
                        } else if (dataType == 'number') {
                            if (this.child[data]) {
                                this.clear();
                                _this.select(this.child[data]);
                                isComplete = true;
                            };
                        };
                    };
                };
                if (!isComplete) {
                    console.error('select => set 错误 : 未找到指定的值');
                };
            };
            return this;
        },
        // 赋予默认值方法
        defaultValue: function () {
            if (this.options['default'] === null) {
                this.clear();
            } else {
                this.set(this.options['default']);
            };
            return this;
        },
        // 选中方法
        select: function (childObject) {
            this.valueData = childObject.data;
            if (this.options.getKey == 'object') {
                this.value = this.valueData;
            } else if (this.options.getKey == 'setKey') {
                this.value = this.valueData[this.options.setKey];
            } else if (this.valueData.hasOwnProperty(this.options.getKey)) {
                this.value = this.valueData[this.options.getKey];
            } else {
                console.log('select => select 错误 : 错误的取值类型');
            };
            childObject.select();
            this.name.text(childObject.data[this.options.showKey]);
            return this;
        },
        // 验证方法
        verify: function () {
            // 判断 select 取值类型为对象时如何做非空验证
            if (this.options.getKey == 'object' &&
                ($.inArray("notNull", this.options.verify.rules) != -1) &&
                (this.value !== null) &&
                this.options.showUnSelect &&
                this.value.hasOwnProperty(this.options.getKey) &&
                (this.value[this.options.getKey] == this.options.UnSelectData.data)) {
                var text = this.options.verify.text + '不能为空';
            } else {
                var text = rules(this.options.verify, this.value);
            };
            if (this.layout) {
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.layout.showError(text);
                    this.errorMessage = text;
                } else {
                    this.layout.hideError();
                    this.errorMessage = null;
                }
            } else {
                // 如果错误信息不为空,则触发error方法,并保留错误信息
                if (text) {
                    this.event.error.apply(this, [text, this.value]);
                    this.errorMessage = text;
                } else {
                    // 如果错误信息为空,侧清空错误信息
                    this.errorMessage = null;
                };
            };

            return this;
        },
        // 当元素改变时触发事件
        change: function (childObject) {
            this.clear().select(childObject);
            this.event.change.apply(this, [this.value]);
            this.verify();
            return this;
        },
        // 取值方法
        get: function (callBack, ignore) {
            if (ignore) {
                return this.value;
                // callBack(this.value);
            } else {
                this.verify();
                if (this.errorMessage) {
                    callBack(this.errorMessage);
                } else {
                    callBack(false, this.value);
                };
            };
            return this;
        },

    };
    // 日历控件
    var calendar = function (parent) {
        var _this = this;
        var html = '';
        html += '<div class="form_calendar">';
        html += '    <div class="form_calendar_conteoller">';
        html += '        <div class="form_calendar_select" title="选择年月">';
        html += '           <div class="form_calendar_selectName"></div>';
        html += '           <div class="form_calendar_selectIcon"></div>';
        html += '        </div>';
        html += '        <div class="form_calendar_buttons">';
        html += '           <div class="form_calendar_pre form_calendar_button fa fa-caret-left" title="上个月"></div>';
        html += '           <div class="form_calendar_today form_calendar_button fa fa-circle" title="今天"></div>';
        html += '           <div class="form_calendar_next form_calendar_button fa fa-caret-right" title="下个月"></div>';
        html += '        </div>';
        html += '    </div>';
        html += '    <div class="form_calendar_yearlist"></div>';
        html += '    <div class="form_calendar_dayslist">';
        html += '       <div class="form_calendar_daysTitle">';
        html += '           <div class="form_calendar_weeks">日</div>';
        html += '           <div class="form_calendar_weeks">一</div>';
        html += '           <div class="form_calendar_weeks">二</div>';
        html += '           <div class="form_calendar_weeks">三</div>';
        html += '           <div class="form_calendar_weeks">四</div>';
        html += '           <div class="form_calendar_weeks">五</div>';
        html += '           <div class="form_calendar_weeks">六</div>';
        html += '       </div>';
        html += '       <div class="form_calendar_daysBody">';
        html += '       </div>';
        html += '    </div>';
        html += '</div>';
        this.html = $(html);
        this.year_month = this.html.find('.form_calendar_selectName');
        this.nameBox = this.html.find('.form_calendar_select');
        this.html.click(function (e) {
            e.stopPropagation();
        });
        this.days = this.html.find('.form_calendar_daysBody');
        this.yearList = this.html.find('.form_calendar_yearlist');
        this.daysList = this.html.find('.form_calendar_dayslist');
        var today = new Date();
        this.today = {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate(),
        };
        this.active = {
            year: null,
            month: null,
            day: null,
        };
        this.showDate = {
            year: null,
            month: null
        };
        this.parent = parent;
        this.pre = this.html.find('.form_calendar_pre');
        this.gotoToday = this.html.find('.form_calendar_today');
        this.next = this.html.find('.form_calendar_next');
        for (var i = this.today.year - 70; i < this.today.year; i++) {
            var yearItem = $('<div class="form_calendar_yearItem">' + i + '年</div>');
            (function (i, yearItem) {
                yearItem.click(function () {
                    _this.yearList.find('.form_calendar_monthList').remove();
                    $(this).after(_this.monthTemplate(i));
                });
            })(i, yearItem);
            _this.yearList.append(yearItem);
        };
        this.nameBox.click(function () {
            if (_this.yearList.css('display') == 'block') {
                _this.yearList.css('display', 'none');
                _this.daysList.css('display', 'block');
            } else {
                _this.yearList.css('display', 'block');
                _this.daysList.css('display', 'none');
            };
        });
        this.pre.click(function () {
            _this.yearList.css('display', 'none');
            _this.daysList.css('display', 'block');
            var year = _this.showDate.year,
                month = _this.showDate.month;
            month -= 1;
            if (month == 0) {
                month = 12;
                year -= 1;
                if (year <= 2016) {
                    return;
                }
            };
            _this.renderDayslist(year, month);
        });
        this.gotoToday.click(function () {
            _this.yearList.css('display', 'none');
            _this.daysList.css('display', 'block');
            _this.renderDayslist(_this.today.year, _this.today.month);
        });
        this.next.click(function () {
            _this.yearList.css('display', 'none');
            _this.daysList.css('display', 'block');
            var year = _this.showDate.year,
                month = _this.showDate.month;
            month += 1;
            if (month == 13) {
                month = 1;
                year += 1;
                if (year >= 2056) {
                    return;
                }
            };
            _this.renderDayslist(year, month);
        });
    };
    calendar.prototype = {
        constructor: this,
        render: function () {
            return this.html;
        },
        // 根据年月渲染当月日历
        renderDayslist: function (year, month) {
            if (year == 'error' || month == 'error') {
                year = this.today.year;
                month = this.today.month;
            } else {
                year = parseInt(year);
                month = parseInt(month);
            };
            this.showDate.year = year;
            this.showDate.month = month;
            this.year_month.text(year + '年' + month + '月');
            var _this = this;
            this.days.empty();
            var isLeap = function (year) {
                return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
            };
            month = month - 1;
            var firstday = new Date(year, month, 1),
                dayOfWeek = firstday.getDay(),
                days_per_month = new Array(31, 28 + isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),
                str_nums = Math.ceil((dayOfWeek + days_per_month[month]) / 7);
            for (var i = 0; i < str_nums; i += 1) {
                for (var k = 0; k < 7; k++) {
                    var idx = 7 * i + k;
                    var date = idx - dayOfWeek + 1;
                    (date <= 0 || date > days_per_month[month]) ? date = '' : date = idx - dayOfWeek + 1;
                    // var day = $('<div class="form_calendar_day">' + date + '</div>');
                    var day = $('<div class="form_calendar_day"></div>');
                    var dayContent = $('<div class="form_calender_day_content">' + date + '</div>')

                    dayContent.click(function () {
                        _this.activeEvent(year, month + 1, parseInt($(this).text()));
                    });
                    if (date == '') {
                        dayContent.addClass('empty');
                    };
                    if (year == this.today.year && (month + 1) == this.today.month && date == this.today.day) {
                        dayContent.addClass('today');
                    };
                    if (year == this.active.year && (month + 1) == this.active.month && date == this.active.day) {
                        dayContent.addClass('active');
                    };
                    this.days.append(day);
                    day.append(dayContent);
                }
            };
        },
        // 选中当天
        activeEvent: function (year, month, day) {
            var value = year + '/' + month + '/' + day;
            this.active = {
                year: year,
                month: month,
                day: day,
            };
            if (this.parent.layout) {
                this.parent.layout.hideError();
            };
            $(document).click();
            this.parent.set(value, true);
            // this.renderDayslist(year, month);
        },
        // 直接选中月份
        monthTemplate: function (year) {
            var _this = this;
            var html = '';
            html += '<div class="form_calendar_monthList"></div>';
            html = $(html);
            var bindClick = function (i, event) {
                event.click(function () {
                    _this.yearList.css('display', 'none');
                    _this.daysList.css('display', 'block');
                    _this.renderDayslist(year, i);
                });
            };
            for (var i = 1; i <= 12; i++) {
                var month = $('<div class="form_calendar_monthItem"></div>');
                bindClick(i, month);
                html.append(month.text(i + '月'));
            };
            html.append('<div style="clear:both"></div>');
            return html;
        }
    };
    var inputDate = function (options, layout) {
        if (options === undefined) {
            options = {};
        };
        this.options = $.extend({}, {
            'default': null,
            'size': 'normal',
            'readonly': false,
            'showType': 'YYYY年MM月DD日',
            'valueType': '/',
            'verify': {
                'text': '时间',
                'rules': []
            },
            'placeholder': '- 请选择 -',
            'onChange': function (e) { },
            'onError': function (e) { },
        }, options);

        // 事件集合
        this.event = {
            change: this.options.onChange,
            error: this.options.onError
        };
        var _this = this;
        var html = '';
        html += '   <div class="form_inputDate ' + (this.options.size ? this.options.size : '') + '">';
        html += '       <div class="form_inputDate_nameBox">';
        html += '           <input type="text" class="form-control" placeholder="' + (this.options.placeholder) + '"/>'; //选中项
        html += '           <span class="mdi mdi-calendar-range"></span>';
        html += '       </div>';
        html += '       <div class="form_inputDate_dateBox"></div>';
        html += '   </div>';
        this.html = $(html);
        this.nameBox = this.html.find('.form_inputDate_nameBox');
        this.dateBox = this.html.find('.form_inputDate_dateBox');
        this.valueEle = this.html.find('.form-control');
        // 绑定change方法(支持拼音输入法)
        this.html.unbind().bind('change', function () {
            _this.change();
        });
        // 默认值
        this.value = null;
        // 兼容IE 的 placeHolder
        if (!!(this.options.placeholder) && !('placeholder' in document.createElement('input'))) {
            this.html.val(this.html.attr('placeholder', _this.options.placeholder));
            this.html.val(this.html.attr('placeholder')).addClass('ie-placeholder');
            this.html.bind('focus', function () {
                if (_this.html.val() == _this.html.attr('placeholder')) {
                    _this.html.val("").removeClass('ie-placeholder');
                }
            }).bind('blur', function () {
                if (_this.html.val().length == 0) {
                    _this.html.val(_this.html.attr('placeholder')).addClass('ie-placeholder');
                }
            });
        } else {
            this.html.attr('placeholder', this.options.placeholder);
        };
        // 初始化中,生成元素是否只读
        // this.readonly(this.options.readonly);
        // 添加默认值
        this.set(this.options['default']);
        // 储存错误信息
        this.errorMessage = null;
        // 如果在 Form 对象中,则直接输出,不用Render(); 
        if (this.layout) {
            this.layout.append(this.html);
        };
        this.calendar = new calendar(this);
        this.dateBox.append(this.calendar.render());

        this.showOptionBox = false;
        this.layout = layout;
        // this.defaultValue();
        if (this.layout) {
            this.layout.append(this.html);
        };
        this.readonly(this.options.readonly);
    };
    inputDate.prototype = {
        constructor: this,
        // 绑定事件集合方法
        on: function (str, event) {
            if (this.event.hasOwnProperty(str)) {
                this.event[str] = event;
            };
            return this;
        },
        // 单独绑定 change 方法
        onChange: function (event) {
            this.event.change = event;
            return this;
        },
        // 单独绑定 error 方法
        onError: function (event) {
            this.event.error = event;
            return this;
        },
        // 当值发生变化时
        change: function () {
            // 改变变量作用域,使调用函数可以使用 this 方法
            // this.value = this.valueEle.val();
            var data = formatDate(this.options.valueType, this.valueEle.val())
            if (data != this.value && data != 'error') {
                this.set(this.valueEle.val());
                this.event.change.apply(this, [this.value]);
            } else {
                this.event.change.apply(this, [this.valueEle.val()]);
            };
            // 执行验证方法
            this.verify();
            return this;
        },
        verify: function () {
            var value = formatDate(this.options.valueType, this.value);
            if (value == 'error') {
                var text = '非法的日期格式';
            } else {
                var text = rules(this.options.verify, this.value);
            };
            // 父级模板的显示错误信息及关闭错误信息
            if (this.layout) {
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.layout.showError(text);
                    this.errorMessage = text;
                } else {
                    this.layout.hideError();
                    this.errorMessage = null;
                }
            } else {
                // 如果错误信息不为空,则触发error方法,并保留错误信息
                if (text) {
                    this.event.error.apply(this, [text, this.valueEle.val()]);
                    this.errorMessage = text;
                } else {
                    // 如果错误信息为空,侧清空错误信息
                    this.errorMessage = null;
                };
            };
            return this;
        },
        // 取消点击事件
        clearClick: function () {
            this.html.removeClass('active');
            this.showOptionBox = false;
            this.dateBox.css('display', 'none');
            $(document).unbind('click', documentClick);
            return this;
        },
        // 绑定点击事件
        bindClick: function () {
            var _this = this;
            _this.documentClick = function () {
                _this.html.removeClass('active');
                _this.showOptionBox = false;
                _this.dateBox.css('display', 'none');
                // _this.change();
                $(document).unbind('click', _this.documentClick);
            };

            this.nameBox.click(function (e) {
                e.stopPropagation();
                if (_this.showOptionBox) {
                    _this.documentClick();
                } else {
                    _this.html.addClass('active');
                    _this.showOptionBox = true;
                    _this.dateBox.css('display', 'block');
                    if (_this.value) {
                        _this.calendar.activeEvent(formatDate('YYYY', _this.value), formatDate('MM', _this.value), formatDate('DD', _this.value));
                    };
                    _this.calendar.renderDayslist(formatDate('YYYY', _this.value), formatDate('MM', _this.value));
                    // _this.valueEle.focus();
                    // $(document).click();
                    $(document).bind('click', _this.documentClick);
                };
            });
            return this;
        },
        // 只读状态
        readonly: function (isReadonly) {
            var _isReadonly = null;
            if (verify.is(isReadonly) == 'function') {
                _isReadonly = isReadonly();
            };
            _isReadonly = !!isReadonly;
            // this.options.readonly = _isReadonly;
            if (_isReadonly) {
                this.clearClick();
            } else {
                this.bindClick();
            };
            return this;
        },
        // 为输入框赋值
        set: function (data, doChange) {
            if (data === null) {
                return;
            };
            this.value = data;
            if (this.value == '') {
                this.valueEle.val('');
            }
            // 格式化取值赋值对象
            if (this.value) {
                this.value = formatDate(this.options.valueType, data);
                if (this.value != 'error') {
                    this.valueEle.val(formatDate(this.options.showType, data));
                };
            };
            if (doChange) {
                this.change();
            };
            return this;
        },
        // 取值方法
        get: function (callBack, ignore) {
            if (ignore) {
                callBack(this.value);
            } else {
                this.verify();
                if (this.errorMessage) {
                    callBack(this.errorMessage);
                } else {
                    callBack(false, this.value);
                };
            };
            return this;
        },
    };
    var checkBoxItem = function (options, parent) {
        if (options === undefined) {
            options = {};
        };
        this.options = $.extend({}, {
            key: null,
            className: '',
            name: '',
            data: options.data,
            'default': false,
            readonly: false,
            description: null,
            onChange: function () { },
        }, options);

        if (!this.options.key) {
            console.error('checkBoxItem => create : 不存在的key值');
            return false;
        };
        var html = '';
        html += '<div class="form_checkBox_Item" ' + (options.description ? ('title="' + options.description + '"') : '') + '>';
        html += '   <label class="table-select"></label>';
        html += '   <div class="form_checkBox_name">' + options.name + '</div>';
        html += '</div>';
        this.parent = parent;
        this.html = $(html);
        this._element = this.html.find('.table-select');
        this.objectName = this.options.key;
        this.valueData = false;
        this.event = {
            change: this.options.onChange
        };
        this.isReadonly = null;
        this.readonly(this.options.readonly);
        this.setDefaultValue();
    };
    checkBoxItem.prototype = {
        constructor: this,
        render: function () {
            return this.html;
        },
        // 绑定事件集合方法
        on: function (str, event) {
            if (this.event.hasOwnProperty(str)) {
                this.event[str] = event;
            };
            return this;
        },
        // 单独绑定 change 方法
        onChange: function (event) {
            this.event.change = event;
            return this;
        },
        change: function (pass) {
            var _this = this;
            if (this.valueData) {
                this._element.addClass('active');
            } else {
                this._element.removeClass('active');
            };
            if (!pass) {
                this.event.change.apply(this, [this.valueData, this.objectName]);
            }
        },
        set: function (data, pass) {
            if (data.toString().toLowerCase() == 'true') {
                this.valueData = true;
            } else if (data.toString().toLowerCase() == 'false') {
                this.valueData = false;
            };
            this.change(pass);
            return this;
        },
        get: function (callBack) {
            if (this.parent.verify()) {
                callBack(false, this.valueData);
            } else {
                var errorText = '至少选择' + this.parent.options.checkLength.toString() + '项';
                callBack(errorText, this.valueData);
                if (this.parent.layout) {
                    this.parent.layout.showError(errorText);
                };
            }
            return this;
        },
        getValue: function () {
            return this.valueData;
        },
        readonly: function (isReadonly) {
            var _this = this;
            var _isReadonly = null;
            var funType = verify.is(isReadonly);
            if (funType == 'function') {
                _isReadonly = isReadonly();
            } else {
                _isReadonly = !!isReadonly;
            };
            this.html.attr('readonly', _isReadonly);
            if (_isReadonly) {
                this.isReadonly = true;
                this.html.addClass('readonly');
                this.html.unbind('click');
            } else {
                this.isReadonly = false;
                this.html.removeClass('readonly');
                this.html.unbind().bind('click', function () {
                    _this.valueData = !_this.valueData;
                    _this.change();
                    if (_this.parent.layout) {
                        _this.parent.layout.hideError();
                    }
                });
            };
            return this;
        },
        setDefaultValue: function () {
            this.set(this.options['default']);
            return this;
        }
    };
    var checkBox = function (options, layout, parentItems) {
        if (options === undefined) {
            options = {};
        };
        this.options = $.extend({}, {
            className: '',
            size: '',
            checkLength: 0, // 必须选择的个数
            element: [],
        }, options);
        this.parent = parentItems;
        this.html = $('<div class="form_checkBox ' + this.options.className + '"></div>');
        this.layout = layout;
        this.errorText = null;
        this.options = $.extend({}, this.options, options);
        this.items = [];
        this.setData(this.options.element);
    };
    checkBox.prototype = {
        constructor: this,
        verify: function () {
            var _length = 0;
            if (_length == this.options.checkLength) {
                // 默认为0,不进行检查
                return true;
            } else {
                for (var key in this.items) {
                    if (this.items.hasOwnProperty(key)) {
                        var element = this.items[key];
                        if (element.valueData) {
                            _length++;
                        }
                    }
                };
                if (_length >= this.options.checkLength) {
                    return true;
                } else {
                    return false;
                };
            };
            return this;
        },
        get: function (callBack) {
            var data = {};
            var errorText = null;
            for (var key in this.items) {
                if (this.items.hasOwnProperty(key)) {
                    var element = this.items[key];
                    element.get(function (error, value) {
                        if (error) {
                            errorText = error;
                        } else {
                            data[element.options.key] = value;
                        }
                    });
                }
            };
            if (errorText) {
                callBack(errorText);
            } else {
                callBack(false, data);
            };
            return this;
        },
        getValue: function () {
            var data = {};
            for (var key in this.items) {
                if (this.items.hasOwnProperty(key)) {
                    var element = this.items[key];
                    data[element.options.key] = element.getValue();
                }
            };
            return data;
        },
        set: function (data, pass) {
            for (var key in this.items) {
                if (data.hasOwnProperty(key)) {
                    var element = this.items[key];
                    element.set(data[key], pass);
                } else {
                    data[key] = this.items[key].valueData;
                };
            };
            return this;
        },
        setData: function (data) {
            for (var i = 0; i < data.length; i++) {
                var checkBoxItemOptions = data[i];
                var checkBoxObject = new checkBoxItem(checkBoxItemOptions, this);
                if (this.parent && this.parent.hasOwnProperty(checkBoxItemOptions.key)) {
                    console.warn('父级已经存在对象' + checkBoxItemOptions.key + ', 已经替换');
                };
                if (this.parent) {
                    this.parent.item[checkBoxItemOptions.key] = checkBoxObject;
                    this.parent.order.push(checkBoxItemOptions.key);
                };
                this.items[checkBoxItemOptions.key] = checkBoxObject;
                if (this.layout) {
                    this.layout.append(checkBoxObject.render());
                } else {
                    this.html.addClass(this.options.className);
                    this.html.addClass(this.options.size);
                    this.html.append(checkBoxObject.render());
                };
            };
            return this;
        },
    };
    // 单行文本输入框组件
    var password = function (options, layout) {
        if (options === undefined) {
            options = {};
        };
        // 合并参数
        this.options = $.extend({}, {
            size: 'normal',
            verify: {
                text: '',
                rules: []
            },
            readonly: false,
            placeholder: '',
            'default': null,
            onChange: function () { },
            onError: function () { },
        }, options);
        var _this = this;
        this.layout = layout;
        // 主要元素
        this.html = $('<input type="password" spellcheck="false" class="form-control ' + this.options.size + '" />');
        // 事件集合
        this.event = {
            change: this.options.onChange,
            error: this.options.onError
        };
        // 绑定change方法(支持拼音输入法)
        this.html.unbind().bind('input propertychange', function () {
            _this.change();
            // _this.changeEvent(_this);
        });
        // 默认值
        this.value = null;
        // 兼容IE 的 placeHolder
        if (!!(this.options.placeholder) && !('placeholder' in document.createElement('input'))) {
            this.html.val(this.html.attr('placeholder', _this.options.placeholder));
            this.html.val(this.html.attr('placeholder')).addClass('ie-placeholder');
            this.html.bind('focus', function () {
                if (_this.html.val() == _this.html.attr('placeholder')) {
                    _this.html.val("").removeClass('ie-placeholder');
                }
            }).bind('blur', function () {
                if (_this.html.val().length == 0) {
                    _this.html.val(_this.html.attr('placeholder')).addClass('ie-placeholder');
                }
            });
        } else {
            this.html.attr('placeholder', this.options.placeholder);
        };
        // 初始化中,生成元素是否只读
        this.readonly(this.options.readonly);
        // 添加默认值
        this.set(this.options['default']);
        // 储存错误信息
        this.errorMessage = null;
        // 如果在 Form 对象中,则直接输出,不用Render(); 
        if (this.layout) {
            this.layout.append(this.html);
        };
    };
    password.prototype = {
        constructor: this,
        // 绑定事件集合方法
        on: function (str, event) {
            if (this.event.hasOwnProperty(str)) {
                this.event[str] = event;
            };
            return this;
        },
        // 单独绑定 change 方法
        onChange: function (event) {
            this.event.change = event;
            return this;
        },
        // 单独绑定 error 方法
        onError: function (event) {
            this.event.error = event;
            return this;
        },
        // 当值发生变化时
        change: function () {
            // 改变变量作用域,使调用函数可以使用 this 方法
            this.value = this.html.val();
            this.event.change.apply(this, [this.html.val()]);
            // 执行验证方法
            this.verify();
            return this;
        },
        verify: function () {
            var text = rules(this.options.verify, this.html.val());
            // 父级模板的显示错误信息及关闭错误信息
            if (this.layout) {
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.layout.showError(text);
                    this.errorMessage = text;
                } else {
                    this.layout.hideError();
                    this.errorMessage = null;
                }
            } else {
                // 如果错误信息不为空,则触发error方法,并保留错误信息
                if (text) {
                    this.event.error.apply(this, [text, this.html.val()]);
                    this.errorMessage = text;
                } else {
                    // 如果错误信息为空,侧清空错误信息
                    this.errorMessage = null;
                };
            };
            return this;
        },
        // 操作元素是否只读
        readonly: function (isReadonly) {
            var _isReadonly = null;
            if (verify.is(isReadonly) == 'function') {
                _isReadonly = isReadonly();
            };
            _isReadonly = !!isReadonly;
            if (_isReadonly) {
                this.html.attr('readonly', 'readonly');
                this.html.addClass('readonly');
            } else {
                this.html.attr('readonly', _isReadonly);
                this.html.removeClass('readonly');
            };
            return this;
        },
        // 为输入框赋值
        set: function (data, doChange) {
            if (data === null) {
                return;
            };
            this.value = data;
            this.html.val(data);
            if (doChange) {
                this.change();
            };
            return this;
        },
        // 取值方法
        get: function (callBack, ignore) {
            if (ignore) {
                callBack(this.value);
            } else {
                this.verify();
                if (this.errorMessage) {
                    callBack(this.errorMessage);
                } else {
                    callBack(false, this.value);
                };
            };
            return this;
        },
    };
    var radioItem = function (key, data, parent) {
        this.parent = parent;
        this.data = data;
        this.name = data[key];
        var html = '';
        html += '<div class="form_radio_Item">';
        html += '   <label class="form_radio_choose"><i class="fa fa-circle-o"></i></label>';
        html += '   <div class="form_radio_name">' + this.name + '</div>';
        html += '</div>';
        // fa-dot-circle-o
        this.html = $(html);
        this._element = this.html.find('.form_radio_choose');
        this.selectStutas = false;
        var _this = this;
        this.html.unbind().bind('click', function () {
            _this.parent.change(_this);
        });
    };
    radioItem.prototype = {
        constructor: this,
        select: function () {
            this.valueData = true;
            this._element.addClass('active');
            this._element.find('i').removeClass('fa-circle-o').addClass('fa-dot-circle-o');

            this.html.unbind();
        },
        unSelect: function () {
            var _this = this;
            this._element.removeClass('active');
            this._element.find('i').removeClass('fa-dot-circle-o').addClass('fa-circle-o');
            this.html.unbind().bind('click', function () {
                _this.parent.change(_this);
            });
        },
    };
    var radio = function (options, layout) {
        if (options === undefined) {
            options = {};
        };
        var _this = this;
        this.layout = layout;
        this.options = $.extend({}, {
            className: '', // 自定义元素样式
            verify: {  // 验证判断组
                text: '',
                rules: []
            },
            showKey: 'label', // 根据子对象的数据Key值进行显示
            setKey: 'value', // 根据子对象的数据Key值进行赋值
            getKey: 'setKey', // 根据子对象的数据Key值进行取值
            "default": null, // 默认值
            readonly: false, // 是否只读
            size: 'normal', // 默认大小
            data: [], // 数据来源
            onChange: function () { }, // 当值发生改变时,调用方法
            onError: function () { } // 当值发生错误时(不符合验证时),调用方法
        }, options);
        this.child = [];
        this.valueData = null;
        this.value = null;
        this.cache = null;
        this.errorMessage = null;
        this.html = $('<div class="form_radio"></div>');
        if (this.options.data.length != 0) {
            this.setData(this.options.data);
        };
        // 事件集合
        this.event = {
            change: this.options.onChange,
            error: this.options.onError
        };
        // 存在模板对象,直接输出元素
        if (this.layout) {
            this.layout.append(this.html);
        };
        this.readonly(this.options.readonly);
    };
    radio.prototype = {
        constructor: this,
        on: function (str, event) {
            if (this.event.hasOwnProperty(str)) {
                this.event[str] = event;
            };
            return this;
        },
        // 单独绑定 change 方法
        onChange: function (event) {
            this.event.change = event;
            return this;
        },
        // 单独绑定 error 方法
        onError: function (event) {
            this.event.error = event;
            return this;
        },
        // 遍历子对象方法
        eachChild: function (event) {
            for (var i = 0; i < this.child.length; i++) {
                var element = this.child[i];
                event(element);
            };
            return this;
        },
        readonly: function (isReadonly) {
            var _isReadonly = null;
            if (verify.is(isReadonly) == 'function') {
                _isReadonly = isReadonly();
            };
            _isReadonly = !!isReadonly;
            var _this = this;
            if (isReadonly) {
                this.eachChild(function (child) {
                    child.html.unbind('click');
                });
            } else {
                this.eachChild(function (child) {
                    child.html.unbind().bind('click', function () {
                        _this.change(child);
                    });
                });
            };
        },
        setData: function (data) {
            var _this = this;
            var dataType = verify.is(data);
            this.child = [];
            // 让select 支持 'optionSide:sex' 方式进行赋值
            if (dataType == 'string') {
                this.readonly(true);
                var optionsName = data.split(':');
                if (optionsName[1] && optionsName[0] == 'OptionSide') {
                    this.html.text('加载中...');
                    optionSide.get(optionsName[1], function (result) {
                        _this.html.empty();
                        _this.setData(result)
                        if (_this.cache || _this.cache == 0) {
                            _this.set(_this.cache);
                            _this.cache = null;
                        } else {
                            _this.defaultValue();
                        };
                        _this.readonly(_this.options.readonly);
                    }, 'list');
                };
            } else if (dataType == 'array') {
                this.child = [];
                this.valueData = null;
                this.html.empty();
                this.options.data = data;
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    var child = new radioItem(this.options.showKey, item, this);
                    this.child.push(child);
                    this.html.append(child.html);
                };
                this.defaultValue().readonly(this.options.readonly);
            };
            return this;
        },
        // 清除选择方法
        clear: function () {
            this.valueData = null;
            this.value = null;
            this.eachChild(function (child) {
                child.unSelect();
            });
            return this;
        },
        // 赋值方法
        set: function (data) {
            if (data === null) {
                this.clear();
            } else {
                var isComplete = false;
                var dataType = verify.is(data);
                if (dataType == 'array') {
                    this.clear();
                    this.setData(data);
                    isComplete = true;
                } else {
                    if (this.child.length === 0) {
                        this.cache = data;
                        isComplete = true;
                    } else {
                        var _this = this;
                        if (dataType == 'string' || dataType == 'number') {
                            this.clear().eachChild(function (clild) {
                                if (data == clild.data[_this.options.setKey]) {
                                    _this.select(clild);
                                    isComplete = true;
                                };
                            });
                        } else if (dataType == 'object') {
                            this.clear().eachChild(function (clild) {
                                if (verify.isEqual(clild.data, data)) {
                                    _this.select(clild);
                                };
                            });
                            isComplete = true;
                        } else if (dataType == 'number') {
                            if (this.child[data]) {
                                this.clear();
                                _this.select(this.child[data]);
                                isComplete = true;
                            };
                        };
                    };
                };
                if (!isComplete) {
                    console.error('select => set 错误 : 未找到指定的值');
                };
            };
            return this;
        },
        // 赋予默认值方法
        defaultValue: function () {
            if (this.options['default'] === null) {
                this.clear();
            } else {
                this.set(this.options['default']);
            };
            return this;
        },
        // 验证方法
        verify: function () {
            if (this.options.getKey != 'object') {
                var text = rules(this.options.verify, this.value);
                if (this.layout) {
                    if (text) {
                        this.event.error.apply(this, [text, this.html.val()]);
                        this.layout.showError(text);
                        this.errorMessage = text;
                    } else {
                        this.layout.hideError();
                        this.errorMessage = null;
                    }
                } else {
                    // 如果错误信息不为空,则触发error方法,并保留错误信息
                    if (text) {
                        this.event.error.apply(this, [text, this.value]);
                        this.errorMessage = text;
                    } else {
                        // 如果错误信息为空,侧清空错误信息
                        this.errorMessage = null;
                    };
                };
            };
            return this;
        },
        // 选中方法
        select: function (childObject) {
            this.valueData = childObject.data;
            if (this.options.getKey == 'object') {
                this.value = this.valueData;
            } else if (this.options.getKey == 'setKey') {
                this.value = this.valueData[this.options.setKey];
            } else if (this.valueData.hasOwnProperty(this.options.getKey)) {
                this.value = this.valueData[this.options.getKey];
            } else {
                console.log('select => select 错误 : 错误的取值类型');
            };
            childObject.select();
            return this;
        },
        // 当元素改变时触发事件
        change: function (childObject) {
            this.clear().select(childObject);
            this.event.change.apply(this, [this.value]);
            this.verify();
            return this;
        },
        get: function (callBack, ignore) {
            if (ignore) {
                callBack(this.value);
            } else {
                this.verify();
                if (this.errorMessage) {
                    callBack(this.errorMessage);
                } else {
                    callBack(false, this.value);
                };
            };
            return this;
        },
    };
    var FormElement = {
        input: input,
        textarea: textarea,
        select: select,
        radio: radio,
        checkBox: checkBox,
        inputDate: inputDate,
        password: password
    };
    var formBox = function (options, parent) {
        this.options = {
            lable: '',
            annotate: '',
            stutas: 'show',
            size: '3/9',
            layoutName: 'name',
            className: '',
        };
        this.options = $.extend({}, this.options, options);
        this.parent = parent;
        var _lable = $('<div class="lable_box col-md-' + this.options.size.split('/')[0] + '" style="line-height: 35px; text-align: right;">' + this.options.lable + '</div>');
        this._Box = $('<div class="col-md-' + this.options.size.split('/')[1] + '"></div>');
        this._error = $('<div class="form_error_item col-md-' + this.options.size.split('/')[1] + '"><div class="bg-pale-pink border-danger border-pink text-danger form_error_text"></div></div>');
        this._annotate = $('<div class="text-fade form_annotate_text col-md-' + this.options.size.split('/')[1] + '">' + this.options.annotate + '</div>')
        this.html = $('<div class="' + this.options.className + ' row"></div>');

        var _row1 = $('<div class="col-md-12"><div class="row"></div></div>');
        _row1.find('.row').append(_lable).append(this._Box);
        this.html.append(_row1);

        var _row2 = $('<div class="col-md-12"><div class="row"></div></div>');
        _row2.find('.row').append('<div class="col-md-' + this.options.size.split('/')[0] + '"></div>').append(this._error);
        this.html.append(_row2);
        // this.html.append(_lable);
        // this.html.append(this._Box);
        // this.html.append('<div class="col-md-' + this.options.size.split('/')[0] + '"></div>');
        // this.html.append(this._error);
        // this.html.append('<div style="clear:both"></div>');


        if (this.options.annotate) {
            var _row3 = $('<div class="col-md-12"><div class="row"></div></div>');
            _row3.find('.row').append('<div class="col-md-' + this.options.size.split('/')[0] + '"></div>').append(this._annotate);
            this.html.append(_row3);
        };


        // this.html.append('<div class="col-md-' + this.options.size.split('/')[0] + '"></div>');
        // this.html.append(this._annotate);

        if (this.options.stutas != 'show') {
            this.hide();
        };
    };
    formBox.prototype = {
        constructor: this,
        render: function () {
            return this.html;
        },
        append: function (data) {
            this._Box.append(data);
        },
        showError: function (data) {
            this._error.find('.form_error_text').text(data);
            // this._error.css('display', 'block');
            this.html.addClass('form_error_type');
        },
        hideError: function () {
            this._error.find('.form_error_text').text('');
            this.html.removeClass('form_error_type');
        },
        show: function () {
            this.options.stutas = 'show';
            this.html.css('display', 'block');
        },
        hide: function () {
            this.options.stutas = 'hide';
            this.html.css('display', 'none');
        }
    };
    var form = function (options) {
        if (options === undefined) {
            options = {};
        };
        this.options = $.extend({}, {
            type: 'all', // onlyChange / all / mergeByChange / mergeByOldData
            beforSet: function (data) {
                return data;
            },
            beforGet: function (data) {
                return data;
            },
            class: '',
        }, options);
        if (this.options.type != 'all' && this.options.type != 'onlyChange' && this.options.type != 'mergeByOldData' && this.options.type != 'mergeByChange') {
            console.error('表单赋值取值类型错误');
        };
        this.html = $('<div class="form_box ' + this.options.class + '"></div>');
        this.items = {};
        this.order = [];
        this.oldData = {};
        this.errorMessage = null;
        this.event = {
            beforGet: this.options.beforGet,
            beforSet: this.options.beforSet
        };
    };
    form.prototype = {
        constructor: this,
        setData: function (data) {
            this.event.beforSet.call(this, data);
            if (this.options.type == 'onlyChange') {
                this.oldData = {};
                for (var key in data) {
                    if (this.items.hasOwnProperty(key) && data.hasOwnProperty(key)) {
                        this.items[key].set(data[key], true);
                        this.oldData[key] = data[key];
                    }
                };
            } else if (this.options.type == 'mergeByChange') {
                this.oldData = data;
                for (var key in data) {
                    if (this.items.hasOwnProperty(key) && data.hasOwnProperty(key)) {
                        this.items[key].set(data[key], true);
                    }
                };
            } else {
                this.oldData = data;
                for (var key in data) {
                    if (this.items.hasOwnProperty(key) && data.hasOwnProperty(key)) {
                        this.items[key].set(data[key], true);
                    }
                };
            };
        },
        setOptions: function (options) {
            this.html.empty();
            this.items = {};
            this.order = [];
            for (var i = 0; i < options.length; i++) {
                var itemOption = options[i];
                this.pushItem(itemOption);
            };
        },
        get: function () {
            var data = {};
            var isComplete = true;
            var stutas = false;
            for (var key in this.items) {
                if (this.items.hasOwnProperty(key)) {
                    var element = this.items[key];
                    element.get(function (error, result) {
                        if (!error) {
                            data[key] = result;
                        } else {
                            if (!stutas) {
                                stutas = error;
                            };
                            isComplete = false;
                        };
                    });
                };
                // if (!isComplete) {
                //     break;
                // };
            };
            var _isCompleteData = null;

            if (isComplete) {
                this.errorMessage = null;
                if (this.options.type == 'all') {
                    _isCompleteData = data;
                } else if (this.options.type == 'mergeByOldData') {
                    _isCompleteData = $.extend({}, this.oldData, data);
                } else if (this.options.type == 'onlyChange') {
                    _isCompleteData = this.mergeData(data, this.oldData);
                } else if (this.options.type == 'mergeByOldDataChange') {
                    _isCompleteData = this.mergeData(data, this.oldData);
                };
                this.event.beforGet.call(this, _isCompleteData);
                return _isCompleteData;
            } else {
                this.errorMessage = stutas;
                return false;
            };
        },
        mergeData: function (data, oldData) {
            var returnData = $.extend({}, oldData);
            var _length = 0;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    _length++;
                    var formDataItem = data[key];
                    if (verify.is('object', formDataItem)) {
                        var addKeyArray = [];
                        for (var checkBoxKey in formDataItem) {
                            if (formDataItem.hasOwnProperty(checkBoxKey)) {
                                var element = formDataItem[checkBoxKey];
                                if (element != returnData[key][checkBoxKey]) {
                                    addKeyArray.push(checkBoxKey);
                                };
                            };
                        };
                        if (addKeyArray.length == 0) {
                            _length--;
                            delete returnData[key]
                        } else {
                            returnData[key] = {};
                            for (var i = 0; i < addKeyArray.length; i++) {
                                var element = addKeyArray[i];
                                returnData[key][element] = formDataItem[element];
                            }
                        };
                    } else {
                        if (formDataItem == returnData[key]) {
                            _length--;
                            delete returnData[key];
                        } else {
                            returnData[key] = formDataItem;
                        };
                    };
                }
            };
            if (_length == 0) {
                this.errorMessage = '未对表单进行任何修改';
                return false;
            } else {
                this.errorMessage = null;
                return returnData;
            };
        },
        hasKey: function (key) {
            if (this.items.hasOwnProperty(key)) {
                var element = this.items[key];
                return element;
            } else {
                return false;
            }
        },
        pushItem: function (option) {
            if (FormElement.hasOwnProperty(option.type)) {

                this.items[option.key] = new FormElement[option.type](option.element, new formBox(option.box));
                this.html.append(this.items[option.key].layout.render());
                this.order.push(option.key);
            } else {
                this.items[option.key] = option.element;
                var layout = new formBox(option.box);
                option.element.layout = layout;
                layout.append(option.element.render());
                this.html.append(layout.render());
                this.order.push(option.key);
            }
        },
        addItem: function (option, index) {
            if (FormElement.hasOwnProperty(option.type)) {
                this.items[option.key] = new FormElement[option.type](option.element, new formBox(option.box));
                this.html.find('.form_Item_box').eq(index).after(this.items[option.key].layout.render());
                this.order.splice(index, 0, option.key);
            } else {
                this.items[option.key] = option.element;
                var layout = new formBox(option.box);
                layout.append(option.element.render());
                option.element.layout = layout;
                this.html.append(layout.render());
                this.html.find('.form_Item_box').eq(index).after(layout.render());
                this.order.splice(index, 0, option.key);
            }
        },
        removeItem: function (key) {
            var obj = this.hasKey(key);
            if (obj) {
                this.items[key].layout.html.remove();
                delete this.items[key];
                var index = $.inArray(key, this.order);
                if (index != -1) {
                    this.order.splice(index, 1);
                };
                if (this.options.type == 'onlyChange') {
                    if (this.oldData.hasOwnProperty(key)) {
                        delete this.oldData[key];
                    };
                }
            };
        },
        beforGet: function (event) {
            this.options.beforGet = event;
        },
        getFormObject: function (type, options) {
            if (FormElement.hasOwnProperty(type)) {
                var element = new FormElement[type](options);
                return element;
            } else {
                console.error('form => 不存在的表单类型');
                return false;
            }
        }
    };
    window.DevUI = {
        form: form,
        input: input,
        textarea: textarea,
        select: select,
        radio: radio,
        checkBox: checkBox,
        inputDate: inputDate,
        password: password,
        options: optionSide,
        formatDate: formatDate,
        rules: rules,
        verify: verify,
        dialog: _dialog,
    };
})();

// ajax封装
!(function () {
    var storage = _storage;
    var develop = {
        urlList: {
            'default': '',
        },
        is: true,
        url: function (urlName) {
            if (urlName && develop.urlList.hasOwnProperty(urlName)) {
                return develop.urlList[urlName];
            } else {
                return develop.urlList.default;
            };
        },
        fun: function (callback) {
            if (develop.is) {
                callback();
            };
        },
        code: '\u0044\u0065\u0076\u0053\u0070\u0065\u0065\u0064\u005f\u0046\u005a\u0043',
    };
    // var refreshToken = function (callback) {
    //     $('#body').loading();
    //     $.ajax({
    //         contentType: 'application/json; charset=UTF-8',
    //         url: develop.url('186') + '/auth/refreshToken?oldToken=' + storage.get('token'),
    //         type: 'GET',
    //         success: function (result) {
    //             $('#body').loading();
    //             callback();
    //         },
    //         error: function (error) {
    //             $('#body').loading();
    //             if (error.status == '404') {
    //                 alert.error({
    //                     text: '服务器出现异常,请刷新重试',
    //                 });
    //             } else if (error.status == '500') {
    //                 alert.error({
    //                     text: error.responseJSON.message,
    //                 });
    //             } else if (error.status == '403') {
    //                 alert.error({
    //                     text: '用户出现权限问题,请重新登录',
    //                 });
    //             } else {
    //                 alert.error({
    //                     text: '出现未知问题,请重试',
    //                 });
    //             };
    //         }
    //     })
    // };
    var verify = DevUI.verify;
    var alert = _alert;
    var ajax = function (type, options) {
        if (!(verify.is('string', options.url))) {
            console.error('ajaxError ： URL 类型错误');
            return;
        };
        if (!options.data && type == 'POST') {
            console.error('ajaxError ： 参数为空');
            return;
        };
        if (!options.data && type == 'PUT') {
            console.error('ajaxError ： 参数为空');
            return;
        };
        if (!verify.is('function', options.success)) {
            console.error('ajaxError ： success 参数错误');
            return;
        };
        if (options.devUrl) {
            options.url = develop.url(options.devUrl) + options.url;
        } else {
            options.url = develop.url('default') + options.url;
        };
        var loadingElement = null;
        if (options.loading === true) {
            loadingElement = $('body');
        } else if (options.loading && options.loading !== true) {
            loadingElement = options.loading;
        };
        if (loadingElement) {
            loadingElement.loading();
        };
        $.ajax({
            contentType: 'application/json; charset=UTF-8',
            url: options.url,
            data: JSON.stringify(options.data),
            type: type,
            dataType: "json",
            beforeSend: function (request) {
                if (!options.unUseToken) {
                    request.setRequestHeader("Authorization", "Bearer " + storage.get('token'));
                };
            },
            success: function (result) {
                if (loadingElement) {
                    loadingElement.loading();
                };
                if (result.hasOwnProperty('error')) {
                    alert.error({
                        text: result.message,
                    });
                } else {
                    options.success(result);
                };
            },
            error: function (error) {
                if (loadingElement) {
                    loadingElement.loading();
                };
                if (options.error) {
                    options.error(error);
                } else if (error.status == '404') {
                    _alert.error({
                        text: '服务器出现异常,请刷新重试',
                    });
                } else if (error.status == '500') {
                    _alert.error({
                        text: error.responseJSON.message,
                    });
                } else {
                    _alert.error({
                        text: '出现未知问题,请重试',
                    });
                };;
            }
        })
    };
    window._request = {
        GET: function (options) {
            return ajax('GET', options);
        },
        POST: function (options) {
            return ajax('POST', options);
        },
        PUT: function (options) {
            return ajax('PUT', options);
        },
        DELETE: function (options) {
            return ajax('DELETE', options);
        },
        develop: develop
    }
})();

// table 组件
!(function () {
    // var $ = require('jquery');
    var formatDate = DevUI.formatDate;
    var optionSets = DevUI.options.get;
    var List = function (options) {
        var data = options.config;
        this.itemEvent = options.columnEvent;
        var html = '';
        html += '<div class="element-grid">';
        html += '   <table class="table center table-striped table-hover">';
        html += '       <thead>';
        html += '           <tr></tr>';
        html += '       </thead>';
        html += '   </table>';
        html += '</div>';
        this.html = $(html);
        this.table = this.html.find('table');
        this.title = {};
        for (var i = 0; i < data.length; i++) {
            var titleItem = data[i];
            this.title[titleItem.setValueByDataKey] = new ListItemTitle(titleItem, this, null);
            this.table.find('tr').append(this.title[titleItem.setValueByDataKey].render());
        };
        this.items = [];
    };
    List.prototype = {
        constructor: this,
        render: function () {
            return this.html;
        },
        set: function (data) {
            this.clear();
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                this.items[i] = new ListItem(this.title, this, item);
                this.table.append(this.items[i].render());
            }
        },
        clear: function () {
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                item.html.remove();
            };
            this.items = [];
        },
        setSingle: function (data) {
            var item = new ListItem(this.title, this, data);
            this.items.push(item);
            this.table.append(item.render());
        },
        checkSelect: function (options) {
            var key = options.data.setValueByDataKey;
            var titleStuats = this.title[key].select;
            if (titleStuats) {
                options.setSelect(false);
            } else {
                var Stuats = true;
                for (var i = 0; i < this.items.length; i++) {
                    var element = this.items[i];
                    if (!element.elements[key].select) {
                        Stuats = false;
                    }
                };
                if (Stuats) {
                    options.setSelect(true);
                } else {
                    options.setSelect(false);
                };
            }
        },
        checkAllSelect: function (options) {
            console.log(options);
            var key = options.data.setValueByDataKey;
            var titleStuats = options.select;
            for (var i = 0; i < this.items.length; i++) {
                var element = this.items[i];
                element.elements[key].setSelect(titleStuats);
            }
        },
        getSelectItem: function (itemName) {
            var key = null;
            if (itemName === undefined) {
                for (var item in this.title) {
                    if (this.title.hasOwnProperty(item)) {
                        var _item = this.title[item];
                        if (_item.data.type == 'select') {
                            key = _item.data.setValueByDataKey;
                            break;
                        }
                    }
                };
            } else {
                key = itemName;
            };
            try {
                if (key === null) {
                    console.error('element : list : getSelectItem => 不存在的select对象"' + itemName + '"');
                } else {
                    var Datas = [];
                    for (var i = 0; i < this.items.length; i++) {
                        var element = this.items[i];
                        if (element.elements[key].select) {
                            Datas.push(element.value);
                        };
                    };
                    return Datas
                }
            } catch (error) {
                console.error('element : list : getSelectItem => 不存在的select对象"' + itemName + '"');
            };
        },
        Setoptions: function (titleName) {
            var key = titleName;
            if (!this.items) {
                return;
            };
            for (var i = 0; i < this.items.length; i++) {
                var element = this.items[i];
                var data = this.title[key].optionsData;
                var value = element.elements[key].objectValue;
                var objectElement = element.elements[key].html;
                objectElement.text(data[value].label);
                if (this.title[key].data.format) {
                    this.title[key].data.format(data[value], objectElement);
                };
            };
        }
    };

    var ListItemTitle = function (options, parent) {
        this.data = options;
        this.select = false;
        this.parent = parent;
        var _this = this;
        if (options.type == 'select') {
            this.html = $('<th width="' + options.width + '%"><label class="table-select"></label></th>');
            this.html.click(function () {
                $(this).find('label').toggleClass('active');
                _this.select = !_this.select;
                _this.parent.checkAllSelect(_this);
            });
        } else if (options.type.split(':')[0] == 'options') {
            this.optionsData = null;
            var optionSetsName = options.type.split(':')[1];
            optionSets(optionSetsName, function (result) {
                _this.optionsData = result;
                parent.Setoptions(options.setValueByDataKey);
            }, 'data');
            this.html = $('<th width="' + options.width + '%">' + options.name + '</th>');
        } else {
            this.html = $('<th width="' + options.width + '%">' + options.name + '</th>');
        };
    };

    ListItemTitle.prototype = {
        constructor: this,
        render: function () {
            return this.html;
        },
        setSelect: function (data) {
            this.select = data;
            if (data) {
                this.html.find('label').addClass('active');
            } else {
                this.html.find('label').removeClass('active');
            };
        },

    };

    var ListItem = function (options, parent, value) {
        this.html = $('<tr></tr>');
        this.elements = {};
        var _this = this;
        for (var key in options) {
            (function (options, _this, key) {
                var element = options[key];
                _this.elements[element.data.setValueByDataKey] = new ListItemObject(element, parent, value, _this);
                _this.html.append(_this.elements[element.data.setValueByDataKey].render());
            })(options, _this, key);
        };
        this.parent = parent;
        this.value = value;
        if (parent.itemEvent) {
            parent.itemEvent(value, this.html);
        };
    };
    ListItem.prototype = {
        constructor: this,
        render: function () {
            return this.html;
        },
        reSet: function (data) {
            for (var key in this.elements) {
                if (this.elements.hasOwnProperty(key)) {
                    var element = this.elements[key];
                    element.setData(data);
                }
            }
        },
    };

    var ListItemObject = function (options, parent, value, object) {
        this.column = object;
        this.data = value;
        this.select = false;
        this.parent = parent;
        this.options = options;
        var _this = this;
        // this.objectValue = 
        this.html = $('<td style="line-height:30px;position: relative;"></td>');
        if (options.data.format) {
            options.data.format(this.data[options.data.setValueByDataKey], this.html);
        };
        switch (options.data.type.split(':')[0]) {
            case 'select':
                this.html.append('<label class="table-select"></label>');
                this.html.click(function () {
                    $(this).find('label').toggleClass('active');
                    _this.select = !_this.select;
                    _this.parent.checkSelect(options);
                });
                break;
            case 'string':
                this.objectValue = value[options.data.setValueByDataKey];
                this.html.append(this.objectValue === undefined ? '' : this.objectValue);
                break;
            case 'date':
                this.objectValue = value[options.data.setValueByDataKey];
                var formarType = options.data.type.split(':')[1];
                if (!formarType) {
                    formarType = '/';
                };
                if (this.objectValue === undefined) {
                    this.html.append('');
                } else {
                    this.objectValue = formatDate(formarType, this.objectValue);
                    this.html.append(this.objectValue);
                };
                break;
            case 'options':
                this.objectValue = value[options.data.setValueByDataKey];
                var optionsData = this.parent.title[options.data.setValueByDataKey].optionsData;
                if (optionsData) {
                    this.objectValue = optionsData[this.objectValue];
                };
                this.html.append(this.objectValue === undefined ? '' : this.objectValue.label);
                break;
            case 'twoOptions':
                this.objectValue = value[options.data.setValueByDataKey];
                var formarType = options.data.type.split(':')[1];
                if (formarType) {
                    formarType = formarType.split('/');
                } else {
                    formarType = ['是', '否']
                }
                if (this.objectValue !== undefined) {
                    if (this.objectValue.toString().toLowerCase() == 'true') {
                        this.html = $('<td style="line-height:30px">' + formarType[0] + '</td>');
                    } else {
                        this.html = $('<td style="line-height:30px">' + formarType[1] + '</td>');
                    };
                };
                break;
            case 'buttons':
                for (var i = 0; i < options.data.setting.length; i++) {
                    var element = options.data.setting[i];
                    var button = $('<span class="btn btn-sm ' + element.class + ' ' + (element.name == '删除' ? 'btn-danger' : 'btn-info') + '" style="margin : 0 3px;">' + element.name + '</span>');
                    (function (button, element, value) {
                        button.click(function () {
                            element.click(value, button, _this.column);
                        });
                    })(button, element, value);
                    if (element.event) {
                        element.event(value, button, _this.column);
                    };
                    this.html.append(button);
                };
                break;
            default:
                this.html.append(this.objectValue === undefined ? '' : this.objectValue);
                break;
        };
    };

    ListItemObject.prototype = {
        constructor: this,
        render: function () {
            return this.html;
        },
        setSelect: function (data) {
            this.select = data;
            if (data) {
                this.html.find('label').addClass('active');
            } else {
                this.html.find('label').removeClass('active');
            };
        },
        setData: function (data) {
            this.data = data;
            if (this.options.data.format) {
                this.options.data.format(data[this.options.data.setValueByDataKey], this.html);
            };
            var objectValue = this.data[this.options.data.setValueByDataKey];

            switch (this.options.data.type.split(':')[0]) {
                case 'select':
                    break;
                case 'buttons':
                    break;
                case 'string':
                    this.objectValue = objectValue;
                    this.html.html(this.objectValue === undefined ? '' : this.objectValue);
                    break;
                case 'date':
                    this.objectValue = objectValue;
                    var formarType = this.options.data.type.split(':')[1];
                    if (!formarType) {
                        formarType = '/';
                    };
                    if (this.objectValue === undefined) {
                        this.html.html('');
                    } else {
                        this.objectValue = formatDate(formarType, this.objectValue);
                        this.html.html(this.objectValue);
                    };
                    break;
                case 'options':
                    this.objectValue = objectValue;
                    var optionsData = this.parent.title[this.options.data.setValueByDataKey].optionsData;
                    if (optionsData) {
                        this.objectValue = optionsData[this.objectValue.toString()];
                    };
                    this.html.html(this.objectValue === undefined ? '' : this.objectValue.label);
                    break;
                case 'twoOptions':
                    this.objectValue = objectValue;
                    var formarType = this.options.data.type.split(':')[1];
                    if (formarType) {
                        formarType = formarType.split('/');
                    } else {
                        formarType = ['是', '否']
                    }
                    if (this.objectValue !== undefined) {
                        if (this.objectValue.toString().toLowerCase() == 'true') {
                            this.html.html(formarType[0]);
                        } else {
                            this.html.html(formarType[1]);
                        };
                    };
                    break;


                default:
                    break;
            }
        },
    };


    window._table = function (options) {
        return new List(options);
    };

})();

// template
!(function () {
    var row = function (string) {
        var _array = string.split('/');
        this.html = $('<div class="row"></div>');

        this.item = [];
        for (var i = 0; i < _array.length; i++) {
            var element = _array[i];
            this.item[i] = $('<div class="col-md-' + element + '"></div>');
            this.html.append(this.item[i]);
        }
    };
    var basic = function (options) {
        this.html = $('<div class="box"></div>');
        this.header = $('<div class="box-header with-border"></div>');
        this.headerButtonBox = $('<div class="box-tools pull-right"></div>');
        this.header.append(this.headerButtonBox);
        this.title = $('<h4 class="box-title"></h4>');
        if (options.title) {
            this.title.html(options.title);
            this.header.append(this.title);
        };
        if (options.button) {
            var button = $('<button class="btn ' + options.button.className + '"></button>');
            button.html(options.button.name);
            this.headerButtonBox.append(button);
            button.click(function () {
                options.button.event();
            });
        };
        this.html.append(this.header);
        this.body = $('<div class="box-body"></div>');
        this.html.append(this.body);
        this.footerEle = $('<div class="box-footer text-left" style="display:none"></div>');
        this.html.append(this.footerEle);
        // box-body
    };
    basic.prototype.footer = function (element) {
        this.footerEle.append(element);
        this.footerEle.css('display', 'block');
    };


    var tab = function () {
        this.html = $('<div class="nav-tabs-custom"></div>');
        this.tab = $('<ul class="nav nav-tabs"></url>');
        this.tabBody = $('<div class="tab-content"></div>');
        this.html.append(this.tab).append(this.tabBody);
        var _this = this;

        this.tab.on('click', 'li', function (event) {
            var index = $(this).index();
            _this.tab.find('li a').removeClass('active');
            $(this).find('a').addClass('active');
            _this.tabBody.find('.tab-pane').removeClass('active').eq(index).addClass('active');
        });
    };
    tab.prototype.setItem = function (options) {
        var title = $('<li><a><i class="fa ' + options.titleIcon + '"></i>' + options.title + '</a></li>');
        var body = $('<div class="tab-pane"></div>');
        body.append(options.body);
        this.tab.append(title);
        this.tabBody.append(body);
        var index = this.tab.find('li').length;
        if (index == 1) {
            this.tab.find('li').click();
        };
    };


    var timeLine = function () {
        this.html = $('<ul class="timeline"></ul>');
        this.time = null;
    };

    timeLine.prototype.setDate = function (time) {
        var html = $(
            '<li class="time-label">' +
            '    <span class="bg-info">' +
            '    ' + DevUI.formatDate('YYYY年MM月DD日', time) +
            '    </span>' +
            '</li>');
        this.html.append(html);
    };
    timeLine.prototype.setItem = function (options) {
        var time = DevUI.formatDate('YYYY年MM月DD日', options.time);
        if (time != this.time) {
            this.time = time;
            this.setDate(options.time);
        };
        var html = $('<li>' +
            '    <i class="' + options.icon + '"></i>' +
            '    <div class="timeline-item">' +
            '        <span class="time"><i class="fa fa-clock-o"></i> &nbsp; ' + DevUI.formatDate('hh:mm', options.time) + '</span>' +
            '        <h3 class="timeline-header"><a href="#/mission">' + options.title + '</a></h3>' +
            '        <div class="timeline-body"></div>' +
            '    </div>' +
            '</li>');

        html.find('.timeline-body').append(options.body);

        if (options.footer) {
            var footer = $('<div class="timeline-footer text-right"></div>');
            footer.append(options.footer);
            html.find('.timeline-item').append(footer);
        };

        this.html.append(html);
    };

    window._template = {
        row: function (options) {
            return new row(options);
        },
        basic: function (options) {
            return new basic(options);
        },
        tab: function () {
            return new tab();
        },
        timeLine: function () {
            return new timeLine();
        },
    }
})();

