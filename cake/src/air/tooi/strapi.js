
// const _data = function(res, def = [ ]) { return res ? res.data : def }
const _insert = function(res) { return { id: res.id, ...res.attributes } }
const view = function(res) { return (res.constructor == Array) ? res.map( e => _insert(e) ) : (res ? _insert(res) : null) }

const page = function(res) {
    res = res.meta ? res.meta : { }
    return res.pagination ? res.pagination : { }
}
const data = function(res) {
    res = res.data ? res.data : [ ]
    return res ? view(res) : [ ]
}

// { data: [], meta: { pagination: { } } }
export default {
    page, data, view,
    ser: (res) => { return {
        data: data(res),
        page: page(res)
    } },
    ser_pure: (res = { }) => {
        let page = res.meta ? res.meta : { }
        res['page'] = page.pagination ? page.pagination : { page: 1, pageSize: 10, pageCount: 1, total: 0 }
        return res
    }
}