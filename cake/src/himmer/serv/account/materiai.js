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
    let res = null 
    try {
        res = await vue.net.get('materiai_access', vue.token(), funni(qs))
    } catch(err) {
        res = await vue.net.get('materiai_access', vue.token(), funni(qs))
    }
    return res ? vue.strapi.ser(res) : { }
}

const one = async function(vue, _id) {
    let res = null
    try {
        res = await vue.net.get_one('materiai_access', _id, vue.token())
    } catch (err) {
        res = await vue.net.get_one('materiai_access', _id, vue.token())
    }
    return res && res.data ? vue.strapi.ser(res): ''
}

const creat = async function(vue, data) {
    let res = await vue.net.post('materiai_access', vue.token(), data)
    return (res && res.status) ? true : false
}

const edit = async function(vue, data, _id) {
    let res = await vue.net.patch('materiai_access', vue.token(), _id, data)
    return res
}

const trash = async (vue, _id) => {
    let res = null
    try {
        res = await vue.net.trash('materiai_trash', vue.token(), _id)
    } catch(err) {
        res = await vue.net.trash('materiai_trash', vue.token(), _id)
    }
    return res && res.data
}

export default {
    one,
    many,
    edit,
    creat,

    trash
}