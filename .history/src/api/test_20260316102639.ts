import http from "@/utils/http";

export async function testApi(params:any) {
    return http.get("home/category/head",{params});
}