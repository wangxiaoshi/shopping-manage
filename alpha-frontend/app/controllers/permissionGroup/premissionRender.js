define(function (require, exports, module) {

    var _obj = null;
    var group = function (option) {
        this.data = option;
        this.html = $(`
            <div class="Group">
                <div class="GroupTitle">
                <i class="fa fa-minus-square-o"></i>
                </div>
                <div class="GroupBody"></div>
            </div>
        `);
        this.open = true;
        this.switch = this.html.find('i');
        this.switch.click(() => {
            if (this.open) {
                this.closeSwitch();
            } else {
                this.openSwitch();
            }
        });

        this.title = this.html.find('.GroupTitle');
        this.body = this.html.find('.GroupBody');
        this.bodyElementnew = {};

        var pArray = [];
        for (let i = 0; i < option.list.length; i++) {
            const item = option.list[i];
            let data = {
                key: item.url,
                name: item.name,
                data: item,
                'default': false,
                onChange: (bodyvalue) => {
                    setTimeout(() => {
                        this.childChange(bodyvalue);
                    }, 10);
                },
            };
            pArray.push(data);
        };
        this.bodyElementnew = new DevUI.checkBox({
            className: '',
            size: 'normal',
            checkLength: 0, // 必须选择的个数
            element: pArray,
        });
        this.body.append(this.bodyElementnew.html);
        this.titleElement = new DevUI.checkBox({
            className: '',
            size: 'normal',
            checkLength: 0, // 必须选择的个数
            element: [{
                key: 'all',
                className: '',
                name: option.name,
                'default': false,
                readonly: false,
                description: null,
                onChange: (titlevalue) => {
                    setTimeout(() => {
                        this.bodyChage(titlevalue);
                    }, 10);
                },
            }],
        });
        this.title.append(this.titleElement.html);
    };
    group.prototype.set = function (data) {
        this.clear();
        // debugger;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            for (const key in this.bodyElementnew.items) {
                if (this.bodyElementnew.items.hasOwnProperty(key)) {
                    const item = this.bodyElementnew.items[key];
                    if ($.inArray(element, item.options.data.value) != -1) {
                        item.set(true, true);
                    };
                }
            }
        };
        this.checkAll();
    };
    group.prototype.clear = function () {
        for (const key in this.bodyElementnew.items) {
            if (this.bodyElementnew.items.hasOwnProperty(key)) {
                const item = this.bodyElementnew.items[key];
                item.set(false, true);
            }
        };
        this.checkAll();
    };
    group.prototype.get = function () {
        var _array = [];
        for (const key in this.bodyElementnew.items) {
            if (this.bodyElementnew.items.hasOwnProperty(key)) {
                const element = this.bodyElementnew.items[key];
                if (element.valueData) {
                    _array = _array.concat(element.options.data.value);
                };
            }
        };
        return _array;
    };
    group.prototype.childChange = function (bodyvalue) {
        this.titleElement.get((error, value) => {
            if (!bodyvalue && value) {
                this.titleElement.set({
                    all: false
                }, true);
            } else {
                this.checkAll();
            };
        });
    };
    group.prototype.bodyChage = function (titlevalue) {
        if (!titlevalue) {
            this.bodyElementnew.get((error, value) => {
                var data = {};
                for (const key in value) {
                    if (value.hasOwnProperty(key)) {
                        data[key] = false;
                    }
                };
                this.bodyElementnew.set(data, true);
            });
        } else {
            this.bodyElementnew.get((error, value) => {
                var isTrue = true;
                for (const key in value) {
                    if (value.hasOwnProperty(key)) {
                        const element = value[key];
                        if (!element) {
                            isTrue = false;
                            break;
                        };
                    }
                };
                if (isTrue) {
                    var data = {};
                    for (const key in value) {
                        if (value.hasOwnProperty(key)) {
                            data[key] = false;
                        }
                    };
                    this.bodyElementnew.set(data, true);
                } else {
                    var data = {};
                    for (const key in value) {
                        if (value.hasOwnProperty(key)) {
                            data[key] = true;
                        }
                    };
                    this.bodyElementnew.set(data, true);
                }
            });
        }
    };
    group.prototype.checkAll = function () {
        this.bodyElementnew.get((error, allValue) => {
            var isTrue = true;
            for (const key in allValue) {
                if (allValue.hasOwnProperty(key)) {
                    const element = allValue[key];
                    if (!element) {
                        isTrue = false;
                        break;
                    };
                }
            };
            if (isTrue) {
                this.titleElement.set({
                    all: true
                }, true);
            } else {
                this.titleElement.set({
                    all: false
                }, true);
            };
        }, true);
    };
    group.prototype.openSwitch = function () {
        this.open = true;
        this.switch.removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
        this.body.slideDown(300);
    };
    group.prototype.closeSwitch = function () {
        this.open = false;
        this.switch.removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
        this.body.slideUp(300);
    };

    var obj = function (option) {
        // debugger;
        this.items = [];
        this.html = $('<div></div>');
        for (let i = 0; i < option.length; i++) {
            const item = option[i];
            const _item = new group(item);
            this.items.push(_item);
            this.html.append(_item.html);
        };
    };
    obj.prototype.set = function (data) {
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            setTimeout(() => {
                element.set(data);
            }, 11);
        }
    };
    obj.prototype.get = function () {
        var _array = [];
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            _array = _array.concat(element.get());
        };
        return _array;
    };
    obj.prototype.clear = function () {
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            setTimeout(() => {
                element.clear();
            }, 11);
        }
    };
    obj.prototype.closeAll = function () {
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            element.closeSwitch()
        };
    };
    obj.prototype.openAll = function () {
        for (let i = 0; i < this.items.length; i++) {
            const element = this.items[i];
            element.openSwitch();
        };
    };


    return {
        render: function (option) {
            _obj = new obj(option);
            return _obj.html;
        },
        set: function (option) {
            _obj.set(option);
        },
        get: function () {
            return _obj.get();
        },
        clear: function () {
            _obj.clear();
        },
        closeAll: function () {
            _obj.closeAll();
        },
        openAll: function () {
            _obj.openAll();
        },
    };
});