import http from '@/utils/http';

export function getBannerAPI() {
  return http({
    url: '/home/banner',
    method: 'GET',
  })
}

export function getThingAPI(): Promise<any> {
  return http({
    url: '/home/new',
    method: 'GET',
  })
}

export function getGoodsAPI(): Promise<any> {
  return http({
    url: '/home/goods',
    method: 'GET',
  })
}