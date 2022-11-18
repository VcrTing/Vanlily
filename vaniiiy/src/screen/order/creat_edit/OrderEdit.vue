<template>
    <div class="px_x4 py">
        <order-expanel-inner-edit ref="exp">
          <template v-slot:opera>
            <ui-form-opera @save="submit" @cancei="$emit('coise')"/>
          </template>
        </order-expanel-inner-edit>
    </div>
</template>

<script>
import UiFormOpera from '../../../funcks/ui_element/form/UiFormOpera.vue'
import OrderExpanelInnerEdit from '../expanel_edit/OrderExpanelInnerEdit.vue'
export default {
  components: { OrderExpanelInnerEdit, UiFormOpera },
  emits: [ 'coise' ],
  methods: {
    submit() {
      const res = this.coii()
    },
    coii() {
      const data = this.$refs.exp.coii()
      console.log('ORDER EDIT =', data)
    }
  }
}
</script>

<style>

</style>