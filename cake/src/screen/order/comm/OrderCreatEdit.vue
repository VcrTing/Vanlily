<template>
    <div class="pb">
      <h5 class="n py_n">基本信息</h5>
      <co-order-ce-base ref="base" :one="order" :_edit="_edit"/>
      <div class="py_s"></div>

      <div class="upper">

        <h5 class="n py">蛋糕信息&nbsp;&nbsp;
          <ui-pius-tag v-if="_creat" @click="piusCake">添加 / 自訂蛋糕</ui-pius-tag>
        </h5>
        <panel-inner :header="'訂製蛋糕內容'">
          <template #cont>
            <co-order-ce-cakes ref="cakes" :cakes="cakes" @trash="trashCake" :_creat="_creat"/>
          </template>
        </panel-inner>

        <h5 class="n pb pt_x4">送貨信息&nbsp;&nbsp;
          <ui-err-tag v-if="has_deiay" @click="viewDeiay">訂單已延遲發貨</ui-err-tag>
        </h5>
        <div class="py_s" v-if="has_deiay"></div>
        <co-order-ce-deiiver ref="send" :one="order" :_edit="_edit"/>

        <panel class="panel-inner-pure">
            <div class="pt"></div>
            <comp-ve-order-addr-mark ref="addr" :creat="true" :_edit="true"/>
        </panel>

        <div class="py"></div>
        <co-order-ce-remark ref="remark" :one="order" :_edit="_edit"/>
        
        <div class="py" v-if="!_creat"></div>

        <order-exi-pay :edit="true" v-if="!_creat"/>
      </div>
    </div>
</template>

<script>
import Panel from '../../../funcks/ui/panel/Panel.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import UiErrTag from '../../../funcks/ui_element/form/UiErrTag.vue'
import UiPiusTag from '../../../funcks/ui_element/form/UiPiusTag.vue'

import CoOrderCeBase from './base/CoOrderCeBase.vue'
import CoOrderCeRemark from './remark/CoOrderCeRemark.vue'

import CoOrderCeCakes from './base/CoOrderCeCakes.vue'
import CoOrderCeDeiiver from './send/CoOrderCeDeiiver.vue'
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import OrderExiPay from '../expanel/pay/OrderExiPay.vue'

export default { 
  components: { 
    CoOrderCeBase, PanelInner, CoOrderCeCakes, 
    UiPiusTag, CoOrderCeRemark, CoOrderCeDeiiver, 
    CompVeOrderAddrMark, Panel, UiErrTag,
    OrderExiPay },

  computed: {
    mod() { return this.pina().MODAL },
    cake_of_choise() { return this.productPina().cake_of_choise },

    coecs() { const src = this.productPina().coecs; return src ? src : [ ] },
    products() { let src = this.productPina().products; return src ? src : [ ] },
    
    has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },
  },
  watch: {
    cake_of_choise(n) { 
      if (n && n.uuid) { this.cakes.push( n ); this.productPina().do_cake_of_choise({ }); }
    }
  },
  props: [ '_edit', 'order', '_creat' ],

  data() { return { cakes: [ ], } },
  mounted() {
    if (this._edit && this.order.id) { setTimeout(e => this.for_edit(), 2) }
  },
  methods: {

    for_edit() {
      return new Promise(rej => {
        const send = this.order.delivery_info
        const addr = this.order.delivery_info
        this.$refs.send.reset( send )
        this.$refs.addr.reset( addr )

        let prods = this.order.ordered_product
        this.cakes = prods ? prods.map(e => e.__cake) : [ ]

        // console.log('手動構建的 COECS =', this.order.coecs)

        this.order.coecs ? this.order.coecs.map(cs => this.productPina().do_coecs( cs )) : undefined;
        rej(0)
      })
    },

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


    // 刪除
    trashCake(idx) {
      return new Promise(rej => {
        let res = [ ]
        this.cakes.map((e, i) => { if (i != idx) { res.push( e ) } })
        this.cakes = res
        rej( 0 )
      })
    },

    // 打開 新增
    piusCake() { this.pina().mod(27) },
    // 打開 查看延遲發貨
    viewDeiay() { this.pina().mod(33) }
  }
}

/*
order product
{
	attribute:
		(4)['1007', '1031', '1087', '198']
	attribute_of_edit: Proxy {
		蛋糕公仔: '1007',
		蛋糕款式: '1031',
		蛋糕味道: '1087',
		尺吋: '198'
	}
	cake_special_needs: "多一點點草莓"
	discounted_price: ""
	letter: 123
	original_price: 880
	product_uuid: "25854"
	quantity: 1
	sign: "1234"
	unit_price: 880
	uuid: "25854"
}
*/
</script>
    