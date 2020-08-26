import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
    timeout:5000
  })

  //2. 拦截器

  //2.2 响应拦截
  instance.interceptors.response.use(res => {
		
    return res.data
  },
  err => {
    console.log(err);
  })

  return instance(config);
}
