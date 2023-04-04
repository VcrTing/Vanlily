
const order_base = async function(vue, uuid) {
    let res = await vue.net.get_one('order_base', uuid, vue.token())
    return res && res.data ? vue.strapi.data(res) : undefined
}

const order_cake = async function(vue, uuid) {
    let res = await vue.net.get_one('order_cake', uuid, vue.token())
    return res && res.data ? vue.strapi.data(res) : undefined
}

const order_send = async function(vue, uuid) {
    let res = await vue.net.get_one('order_send', uuid, vue.token())
    return res && res.data ? vue.strapi.data(res) : undefined
}

const order_check = async function(vue, uuid, prod_id) {
    let res = await vue.net.get_one('order_check', uuid + '/' + prod_id, vue.token())
    return res && res.data ? vue.strapi.data(res) : undefined
}

const order_check_update = async function(vue, uuid, prod_id, data) {
    let res = await vue.net.patch('order_check', vue.token(), uuid + '/' + prod_id, data)
    return (res && res.status < 399)
}

export default {

    order_base,
    order_cake,
    order_send,
    order_check,
    order_check_update
}