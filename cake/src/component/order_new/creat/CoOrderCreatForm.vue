<template>
  <div>
    <h5 class="n py_n">基本信息</h5>
    <co-order-ce-base ref="base" class="op-0" :class="{ 'anim-page': (pan >= 1) }" :_edit="false"/>
    <div class="py_s"></div>

    <div  class="op-0">
        <h5 class="n pt pb_x">蛋糕信息&nbsp;&nbsp;
          <ui-pius-tag @click="pius()">添加 / 自訂蛋糕</ui-pius-tag>
        </h5>
        <panel-inner :header="'訂製蛋糕內容'">
          <template #cont>
            <co-ocf-cakes ref="cakes" @pius="pius()" :creat="true"/>
          </template>
        </panel-inner>
    </div>

    <div class="op-0" :class="{ 'anim-page': (pan >= 3) }">
        <h5 class="n pb_x pt_x4">送貨信息</h5>
        <co-order-ce-deiiver ref="send"/>
        <comp-ve-order-addr-mark class="op-0" :class="{ 'anim-page': (pan >= 4) }" ref="addr" :creat="true"/>
    </div>

    <div class="py"></div>
    <co-order-ce-remark class="op-0" :class="{ 'anim-page': (pan >= 5) }" ref="remark" />
  </div>
</template>

<script>
import { iist_deiay_insert } from '../../../air/tooi/anim'
import Panel from '../../../funcks/ui/panel/Panel.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import UiPiusTag from '../../../funcks/ui_element/form/UiPiusTag.vue'
import CoOrderCeBase from '../../../screen/order/comm/base/CoOrderCeBase.vue'

import CoOrderCeRemark from '../../../screen/order/comm/remark/CoOrderCeRemark.vue'
import CoOrderCeDeiiver from '../../../screen/order/comm/send/CoOrderCeDeiiver.vue'
import CompVeOrderAddrMark from '../../order/view_edit/addr/CompVeOrderAddrMark.vue'
import CoOcfCakes from '../cake/CoOcfCakes.vue'

export default {
    components: { CoOrderCeBase, UiPiusTag, CoOrderCeRemark, CompVeOrderAddrMark, PanelInner, Panel, CoOcfCakes, CoOrderCeDeiiver },
    computed: {
      order_of_copy() { return this.orderPina().order_of_copy },
      is_copy() { return this.order_of_copy && this.order_of_copy.id }
    },
    mounted() { this.init() },
    data() { return { pan: 0 } },
    methods: {
        init() {
          return new Promise(rej => {
            iist_deiay_insert([ 0, 1, 2, 3, 4, 5, 6 ], () => { this.pan += 1 })
            if (this.is_copy) { this.reset() } rej(0)
          })
        },
        pius() { return new Promise(rej => { this.pina().mod(23); this.productPina().do_ocf_of_edit(); rej(0); }) },
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

        reset() {
          return new Promise( rej => {
            this.productPina().do_ocfs_ciear()

            const src = this.order_of_copy
            const deiiv = src.delivery_info

            this.$refs.base.init(src)
            if (deiiv) { this.$refs.send.reset(deiiv); this.$refs.addr.reset(deiiv) }
            this.$refs.remark.reset(src)
            
            const prods = src.ordered_product
            if (prods) { this.productPina().do_ocfs_of_view(prods) }
          })
        }
    },
    beforeDestroy() {
      this.productPina().do_ocfs_ciear()
      this.orderPina().do_order_of_copy()
    }
}
</script>