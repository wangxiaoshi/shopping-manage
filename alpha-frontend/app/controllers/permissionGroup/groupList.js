define(function (require, exports, module) {

    var _obj = {};
    var dialog = _dialog;
    var alert = _alert;

    var item = function (data, parent) {
        this.event = parent.event;
        this.data = data;
        this.parent = parent;
        this.html = $(`<div class="groupItem">
            <span class="name">`+ this.data.name + `</span>
            <span class="delete fa fa-remove" title="删除"></span> 
            <span class="editor fa fa-edit" title="修改"></span>
            <div style="clear:both;height:1px;width:100%"></div>
        </div>`);
        this.name = this.html.find('.name');
        this.edit = this.html.find('.editor');
        this.delete = this.html.find('.delete');
        this.html.click(() => {
            this.parent.active(this);
        });

        this.edit.click((e) => {
            // e.preventDefault();
            e.stopPropagation();
            var form = new DevUI.form({
                type: 'all'
            });
            form.setOptions([{
                key: 'string',
                type: 'input',
                box: {
                    lable: '角色名 : ',
                    size: '3/7',
                },
                element: {
                    verify: {
                        text: '角色名',
                        rules: ['notNull']
                    },
                },
            }]);
            form.setData({
                string: this.data.name
            });

            dialog({
                title: '修改角色名称',
                width: '600',
                height: '300',
                buttons: [{
                    text: '提交',
                    className: 'btn-info',
                    event: (event) => {
                        var data = form.get();
                        if (data) {
                            var name = data.string
                            if (name == this.data.name) {
                                alert.warning({
                                    text: '未进行任何修改',
                                    buttonColor: "#e28b3e",
                                    ButtonText: "确定",
                                });
                            } else {
                                this.event.editor(name, this.data, () => {
                                    event.hide();
                                    this.data.name = name;
                                    this.name.text(name);
                                });
                            }
                        }
                    }
                }]
            }).show(form.html);
        });

        this.delete.click((e) => {
            // e.preventDefault();
            e.stopPropagation();
            alert.delete({
                title: '是否删除: ' + this.data.name,
                text: '警告:您的删除操作将无法得到恢复',
                callback: (successEvent, errorEvent) => {
                    this.event.delete(this.data, (error) => {
                        if (error) {
                            errorEvent(error);
                        } else {
                            this.parent.removeItem(this);
                            successEvent();
                        }
                    });
                }
            });
        });

    };
    item.prototype.active = function () {
        this.html.addClass('active');
    };
    item.prototype.unActive = function () {
        this.html.removeClass('active');
    };
    item.prototype.save = function () {
        var data = this.parent.dataObj.get();
        var thisData = this.data;
        this.event.save(data, thisData, function () {
            alert.success({});
        });
    };

    var groupList = function (element, saveElement, dataObj, event) {
        this.item = [];
        this.event = event;
        this.html = element;
        this.activeObj = null;
        this.saveElement = saveElement;
        this.dataObj = dataObj;

        saveElement.click(() => {
            this.activeObj.save();
        });
    };
    groupList.prototype.set = function (array) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            var _item = new item(element, this)
            this.item.push(_item);
            this.html.append(_item.html);
        }
    };
    groupList.prototype.active = function (event) {

        this.event.active(event.data, () => {
            this.activeObj = event;
            for (let i = 0; i < this.item.length; i++) {
                const element = this.item[i];
                element.unActive();
            };
            event.active();
        });
    };
    groupList.prototype.creatItem = function () {
        var form = new DevUI.form({
            type: 'all'
        });
        form.setOptions([{
            key: 'string',
            type: 'input',
            box: {
                lable: '角色名 : ',
                size: '3/7',
            },
            element: {
                verify: {
                    text: '角色名',
                    rules: ['notNull']
                },
            },
        }]);
        dialog({
            title: '修改角色名称',
            width: '600',
            height: '300',
            buttons: [{
                text: '提交',
                className: 'btn-info',
                event: (event) => {
                    var data = form.get();
                    if (data) {
                        var name = data.string;
                        this.event.creat(name, (data) => {
                            event.hide();
                            var _item = new item(data, this)
                            this.item.push(_item);
                            this.html.append(_item.html);
                        });
                    };
                }
            }]
        }).show(form.html);
    };
    groupList.prototype.removeItem = function (event) {
        for (let i = 0; i < this.item.length; i++) {
            const element = this.item[i];
            if (element === event) {
                this.item.splice(i, 1);
                element.html.remove();
            };
        }
    }

    return {
        render: function (a, b, c, d) {
            _obj = new groupList(a, b, c, d);
            return _obj;
        },
        set: function (data) {
            _obj.set(data);
        },
        add: function () {
            _obj.creatItem();
        },
    };
});