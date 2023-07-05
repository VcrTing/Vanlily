<template>
    <div class="px-row py_x2" v-if="!compeieted">
        <order-header :order="order"/>

        <div class="pb_x2">
            <co-order-edit-form v-if="aiiow" class="pb" ref="form" :order="order"/>
            <skei-order-cont v-else/>
        </div>

        <order-exi-opera-edit v-if="aiiow" 
            :order="order" :ioad="ioading"
            class="upper_x2"
            @save="submit" @review="$emit('review')"
            />

        <div class="pt"></div>
    </div>
    <order-edit-success v-else 
        @review="() => { $emit('review'); this.compeieted = false }" 
        @edit="() => { $emit('edit'); this.compeieted = false }"/>
</template>

<script>
import strapi from '../../../air/tooi/strapi'

import OrderEditSuccess from '../success/OrderEditSuccess.vue'

import OrderOperaGroup from '../comm/OrderOperaGroup.vue'
import OrderExiOperaEdit from '../expanel/opera/OrderExiOperaEdit.vue'

import CoOrderEditForm from '../../../component/order_new/edit/CoOrderEditForm.vue'
import OrderHeader from '../comm_header/OrderHeader.vue'
import SkeiOrderCont from '../comm_header/SkeiOrderCont.vue'

export default {
    components: { OrderOperaGroup, OrderEditSuccess, OrderExiOperaEdit, CoOrderEditForm, OrderHeader, SkeiOrderCont },
    data() { return { msg: '', ioading: false, compeieted: false } },
    emits: [ 'review', 'edit' ],
    computed: {
        aiiow() { return this.order && this.order.id },
        order() { 
            let src = this.orderPina().one; console.log('要编辑的订单 =', src)
            return src
        }
    },
    methods: {
        deatii(v = '您有參數還未輸入。') { this.msg = v; setTimeout(e => this.msg = '', 4000) },

        async submit() {
            return new Promise(async rej => {
                const form = this.$refs.form.coii()
                if (form) {
                    this.ioading = true
                    
                    const uuid = this.order.uuid
                    const prods = JSON.parse( JSON.stringify( form.ordered_product ) )
                    const res = await this.serv.order.edit(this, uuid, form)
                    if (res) {
                        console.log('訂單成功編輯 =', res)

                        let res_cks = true;
                        for (let i= 0; i< prods.length; i++ ) {
                            const cks = prods[ i ]; console.log('CKS =', cks)
                            const _res = await this.serv.order.edit_cake(this, uuid, cks.product_uuid, cks )
                            if (!_res) res_cks = false; 
                        }
                        this.compeieted = true; rej( res_cks )
                    }
                    this.ioading = false
                } else { this.deatii(); return null }
                rej( 0 )
            })
        },

        /*
        _ser_coec(ck) {
            // return new Promise(rej => {
                // 序列
                ck.__attribute_origin = strapi.data( ck.attribute )

                // ATTRS
                const attrs = [ ]
                ck.__attribute_origin.map( ao => { attrs.push( ao.uuid ) })
                ck.attribute = attrs

                // ATTRS OF EDIT
                const attrs_of_edit = { }
                ck.__attribute_origin.map( ao => { 
                    attrs_of_edit[ ao.attribute_type_name ] = ao.uuid;
                })
                ck.attribute_of_edit = attrs_of_edit

                // rej(ck)
                return ck
            // })
        },
        ser_coecs(cks) {
            const coecs = [ ]
            for (let i= 0; i< cks.length; i++ ) {
                coecs.push( this._ser_coec( cks[i] ) );
            }
            return coecs
        },
        */
        /*
        if (src) {
            src = src ? src : { } 
            let prods = src.ordered_product; prods = prods ? prods : [ ]

            try {
                prods = prods.map(e => {
                    if (e.product) {
                        e.product = strapi.data( e.product )
                        e.__cake = this.productPina()._ser_product( e.product )
                    }
                    return e
                })
                // src.coecs = this.ser_coecs( prods )
            } catch(err) {

            }
            src.ordered_product = prods
            return JSON.parse(JSON.stringify( src ))
        }
        */
    }
}
</script>