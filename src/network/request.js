import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/wh',
        timeout: 5000
    })

    // 2.axios拦截器
    instance.interceptors.request.use(
        // 这个config就是这个axios的实例的配置
        config => {
            // 拦截请求 进行自己的操作
            // 比如在发送请求的时候在界面上显示loading图标
            // 比如在发送请求的时候携带上token
            // 比如在发送请求的时候按服务器的需求对信息进行修改
            // 拦截请求 进行操作之后 要对原来这个请求进行放行 否则请求失败
            return config
        },
        err => {
            console.log(err)
        }
    )

    instance.interceptors.response.use(
        // 这个result就是服务器响应回来的结果
        result => {
            // 同理 对响应拦截后 也要进行放行
            return result.data
        },
        err => {
            console.log(err)
        }
    )

    // 3.真正进行网络请求
    return instance(config)
}