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
            {
                width: '15',
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
                width: '15',
                type: 'string',
                name: '上传用户',
                setValueByDataKey: 'uploadUser',
                format: function (data, element) {

                },
            },{
                width: '15',
                type: 'string',
                name: '下载量',
                setValueByDataKey: 'downloadSum',
                format: function (data, element) {

                },
            },{
                width: '15',
                type: 'string',
                name: '下载分润',
                setValueByDataKey: 'downloadIncome',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'buttons',
                name: '操作',
                setValueByDataKey: 'buttons',
                setting: [{
                    name: '分润管理',
                    event: function(data, element,event) {
                        // if (data.commentSum == '0') {
                        //     element.css('display', 'none');
                        // } else {
                        //     element.css('display', 'inline-block');
                        // }
                    },
                    click: function(data, element) {
                        //TODO: 分润管理
                        console.log(data);
                        _dialog({
                            title: '分润管理页面',
                            className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                        }).show('弹出对话框');
                    }
                },],
            }
            ]
        });

        list.set([
            { modelID: '102299032', modelName: '卡通人偶', uploadUser: 'Tom123', downloadSum: '0', downloadIncome: '0.00',},
            { modelID: '003284386', modelName: '四驱车零件', uploadUser: 'Bob', downloadSum: '942332', downloadIncome: '312146.53',},
            { modelID: '102939751', modelName: '飞机模型', uploadUser: 'Bob', downloadSum: '554', downloadIncome: '95.91',},
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