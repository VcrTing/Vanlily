<template>
    <div class="">
        <div class="py_x">
            <h3 class="n">單號：{{ order ? order.uuid : '' }}</h3>
        </div>
        <h5 class="n py_n">基本信息</h5>
        <comp-ve-order-basic class="pb_x2" ref="basic" v-if="order" :order="order" :edit="edt"></comp-ve-order-basic>
        <div class="pb_x3">
            <nav class="fx-l">
                <h5 class="n py_n">蛋糕信息</h5><!--&nbsp;&nbsp;<button-- @click="mod(21)" class="btn-pri py_t px_s s">添加訂制蛋糕</button-->
            </nav>
            <panel-inner :header="'定製蛋糕內容'" v-if="order">
                <template v-slot:cont>
                    <order-exi-product :order="order" :_kiii_btn="false"></order-exi-product>
                </template>
            </panel-inner>
        </div>
        <div class="pb_x3">
            <h5 class="n py_n">送貨信息</h5>
            <comp-ve-order-send class="pb_x2" ref="send" v-if="order" :order="order" :edit="edt"></comp-ve-order-send>
            <comp-ve-order-send-people class="py" ref="send_people" v-if="order" :order="order" :edit="edt"></comp-ve-order-send-people>
            <div class="py_s"></div>
            <comp-ve-order-addr-area ref="addr_area" :paner="true" :order="order" v-if="order"/>
            <div class="py_s"></div>
            <comp-ve-order-addr-mark ref="addr_mark" :paner="true" :order="order" v-if="order"/>
        </div>

        <div v-if="order">
            <h5 class="n py">備註</h5>
            <order-exi-remark :order="order" ref="remark" :edit="edt" class="pb_x2" v-if="order"/>
        </div>
        <div class="pb_x2" v-if="_pay">
            <order-exi-pay :order="order" v-if="order"></order-exi-pay>
        </div>
        <div class="py_s"></div>
        <slot name="opera"></slot>
    </div>
</template>
<script>
import CompVeOrderAddrArea from '../../../component/order/view_edit/addr/CompVeOrderAddrArea.vue'
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue'
import CompVeOrderSend from '../../../component/order/view_edit/send/CompVeOrderSend.vue'
import CompVeOrderSendPeople from '../../../component/order/view_edit/send/CompVeOrderSendPeople.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'

import OrderExiRemark from '../expanel/mark/OrderExiRemark.vue'
import OrderExiOpera from '../expanel/opera/OrderExiOpera.vue'
import OrderExiPay from '../expanel/pay/OrderExiPay.vue'
import OrderExiProduct from '../expanel/product/OrderExiProduct.vue'
import OrderExiSendCard from '../expanel/send_card/OrderExiSendCard.vue'
export default {
    components: {
        OrderExiOpera, OrderExiProduct, PanelInner, OrderExiSendCard, OrderExiPay, CompVeOrderBasic,
        CompVeOrderSend, CompVeOrderSendPeople, OrderExiRemark, CompVeOrderAddrArea, CompVeOrderAddrMark
    },
    props: [ '_one', '_pay',  ],
    data() {
        return { }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        deiive() { return this.order ? this.order.delivery_info : null },
        edt() { return true},
    },
    methods: {
        create_or_edit() { console.log("OederExpanelInner create or edit") },

        coii() {
            const base = this.$refs.basic.coii()
            const send = this.$refs.send.coii()
            const remark = this.$refs.remark.coii()
            const addr_area = this.$refs.addr_area.coii()
            const addr_mark = this.$refs.addr_mark.coii()
            const send_people = this.$refs.send_people.coii()

            console.log('base =', base)
            console.log('send =', send)
            console.log('send_people =', send_people)
            console.log('addr_area =', addr_area)
            console.log('addr_mark =', addr_mark)
            console.log('remark =', remark)
        }
    }
}
</script>

<style lang="sass" scoped>
.h5
    line-height: 1em
</style>