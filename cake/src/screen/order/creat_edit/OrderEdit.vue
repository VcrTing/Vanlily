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
            <order-creat-edit v-if="order.id" ref="form" :order="order" :edit="true"/>
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
            <!--<fo-button :tit="'新增付款紀錄'"/>
            <span class="px_s"></span>-->
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
export default {
    components: { UiHeader, OrderCreatEdit, UiSubmit, SkeietonH, SkeietonCont, CoOrderCePay, FoButton },
    data() {    
        return {
            msg: ''
        }
    },
    computed: {
        order() { let src = this.orderPina().one; console.log('ORDER =', src); return src ? src : { } }
    },
    methods: {
        deatii(v = '您有參數還未輸入。') { this.msg = v; setTimeout(e => this.msg = '', 4000) },

        async submit() {
            const form = this.$refs.form.coii()
            console.log('FORM =', form)
            if (form) {
            const res = await this.serv.order.creat( this, form )
            if (res) {

            }
            } else { this.deatii() }
        },
        dump() { this.go('/admin/order/view/query') }
    }
}
</script>