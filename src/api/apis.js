import axios from 'axios'
//请求
const req=axios.create({
    baseURL:'http://127.0.0.1:3000',//配置服务器ip+端口
    timeout:10000//请求超时
})
//获取商家信息
export var getSeller=()=>{
    return req.get('/api/seller')
}
//获取商品列表
export var getGoods=(id)=>{
    return req.get('/api/goods',{
        params:{
            id
        }
    })
}
//获取商品评价列表
export var getEvaluate=()=>{
    return req.get('/api/ratings')
}
