define (function (require, exports, module) {
    exports.render = function (params, layout, service) {

        //排序用到的Key
        var colId="biddingPrice";
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


        var content = $('<div id="searchProject"></div>');
        var table = _table;

        //搜索
        var searchValue = new DevUI.form({
            type: 'all' ,
        });
        searchValue.setOptions([
            {
                key: 'projectId',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '项目编号:',
                    className: 'projectId',
                },
                element: {
                    verify: {
                        text: '编号',
                        //rules: 'notNull'
                    },
                    placeholder: '请输入项目编号',
                }

            },{
                key: 'projectName',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '项目名:',
                    className: 'projectName',
                },
                element: {
                    verify: {
                        text: '项目名',
                        //rules: 'notNull'
                    },
                    placeholder: '请输入项目名',
                }
            }
        ]);

        var seachBtn = $('<div class="seachBtn"><button class="btn btn-info" >搜索</button></div>');
        searchValue.html.append(seachBtn);
        content.append (searchValue.html);

        var tablePart = new _template.basic({
            title: '项目检索列表',
        });
        
        // var roleSel = new DevUI.select({
        //     // 自定义元素样式
        //     className: 'roleSel',
        //     // verify 对象参照 数据验证规则集合对象 中的说明进行设置
        //     // verify: {  
        //     //     text: '',
        //     //     rules: []
        //     // },
        //     // 根据子对象的数据 对应Key值进行显示
        //     showKey: 'label', 
        //     // 是否显示置空项
        //     showUnSelect: false, 
        //     // 注 ： 设置置空项后，置空项会默认增加到第一项，下标为 0 ，导致下标取值向后顺延
        //     // 置空项对象值设置
        //     UnSelectData: {
        //         showName: ' - 项目状态 - ',
        //         data: null,
        //     },
        //     setKey: 'label',          
        //     getKey: 'object', 
        //     "default": null,         
        //     // 是否只读
        //     readonly: false,
        //     placeholder: '- 项目状态 -',  // 当未选值时,元素显示内容
        //     onChange: function () { }, // 当值发生改变时,调用方法
        //     onError: function () { } // 当值发生错误时(不符合验证时),调用方法
        // });
        // var selRoleValue = '0';
        // // 渲染
        // searchValue.html.append(roleSel.html);
        // // 改变Data对象，根据字符串
        // roleSel.setData("OptionSide:projectType");
        // // 可异步绑定的change方法
        // roleSel.onChange(function(value){
        //     //FIXME:
        //     console.log(roleSel.get(value));
        // });

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
                name: '项目编号',
                setValueByDataKey: 'projectID',
            },{
                width: '15',
                type: 'string',
                name: '项目名',
                setValueByDataKey: 'projectName',
            },{
                width: '10',
                type: 'string',
                name: '发起用户',
                setValueByDataKey: 'firstParty',
            },{
                width: '10',
                type: 'string',
                name: '承接用户',
                setValueByDataKey: 'secondParty',
            },{
                width: '20',
                type: 'date:YYYY年MM月DD日 HH时mm分ss秒',
                name: '发起时间',
                setValueByDataKey: 'creatingDate',
            },{
                width: '8',
                type: 'string',
                name: '项目总价',
                setValueByDataKey: 'projectPrice',
            },{
                width: '8',
                type: 'string',
                name: '项目分润',
                setValueByDataKey: 'projectIncome',
            },{
                width: '5',
                type: 'options:contractType',
                name: '合同状态',
                setValueByDataKey: 'contractType',
            },{
                width: '15',
                type: 'buttons',
                name: '操作',
                setValueByDataKey: 'buttons',
                setting: [{
                    name: '项目详情',
                    event: function(data, element,event) {
                        if (data.biddingPrice == '0') {
                            element.css('display', 'none');
                        } else {
                            element.css('display', 'inline-block');
                        }
                    },
                    click: function(data, element) {
                        //TODO: 审核页面
                        console.log(data);
                        _dialog({
                            title: '项目详情页面',
                            className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                        }).show('弹出对话框');
                    }
                },{
                    name: '合同详情',
                    event: function(data, element,event) {
                        if (data.biddingPrice == '0') {
                            element.css('display', 'none');
                        } else {
                            element.css('display', 'inline-block');
                        }
                    },
                    click: function(data, element) {
                        //TODO: 审核页面
                        console.log(data);
                        _dialog({
                            title: '合同详情页面',
                            className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                        }).show('弹出对话框');
                    }
                },{
                    name: '分润详情',
                    event: function(data, element,event) {
                        if (data.biddingPrice == '0') {
                            element.css('display', 'none');
                        } else {
                            element.css('display', 'inline-block');
                        }
                    },
                    click: function(data, element) {
                        //TODO: 审核页面
                        console.log(data);
                        _dialog({
                            title: '分润详情页面',
                            className: 'modal-lg', // 弹出框大小默认设置（大弹出框）
                        }).show('弹出对话框');
                    }
                }],
            }
            ]
        });

        list.set([
            { projectID: '102299032', projectName: '卡通人偶', firstParty: '企业A', secondParty: 'Bob', creatingDate: '2019-04-08 14:35:05', projectPrice: '80', projectIncome: '0', contractType: '1' },
            { projectID: '003284386', projectName: '四驱车零件', firstParty: '企业B', secondParty: 'Alex', creatingDate: '2019-07-31 09:44:10', projectPrice: '332', projectIncome: '16.6', contractType: '2' },
            { projectID: '102939751', projectName: '飞机模型', firstParty: '企业C', secondParty: 'Charlie', creatingDate: '2019-05-22 21:18:42', projectPrice: '22', projectIncome: '1.1', contractType: '3' },
        ]);//如果想要排序在左侧方括号后加 .sort(desc) !
        
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