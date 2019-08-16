define (function (require, exports, module) {

    exports.render = function (params, layout, service) {
        var content = $('<div id="content"></div>');

        var sumChartBox = $('<div id="sumChartBox" class="col-lg-6" style="height:300px;"></div>');
        var sumChartBox2 = $('<div id="sumChartBox2" class="col-lg-6" style="height:300px;" ></div>');

        var box = new _template.basic({
            title: '网站用户统计',
        });
        //INFO栏显示
        var box1 = $ ('<div class="col-lg-3 col-xs-6"><!-- small box --><div class="small-box"><div class="inner"><h3>150</h3><p>用户总数</p></div><div class="icon"><i class="fa fa-folder-open"></i></div><a href="#" class="small-box-footer">更多信息 <i class="fa fa-arrow-circle-right"></i></a></div></div>');
        var box2 = $ ('<div class="col-lg-3 col-xs-6"><!-- small box --><div class="small-box"><div class="inner"><h3>24</h3><p>本周新增</p></div><div class="icon"><i class="fa fa-plus-square"></i></div><a href="#" class="small-box-footer">更多信息 <i class="fa fa-arrow-circle-right"></i></a></div></div>');
        var box3 = $ ('<div class="col-lg-3 col-xs-6"><!-- small box --><div class="small-box"><div class="inner"><h3>51</h3><p>本月新增</p></div><div class="icon"><i class="fa fa-folder-open"></i></div><a href="#" class="small-box-footer">更多信息 <i class="fa fa-arrow-circle-right"></i></a></div></div>');
        var box4 = $ ('<div class="col-lg-3 col-xs-6"><!-- small box --><div class="small-box"><div class="inner"><h3>39</h3><p>在线用户</p></div><div class="icon"><i class="fa fa-folder-open"></i></div><a href="#" class="small-box-footer">更多信息 <i class="fa fa-arrow-circle-right"></i></a></div></div>');
        box.body.append (box1);
        box.body.append (box2);
        box.body.append (box3);
        box.body.append (box4);

        box.body.append (sumChartBox);
        box.body.append (sumChartBox2);
        //
        content.append(box.html);
        // content.append(sumChartBox);
        layout.append (content);

        var myChart = echarts.init(document.getElementById('sumChartBox')); //声明一个ehcarts对象
        var myChart2 = echarts.init(document.getElementById('sumChartBox2')); //声明一个ehcarts对象
        //用户增长图表
        var option = {
            title: {
                text: '用户总数变化',
                left: 'center',
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };
        //用户分类图表
        var option2 = {
            title : {
                text: '用户类型',
                //subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['老师','学生','企业个人代表','企业用户','专业人士']
            },
            series : [
                {
                    name: '用户类型',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'老师'},
                        {value:310, name:'学生'},
                        {value:234, name:'企业个人代表'},
                        {value:135, name:'企业用户'},
                        {value:1548, name:'专业人士'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        
        myChart.setOption(option);
        myChart2.setOption(option2);
    }
});