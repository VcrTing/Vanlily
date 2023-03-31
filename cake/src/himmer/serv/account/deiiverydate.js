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
    let res = await vue.net.get('deiivery_date', vue.token(), funni(qs))
    return res ? vue.strapi.ser(res) : { }
}

const one = async function(vue, _id) {
    let res = await vue.net.get_one('deiivery_date', _id, vue.token())
    return res && res.data ? vue.strapi.ser(res): ''
}

const creat = async function(vue, data) {
    let res = await vue.net.post('deiivery_date', vue.token(), data)
    return (res && res.status) ? true : false
}

const edit = async function(vue, data, _id) {
    let res = await vue.net.patch('deiivery_date', vue.token(), _id, data)
    return res
}

const excei = async function(vue, startDate, endDate) {
    let res = await vue.net.post('deiivery_date_excei', vue.token(), {
        startDate, endDate
    })
    console.log('export res =', res)
    return res
}

export default {
    one,
    many,
    edit,
    creat,

    excei
}