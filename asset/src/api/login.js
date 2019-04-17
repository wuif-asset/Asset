//所有关于登陆/注册等的操作

import instance from "../config/axios";


// 登陆验证
function check(value) {
    return instance.post('/admin/login', value)
}
// 添加管理员
function add(value){
    return instance.post('/admin/login/insert',value)
}
// 删除管理员
function deletes(id){
    return instance.delete('/admin/login/delete',{
        params:{
            id:id
        }
    })
}
//查询管理员
function querys(){
    return instance.get('/admin/login/query')
}
//修改管理员账号与密码
function update(value){
    return instance.put('/admin/login/update',value)
}

export default {
    check,add,deletes,querys,update
}