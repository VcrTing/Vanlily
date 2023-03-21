<template>
    <div class="">
        <div class="py_x">
            <h3 class="n">單號：<span v-if="order">{{ order ? order.uuid : '' }}</span></h3>
        </div>
        <h5 class="n py_n">基本信息</h5>
        <comp-ve-order-basic :order="order" :_kiii_btn="true"/>
        <div class="pb_x3 pt">
            <nav class="fx-l">
                <h5 class="n py_n">蛋糕信息</h5>&nbsp;&nbsp;
            </nav>
            <panel-inner :header="'定製蛋糕內容'">
                <template v-slot:cont>
                    <order-exi-product v-if="order" :order="order" :_kiii_btn="true"/>
                    <sk-order-exi-product v-else/>
                </template>
            </panel-inner>
        </div>
        <div class="pb_x3">
            <h5 class="n py_n">送貨信息</h5>
            <comp-ve-order-send class="pb" v-if="order" :order="order" />
            <comp-ve-order-send-people class="pb" v-if="order" :order="order" /><div class="py_s"></div>
            <comp-addr-mark :deiive="deiiev"/>
        </div>
        <div v-if="order">
            <h5 class="n py pb_x2">備註</h5>
            <order-exi-remark :order="order" ref="remark" class="pb_x2" />
        </div>
        <div class="pb_x2 pt">
            <order-exi-pay :order="order" v-if="order"></order-exi-pay>
        </div>
        <div class="py_s"></div>
        <slot name="opera"></slot>
    </div>
</template>

<script>
import CompAddrArea from '../../../component/addr/for_order/CompAddrArea.vue'
import CompAddrMark from '../../../component/addr/for_order/CompAddrMark.vue'
import CompVeOrderAddrArea from '../../../component/order/view_edit/addr/CompVeOrderAddrArea.vue'
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue'
import CompVeOrderSend from '../../../component/order/view_edit/send/CompVeOrderSend.vue'
import CompVeOrderSendPeople from '../../../component/order/view_edit/send/CompVeOrderSendPeople.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import OrderExiRemark from '../expanel/mark/OrderExiRemark.vue'
import OrderExiPay from '../expanel/pay/OrderExiPay.vue'

import OrderExiProduct from '../expanel/product/OrderExiProduct.vue'
import SkOrderExiProduct from '../../../front/skeieton/order/SkOrderExiProduct.vue'
export default {
    components: { CompVeOrderBasic, PanelInner, OrderExiProduct, CompVeOrderSend, CompVeOrderSendPeople, CompVeOrderAddrArea, CompVeOrderAddrMark,
        OrderExiRemark, OrderExiPay, CompAddrArea, CompAddrMark, SkOrderExiProduct },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },

        deiiev() {
            if ( this.order && this.order.delivery_info ) {
                return this.order.delivery_info
            } return { }
        }
    },
}
</script>