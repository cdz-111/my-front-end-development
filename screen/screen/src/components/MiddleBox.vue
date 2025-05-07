<template>
  <div class="column">
    <div class="no">
      <div class="no-hd">
        <ul>
          <li>12434</li>
          <li>10983</li>
        </ul>
      </div>
      <div class="no-bd">
        <ul>
          <li>前端需求人数</li>
          <li>市场供应人数</li>
        </ul>
      </div>
    </div>
    <div class="map">
      <div class="map1"></div>
      <div class="map2"></div>
      <div class="map3"></div>
      <!-- 添加 id="main" -->
      <div id="main" class="main"></div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import china from '@/assets/china.json'
import { ref, onMounted, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    function getChina(china) {
      const myChart = echarts.init(document.getElementById("main"));
      myChart.hideLoading();
      echarts.registerMap('china', china);
      const option = {
      
        title: {
          text: '前端需求人数',
          subtext: '',
          left: 'center',
          top: 10,
          textStyle: {
            color: 'white',
            fontSize: 20
          }
        },
        visualMap: {

          min: 0,
          max: 100,
          bottom: 100,
          text:['高', '低'],
          textStyle:{
            color: 'white',
            fontSize: 10
          },
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            name: '前端需求人数',
            type: 'map',
            map: 'china',
            top: 40,
            
            label: {
              show: true,
              textStyle:{
                color: 'white',
                fontSize: 8
              }
            },
            data: [
              { 'name': '新疆维吾尔自治区', 'value': 76 },
              { 'name': '西藏自治区', 'value': 64 },
              { 'name': '内蒙古自治区', 'value': 48 },
              { 'name': '青海省', 'value': 21 },
              { 'name': '四川省', 'value': 9 },
              { 'name': '黑龙江省', 'value': 86 },
              { 'name': '甘肃省', 'value': 2 },
              { 'name': '云南省', 'value': 21 },
              { 'name': '广西壮族自治区', 'value': 2 },
              { 'name': '湖南省', 'value': 24 },
              { 'name': '陕西省', 'value': 35 },
              { 'name': '广东省', 'value': 50 },
              { 'name': '吉林省', 'value': 42 },
              { 'name': '河北省', 'value': 60 },
              { 'name': '湖北省', 'value': 29 },
              { 'name': '贵州省', 'value': 94 },
              { 'name': '山东省', 'value': 57 },
              { 'name': '江西省', 'value': 98 },
              { 'name': '河南省', 'value': 63 },
              { 'name': '辽宁省', 'value': 51 },
              { 'name': '山西省', 'value': 78 },
              { 'name': '安徽省', 'value': 7 },
              { 'name': '福建省', 'value': 4 },
              { 'name': '浙江省', 'value': 25 },
              { 'name': '江苏省', 'value': 46 },
              { 'name': '重庆市', 'value': 69 },
              { 'name': '宁夏回族自治区', 'value': 41 },
              { 'name': '海南省', 'value': 87 },
              { 'name': '台湾省', 'value': 12 },
              { 'name': '北京市', 'value': 36 },
              { 'name': '天津市', 'value': 82 },
              { 'name': '上海市', 'value': 45 },
              { 'name': '香港特别行政区', 'value': 90 },
              { 'name': '澳门特别行政区', 'value': 46 },
            ],
          }
        ]
      };
      myChart.setOption(option);
    }
    const chartDom = document.getElementById("main");
    if (chartDom) {
      getChina(china);
    } else {
      console.error("未找到 id 为 main 的 DOM 元素");
    }
  });
});
</script>

<style scoped>
.main {
  width: 500px;
  height: 500px;

}
</style>