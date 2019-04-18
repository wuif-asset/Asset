import Inset from "../config/axios"

function add(use) {
    return Inset.post("/admin/assetsclass",use)
}
function query() {
    return Inset.get("/admin/assetsclass")
}
function del(row) {
    return Inset.post("/admin/assetsclass/del",row)
}
export default {
    add,query,del
}