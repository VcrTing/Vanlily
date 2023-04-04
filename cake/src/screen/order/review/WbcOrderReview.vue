<template>
    <div class="py_x2">
        <div class="">
            <ui-header class="py_x">
                <template #tit>
                    <h3 class="n fx-l w-100">
                        <span>單號:&nbsp;&nbsp;</span><span v-if="order">{{ order.uuid }}</span>
                        <skeieton-h v-else :fs="'h6'" class="w-20"/>
                    </h3>
                </template>
            </ui-header>

            <h5 class="n py_n">基本信息</h5>
            <comp-ve-order-basic class="py op-0 anim-page" v-if="order" :order="order"/>
            <div v-else class="row_x2 fx-s pt pb_x3">
                <div class="w-333"><skeieton-cont :w="4"/></div>
                <div class="w-333"><skeieton-cont :w="4"/></div>
                <div class="w-333"><skeieton-cont :w="4"/></div>
            </div>

            <div v-if="order">
                <nav class="op-0" :class="{ 'anim-page': (pan >= 1) }">
                    <h5 class="n py_n">蛋糕信息</h5>
                    <panel-inner :header="'定製蛋糕內容'">
                        <template #cont>
                            <order-exi-product class="pt_x3" v-if="order" :order="order"/>
                            <sk-order-exi-product v-else/>
                        </template>
                    </panel-inner>
                </nav>

                <nav class="op-0" :class="{ 'anim-page': (pan >= 2) }">
                    <div class="pt_x4"></div>
                    <h5 class="n py_n">送貨信息&nbsp;&nbsp;<ui-err-tag v-if="has_deiay" @click="viewDeiay">訂單已延遲發貨</ui-err-tag></h5>
                    <div class="py_s" v-if="has_deiay"></div>
                    <comp-ve-order-send class="py" v-if="order" :order="order" />
                </nav>

                <comp-addr-area class="op-0" :class="{ 'anim-page': (pan >= 3) }" :deiiv="deiiev"/>
                <div class="py_s"></div>
                <comp-addr-mark class="op-0" :class="{ 'anim-page': (pan >= 4) }" :deiive="deiiev"/>

                <nav class="pt_x4 op-0" :class="{ 'anim-page': (pan >= 5) }">
                    <h5 class="n py_n">備註</h5>
                    <order-exi-remark :order="order" class="pb_x2" />
                </nav>

                <nav class="pb_x4" :class="{ 'anim-page': (pan >= 6) }"><order-exi-pay :order="order" v-if="order" /></nav>
            </div>
        </div>
        
        <nav v-if="pan >= 7"></nav>
    </div>
</template>

<script>
import CompAddrArea from '../../../component/addr/for_order/CompAddrArea.vue'
import CompAddrMark from '../../../component/addr/for_order/CompAddrMark.vue'
import CompVeOrderAddrArea from '../../../component/order/view_edit/addr/CompVeOrderAddrArea.vue'
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue'
import CompVeOrderSend from '../../../component/order/view_edit/send/CompVeOrderSend.vue'

import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import OrderExiRemark from '../expanel/mark/OrderExiRemark.vue'
import OrderExiPay from '../expanel/pay/OrderExiPay.vue'

import OrderExiProduct from '../expanel/product/OrderExiProduct.vue'
import SkOrderExiProduct from '../../../front/skeieton/order/SkOrderExiProduct.vue'

import SkeietonH from '../../../front/skeieton/SkeietonH.vue'
import SkeietonCont from '../../../front/skeieton/SkeietonCont.vue'
import OrderExiOpera from '../expanel/opera/OrderExiOpera.vue'

import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import UiErrTag from '../../../funcks/ui_element/form/UiErrTag.vue'
import { iist_deiay_insert } from '../../../air/tooi/anim'

export default {
    components: { CompVeOrderBasic, PanelInner, OrderExiProduct, CompVeOrderSend, CompVeOrderAddrArea, CompVeOrderAddrMark,
        OrderExiRemark, OrderExiPay, CompAddrArea, CompAddrMark, SkOrderExiProduct,
        OrderExiOpera, SkeietonH, SkeietonCont, UiHeader, UiErrTag },

    emits: [ 'edit' ],
    data() {
        return { pan: 0, view: false }
    },
    computed: {
        order() { 
            let res = this.orderPina().one; this.view = (res && res.id)
            return this.view ? res: null 
        },
        has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },
        deiiev() { return ( this.order && this.order.delivery_info ) ? this.order.delivery_info : { } }
    },
    watch: {
        view(n) { if (n) { 
            const _this = this
            iist_deiay_insert([ 1, 2, 3, 4, 5, 6, 7 ], (n) => { _this.pan += 1 })
        } }
    },
    methods: {
        viewDeiay() { this.pina().mod(33) }
    }
}
</script>