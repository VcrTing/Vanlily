<template>
    <layout-panel>
      <template v-slot:cont>
        <order-expanel-inner 
          :_pay="false"
          :mode="'CREAT'">
          
            <div class="fx-c upper">
                <button class="btn-pri px_x3 py_s">
                  添加
                </button>
                <span class="pl_n"></span>
                <button class="btn-pri_out px_x2 py_s" @click="go('/admin/order/view/query')">
                  返回
                </button>
            </div>
          </order-expanel-inner>
          <div class="pb"></div>
      </template>
    </layout-panel>
    <modal-source/>
</template>

<script>
import ModalSource from '../../../../component/source/ModalSource.vue'
import LayoutPanel from '../../../../funcks/ui_layout/layout/page/LayoutPanel.vue'
import OrderExiOpera from '../../expanel/opera/OrderExiOpera.vue'
import OrderExpanelInner from '../../expanel/OrderExpanelInner.vue'
export default {
  components: { LayoutPanel, OrderExpanelInner, OrderExiOpera, ModalSource },
  data() {
    return {
      order: { }
    }
  },
  computed: {
    uuid() { this.orderPina().uuid }
  },
  methods: {
    async fecthing() {
      let res = await this.serv.order.one()
      if (res) {
        
      }
    }
  }
}
</script>

<style>

</style>