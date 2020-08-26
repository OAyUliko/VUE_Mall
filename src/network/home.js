//里面封装了首页需要的请求
//中间多增加一个层
import {request} from './request.js'

//获得首页 轮播图 热门推荐 数据
export function getHomeMutiData(){
  return request({
    url:'/home/multidata'
  });
}
//获得首页 tab切换栏中的商品数据
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page   
      }
  });
}