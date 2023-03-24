
import { defineStore } from "pinia"
import strapi from '../../air/tooi/strapi'

export default defineStore('productPina', { 
    state: () => {
        return {
            products: [ ],

            cakes: [ ],
            prods: [ ],

            cake_of_edit: { },
            coecs: [ ], // do_cake_of_edit_compieteds
        }
    }, 
    getters:{
        has_products() { return this.products && this.products.length > 0 }
    }, 
    actions: {
        do_cake_of_edit(v = { }) { this.cake_of_edit = v },

        do_coecs(v = { }) { 
            if (this.coecs.length > 0) {
                
                let res = [ ]; let has = false
                this.coecs.map( _cps => {
                    if ((_cps.product_uuid == v.product_uuid)) {
                        res.push( v ); 
                        has = true
                    } else {
                        res.push( _cps )
                    }
                }); 
                (!has) ? res.push( v ) : undefined;
                this.coecs = res

            } else {
                this.coecs.push( v )
            }
        },
        ciear_coecs() { this.coecs = [ ] },
        
        do_cakes(v) { this.cakes = v },
        do_prods(v) { this.prods = v },

        // 雪梨惡化
        do_products(v = [ ]) { 
            this.products = v.map(p => {

                // attributes_relations
                let _ar = p.attributes_relations ? p.attributes_relations : [ ]
                _ar = strapi.data( _ar )
                p.attributes_relations = _ar ? _ar : [ ];

                let ars = { }
                p.attributes_relations.map( e => {
                    if (!ars[ e['attribute_type_name'] ]) { ars[ e['attribute_type_name'] ] = [ ] }
                    ars[ e['attribute_type_name'] ].push( e )
                })

                p.__attributes_relations = ars

                // price
                const _prs = p.price ? p.price : { }
                p.__price = _prs.price ? _prs.price : 0
                p.__regular_price = _prs.regular_price ? _prs.regular_price : 0

                // name
                let _nms = p.translation ? p.translation : { }
                _nms = _nms['zh-hant'] ? _nms['zh-hant'] : { }
                p.__name = _nms.name ? _nms.name : ''
                p.__description = _nms.description ? _nms.description : ''
                
                return p
            })
        },
    },
})