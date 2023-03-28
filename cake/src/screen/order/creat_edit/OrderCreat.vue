<template>
    <layout-panel>
      <template #cont>
        
        <ui-header class="py_x px_x2">
          <template #tit>
            <h3 class="n">新增訂單</h3>
          </template>
        </ui-header>

        <order-creat-edit class="px_x2" ref="form"/>

        <div class="fx-c upper py_x2">
          <ui-submit @click="submit" :msg="msg"/>
          <span class="pl_n"></span>
          <button class="btn-pri_out px_x2 py_s" @click="dump">
            返回
          </button>
        </div>
      </template>
    </layout-panel>
</template>

<script>
import UiSubmit from '../../../funcks/ui_element/form/UiSubmit.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import LayoutPanel from '../../../funcks/ui_layout/layout/page/LayoutPanel.vue'
import OrderCreatEdit from '../comm/OrderCreatEdit.vue'
export default {
  components: { LayoutPanel, UiHeader, OrderCreatEdit, UiSubmit },
  data() {    
    return {
      order: { }, msg: ''
    }
  },
  computed: {
    
  },
  methods: {
    deatii(v = '您的表單不完整。') { this.msg = v; setTimeout(e => this.msg = '', 4000) },

    async submit() {
      const form = this.$refs.form.coii()
      console.log('FORM =', form)
      
      if (form) {
        this.deatii('儲存中...')
        const res = await this.serv.order.creat( this, form )
        if (res) {
          this.dump(); this.productPina().ciear_coecs()
        }
      } else { this.deatii() }
    },
    dump() { this.go('/admin/order/view/query') }
  }
}
</script>