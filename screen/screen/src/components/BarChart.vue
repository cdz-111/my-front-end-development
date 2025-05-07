<template>
  <div class="panel bar">
    <h2>柱形图-就业行业</h2>
    <div class="chart" ref="barChart"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    this.initBarChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initBarChart() {
      const myChart = echarts.init(this.$refs.barChart);
      const option = {
        color: ['#2f89cf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          top: '10px',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '旅游行业',
              '教育培训',
              '游戏行业',
              '医疗行业',
              '电商行业',
              '社交行业',
              '金融行业'
            ],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: 10
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: 'rgba(255,255,255,0.6)',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.6)',
                width: 2
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            }
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    handleResize() {
      const barChart = echarts.getInstanceByDom(this.$refs.barChart);
      if (barChart) barChart.resize();
    }
  }
};
</script>