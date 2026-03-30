import http from "@/utils/http";

export function getDetail(id:any) {
    console.log(id)
    return http({
        url:"/goods",
        params:{
            id,
        },
    });
}
