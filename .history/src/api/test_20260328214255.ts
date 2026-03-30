import http from "@/utils/http";

export async function testApi(params:any) {
    return http({
        url:"/home/category/head",
        method:"get",
    });
}