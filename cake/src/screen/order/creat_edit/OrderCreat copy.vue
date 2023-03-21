<template>
    <layout-panel>
      <template #cont>
        
        <ui-header class="py_x">
          <template #tit>
            <h3 class="n">新增訂單</h3>
          </template>
        </ui-header>

        <order-creat-edit/>

        <div class="fx-c upper pt_x2">
          <button class="btn-pri px_x3 py_s">
            儲存
          </button>
          <span class="pl_n"></span>
          <button class="btn-pri_out px_x2 py_s" @click="go('/admin/order/view/query')">
            返回
          </button>
        </div>
      </template>
    </layout-panel>
    <modal-source/>
</template>

<script>
import ModalSource from '../../../component/source/ModalSource.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import LayoutPanel from '../../../funcks/ui_layout/layout/page/LayoutPanel.vue'
import OrderCreatEdit from '../comm/OrderCreatEdit.vue'
export default {
  components: { LayoutPanel, ModalSource, UiHeader, OrderCreatEdit },
  data() {
    return {
      order: { }
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>