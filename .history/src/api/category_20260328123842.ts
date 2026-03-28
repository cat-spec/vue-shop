import http from "@/utils/http";

export function getCategoryAPI(id:number){
    return http({
        url:`/category`,
        params:{
            id
        }
    })
}
export function getCategoryFilterAPI(id:number){
    return http({
        url:`/category/sub/filter`,
        params:{
            id
        }
    })
}

export function getSubCategoryAPI(params:any){
    return http({
        url:`/category/sub`,
        method:"post",
        params
    })
}