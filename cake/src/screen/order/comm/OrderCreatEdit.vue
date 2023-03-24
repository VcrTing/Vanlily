<template>
    <div>
      <h5 class="n py_n">基本信息</h5>
      <co-order-ce-base ref="base" :_edit="edit"/>
      <div class="py_s"></div>
 
      <h5 class="n py">蛋糕信息&nbsp;&nbsp;<ui-pius-tag @click="piusCake">添加訂製蛋糕</ui-pius-tag></h5>
      <panel-inner :header="'定製蛋糕內容'">
        <template #cont>
          <co-order-ce-cakes ref="cakes" :cakes="cakes" @trash="trashCake"/>
        </template>
      </panel-inner>

      <h5 class="n pb pt_x4">送貨信息</h5>
      <co-order-ce-deiiver ref="send"/>

      <panel class="panel-inner-pure">
          <div class="pt"></div>
          <comp-ve-order-addr-mark ref="addr" :creat="true"/>
      </panel>

      <div class="py"></div>
      <co-order-ce-remark ref="remark"/>

      <modal-by-state class="modal-w-min">
        <co-cake-choise @resuit="saveCake" v-if="mod == 23"/>
        <co-order-cake-creat v-if="mod == 22"/>
      </modal-by-state>
    </div>
</template>

<script>
import CoCakeChoise from '../../../component/cake/CoCakeChoise.vue'
import CoOrderCakeCreat from '../../../component/order/cake/CoOrderCakeCreat.vue'
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import ModalByState from '../../../funcks/ui/modal/ModalByState.vue'
import Panel from '../../../funcks/ui/panel/Panel.vue'
import PanelInner from '../../../funcks/ui/panel/PanelInner.vue'
import UiPiusTag from '../../../funcks/ui_element/form/UiPiusTag.vue'
import CoOrderCeBase from './base/CoOrderCeBase.vue'
import CoOrderCeCakes from './base/CoOrderCeCakes.vue'
import CoOrderCeRemark from './remark/CoOrderCeRemark.vue'
import CoOrderCeDeiiver from './send/CoOrderCeDeiiver.vue'
export default { 
  components: { CoOrderCeBase, PanelInner, CoOrderCeCakes, UiPiusTag, CoOrderCeRemark, CoOrderCeDeiiver,
    ModalByState, CoCakeChoise, CompVeOrderAddrMark, Panel, CoOrderCakeCreat},
  computed: {
    order() { let src = this.orderPina().one; return src ? src : { } },
    mod() { return this.pina().MODAL },
    products() { let src = this.productPina().products; return src ? src : [ ] }
  },
  props: [ 'order', 'edit' ],
  data() {
    return {
      cakes: [ ] 
    }
  },
  mounted() {
    if (this.edit && this.order.id) { this.for_edit() }
  },
  methods: {
    for_edit() {
      const base = this.order
      const send = this.order.delivery_info
      const addr = this.order.delivery_info
      const remark = this.order
      const ordered_product = this.ser_cakes( this.order.ordered_product )
    },
    ser_cakes(ops = [ ]) {
      let res = [ ]
      if (this.products) {
        this.products.map(prod => {
          ops.map(_op => {
            if (_op.product_uuid == prod.uuid) {
              
            }
          })
        })
      }
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

    //
    saveCake(v) {
      if (v.uuid) {
        v.ordered_product = {
          quantity: 0, unit_price: 0, original_price: 0, discounted_price: 0, 
          cake_special_needs: '', product_uuid: v.uuid, attribute: [ ]
        }; 
        if ( v.attributes ) {
          for (let k in v.attributes) {
            v.ordered_product['attribute']
          }
        }
        this.cakes.push( v )
      }
    },
    piusCake() { this.pina().mod(23) },

    // 刪除
    trashCake(uuid) {
      // console.log('刪除 =', uuid)
      let res = [ ]
      this.cakes.map(e => {
        if (e.uuid !== uuid) { res.push( e ) }
      });
      this.cakes = res
    }
  }
}
</script>
    