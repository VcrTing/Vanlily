
// 創建訂單
const edit = async function(vue, uuid, data) {
    let res = await vue.net.patch('payment', vue.token(), uuid, data)
    return res && res.status < 399
}

export default {
    edit
}