<template>
    <div class="panel bar2">
        <h2>柱形图-就业行业</h2>
        <div class="chart" ref="bar2Chart"></div>
        <div class="panel-footer"></div>
    </div>
</template>

<script>
import * as echarts from "echarts";

export default {
    mounted() {
        this.initBar2Chart();
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        initBar2Chart() {
            const myChart = echarts.init(this.$refs.bar2Chart);
            const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
            const option = {
                grid: {
                    top: '10%',
                    left: '30%',
                    right: '20%',
                    bottom: '10%'
                },
                xAxis: {
                    show: false
                },
                yAxis: [
                    {
                        type: 'category',
                        inverse: true,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#fff'
                        },
                        data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE']
                    },
                    {
                        inverse: true,
                        show: true,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#fff'
                        },
                        data: [702, 350, 610, 793, 664]
                    }
                ],
                series: [
                    {
                        name: '条',
                        type: 'bar',
                        barCategoryGap: 50,
                        barWidth: 10,
                        yAxisIndex: 0,
                        itemStyle: {
                            barBorderRadius: 20,
                            color: function (params) {
                                return myColor[params.dataIndex];
                            }
                        },
                        data: [70, 34, 60, 78, 69],
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}%'
                        }
                    },
                    {
                        name: '框',
                        type: 'bar',
                        barCategoryGap: 50,
                        barWidth: 14,
                        yAxisIndex: 1,
                        itemStyle: {
                            color: 'none',
                            borderColor: '#00c1de',
                            borderWidth: 2,
                            barBorderRadius: 15
                        },
                        data: [100, 100, 100, 100, 100]
                    }
                ]
            };
            myChart.setOption(option);
        },
        handleResize() {
            const bar2Chart = echarts.getInstanceByDom(this.$refs.bar2Chart);
            if (bar2Chart) bar2Chart.resize();
        }
    }
};
</script>