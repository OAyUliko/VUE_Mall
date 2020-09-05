import {request} from './request.js'

//获得详情页数据
export function getDetails(iid){
  return request({
    url:'/detail',
    params:{
      iid
      }
  });
}
//获得推荐商品数据
export function getRecommends(){
  return request({
    url:'/recommend'
  });
}

//通过类的构造函数来获得商品INfo
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
		this.discountBgColor = itemInfo.discountBgColor;
  }
}
