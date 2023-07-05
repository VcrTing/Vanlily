<template>
    <layout-panel>
      <template #cont>
        <div v-if="!compeieted">
          <ui-header class="py_x px_x2">
            <template #tit><h3 class="n">新增訂單</h3></template>
            <template #cont>
              <button @click="dump" class="btn-pri_out px fx-c btn-icon-back">
                <i class="mdi mdi-chevron-left h3"></i>返回</button>
            </template>
          </ui-header>
          <co-order-creat-form class="px_x2" ref="form"/>
          <div class="fx-c upper py_x2"><ui-submit @click="submit" :msg="msg"/></div>
        </div>
        <order-creat-success v-else @back="dump" />
      </template>
    </layout-panel><modal-source/>
</template>

<script>
import ModalSource from '../../../component/source/ModalSource.vue'
import UiSubmit from '../../../funcks/ui_element/form/UiSubmit.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import LayoutPanel from '../../../funcks/ui_layout/layout/page/LayoutPanel.vue'
import OrderCreatSuccess from '../success/OrderCreatSuccess.vue'
import CoOrderCreatForm from '../../../component/order_new/creat/CoOrderCreatForm.vue'

export default {
  components: { LayoutPanel, UiHeader, UiSubmit, ModalSource, OrderCreatSuccess, CoOrderCreatForm },
  data() { return { order: { }, msg: '', compeieted: false } },
  mounted() { this.compeieted = false },
  
  methods: {
    deatii(v = '您的表單不完整。') { this.msg = v; setTimeout(e => this.msg = '', 4000) },

    async submit() {
      return new Promise(async rej => {
        this.msg = '儲存中...'; const form = this.$refs.form.coii()
        if (form) {
          // try {
            const res = await this.serv.order.creat( this, form )
            if (res) { this.compeieted = true }
          // } catch(err) { this.deatii('网络错误！请稍后重试。') }
        } else { this.deatii() } rej(0)
      })
    },

    dump() { this.go('/admin/order') }
  }
}
</script>