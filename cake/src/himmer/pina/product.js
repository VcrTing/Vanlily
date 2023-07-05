
import { defineStore } from "pinia"
import strapi from '../../air/tooi/strapi'

export default defineStore('productPina', { 
    state: () => {
        return {
            products: [ ],
            product_of_view: { },

            cakes: [ ],
            prods: [ ],

            cake_of_edit: { },
            coecs: [ ], // do_cake_of_edit_compieteds

            coecs_custom: [ ],

            cake_of_choise: { },

            ocfs: [ ],
            ocf_of_edit: { },
            ocfs_of_view: [ ],
        }
    }, 
    actions: {
        /*
            新的
        */
        do_ocf_of_edit(v = null) { this.ocf_of_edit = v },
        do_ocfs(v = null) { 
            const i = this.ocfs.length
            if (v) { v.__idx = i; this.ocfs.push( v ) }
        },
        do_ocfs_repiace(v = null, idx = -1) {
            if (idx >= 0 && v) {
                this.ocfs.splice(idx, 1, v)
            }
        },
        do_ocfs_trash(idx) { this.ocfs.splice(idx, 1) },
        do_ocfs_ciear() { this.ocfs = [ ]; this.ocfs_of_view = [ ] },

        do_ocfs_of_view(prods = [ ]) { this.ocfs_of_view = [ ]
            prods.map((e, i) => { 
                e.__idx = i; e.__compieted = true; 
                let _src = e.attribute; e.attribute_post = [ ];

                // 構建 attribute_post
                if (_src) { 
                    _src = _src.data ? strapi.data(_src) : [ ]; 
                    _src.map(_a => e.attribute_post.push(_a.uuid)); 
                }

                // 解構 product
                let _pro = e.product
                if (_pro) {
                    _pro = _pro.data ? strapi.data(_pro) : { }
                    for (let k in _pro) {
                        e[k] = _pro[k]
                    }
                }
                
            }); 
            this.ocfs_of_view = prods
            this.ocfs = prods
        },
        /*
            老的
        */

        do_cake_of_edit(v = { }) { this.cake_of_edit = v },
        do_cake_of_choise(v = { }) { this.cake_of_choise = v },
        do_coecs(v = { }) { 
            if (this.coecs.length > 0) {
                let res = [ ]; let has = false
                this.coecs.map( _cps => {
                    if ((_cps.product_uuid == v.product_uuid)) {
                        res.push( v ); has = true;
                    } else { res.push( _cps ) }
                }); 
                (!has) ? res.push( v ) : undefined; this.coecs = res
            } else { this.coecs.push( v ) }
        },
        do_coecs_custom(v = { }) { this.coecs_custom = v; },

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

            // category
            p.__categories = p.categories ? p.categories.map(e => e.name) : [ ];
            
            return p
        },

        do_products(v = [ ]) { this.products = v.map(p => this._ser_product( p )) },

        do_product_of_view(v = { }) {
            this.product_of_view = v && v.id ? this._ser_product(v) : { }
        }
    },
    getters:{ has_products() { return this.products && this.products.length > 0 } },
    persist: {
        strategies: [
            { key: 'dan_vanlily_product', storage: sessionStorage, 
              paths: [ 'cake_of_edit', 'do_cakes_ocf' ] }
        ], enabled: true,
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