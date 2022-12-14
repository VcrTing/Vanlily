

const many = async function(vue, page, size = 100) {
    let res = await vue.net.get('product', vue.token(), {
        'pagination[page]': page ? page : 1,
        'pagination[size]': size
        // 'populate': '*'
    })
    return res ? vue.strapi.ser(res) : { }
}

// 
const prod_patch = async function(vue, uuid, prod_id, data) {
    console.log('产品修改 =', uuid, ' ', prod_id)
    console.log('DATA =', data)
}

export default {
    many,
    prod_patch
}