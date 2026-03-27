import { http } from "@/utils/http";

export const testApi(){
    return http.get("home/category/head");
}