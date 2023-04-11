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

const many = async function(vue, times) {
    let res = null
    try {
        res = await vue.net.get_one('dash', times, vue.token(), {})
    } catch(err) {
        res = await vue.net.get_one('dash', times, vue.token(), {})
    }
    return res
}

const one = async function(vue, _id) {
    let res = await vue.net.get_one('dash', _id, vue.token())
    return res && res.data ? vue.strapi.ser(res): ''
}

const creat = async function(vue, data) {
    let res = await vue.net.post('dash', vue.token(), data)
    return (res && res.status) ? true : false
}

const edit = async function(vue, data, _id) {
    let res = await vue.net.patch('dash', vue.token(), _id, data)
    return res
}

export default {
    one,
    many,
    edit,
    creat
}