<template>
  <div>
    <Header />
    <section class="mainbox">
      <div class="column">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
      <MiddleBox />
      <div class="column">
        <BarChart2 />
        <LineChart2 />
        <PieChart2 />
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import BarChart from '@/components/BarChart.vue';
import BarChart2 from '@/components/BarChart2.vue';
import LineChart from '@/components/LineChart.vue';
import LineChart2 from '@/components/LineChart2.vue';
import PieChart from '@/components/PieChart.vue';
import PieChart2 from '@/components/PieChart2.vue';
import MiddleBox from '@/components/MiddleBox.vue';


export default {
  components: {
    Header,
    BarChart,
    BarChart2,
    LineChart,
    LineChart2,
    PieChart,
    PieChart2,
    MiddleBox,

  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
@font-face {
  font-family: electronicFont;
  src: url(@/assets/font/DS-DIGIT.TTF);
}
body {
  background: url(@/assets/images//bg.jpg) no-repeat top center;
  line-height: 1.15;
}
header {
  position: relative;
  height: 1.25rem;
  background: url(@/assets/images/head_bg.png) no-repeat;
  background-size: 100% 100%;
}
header h1 {
  font-size: 0.475rem;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  line-height: 1rem;
}
header .show-time {
  position: absolute;
  top: 0;
  right: 0.375rem;
  line-height: 0.9375rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.25rem;
}
.mainbox {
  display: flex;
  min-width: 1024px;
  max-height: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
}
.mainbox .column {
  flex: 3;
}
.mainbox .column:nth-child(2) {
  flex: 5;
  margin: 0 0.125rem 0.1875rem;
  overflow: hidden;
}
.mainbox .panel {
  position: relative;
  height: 3.875rem;
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url(@/assets/images/line.png) rgba(255, 255, 255, 0.03);
}
.mainbox .panel::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: '';
}
.mainbox .panel::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: '';
}
.mainbox .panel .panel-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.mainbox .panel .panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: '';
}
.mainbox .panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: '';
}
.mainbox .panel h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
  font-weight: 400;
}
.mainbox .panel h2 a {
  color: #a7a7a7;
  text-decoration: none;
  margin: 0 0.125rem;
}
.mainbox .panel h2 .a-active {
  color: #fff;
}
.mainbox .panel .chart {
  height: 3rem;
}
.no {
  background-color: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
}
.no .no-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.no .no-hd::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.375rem;
  height: 0.125rem;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  content: '';
}
.no .no-hd::after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.375rem;
  height: 0.125rem;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  content: '';
}
.no .no-hd ul {
  display: flex;
}
.no .no-hd ul li {
  position: relative;
  flex: 1;
  line-height: 1rem;
  font-size: 0.875rem;
  color: #ffeb7b;
  text-align: center;
  font-family: electronicFont;
}
.no .no-hd ul li:first-child::after {
  content: '';
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}
.no .no-bd ul {
  display: flex;
}
.no .no-bd ul li {
  flex: 1;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.225rem;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-top: 0.125rem;
}
.map {
  position: relative;
  height: 10.125rem;
}
.map .map1 {
  width: 6.475rem;
  height: 6.475rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(@/assets/images/map.png);
  background-size: 100% 100%;
  opacity: 0.3;
}
.map .map2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8.0375rem;
  height: 8.0375rem;
  background: url(@/assets/images/lbx.png);
  background-size: 100% 100%;
  animation: rotate1 15s linear infinite;
  opacity: 0.6;
}
.map .map3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7.075rem;
  height: 7.075rem;
  background: url(@/assets/images/jt.png);
  background-size: 100% 100%;
  animation: rotate2 15s linear infinite;
}
.map .chart {
  position: absolute;
  top: 0;
  left: 0;
  height: 10.125rem;
  width: 100%;
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate2 {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
/* 约束屏幕尺寸 */
@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}

</style>