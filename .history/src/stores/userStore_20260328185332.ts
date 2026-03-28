import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',()=>{
    // 从本地存储读取token
    let token = ref(localStorage.getItem('token') || '');
    let userInfo = ref({});
    
    // 存储token到本地
    const setToken = (newToken: string) => {
        token.value = newToken;
        console.log('------------------------------')
        console.log('token',token.value);
        localStorage.setItem('token', newToken);
    };
    
    // 清除token
    const clearToken = () => {
        token.value = '';
        localStorage.removeItem('token');
    };
    
    // 设置用户信息
    const setUserInfo = (info: any) => {
        userInfo.value = info;
    };
    
    return {
        userInfo,
        token,
        setToken,
        clearToken,
        setUserInfo
    }
})