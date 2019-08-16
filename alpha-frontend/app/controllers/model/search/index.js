define (function (require, exports, module) {
    exports.render = function (params, layout, service) {

        //排序用到的Key
        var colId="commentSum";
        //对json进行降序排序函数
        var desc = function(x,y)
        {
            return (x[colId] < y[colId]) ? 1 : -1;
        };
        //对json进行升序排序函数
        var asc = function(x,y)
        {
            return (x[colId] > y[colId]) ? 1 : -1;
        };


        var content = $('<div id="searchModel"></div>');
        var table = _table;

        //搜索
        var searchValue = new DevUI.form({
            type: 'all' ,
        });
        searchValue.setOptions([
            {
                key: 'modelId',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '资源编号:',
                    className: 'modelId',
                },
                element: {
                    verify: {
                        text: '编号',
                        //rules: 'notNull'
                    },
                    placeholder: '请输入资源编号',
                }

            },{
                key: 'modelName',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '资源名:',
                    className: 'modelName',
                },
                element: {
                    verify: {
                        text: '资源名',
                        //rules: 'notNull'
                    },
                    placeholder: '请输入资源名',
                }
            }
        ]);

        var seachBtn = $('<div class="seachBtn"><button class="btn btn-info" >搜索</button></div>');
        searchValue.html.append(seachBtn);

        var tablePart = new _template.basic({
            title: '资源检索列表',
        });
        var roleSel = new DevUI.select({
            // 自定义元素样式
            className: 'roleSel',
            // verify 对象参照 数据验证规则集合对象 中的说明进行设置
            // verify: {  
            //     text: '',
            //     rules: []
            // },
            // 根据子对象的数据 对应Key值进行显示
            showKey: 'label', 
            // 是否显示置空项
            showUnSelect: false, 
            // 注 ： 设置置空项后，置空项会默认增加到第一项，下标为 0 ，导致下标取值向后顺延
            // 置空项对象值设置
            UnSelectData: {
                showName: ' - 资源状态 - ',
                data: null,
            },
            setKey: 'label',          
            getKey: 'object', 
            "default": null,         
            // 是否只读
            readonly: false,
            placeholder: '- 资源状态 -',  // 当未选值时,元素显示内容
            onChange: function () { }, // 当值发生改变时,调用方法
            onError: function () { } // 当值发生错误时(不符合验证时),调用方法
        });
        var selRoleValue = '0';
        // 渲染
        searchValue.html.append(roleSel.html);
        content.append (searchValue.html);

        // 改变Data对象，根据字符串
        roleSel.setData("OptionSide:modelType");
        // 可异步绑定的change方法
        roleSel.onChange(function(value){
            //FIXME:
            console.log(roleSel.get(value));
        });

        var list = table({
            config:[
            //     {
            //     width: '5',
            //     type: 'select',
            //     // type 为 select 类型时,不需要name作为显示值,但是需要自定义一个'setValueByDataKey'进行操作.  
            //     name: null,
            //     setValueByDataKey: 'select',
            // },
            {
                width: '10',
                type: 'string',
                name: '资源编号',
                setValueByDataKey: 'modelID',
                format: function (data, element) {

                },
            },{
                width: '15',
                type: 'string',
                name: '资源名',
                setValueByDataKey: 'modelName',
                format: function (data, element) {

                },
            },{
                width: '10',
                type: 'string',
                name: '上传用户',
                setValueByDataKey: 'uploadUser',
                format: function (data, element) {

                },
            },{
                width: '20',
                type: 'date:YYYY年MM月DD日 HH时mm分ss秒',
                name: '上传时间',
                setValueByDataKey: 'uploadDate',
                format: function (data, element) {

                },
            },{
                width: '8',
                type: 'string',
                name: '评论数',
                setValueByDataKey: 'commentSum',
                format: function (data, element) {

                },
            },{
                width: '7',
                type: 'string',
                name: '下载数',
                setValueByDataKey: 'downloadSum',
                format: function (data, element) {

                },
            },{
                width: '5',
                type: 'twoOptions:已审核/未审核',
                name: '状态',
                setValueByDataKey: 'reviewed',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'buttons',
                name: '操作',
                setValueByDataKey: 'buttons',
                setting: [{
                    name: '审核',
                    event: function(data, element,event) {
                        //     data 当前行的数据
                        //     element 当前按钮的jquery对象
                        //     event 返回当前行的对象
                        if (data.reviewed == 'true') {
                            element.css('display', 'none');
                        } else {
                            element.css('display', 'inline-block');
                        }
                    },
                    click: function(data, element) {
                        //TODO: 审核页面
                        console.log(data);
                        _dialog({
                            title: '审核页面',
                            className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                        }).show('弹出对话框');
                    }
                },{
                    name: '评论管理',
                    event: function(data, element,event) {
                        if (data.commentSum == '0') {
                            element.css('display', 'none');
                        } else {
                            element.css('display', 'inline-block');
                        }
                    },
                    click: function(data, element) {
                        //TODO: 审核页面
                        console.log(data);
                        _dialog({
                            title: '评论管理页面',
                            className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                        }).show('弹出对话框');
                    }
                },{
                    name: '删除',
                    event: function(data, element,event) {
                        //     data 当前行的数据
                        //     element 当前按钮的jquery对象
                        //     event 返回当前行的对象
                        // if (data.string == '111111') {
                        //     element.css('display', 'none');
                        // } else {
                        //     element.css('display', 'inline-block');
                        // }

                    },
                    click: function(data, element) {
                        console.log('删除' + data.modelID);
                        _alert.delete({
                            title: '删除',
                            text: '确认删除编号为 ' + data.modelID + ' 的资源吗?',
                            callback: function (success, error) {
                         
                                // 操作成功，执行 success 方法
                                setTimeout(function () {
                                    success();
                                }, 1500);
                         
                                // 操作失败，执行 error 方法，并传入错误提示
                                // setTimeout(function () {
                                //     error('服务器错误');
                                // }, 1500);
                         
                            }
                        });
                    }
                },],
            }
            ]
        });

        list.set([
            { modelID: '102299032', modelName: '卡通人偶', uploadDate: '2019-04-08 14:35:05', uploadUser: '谢腾飞', commentSum: '0', downloadSum: '0', reviewed:'false'},
            { modelID: '003284386', modelName: '四驱车零件', uploadDate: '2019-07-31 09:44:10', uploadUser: '王大拿', commentSum: '332', downloadSum: '942332', reviewed:'true'},
            { modelID: '102939751', modelName: '飞机模型', uploadDate: '2019-05-22 21:18:42', uploadUser: '宋晓峰', commentSum: '22', downloadSum: '554', reviewed:'true'},
        ].sort(desc));
        
        // TODO: 分页
        var getPaging = function (data, callBack) {
        //     service.companylist(data.pageInfo        
        //     ,function(res){
        //         callBack(res);
        //        //result.totalRecord = result.count;
        //        console.log(res);
        //    })
        };
        var paging = _paging({
            data: {
                pageInfo: {
                    index: '1',
                    count: '10'
                }
            },
            ajaxEvent: getPaging,
            success: function (result) {
                list.set(result);
            }

        });
        var pagebox =  $('<div style="text-align:center;"></div>');
        pagebox.append(paging.render());

        tablePart.body.append(list.html);
        tablePart.body.append(pagebox);
        content.append(tablePart.html);
        layout.append(content);
    }
});