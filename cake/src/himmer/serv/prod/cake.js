

const many = async function(vue, page, size = 100) {
    let res = null 
    try {
        res = await vue.net.get('product', vue.token(), {
            'pagination[page]': page ? page : 1,
            'pagination[pageSize]': size
            // 'populate': '*'
        })
    } catch(err) {
        res = await vue.net.get('product', vue.token(), {
            'pagination[page]': page ? page : 1,
            'pagination[pageSize]': size
            // 'populate': '*'
        })
    }
    return res ? vue.strapi.ser(res) : { }
}

const search = async function(vue, params) {
    let res = null
    try {
        res = await vue.net.get('product', vue.token(), {
            'pagination[page]': 1, 'pagination[pageSize]': 10, ...params
        })
    } catch(err) {
        res = await vue.net.get('product', vue.token(), {
            'pagination[page]': 1, 'pagination[pageSize]': 10, ...params
        })
    }
    return res ? vue.strapi.ser(res) : { }
}

// 
const prod_patch = async function(vue, uuid, prod_id, data) {
}

export default {
    many,
    prod_patch,

    search
}