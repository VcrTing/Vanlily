<template>
    <layout-form :header="'客戶信息'">
        <template v-slot:opera>
          <fo-form-opera class="fx-r" @cancie="go('/admin/customer_iist')"/>
          <div class="py_s"></div>
        </template>
        <template v-slot:cont>
          <div class="py"></div>
          <customer-edit-form></customer-edit-form>
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

}
</script>

<style>

</style>