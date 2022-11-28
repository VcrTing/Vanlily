const many = async function(vue, page, size = 30) {
    let res = await vue.net.get('orders', vue.token(), {
        'pagination[page]': page,
        'pagination[size]': size
        // 'populate': '*'
    })
    return res ? vue.strapi.ser(res) : { }
}

const one = async function(vue, uuid) {
    let res = await vue.net.get_one('orders', uuid, vue.token())
    return res && res.data ? vue.strapi.ser(res): ''
}

const status = async function(vue, is_open, uuid) {
    let res = await vue.net.patch('order_status', vue.token(), uuid, {
        is_open
    }); return res
}

const change_new = async function(vue, uuid) {
    let res = await vue.net.patch('order_is_new', vue.token(), uuid, { })
    return res && res.status < 399
}

// 
const order_patch = async function(vue, uuid, data) {

}



export default {
    one,
    many,
    status,
    change_new,
    order_patch
}