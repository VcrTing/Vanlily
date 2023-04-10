<template>
    <layout-panel>
      <template #cont>

        <div v-if="!compeieted">
          <ui-header class="py_x px_x2">
            <template #tit>
              <h3 class="n">新增訂單</h3>
            </template>
            <template #cont>
              <button @click="dump" class="btn-pri_out px fx-c">
                <i class="mdi mdi-chevron-left h3"></i>
                返回
              </button>
            </template>
          </ui-header>

          <order-creat-edit class="px_x2" ref="form" :_creat="true"/>

          <div class="fx-c upper py_x2">
            <ui-submit @click="submit" :msg="msg"/>
          </div>
        </div>

        <order-creat-success v-else
          @back="dump"
        />

      </template>
    </layout-panel>
    <modal-source/>
</template>

<script>
import ModalSource from '../../../component/source/ModalSource.vue'
import FoButton from '../../../front/button/FoButton.vue'
import UiSubmit from '../../../funcks/ui_element/form/UiSubmit.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import LayoutPanel from '../../../funcks/ui_layout/layout/page/LayoutPanel.vue'
import OrderCreatEdit from '../comm/OrderCreatEdit.vue'
import OrderCreatSuccess from '../success/OrderCreatSuccess.vue'
export default {
  components: { LayoutPanel, UiHeader, OrderCreatEdit, UiSubmit, ModalSource, OrderCreatSuccess, FoButton },
  data() {    
    return {
      order: { }, msg: '', compeieted: false
    }
  },
  mounted() {
    this.compeieted = false
  },
  methods: {
    deatii(v = '您的表單不完整。') { this.msg = v; setTimeout(e => this.msg = '', 4000) },

    async submit() {
      return new Promise(async rej => {
        const form = this.$refs.form.coii()
      
        if (form) {
          this.deatii('儲存中...')
          const res = await this.serv.order.creat( this, form )
          if (res) {
            this.compeieted = true
            this.productPina().ciear_coecs()
          }
        } else { this.deatii() }

        rej(0)
      })
    },
    dump() { this.go('/admin/order') }
  }
}
</script>