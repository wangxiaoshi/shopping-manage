define (function (require, exports, module) {

    exports.render = function (params, layout, service) {
        var content = $('<div id="content"></div>');

        var sumChartBox = $('<div id="sumChartBox" class="col-lg-6" style="height:300px;"></div>');
        var sumChartBox2 = $('<div id="sumChartBox2" class="col-lg-6" style="height:300px;" ></div>');

        var box = new _template.basic({
            title: '网站分润统计',
        });
        //INFO栏显示
        var box1 = $ ('<div class="col-md-3 col-sm-6 col-xs-12"><div class="info-box"><span class="info-box-icon"><i class="fa fa-money-bill"></i></span><div class="info-box-content"><span class="info-box-text">总收入</span><span class="info-box-number">93,139</span></div></div></div>');
        var box2 = $ ('<div class="col-md-3 col-sm-6 col-xs-12"><div class="info-box"><span class="info-box-icon"><i class="fa fa-save"></i></span><div class="info-box-content"><span class="info-box-text">下载分润</span><span class="info-box-number">4,232</span></div></div></div>');
        var box3 = $ ('<div class="col-md-3 col-sm-6 col-xs-12"><div class="info-box"><span class="info-box-icon"><i class="fa fa-tasks"></i></span><div class="info-box-content"><span class="info-box-text">项目分润</span><span class="info-box-number">302</span></div></div></div>');
        var box4 = $ ('<div class="col-md-3 col-sm-6 col-xs-12"><div class="info-box"><span class="info-box-icon"><i class="fa fa-calender-day"></i></span><div class="info-box-content"><span class="info-box-text">本月分润</span><span class="info-box-number">54</span></div></div></div>');
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
        //资源增长图表
        var option = {
            title: {
                text: '分润变化',
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
        //资源分类图表
        var option2 = {
            title : {
                text: '分润来源',
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
                data: ['下载分润','项目分润',]
            },
            series : [
                {
                    name: '分润来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:92293, name:'项目分润'},
                        {value:22033, name:'下载分润'},
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