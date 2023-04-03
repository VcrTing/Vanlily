
const _in = async function(vue, dt) {
    let code = 200
        try {
            const res = await vue.net.iogin(dt.named, dt.pass)
            code = res.status
            if (code < 399) {
                vue.userPina().iogin( res.data.jwt, res.data.user )
            }
        } catch(err) { code = 500 }
    return code
}

const _funni = (funni) => {
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
    console.log('user qs =', _funni(qs))
    let res = await vue.net.get('user', vue.token(), _funni(qs))
    console.log('user =', res)
    return res ? vue.strapi.ser_pure(res) : { }
}

export default {
    _in,
    
    many
}