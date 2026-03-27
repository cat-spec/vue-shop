<template>
   <div>
     <h2>服饰</h2>
    <div class="box">
        <div class="left">

        </div>
        <div class="right">
            <div class="rightchild" v-for="value in 8">
                <div>{{ value }}</div>
            </div>
        </div>
    </div>


   </div>
    
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>
<style scoped lang="scss">
.box{
    display: flex;
    height: 400px;
}
.left{
    width: 20%;
    background-color: aqua;
}
.right{
    margin: 10px 10px;
    width: 80%;
    background-color: aquamarine;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.rightchild{
    width: 22%;
    height: 44%;
    padding: 10px 10px;
   background-color: black;
}
</style>