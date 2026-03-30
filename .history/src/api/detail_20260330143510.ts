import http from "@/utils/http";

export function getDetail(id:any) {
    return http({
        url:"/goods",
        params:{
            id,
        },
    });
}

export function getHotGoods() {
    return http({
        url:"/goods/hot",
    });
}