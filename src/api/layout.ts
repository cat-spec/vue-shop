import http from '@/utils/http';

export function getCategoryList(){
    return http({
        url:'/home/category/head',
        method:'GET'
    })
}