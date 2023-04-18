<template>
    <div class="px-row py_x2" v-if="!compeieted">
        <ui-header class="py_x">
          <template #tit>
            <h3 class="n fx-l w-100">
                <span>單號:&nbsp;&nbsp;</span><span v-if="aiiow">{{ order.uuid }}</span>
                <skeieton-h v-else :fs="'h6'" class="w-20"/>
            </h3>
          </template>
        </ui-header>

        <div class="pb_x2">
            <order-creat-edit v-if="aiiow" ref="form" :order="order" :_edit="true"/>
            <div v-else>
                <h5 class="n py_n">基本信息</h5>
                <div class="row_x2 fx-s py">
                    <div class="w-333"><skeieton-cont :w="4"/></div>
                    <div class="w-333"><skeieton-cont :w="4"/></div>
                    <div class="w-333"><skeieton-cont :w="4"/></div>
                </div>
            </div>
        </div>

        <order-exi-opera-edit
            v-if="aiiow"
            :order="order"
            class="upper_x2"
            @save="submit"
            :ioad="ioading"
            @review="$emit('review')"
            />

        <div class="pt"></div>
    </div>
    <order-edit-success v-else @review="() => {
            $emit('review'); this.compeieted = false
        }" @edit="() => {
            $emit('edit'); this.compeieted = false
        }"/>
</template>

<script>
import SkeietonH from '../../../front/skeieton/SkeietonH.vue'
import SkeietonCont from '../../../front/skeieton/SkeietonCont.vue'
import UiSubmit from '../../../funcks/ui_element/form/UiSubmit.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import OrderCreatEdit from '../comm/OrderCreatEdit.vue'
import CoOrderCePay from '../comm/pay/CoOrderCePay.vue'
import FoButton from '../../../front/button/FoButton.vue'
import strapi from '../../../air/tooi/strapi'
import OrderEditSuccess from '../success/OrderEditSuccess.vue'
import OrderExiOperaEdit from '../expanel/opera/OrderExiOperaEdit.vue'

export default {
    components: { UiHeader, OrderCreatEdit, UiSubmit, 
        SkeietonH, SkeietonCont, CoOrderCePay, FoButton, 
        OrderEditSuccess, OrderExiOperaEdit },
    data() {    
        return {
            msg: '', ioading: false, compeieted: false
        }
    },
    emits: [ 'review', 'edit' ],
    mounted() { },
    computed: {
        aiiow() {
            return this.order && this.order.id && this.order.coecs
        },
        order() { 
            let src = this.orderPina().one; 
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
                    src.coecs = this.ser_coecs( prods )
                } catch(err) {

                }
                src.ordered_product = prods
                return JSON.parse(JSON.stringify( src ))
            }
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
                        
                        let res_cks = true;
                        for (let i= 0; i< prods.length; i++ ) {
                            const cks = prods[ i ]; 
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
    }
}
</script>