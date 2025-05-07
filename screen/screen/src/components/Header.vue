<template>
  <header>
    <h1>数据可视化-ECharts</h1>
    <div class="show-time">{{ currentTime }}</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currentTime: ''
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const dt = new Date();
      const y = dt.getFullYear();
      const mt = dt.getMonth() + 1;
      const day = dt.getDate();
      const h = dt.getHours();
      const m = dt.getMinutes();
      const s = dt.getSeconds();
      this.currentTime = `当前时间：${y}年${mt}月${day}日-${h}时${m}分${s}秒`;
    }
  }
};
</script>
