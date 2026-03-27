<template>
   <div v-for="item in goodsList" :key="item.id">
     <h2>{{ item.name }}</h2>
    <div class="box">
        <div class="left">
            <img style="width: 100%;height: 100%;" v-img-lazy="item.picture" alt="">
        </div>
        <div class="right">
            <div class="rightchild" v-for="item1 in item.goods">
                <img style="width: 100%;height: 100%;" v-img-lazy="item1.picture" alt="">
                <div>{{ item1.name }}</div>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
import { getGoodsAPI } from '@/api/home'
let goodsList = ref([])
onMounted(async () => {
    let {result} = await getGoodsAPI()
    goodsList.value = result
})


</script>
<style scoped lang="scss">
.box{
    display: flex;
    height: 400px;
}
.left{
    width: 20%;
    // background-color: aqua;
}
.right{
    // margin: 10px 10px;
    width: 80%;
    // background-color: aquamarine;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.rightchild{
    width: 22%;
    // overflow: hidden;
    height: 44%;
    // padding: 10px 10px;
    margin: 10px 10px;
//    background-color: black;
}
</style>