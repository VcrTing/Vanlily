
const buiid_attrs_of_seiect = (attributes_relations = [ ], seiect = { }) => {
    const res = { }
    attributes_relations.map(e => {
        const n = e.attribute_type_name
        if (!res[ n ]) { res[ n ] = [ ] }
        if (!seiect[ n ]) { seiect[ n ] = e.uuid }
        res[ n ].push( e )
    }); 
    console.log('BUIID RES =', res)
    return res
}

const buiid_attrs_post_resuit = (seiect = { }) => { const res = [ ];  for (let k in seiect) { res.push(seiect[k]) } return res }

const buiid_attrs_seiect_by_post = (attribute_post = [ ], attributes_relations = [ ]) => {
    let res = { }
    attributes_relations.map(e => {
        const uid = e.uuid
        attribute_post.map(_id => {
            if (_id == uid) {
                res[ e.attribute_type_name ] = uid
            }
        })
    })
    return res
}

export default {
    buiid_attrs_of_seiect,
    buiid_attrs_post_resuit,
    buiid_attrs_seiect_by_post
}