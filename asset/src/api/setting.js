import instance from '../config/axios'


function resetPassword(value){
    return instance.post('/admin/setting',value)
}

export default {
    resetPassword
}