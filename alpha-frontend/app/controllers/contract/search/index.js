define(function (require, exports, module) {   
   

    exports.render = function (params, layout, service) {
        var content = $('<div id="createorder"></div>');
        var contentA = $('<div  id="contentA"><div class="content_list"></div><div>');
        var contentB = $('<div  id="contentB" style="display: none"><div class="content_list"></div></div>');
        var searchValue = new DevUI.form({
            type: 'all',
        });

        searchValue.setOptions([
            {
                key: 'contractId',
                type: 'input',
                box: {
                    size: '3/9',
                    lable: '合同编号: ',
                    className: 'contractId',
                },
                element: {
                    verify: {
                        text: '编号',
                        //rules: 'notNull'
                    },
                    placeholder: '请输入合同编号',
                }

            }
        ]);

        var seachBtn = $('<div class="seachBtn"><button class="btn btn-info" >搜索</button></div>');

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
                showName: ' - 合同状态 - ',
                data: null,
            },
            setKey: 'label',          
            getKey: 'object', 
            "default": null,         
            // 是否只读
            readonly: false,
            placeholder: '- 合同状态 -',  // 当未选值时,元素显示内容
            onChange: function () { }, // 当值发生改变时,调用方法
            onError: function () { } // 当值发生错误时(不符合验证时),调用方法
        });
        // 改变Data对象，根据字符串
        roleSel.setData("OptionSide:contractType");
        // 可异步绑定的change方法
        roleSel.onChange(function(value){
            //FIXME:
            console.log(roleSel.get(value));
        });

        searchValue.html.append(seachBtn);
        searchValue.html.append(roleSel.html);
        content.append(searchValue.html);

        var tableBoxA = new _template.basic({
            title: '合同列表',
        });        
        var addContract = $('<div class="btn btn-default btn-sm tabTitleButton" style="text-align: right;position: absolute;right: 15px;top: 7px;" ><i class="fa fa-plus-square">新建合同</i></div>');
        tableBoxA.title.append(addContract);
        addContract.unbind().bind('click', function () {
            location.href = 'index.html#/contract/create';
        });

        var listA = _table({
            config: [{
                width: '15',
                type: 'string',
                name: '合同编号',
                setValueByDataKey: 'contractId',
            },
            {
                width: '15',
                type: 'date:YYYY年MM月DD日',
                name: '合同签订日期',
                setValueByDataKey: 'createTime',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'date:YYYY年MM月DD日',
                name: '开始时间',
                setValueByDataKey: 'startTime',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'date:YYYY年MM月DD日',
                name: '结束时间',
                setValueByDataKey: 'endTime',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'string',
                name: '合同名称',
                setValueByDataKey: 'contractName',
                format: function (data, element) {

                },
            },
            {
                width: '10',
                type: 'options:contractType',
                name: '合同状态',
                setValueByDataKey: 'contractStatus',
                format: function (data, element) {

                },
            }, {
                width: '15',
                type: 'string',
                name: '签订地址',
                setValueByDataKey: 'contractSigningAddress',
                format: function (data, element) {

                },
            }, {
                width: '25',
                type: 'buttons',
                name: '操作',
                setValueByDataKey: 'buttons',
                setting: [{
                    name: '查看进度',
                    event: function (data, element, event) {
                        //    element.addClass('read');
                    },
                    click: function (data, element) {
                        console.log(data)
                        location.href = 'index.html#/contract/statusenquiry/'+data.contractId; 
                       
                    },
                }],
            }

            ]
        })
        var getPaging = function (data, callBack) {

            service.contractformlist(data.pageInfo, function (res) {
                callBack(res);
                //res.totalRecord = res.count;
                console.log(res);
            })
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
                listA.set(result);
            }

        });
        var tableBoxB = new _template.basic({
            title: '合同列表',
        });        
        var listB = _table({
            config: [{
                width: '15',
                type: 'string',
                name: '合同编号',
                setValueByDataKey: 'contractId',
            },
            {
                width: '15',
                type: 'date:YYYY年MM月DD日',
                name: '合同签订日期',
                setValueByDataKey: 'createTime',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'date:YYYY年MM月DD日',
                name: '开始时间',
                setValueByDataKey: 'startTime',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'date:YYYY年MM月DD日',
                name: '结束时间',
                setValueByDataKey: 'endTime',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'string',
                name: '合同名称',
                setValueByDataKey: 'contractName',
                format: function (data, element) {

                },
            },
            {
                width: '15',
                type: 'options:contractType',
                name: '合同状态',
                setValueByDataKey: 'contractStatus',
                format: function (data, element) {

                },
            }, {
                width: '15',
                type: 'string',
                name: '签订地址',
                setValueByDataKey: 'contractSigningAddress',
                format: function (data, element) {

                },
            }, {
                width: '25',
                type: 'buttons',
                name: '操作',
                setValueByDataKey: 'buttons',
                setting: [{
                    name: '查看进度',
                    event: function (data, element, event) {
                        //    element.addClass('read');
                    },
                    click: function (data, element) {
                        console.log(data)
                        location.href = 'index.html#/contract/statusenquiry/'+data.contractId; 
                       
                    },
                }],
            }

            ]
        })
        var _data = false;
        seachBtn.unbind().bind('click', function () {
            _data = searchValue.get();
            if (_data) {
                $('#contentA').css('display', 'none');
                $('#contentB').css('display', 'block');
                var getPaging = function (data, callBack) {
                    data.pageInfo.queryParam = {
                        contractId: _data.contractId,
                    }
                    service.contractformlist(data.pageInfo, function (res) {
                        callBack(res);
                        //res.totalRecord = res.count;
                        console.log(res);
                    })
                };

                var pagingB = _paging({
                    data: {
                        pageInfo: {
                            index: '1',
                            count: '10'
                        }
                    },
                    ajaxEvent: getPaging,
                    success: function (result) {
                        for (var i = 0; i < result.length; i++) {
                            var element = result[i];
                            if (element.contractStatus == '1') {
                                element.statusWord = '跟进中';
                            } else if (element.contractStatus == '2') {
                                element.statusWord = '已结单'
                            }
                        }
                        listB.set(result);
                    }

                });
                tableBoxB.body.append(listB.html);
                pagebox.empty().append(pagingB.render());
                tableBoxB.footer(pagebox);
                contentB.append(tableBoxB.html);
            } else {
                $('#contentB').css('display', 'none');
                $('#contentA').css('display', 'block');
            };
        })

        listA.set([
            {contractId: '00001', createTime: '2018-05-11',startTime: '2018-05-12', endTime: '2019-09-01', contractName: '飞机模型', contractStatus: '2', contractSigningAddress: '长春'},
            {contractId: '00002', createTime: '2018-08-23',startTime: '2018-08-25', endTime: '2018-10-24', contractName: '人体模型', contractStatus: '3', contractSigningAddress: '北京'},

        ])

        var pagebox = $('<div style="text-align:center;"></div>');
        tableBoxA.body.append(listA.html);
        pagebox.append(paging.render());
        tableBoxA.footer(pagebox);
        contentA.append(tableBoxA.html);
        content.append(contentA);
        content.append(contentB);
        layout.append(content);
      
    }
});