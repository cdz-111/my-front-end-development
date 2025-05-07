<template>
    <div class="panel pie2">
        <h2>饼形图-地区分布</h2>
        <div class="chart" ref="pie2Chart"></div>
        <div class="panel-footer"></div>
    </div>
</template>


<script>
import * as echarts from 'echarts';

export default {
    name: 'PieChart2',
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const myChart = echarts.init(this.$el.querySelector('.chart'));

            const option = {
                color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    bottom: 0,
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: 10
                    }
                },
                series: [
                    {
                        name: '地区分布',
                        type: 'pie',
                        radius: ["10%", "60%"],
                        center: ['50%', '40%'],
                        roseType: 'radius',
                        label: {
                            fontsize: 10
                        },
                        labelLine: {
                            length: 6,
                            length2: 8
                        },
                        data: [
                            { value: 26, name: '北京' },
                            { value: 24, name: '山东' },
                            { value: 25, name: '河北' },
                            { value: 20, name: '江苏' },
                            { value: 25, name: '浙江' },
                            { value: 30, name: '四川' },
                            { value: 42, name: '湖北' }
                        ]
                    }
                ]
            };

            myChart.setOption(option);

            window.addEventListener('resize', function () {
                myChart.resize();
            });
        }
    }
};
</script>

<style scoped></style>