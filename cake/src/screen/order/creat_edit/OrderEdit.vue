<template>
    <div class="px_x4 py_x2">
        <ui-header class="py_x px_x2">
          <template #tit>
            <h3 class="n fx-l w-100">
                <span>單號:&nbsp;&nbsp;</span><span v-if="order.id">{{ order.uuid }}</span>
                <skeieton-h v-else :fs="'h6'" class="w-20"/>
            </h3>
          </template>
        </ui-header>

        <div class="px_x2 pb_x2">
            <order-creat-edit v-if="order.id" ref="form" :order="order" :_edit="true"/>
            <div v-else>
                <h5 class="n py_n">基本信息</h5>
                <div class="row_x2 fx-s py">
                    <div class="w-333"><skeieton-cont :w="4"/></div>
                    <div class="w-333"><skeieton-cont :w="4"/></div>
                    <div class="w-333"><skeieton-cont :w="4"/></div>
                </div>
            </div>
            <!--
            <div class="py"></div>
            <co-order-ce-pay/>
            -->
        </div>

        <div v-if="order.id" class="fx-c upper">
            <fo-button :tit="'檢視'"/>
            <span class="px_s"></span>
            <ui-submit @click="submit" :msg="msg"/>
        </div>
    </div>
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
export default {
    components: { UiHeader, OrderCreatEdit, UiSubmit, SkeietonH, SkeietonCont, CoOrderCePay, FoButton },
    data() {    
        return {
            msg: ''
        }
    },
    computed: {
        order() { 
            let src = this.orderPina().one; 
            src = src ? src : { } 

            let prods = src.ordered_product; prods = prods ? prods : [ ]
            prods = prods.map(e => {
                if (e.product) {
                    e.product = strapi.data( e.product )
                    e.__cake = this.productPina()._ser_product( e.product )
                }
                return e
            })

            src.coecs = this.ser_coecs( prods )
            src.ordered_product = prods

            return src
        }

    },
    methods: {
        deatii(v = '您有參數還未輸入。') { this.msg = v; setTimeout(e => this.msg = '', 4000) },

        async submit() {
            const form = this.$refs.form.coii()
            console.log('FORM =', form)
            if (form) {
                const uuid = this.order.uuid

                return new Promise(async rej => {
                    const prods = JSON.parse( JSON.stringify( form.ordered_product ) )
                    const res = await this.serv.order.edit(this, uuid, form)
                    if (res) {
                        console.log('訂單修改成功 =', prods)
                        let res_cks = true;
                        for (let i= 0; i< prods.length; i++ ) {
                            const cks = prods[ i ]; 
                            console.log(cks)
                            const _res = await this.serv.order.edit_cake(this, uuid, cks.product_uuid, cks )
                            if (!_res) res_cks = false;
                        }

                        rej( res_cks )
                    }
                })
            } else { this.deatii(); return null }
        },

        ser_coecs(cks) {
            const coecs = [ ]
            this.productPina().ciear_coecs()
            
            cks.map(ck => {

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

                // 储存
                coecs.push( ck );

            }); return coecs
        },
    }
}
</script>