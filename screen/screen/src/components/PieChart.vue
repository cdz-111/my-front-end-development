<template>
  <div class="panel pie">
    <h2>饼形图-年龄分布</h2>
    <div class="chart" ref="pieChart"></div>
    <div class="panel-footer"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  name: 'PieChart1',
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const myChart = echarts.init(this.$el.querySelector('.chart'));

      const option = {
        color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 0,
          left: 10,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "10"
          }
        },
        series: [
          {
            name: '年龄分布',
            type: 'pie',
            center: ["50%", "42%"],
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1, name: "0岁以上" },
              { value: 4, name: "20 - 29岁" },
              { value: 2, name: "30 - 39岁" },
              { value: 2, name: "40 - 49岁" },
              { value: 1, name: "50岁以上" }
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

<style scoped>

</style>