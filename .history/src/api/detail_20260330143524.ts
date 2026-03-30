import http from "@/utils/http";

export function getDetail(id:any) {
    return http({
        url:"/goods",
        params:{
            id,
        },
    });
}

export function getHotGoodsAPI() {
    return http({
        url:"/goods/hot",
    });
}