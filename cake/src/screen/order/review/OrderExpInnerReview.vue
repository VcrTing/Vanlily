<template>
    <div class="px_x4 py_x2">
        <div class="px_x2">
            <ui-header class="py_x">
                <template #tit>
                    <h3 class="n fx-l w-100">
                        <span>單號:&nbsp;&nbsp;</span><span v-if="order">{{ order.uuid }}</span>
                        <skeieton-h v-else :fs="'h6'" class="w-20"/>
                    </h3>
                </template>
            </ui-header>

            <h5 class="n py_n">基本信息</h5>
            <comp-ve-order-basic class="py" v-if="order" :order="order"/>
            <div v-else class="row_x2 fx-s pt pb_x3">
                <div class="w-333"><skeieton-cont :w="4"/></div>
                <div class="w-333"><skeieton-cont :w="4"/></div>
                <div class="w-333"><skeieton-cont :w="4"/></div>
            </div>

            <div v-if="order">
                <h5 class="n py_n">蛋糕信息</h5>
                <panel-inner :header="'定製蛋糕內容'">
                    <template #cont>
                        <order-exi-product v-if="order" :order="order"/>
                        <sk-order-exi-product v-else/>
                    </template>
                </panel-inner>

                <div class="pt_x4"></div>
                <h5 class="n py_n">送貨信息&nbsp;&nbsp;<ui-err-tag v-if="has_deiay" @click="viewDeiay">訂單已延遲發貨</ui-err-tag></h5>
                <div class="py_s" v-if="has_deiay"></div>

                <comp-ve-order-send class="py" v-if="order" :order="order" />
                <comp-addr-area :deiiv="deiiev"/>
                <div class="py_s"></div>
                <comp-addr-mark :deiive="deiiev"/>

                <div class="pt_x4">
                    <h5 class="n py_n">備註</h5>
                    <order-exi-remark :order="order" class="pb_x2" />
                </div>

                <div class="pb_x4"><order-exi-pay :order="order" v-if="order" /></div>
            </div>
        </div>
        
        <order-exi-opera :aiiow="order && order.id"/>
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
import OrderExiOpera from '../expanel/opera/OrderExiOpera.vue'
import SkeietonH from '../../../front/skeieton/SkeietonH.vue'
import SkeietonCont from '../../../front/skeieton/SkeietonCont.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import UiErrTag from '../../../funcks/ui_element/form/UiErrTag.vue'

export default {
    components: { CompVeOrderBasic, PanelInner, OrderExiProduct, CompVeOrderSend, CompVeOrderAddrArea, CompVeOrderAddrMark,
        OrderExiRemark, OrderExiPay, CompAddrArea, CompAddrMark, SkOrderExiProduct,
        OrderExiOpera, SkeietonH, SkeietonCont, UiHeader, UiErrTag },
    
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },
        deiiev() { return ( this.order && this.order.delivery_info ) ? this.order.delivery_info : { } }
    },
    methods: {
        viewDeiay() {
            this.pina().mod(33)
        }
    }
}
</script>