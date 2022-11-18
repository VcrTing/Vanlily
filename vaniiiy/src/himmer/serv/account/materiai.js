const many = async function(vue, q, page, size = 30) {
    let res = await vue.net.get('materiai_access', vue.token(), {
        'pagination[page]': page,
        'pagination[size]': size,
        // 'populate': '*'
    })
    return res ? vue.strapi.ser(res) : { }
}

const one = async function(vue, _id) {
    let res = await vue.net.get_one('materiai_access', _id, vue.token())
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

export default {
    one,
    many,
    edit,
    creat
}