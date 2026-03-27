import http from '@/utils/http';

export function getBannerAPI(params={}) {
  const {distributionSite='1'}=params
  return http({
    url: '/home/banner',
    params: {distributionSite}
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