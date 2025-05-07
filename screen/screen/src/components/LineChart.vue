<template>
  <div class="panel line">
    <h2>
      折线图-人员变化
      <a class="a-active" href="javascript:;" @click="switchYear(0)">2020</a>
      <a href="javascript:;" @click="switchYear(1)">2021</a>
    </h2>
    <div class="chart" ref="lineChart"></div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
import $ from 'jquery';

export default {
  data() {
    return {
      yearData: [
        {
          year: '2020',
          data: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ]
        },
        {
          year: '2021',
          data: [
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
          ]
        }
      ]
    };
  },
  mounted() {
    this.initLineChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initLineChart() {
      const myChart = echarts.init(this.$refs.lineChart);
      const option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: '#4c9bfd'
          },
          right: '10%'
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          show: true,
          borderColor: '#012f4a'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#4c9bfb'
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#4c9bfb'
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#012f4a'
            }
          }
        },
        series: [
          {
            type: 'line',
            smooth: true,
            name: '新增粉丝',
            data: this.yearData[0].data[0]
          },
          {
            type: 'line',
            smooth: true,
            name: '新增游客',
            data: this.yearData[0].data[1]
          }
        ]
      };
      myChart.setOption(option);
      this.myLineChart = myChart;
    },
    handleResize() {
      const lineChart = echarts.getInstanceByDom(this.$refs.lineChart);
      if (lineChart) lineChart.resize();
    },
    switchYear(index) {
      const obj = this.yearData[index];
      const option = this.myLineChart.getOption();
      option.series[0].data = obj.data[0];
      option.series[1].data = obj.data[1];
      $('.line h2 a').removeClass('a-active');
      $(`.line h2 a:eq(${index})`).addClass('a-active');
      this.myLineChart.setOption(option);
    }
  }
};
</script>