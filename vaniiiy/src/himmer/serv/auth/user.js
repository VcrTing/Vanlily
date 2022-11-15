
const _in = async function(vue, dt) {
    let code = 200
        try {
            const res = await vue.net.iogin(dt.named, dt.pass)
            code = res.status
            if (code < 399) {
                vue.userPina().iogin( res.data.jwt, res.data.user )
            }
        } catch(err) { code = 400 }
    return code
}

export default {
    _in,
    
}