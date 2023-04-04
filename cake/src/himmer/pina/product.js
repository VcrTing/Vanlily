
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

            cake_of_choise: { },
        }
    }, 
    getters:{
        has_products() { return this.products && this.products.length > 0 }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'dan_vanlily_product',
                storage: sessionStorage, 
                paths: [ 'cake_of_edit' ]
            }
        ]
    }, 
    actions: {
        do_cake_of_edit(v = { }) { this.cake_of_edit = v },
        do_cake_of_choise(v = { }) { this.cake_of_choise = v },

        do_coecs(v = { }) { 
            if (this.coecs.length > 0) {
                
                let res = [ ]; let has = false

                this.coecs.map( _cps => {
                    if ((_cps.product_uuid == v.product_uuid)) {
                        res.push( v ); 
                        has = true;
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
        _ser_product(p = { }) {
            if (p.uuid) { p.product_uuid = p.uuid } //  else { p.uuid = p.product_uuid }

            // attributes_relations
            let ars = { }

            let _ar = p.attributes_relations ? p.attributes_relations : [ ]
            _ar = strapi.data( _ar )

            _ar.map( e => {
                if (!ars[ e['attribute_type_name'] ]) { ars[ e['attribute_type_name'] ] = [ ] }
                ars[ e['attribute_type_name'] ].push( e )
            })

            p.attributes_relations = _ar ? _ar : [ ];
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
        },

        do_products(v = [ ]) { this.products = v.map(p => this._ser_product( p )) },
    },
})
/*
do_coecs = 
attribute:  ['1221', '1219']
attribute_of_edit:  {尺寸: '1221', 蛋糕公仔造型: '1219'}
cake_special_needs:  "1231231"
discounted_price:  12
original_price:  680
product_uuid:  "25761"
quantity:  1
unit_price:  6802
*/