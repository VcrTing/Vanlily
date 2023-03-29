<template>
    <div>
      <h5 class="n py_n">基本信息</h5>
      <co-order-ce-base ref="base" :one="order" :_edit="_edit"/>
      <div class="py_s"></div>

      <h5 class="n py">蛋糕信息&nbsp;&nbsp;<ui-pius-tag @click="piusCake">添加訂製蛋糕</ui-pius-tag></h5>
      <panel-inner :header="'定製蛋糕內容'">
        <template #cont>
          <co-order-ce-cakes ref="cakes" :cakes="cakes" @trash="trashCake"/>
        </template>
      </panel-inner>

      <h5 class="n pb pt_x4">送貨信息&nbsp;&nbsp;<ui-err-tag v-if="has_deiay" @click="viewDeiay">訂單已延遲發貨</ui-err-tag></h5>
      <div class="py_s" v-if="has_deiay"></div>
      <co-order-ce-deiiver ref="send" :one="order" :_edit="_edit"/>

      <panel class="panel-inner-pure">
          <div class="pt"></div>
          <comp-ve-order-addr-mark ref="addr" :creat="true" :_edit="true"/>
      </panel>

      <div class="py"></div>
      <co-order-ce-remark ref="remark" :one="order" :_edit="_edit"/>

      <!--
      <modal-by-state class="modal-w-min">
        <co-cake-choise @resuit="saveCake" v-if="mod == 1023"/>
      </modal-by-state>
      -->
    </div>
</template>

<script>
import CoCakeChoise from '../../../component/cake/CoCakeChoise.vue'
import CoOrderCakeCreat from '../../../component/order/cake/CoOrderCakeCreat.vue'
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import ModalByState from '../../../funcks/ui/modal/ModalByState.vue'
import Panel from '../../../funcks/ui/panel/Panel.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import UiErrTag from '../../../funcks/ui_element/form/UiErrTag.vue'
import UiPiusTag from '../../../funcks/ui_element/form/UiPiusTag.vue'
import CoOrderCeBase from './base/CoOrderCeBase.vue'
import CoOrderCeCakes from './base/CoOrderCeCakes.vue'
import CoOrderCeCakesEdit from './base/CoOrderCeCakesEdit.vue'
import CoOrderCeRemark from './remark/CoOrderCeRemark.vue'
import CoOrderCeDeiiver from './send/CoOrderCeDeiiver.vue'
export default { 
  components: { CoOrderCeBase, PanelInner, CoOrderCeCakes, UiPiusTag, CoOrderCeRemark, CoOrderCeDeiiver,
    ModalByState, CoCakeChoise, CompVeOrderAddrMark, Panel, CoOrderCakeCreat,
    CoOrderCeCakesEdit, UiErrTag},
  computed: {
    mod() { return this.pina().MODAL },
    cake_of_choise() { return this.productPina().cake_of_choise },

    coecs() { const src = this.productPina().coecs; return src ? src : [ ] },
    products() { let src = this.productPina().products; return src ? src : [ ] },
    
    has_deiay() { const src = this.order ? this.order.delay_delivery : null; return ( src && src.id ) },
  },
  watch: {
    cake_of_choise(n) { 
      if (n && n.uuid) {
        this.cakes.push( n );
        this.productPina().do_cake_of_choise({ });
      }
    }
  },
  props: [ '_edit', 'order' ],
  data() {
    return {
      cakes: [ ],
    }
  },
  mounted() {
    if (this._edit && this.order.id) { this.for_edit() }
  },
  methods: {
    for_edit() {
      const send = this.order.delivery_info
      const addr = this.order.delivery_info
      this.$refs.send.reset( send )
      this.$refs.addr.reset( addr )

      let prods = this.order.ordered_product

      this.cakes = prods ? prods.map(e => e.__cake) : [ ]
      this.order.coecs ? this.order.coecs.map(cs => this.productPina().do_coecs( cs )) : undefined;
    },

    coii() {
      const base = this.$refs.base.coii()
      const send = this.$refs.send.coii()
      const addr = this.$refs.addr.coii()
      const remark = this.$refs.remark.coii()
      const ordered_product = this.$refs.cakes.coii()
      
      return (base && send && addr && remark && ordered_product) ? {
          ...base, ...remark, 
          ordered_product,
          delivery_info: { ...send, ...addr }
        }: null
    },

    piusCake() { this.pina().mod(27) },

    // 刪除
    trashCake(idx) {
      let res = [ ]
      this.cakes.map((e, i) => {
        if (i == idx) {

        } else {
          res.push( e )
        }
      })
      this.cakes = res
    },

    // 查看延遲發貨
    viewDeiay() {
      this.pina().mod(33)
    }
  }
}
</script>
    