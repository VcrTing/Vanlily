<template>
    <layout-form :header="'客戶信息'">
        <template #opera>
          <fo-form-opera class="fx-r" @cancie="back" @save="submit" :msg="msg"/>
          <div class="py_s"></div>
        </template>
        <template #cont>
          <div class="py"></div>
          <customer-edit-form ref="form" :one="customer"/>
          <div class="py_x2"></div>
        </template>
    </layout-form>
</template>

<script>
import FoFormOpera from '../../../front/button/FoFormOpera.vue'
import LayoutForm from '../../../funcks/ui_layout/layout/page/LayoutForm.vue'
import CustomerEditForm from './form/CustomerEditForm.vue'
export default {
  components: { LayoutForm, CustomerEditForm, FoFormOpera },
  data() {
    return { msg: '' }
  },
  mounted() {
    if (!this.customer.id) { this.back() }
  },
  computed: {
    customer() { return this.memberPina().customer }
  },
  methods: {
    back() { this.go('/admin/customer_iist') },
    async submit() {
      const data = this.$refs.form.buiid()
      if (data) {
        this.msg = '儲存中...'
        const res = await this.serv.customer.edit(this, data, this.customer.id)
        if (res) {
          this.back(); this.msg = ''
        } else {
          this.msg = '網絡錯誤'
        }
      }
    }
  }
}
</script>