<template>
  <div class="layout-nav">
    <div>请先登录</div>
    <div>帮助中心</div>
    <div>联系我们</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="scss">
.layout-nav{
    background-color: black;
    height: 60px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

}
</style>