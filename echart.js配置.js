var years = [2017, 2018];
var myData = ['前山', '拱北', '白藤', '新青','三灶','平沙','南水','富山','南区'];
var dataMan = [4100, 5000, 4800, 5500];
var test = [1000, 2000, 3000, 4000];
var test1 = [2000, 3000, 6000, 10000];

//正负柱状图
option = {
    /* baseOption 开始 */
    baseOption: {
        timeline: {
            show: false,
            data: [], // timeline.data 中的每一项，对应于 options 数组中的每个 option。
        },
        backgroundColor: '#fff', // 背景色
        title: [
            {
                text: '产水量统计', // 标题文本
                top: '3%',
                left: 'center', // 标题距左侧距离
                textStyle: { // 标题文本样式
                    color: '#004078',
                    fontSize: 18
                },
            },
            {
                text: '公司总产水量:18000万吨', // 标题文本
                top: '3%',
                left: '3%', // 标题距左侧距离
                textStyle: { // 标题文本样式
                    color: '#007edf',
                    fontSize: 18
                },
            },
            {
                text: '公司任务完成率:70%', // 标题文本
                top: '3%',
                right: '3%', // 标题距左侧距离
                textStyle: { // 标题文本样式
                    color: '#007edf',
                    fontSize: 18
                },
            },
        ],
        legend: [
            { // 图例
                top: '5%', // 图例距离顶部距离
                left: '25%', // 图例距离左侧距离(此处水平居中)
                textStyle: { // 图例文本样式
                    color: '#000',
                },
                data: ['2018','2019'] // 图例的数据数组,一般对应系列名称,即 series.name
            },
            { // 图例
                top: '5%', // 图例距离顶部距离
                right: '25%', // 图例距离左侧距离(此处水平居中)
                textStyle: { // 图例文本样式
                    color: '#000',
                },
                data: ['生产任务','任务完成率'] // 图例的数据数组,一般对应系列名称,即 series.name
            }
        ],
        // tooltip: { // 提示框
        //     show: true,
        //     trigger: 'axis',
        //     axisPointer: { // 坐标轴指示器配置项。
        //         type: 'shadow', // 'line' 直线指示器;'shadow' 阴影指示器.
        //     },
        //     formatter: '{b}<br/>{a}: {c}元' // 提示框所提示的文本内容
        // },
        // 网格grid区域
        grid: [
            {
                show: false, // 男士grid区域
                left: '5%',
                top: '10%',
                bottom: '20%',
                containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
                width: '42%', // grid 组件的宽度。默认自适应。
            },
            {
                show: false, // 中间区域(本区,本市,省内,省外)
                left: '52.5%',
                top: '10%',
                bottom: '20%',
                //width: '10%',
                tooltip: {
                    show: false // 中间部分的提示框不显示也没必要显示
                }
            },
            {
                show: false, // 女士grid区域
                right: '5%',
                top: '10%',
                bottom: '20%',
                containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
                width: '42%', // grid 组件的宽度。默认自适应。
            }
        ],
        // X轴线配置
        xAxis: [
            {
                inverse: true, // 是否是反向坐标轴.[ default: false ]
                axisLine: {
                    show: false, // 轴线不显示
                },
                axisTick: {
                    show: false, // 轴线刻度不显示
                },
                axisLabel: { // 轴线刻度标签
                    show: false, // 显示刻度标签
                },
                splitLine: { // 垂直于X轴的分隔线
                    show: false, // 显示分隔线
                },
                // 强制设置坐标轴分割间隔
                interval: 2000,
                min: 0, // 最小值
                max: 8000 // 最大值
            },
            { // 中间区域
                gridIndex: 1,
                show: false, // 中间部分不显示X轴
            },
            { // 右侧区域
                gridIndex: 2,
                type: 'value',
                position: 'top',
                inverse: false, // 是否是反向坐标轴.[ default: false ]
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
                // 强制设置坐标轴分割间隔
                interval: 2000,
                min: 0, // 最小值
                max: 8000 // 最大值
            }
        ],
        // Y轴线配置
        yAxis: [
            { // 左侧区域
                gridIndex: 0, // y 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
                type: 'category', // 轴线类型: 类目轴
                // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
                boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
                inverse: true, // 是否是反向坐标轴.[ default: false ]
                position: 'right', // y轴的位置。'left' or 'right'
                axisLine: {
                    show: false // y轴线不显示
                },
                axisTick: {
                    show: false, // y轴线刻度不显示
                    lineStyle: { // 刻度线样式
                        color: '#fff'
                    }
                },
                axisLabel: {
                    show: false, // 刻度标签不显示
                },
                data: myData // Y轴(这里是类目轴)的类目数据
            },
            {
                gridIndex: 1, // 中间区域
                type: 'category',
                boundaryGap: true,
                inverse: true,
                position: 'left', // y轴的位置。'left' or 'right'
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true, // 显示中间部分的Y轴刻度标签
                    textStyle: { // 标签样式
                        color: '#000',
                        fontSize: 18,
                    },
                },
                data: myData
            },
            { // 右侧区域
                gridIndex: 2,
                type: 'category',
                boundaryGap: true,
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: myData
            }
        ],
        series: []
    },
    options: [
        {
        series: [
            {
                name: '2018', // 系列名称
                type: 'bar',
                barGap: 0, // 柱间距离
                barWidth: 10, // 男士柱子宽度
                xAxisIndex: 0, // 对应在X轴的grid索引
                yAxisIndex: 0, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        textStyle: { // 柱子上数字样式
                            color: '#000',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#199ed8', // 普通状态下柱条颜色
                    },
                },
                data: dataMan, // 系列中的数据内容数组
            },
            {
                name: '2019', // 系列名称
                type: 'bar',
                barGap: 0.3, // 柱间距离
                barWidth: 10, // 男士柱子宽度
                xAxisIndex: 0, // 对应在X轴的grid索引
                yAxisIndex: 0, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        textStyle: { // 柱子上数字样式
                            color: '#000',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#68cc80', // 普通状态下柱条颜色
                    },
                },
                data: dataMan, // 系列中的数据内容数组
            },
            {
                name: '生产任务', // 系列名称
                type: 'bar',
                barWidth: 10, // 女士柱子宽度
                xAxisIndex: 2, // 对应在X轴的grid索引
                yAxisIndex: 2, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                        textStyle: { // 柱子上数字样式
                            color: '#fff',
                            fontSize: 10,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        textStyle: { // 柱子上数字样式
                            color: '#fff',
                            fontSize: 10,
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#199ed8', // 普通状态下柱条颜色
                    },
                },
                data: test1, // 系列中的数据内容数组
            },
             {
                name: '任务完成率', // 系列名称
                type: 'bar',
                barGap: "-100%", /*这里设置包含关系，只需要这一句话*/
                barWidth: 10, // 女士柱子宽度
                xAxisIndex: 2, // 对应在X轴的grid索引
                yAxisIndex: 2, // 对应在Y轴的grid索引
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        textStyle: { // 柱子上数字样式
                            color: '#fff',
                            fontSize: 10,
                        },
                        formatter: (params) =>{
                            return (params.value / test1[params.dataIndex]).toFixed(2) * 100 + '%'
                        },
                    },
                },
                itemStyle: { // 柱条样式。
                    normal: {
                        color: '#68cc80', // 普通状态下柱条颜色
                    },
                },
                data: test, // 系列中的数据内容数组
            },
        ]
    }]
};

