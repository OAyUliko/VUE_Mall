export default {
 //添加到购物车 要考虑到一种情况 就是同样的商品点击添加 只用count+1
    //不同的商品才是push进去  要进行判断
    addCar(context, payload) {

      //1.常规的for进行遍历
     /* let old = null;
      //是要全部便利完 才能进行数量的操作
      for (let item of state.CarList) {
        if (item.iid === payload.iid)
          old = item;
      }
      if (old) {
        old.count++
      } else {
        payload.count += 1;
        state.CarList.push(payload);
      } */

      //2.find()来查找 找到的了话就返回item
      let product=context.state.CarList.find((item) => {
        return item.iid===payload.iid
      })
      if (product) {
        //product.count++
        context.commit('AddCount',product)
      } else {
        payload.count = 1;
        //context.state.CarList.push(payload);
         context.commit('AddCar',payload)
      }

    }

}
