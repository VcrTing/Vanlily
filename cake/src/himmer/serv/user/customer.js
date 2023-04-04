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
    let res = await vue.net.get('customer', vue.token(), funni(qs))
    return res ? vue.strapi.ser(res) : { }
}

const one = async function(vue, _id) {
    let res = await vue.net.get_one('customer', _id, vue.token())
    return res && res.data ? vue.strapi.ser(res): ''
}

const creat = async function(vue, data) {
    let res = await vue.net.post('customer', vue.token(), data)
    return (res && res.status) ? true : false
}

const edit = async function(vue, data, _id) {
    let res = await vue.net.patch('customer', vue.token(), _id, data)
    return res
}

const excei = async (vue) => {
    let res = await vue.net.post('customer_excei', vue.token())
    if ((res + '').endsWith('xlsx')) { }
    return res ? res : null
}

export default {
    one,
    many,
    edit,
    creat,

    excei
}