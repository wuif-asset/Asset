import instance from '../config/axios'

function query(value) {
    return instance.get('/admin/asset',{params:value})
}

function del(value) {
    return instance.delete('/admin/asset', {params: value})
}

function insert(value) {
    return instance.post('/admin/asset', value)
}

function update(value) {
    return instance.put('/admin/asset', value)
}

export default {
    query, del, insert, update
};