
import conf from '../../conf'

import tool from './_too'
import net from './_api'

import axios from 'axios'

const _net = async function( uri, token, params, method = 'GET', data) {
    return await net({ uri, params, method, data, headers: tool.headers(token) })
}
/*
const get = async function(uri, token, data){    
    const url = conf.API + conf.ENDPOINT[ uri ]
    let res = await axios.get(url, {
        params: data,
        headers: tool.headers(token)
    })
    return res
}
*/

const _get = async function(uri, token, params) {
    if (conf.TEST_ENV) console.log('URI =', (conf.API + conf.ENDPOINT[ uri ] + params));
    return await axios.get(
        (conf.API + conf.ENDPOINT[ uri ] + params)
        , { headers: tool.headers(token) })
}
const get = async function( uri, token, data ) {
    let res = await _get(uri, token, tool.param( data ))

    return res && res.status == 200 ? res.data : [ ]
}

const get_one = async function( uri, cdt, token, data = {} ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + cdt
    if (conf.TEST_ENV) console.log('URI ONE =', url);
    let res = await axios.get(url, { headers: tool.headers(token) })
    return res && res.status == 200 ? res.data : [ ]
}

const post = async function( uri, token, data, params = {} ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + tool.param( params )
    let res = await axios.post(url, data, { headers: tool.headers(token) })
    return res && res.status <= 399 ? res.data : null
}

const patch = async function(uri, token, pk, data ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + pk
    let res = await axios.patch(url, data, { headers: tool.headers(token) })
    return res && res.status <= 399 ? res.data : null
}

const trash = async function(uri, token, pk ) {
    const url = conf.API + conf.ENDPOINT[ uri ] + '/' + pk
    let res = await axios.delete(url, { headers: tool.headers(token) })
    return res && res.status <= 399 ? res.data : null
}

export default {
    _get,
    get,
    get_one,

    post,
    patch,
    trash
}