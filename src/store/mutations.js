export default {
   AddCount(state,payload){
     payload.count++;
   },
   AddCar(state,payload){
     state.CarList.push(payload)
   }
}
