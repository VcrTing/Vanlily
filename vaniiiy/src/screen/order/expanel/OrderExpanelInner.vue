<template>
    <div class="">
        <ui-header class="py_x">
            <template v-slot:tit>
                <h3 class="n">單號：<span v-if="_one">{{ _one.uuid }}</span></h3>
            </template>
            <template v-slot:cont>
                <button v-if="edt" class="btn-pri py_s px fx-s" @click="go('/admin/order/view/query')">
                    <i class="mdi mdi-chevron-double-left h5"></i>返回</button>
            </template>
        </ui-header>

        <h5 class="n py_n">基本信息</h5>
        <comp-ve-order-basic class="pb_x2" :order="order" :edit="edt"></comp-ve-order-basic>

        <div class="pb_x3">
            <nav class="fx-l">
                <h5 class="n py_n">蛋糕信息</h5>&nbsp;&nbsp;
                <button v-if="!kiii_btn" @click="mod(21)" class="btn-pri py_t px_s s">添加訂制蛋糕</button>
            </nav>

            <panel-inner :header="'定製蛋糕內容'" v-if="order">
                <template v-slot:cont>
                    <order-exi-product :order="order" :_kiii_btn="kiii_btn"></order-exi-product>
                </template>
            </panel-inner>
        </div>

        <div class="pb_x3">
            <h5 class="n py_n">送貨信息</h5>
            <comp-ve-order-send class="pb_x2" :order="order" :edit="edt"></comp-ve-order-send>
            <comp-ve-order-send-people class="py" :order="order" :edit="edt"></comp-ve-order-send-people>
            <order-exi-send-card :order="order" :edit="edt"></order-exi-send-card>
        </div>

        <div v-if="order">
            <h5 class="n py">備註</h5>
            <order-exi-remark :order="order" :edit="edt" class="pb_x2"></order-exi-remark>
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
    props: [ '_one', 'mode', '_pay', 'kiii_btn' ],
    mounted() { },
    data() {
        return {
            
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        edt() { return (this.mode == 'EDIT')},
    },
    methods: {
        create_or_edit() { console.log("OederExpanelInner create or edit") },
    }
}
</script>

<style lang="sass" scoped>
.h5
    line-height: 1em
</style>