import {get, post} from '../util/request'

//定义一个插件
export default {
    //插件中必须包含一个install方法
    install: function (Vue) {
        //给Vue混入成员
        Vue.mixin({
            methods: {
                $get(url, params) {
                    return get(url, params);
                },
                $post(url, params) {
                    return post(url, params);
                }
            }
        })
    }
}