// -----------------------------------

//有中间线markLine的折线图(两条线))
item.echartOption = {
    tooltip:{
        show:true,
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            interval: 0,  //设置这里
            margin: 10
        },
        data: item.myDate
    },
    yAxis: {
        splitNumber: 8,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#003047',
                width: 1,
                type: 'solid'
            }
        },
    },
    grid: {
        x: 60,
        y: 50,
        x2: 40,
        y2: 60,
    },
    legend: {
        icon: 'roundRect',
        top: 20,
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 11,
        },
        data: ['化验浓度', '年均浓度']
    },
    series: [
        {
            name: '化验浓度',
            data: item.testmm,
            type: 'line',
            symbol: 'circle', //折线点设置为实心点
            symbolSize: 8, //折线点的大小
            itemStyle: {
                normal: {
                    color: "#06cbe7", //折线点的颜色
                    lineStyle: {
                        color: "#06cbe7" //折线的颜色
                    }
                }
            },
        },
        {
            name: '年均浓度',
            data: item.testmm,
            type: 'line',
            symbol: 'circle', //折线点设置为实心点
            symbolSize: 0, //折线点的大小
            itemStyle: {
                normal: {
                    color: "#68cc80", //折线点的颜色
                    lineStyle: {
                        color: "#68cc80", //折线的颜色
                        width: 0
                    }
                }
            },
            markLine: {
                silent:false,
                symbol: "none", //去掉警戒线最后面的箭头
                data: [{
                    name:'平均值',
                    type : 'average',
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    lineStyle: { //警戒线的样式  ，虚实  颜色
                        normal: {
                            type: "solid",
                            color: "#68cc80",
                            width: 2
                        }
                    },
                    //yAxis: {type : 'average', name: '平均值'} // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                }]
            }
        },]
};


//-------------------------------------------

//折线图(多条线))
option = {
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#034d72',
            }
        },
        
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        splitNumber: 8,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine:{
            lineStyle:{
                color: '#034d72'
            }
        },
         splitLine: {
            show: true,
            lineStyle:{
                 width: 1,
                type: 'solid'
            }
        },
    },
    legend:{
        icon:'roundRect',
        orient:'vertical',
        selectedMode:'single',
        top:'center',
        itemGap:30,
        right:0,
        align:'right',
        textStyle:{
            color:'#fff',
            fontWeight:'bold',
            fontSize: 16,
        },
        data:['COD','BOD','NH3N','SS','TP','TN']
    },
    series: [{
        name:'COD',
        data: [1211, 1222, 333,234, 225, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#00cc00",//折线点的颜色
               lineStyle: {
               color: "#00cc00"//折线的颜色
              }
            }
          },
          markLine : {
				symbol:"none",               //去掉警戒线最后面的箭头
				label:{
				    show:false,
					position:"start"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
				},
                data : [{
					silent:false,             //鼠标悬停事件  true没有，false有
					lineStyle:{               //警戒线的样式  ，虚实  颜色
                        type:"solid",
						color:"#68cc80",
						width:2
					},
					yAxis: 800           // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
				}]
            }
    },
    {
        name:'BOD',
        data: [320, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#009966",//折线点的颜色
               lineStyle: {
               color: "#009966"//折线的颜色
              }
            }
          }
    },
    {
        name:'NH3N',
        data: [820, 421, 901, 142, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#00cccc",//折线点的颜色
               lineStyle: {
               color: "#00cccc"//折线的颜色
              }
            }
          }
    },
    {
        name:'SS',
        data: [820, 932, 901, 934, 190, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#0066ff",//折线点的颜色
               lineStyle: {
               color: "#0066ff"//折线的颜色
              }
            }
          }
    },
    {
        name:'TP',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#0000ff",//折线点的颜色
               lineStyle: {
               color: "#0000ff"//折线的颜色
              }
            }
          }
    },
    {
        name:'TN',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',//折线点设置为实心点
          symbolSize: 8,   //折线点的大小
          itemStyle: {
             normal: {
               color: "#9900ff",//折线点的颜色
               lineStyle: {
               color: "#9900ff"//折线的颜色
              }
            }
          }
    }]
};

//-------------------------------------------------

//tooltip显示类目所有选项，并把选中区域显示为shadow/line
var option = {
    tooltip: {// 提示
        trigger: 'axis',
        axisPointer: {
            type : 'shadow',
            crossStyle: {
                color: '#999'
            }
        },
        formatter : function(params, ticket, callback) {
            if (params.value == undefined || params.value !== params.value) {
                params.value = 0;
            }
            return  params.seriesName +" <br />" + params.name + ":" + params.value + "%";        
        }
    },
    legend: {// 类目显示
        icon: 'roundRect',
        orient: 'vertical',
        selectedMode: 'single',
        top: 'center',
        itemGap: 10,
        right: 0,
        textStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
        },
        data: ['COD', 'BOD', 'NH3N', 'SS', 'TP']
    },
    series: [
        {
            barWidth: 20,
            data:  ["47", "59", "95", "74",],
            name: "总量",
            type: "bar",
        },
        {
            barGap: "-100%", // 柱状图重贴但不互相叠加
            barWidth: 20,
            data: ["27", "24", "43", "10", ],
            name: "分量",
            type: "bar"
        }
    ]
}


// 柱状图重贴但不互相叠加 --- https://www.cnblogs.com/sllzhj/p/10711644.html



