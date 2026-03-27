<template>
  <div class="home">
    <div class="home-banner-container">
      <HomeCategory></HomeCategory>
      <HomeBanner></HomeBanner>
    </div>
    <HomePanel title="新鲜好物">
      <HomeThing></HomeThing>
    </HomePanel>
    <HomePanel title="人气推荐">
      <HomeRecommend></HomeRecommend>
    </HomePanel>
    <HomeList></HomeList>

   
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomePanel from "./components/HomePanel.vue";
import HomeThing from "./components/HomeThing.vue";
import HomeRecommend from "./components/HomeRecommend.vue";
import HomeList from "./components/HomeList.vue";

</script>
<style scoped lang="less">
.home {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
}

.home-banner-container {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
}
</style>
