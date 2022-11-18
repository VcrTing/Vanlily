<template>
    <div class="">
        <ui-header class="py_x">
            <template v-slot:tit>
                <h3 class="n">
                    <span v-if="!is_creat">單號：<span v-if="_one">{{ _one.uuid }}</span></span>
                    <span v-else>新增訂單</span>
                </h3>
            </template>
        </ui-header>

        <h5 class="n py_n">基本信息</h5>
        <comp-ve-order-basic class="pb_x2" :order="order" :edit="!is_view" ></comp-ve-order-basic>

        <div class="pb_x3">
            <nav class="fx-l">
                <h5 class="n py_n">蛋糕信息</h5>&nbsp;&nbsp;
            </nav>

            <panel-inner :header="'定製蛋糕內容'" v-if="order">
                <template v-slot:cont>
                    <order-exi-product :order="order" :_kiii_btn="kiii_btn"  :edit="!is_view"></order-exi-product>
                </template>
            </panel-inner>
        </div>

        <div class="pb_x3">
            <h5 class="n py_n">送貨信息</h5>
            <comp-ve-order-send class="pb_x2" :order="order"  :edit="!is_view" ></comp-ve-order-send>
            <comp-ve-order-send-people class="py" :order="order"  :edit="!is_view" ></comp-ve-order-send-people>
            <order-exi-send-card :order="order"  ></order-exi-send-card>
        </div>

        <div v-if="order">
            <h5 class="n py">備註</h5>
            <order-exi-remark :order="order"  :edit="!is_view" class="pb_x2"></order-exi-remark>
        </div>
        
        <div class="pb_x2" v-if="_pay">
            <order-exi-pay :order="order"></order-exi-pay>
        </div>
        <div class="py_s"></div>
        <slot name="opera"></slot>
    </div>
</template>
<script>
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue'
import CompVeOrderSend from '../../../component/order/view_edit/send/CompVeOrderSend.vue'
import CompVeOrderSendPeople from '../../../component/order/view_edit/send/CompVeOrderSendPeople.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import OrderExiRemark from './mark/OrderExiRemark.vue'
import OrderExiOpera from './opera/OrderExiOpera.vue'
import OrderExiPay from './pay/OrderExiPay.vue'
import OrderExiProduct from './product/OrderExiProduct.vue'
import OrderExiSendCard from './send_card/OrderExiSendCard.vue'
export default {
    components: {
        OrderExiOpera,
        OrderExiProduct,
        PanelInner,
        OrderExiSendCard,
        OrderExiPay,
        CompVeOrderBasic,
        UiHeader,
        CompVeOrderSend,
        CompVeOrderSendPeople,
        OrderExiRemark
    },
    props: [ '_one', '_pay', 'mode' ],
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        is_view() { return this.mode == 'VIEW' }, 
        is_edit() { return this.mode == 'EDIT' }, is_creat() { return this.mode == 'CREAT' },
    },
}
</script>

<style lang="sass" scoped>
.h5
    line-height: 1em
</style>