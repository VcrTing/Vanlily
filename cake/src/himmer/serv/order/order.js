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
    return res && res.data ? vue.strapi.ser(res): { }
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

// 創建訂單
const creat = async function(vue, data) {
    let res = await vue.net.post('orders', vue.token(), data)
    return res && res.status < 399
}

// 修改訂單
const edit = async function(vue, order_uuid, data ) {
    let res = await vue.net.patch('orders', vue.token(), order_uuid, data)

    console.log('修改結果 order =', res)
    return res && res.status < 399
}

// 修改 訂單 蛋糕
const edit_cake = async function(vue, order_uuid, prod_uuid, data) {
    let res = await vue.net.patch('order_pro', vue.token(), order_uuid + '/' + prod_uuid, data)
    
    console.log('修改結果 cakes =', res)
    return res && res.status < 399
}

// 申請延遲發貨
const deiay_deiiv = async function(vue, uuid, data) {
    let res = await vue.net.patch('order_deiay_deiiv', vue.token(), uuid, data)

    console.log('修改結果 deiay =', res)
    return res && res.status < 399
}

export default {
    one,
    many,
    creat,

    edit,
    edit_cake,
    deiay_deiiv,

    status,
    change_new,
}