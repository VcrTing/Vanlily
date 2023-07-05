<template>
    <div>
        <h5 class="n py_n">基本信息</h5>
        <co-order-ce-base ref="base" :one="order" :_edit="true"/>
        <div class="py_s"></div>

        <div class="upper">

            <h5 class="n py">蛋糕信息&nbsp;&nbsp;<ui-pius-tag @click="pius()">添加 / 自訂蛋糕</ui-pius-tag></h5>

            <panel-inner :header="'訂製蛋糕內容'">
                <template #cont>
                    <co-ocf-cakes ref="cakes" @pius="pius()"/>
                </template>
            </panel-inner>

            <div class="pt"></div>
            
            <div>
                <h5 class="n pb_x pt_x4">送貨信息&nbsp;&nbsp;<ui-err-tag v-if="has_deiay" @click="viewDeiay">訂單已延遲發貨</ui-err-tag></h5>
                <div class="pt" v-if="has_deiay"></div>
                <co-order-ce-deiiver ref="send" :one="order" :_edit="true"/>
                <comp-ve-order-addr-mark ref="addr" :creat="true" :_edit="true"/>
            </div>

            <div class="py"></div>
            <co-order-ce-remark ref="remark" :one="order" :_edit="true"/>

            <div class="py"></div>
            <order-exi-pay :edit="true"/>
        </div>
    </div>
</template>

<script>
import Panel from '../../../funcks/ui/panel/Panel.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'

import UiErrTag from '../../../funcks/ui_element/form/UiErrTag.vue'
import UiPiusTag from '../../../funcks/ui_element/form/UiPiusTag.vue'

import CoOrderCeBase from "../../../screen/order/comm/base/CoOrderCeBase.vue"
import CoOrderCeDeiiver from '../../../screen/order/comm/send/CoOrderCeDeiiver.vue'

import CoOrderCeRemark from '../../../screen/order/comm/remark/CoOrderCeRemark.vue'
import CompVeOrderAddrMark from '../../order/view_edit/addr/CompVeOrderAddrMark.vue'
import OrderExiPay from '../../../screen/order/expanel/pay/OrderExiPay.vue'

import CoOcfCakes from '../cake/CoOcfCakes.vue'

export default {
    components: { CoOrderCeBase, UiPiusTag, PanelInner, CoOrderCeDeiiver, CoOrderCeRemark, OrderExiPay, CompVeOrderAddrMark, Panel, UiErrTag, CoOcfCakes },
    props: [ 'order' ],
    computed: {
        has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },
    },
    mounted() {
        this.for_edit()
    },
    methods: {
        // 编辑
        for_edit() {
            return new Promise(rej => {
                const send = this.order.delivery_info
                const addr = this.order.delivery_info
                this.$refs.send.reset( send )
                this.$refs.addr.reset( addr )
                const prods = this.order.ordered_product
                this.productPina().do_ocfs_of_view(prods)
                console.log('products =', prods)
                rej(0)
            })
        },
        // 收集
        coii() {

            const base = this.$refs.base.coii()
            const send = this.$refs.send.coii()
            const addr = this.$refs.addr.coii()
            const remark = this.$refs.remark.coii()
            const ordered_product = this.$refs.cakes.coii()

            return (base && send && addr && remark && ordered_product) ? {
                ...base, ...remark, 
                ordered_product, delivery_info: { ...send, ...addr }
                }: null
        },

        // 打開 查看延遲發貨
        viewDeiay() { this.pina().mod(33) },

        pius() {
          return new Promise(rej => {
            this.pina().mod(23)
            this.productPina().do_ocf_of_edit()
            rej(0)
          })
        },
    }
}
</script>