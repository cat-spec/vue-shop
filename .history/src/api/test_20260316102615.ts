import http from "@/utils/http";

export  function testApi(params:any) {
    return http.get("home/category/head",{params});
}