import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',()=>{
    let userInfo = ref({});
    localStorage.setItem('token',userInfo.value.token);
    return {
        userInfo,
    }
})