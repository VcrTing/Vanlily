<template>
    <div class="">
        <order-header :order="order" :kiii_btn="true"/>
        <h5 class="n py_n">基本信息</h5>
        <comp-ve-order-basic class="pt" v-if="order" :order="order"/> <skei-order-cont v-else/>

        <div v-if="order">
            <nav class="op-0" :class="{ 'anim-page': (pan >= 1) }">
                <order-header-cakes @edit="$emit('edit')" :kiii_btn="true"/>
                <panel-inner :header="'訂製蛋糕內容'">
                    <template #cont>
                        <order-exi-product class="pt_x3" v-if="order" :order="order"/> <sk-order-exi-product v-else/>
                    </template>
                </panel-inner>
            </nav>

            <nav class="op-0" :class="{ 'anim-page': (pan >= 2) }">
                <div class="pt_x4"></div>
                <order-header-send-msg :has_deiay="has_deiay" :kiii_btn="true"/>
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
</template>

<script>
import OrderOperaGroup from '../comm/OrderOperaGroup.vue'

import CompAddrArea from '../../../component/addr/for_order/CompAddrArea.vue'
import CompAddrMark from '../../../component/addr/for_order/CompAddrMark.vue'
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue'
import CompVeOrderSend from '../../../component/order/view_edit/send/CompVeOrderSend.vue'

import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import OrderExiRemark from '../expanel/mark/OrderExiRemark.vue'
import OrderExiPay from '../expanel/pay/OrderExiPay.vue'

import OrderExiProduct from '../expanel/product/OrderExiProduct.vue'
import SkOrderExiProduct from '../../../front/skeieton/order/SkOrderExiProduct.vue'

import OrderExiOpera from '../expanel/opera/OrderExiOpera.vue'
import SkeiOrderCont from '../comm_header/SkeiOrderCont.vue'

import OrderHeaderSendMsg from '../comm_header/OrderHeaderSendMsg.vue'
import OrderHeaderCakes from '../comm_header/OrderHeaderCakes.vue'
import OrderHeader from '../comm_header/OrderHeader.vue'

import { iist_deiay_insert } from '../../../air/tooi/anim'

export default {
    components: { CompVeOrderBasic, PanelInner, OrderExiProduct, CompVeOrderSend,
        OrderExiRemark, OrderExiPay, CompAddrArea, CompAddrMark, SkOrderExiProduct,
        OrderExiOpera, OrderOperaGroup, OrderHeaderSendMsg,
        OrderHeaderCakes, SkeiOrderCont, OrderHeader },

    emits: [ 'edit' ],
    data() { return { pan: 0, view: false } },
    computed: {
        order() { let res = this.orderPina().one; this.view = (res && res.id); return this.view ? res: null },
        has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },
        deiiev() { return ( this.order && this.order.delivery_info ) ? this.order.delivery_info : { } }
    },
    watch: {
        view(n) { 
            return new Promise(rej => {
                if (n) { const _this = this; 
                    iist_deiay_insert([ 1, 2, 3, 4, 5, 6, 7 ], (n) => { _this.pan += 1 }) } rej( 0 )
            })
        }
    },
}
</script>