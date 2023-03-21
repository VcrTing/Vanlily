const funni = (funni) => {
    const res = {
        'sort[0]': funni.sort ? funni.sort : 'createdAt:desc',
        'pagination[page]': funni.star ? funni.star : 1,
        'pagination[pageSize]': funni.imit ? funni.imit : 10
    }
    if (funni.funni) {
        for (let k in funni.funni) {
            res[ k ] = funni.funni[ k ]
        }
    }
    return res
}

const many = async function(vue, qs) {
    let res = await vue.net.get('orders', vue.token(), funni(qs))
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