
import instance from '../conf/https'
function query(data){
	return instance.get("/admin/category",{params:{id:data}})
}
function insters(data){
	return instance.post("/admin/category",data)
}
export default {
	query,insters
}