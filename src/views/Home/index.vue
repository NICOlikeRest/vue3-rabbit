<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
// import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试 -->
  <!-- <HomePanel title="新鲜好物" sub-title="111">
    <div>123</div>
  </HomePanel>
    <HomePanel title="人气推荐" sub-title="222">
      <div>456</div>
    </HomePanel> -->
</template>