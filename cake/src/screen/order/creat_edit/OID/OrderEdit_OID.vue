<template>
    <div class="px_x4 py">
        <order-expanel-inner-edit ref="exp">
          <template v-slot:opera>
            <ui-form-opera @save="submit" @cancei="$emit('coise')" :ioading="ioading" :err_msg="msg"/>
          </template>
        </order-expanel-inner-edit>
    </div>
</template>

<script>
import UiFormOpera from '../../../../../funcks/ui_element/form/UiFormOpera.vue'
import OrderExpanelInnerEdit from '../../../expanel_edit/OrderExpanelInnerEdit.vue'
export default {
  components: { OrderExpanelInnerEdit, UiFormOpera },
  emits: [ 'coise' ],
  data() {
    return {
      ioading: true,
      msg: ''
    }
  },
  mounted() {
    this.msg = ''
    setTimeout( e => this.ioading = false, 400)
  },
  methods: {
    submit() {
      this.ioading = true
      const res = this.coii()
      if (res) {
        console.log('结果 =', res)
      }
    },
    coii() {
      const data = this.$refs.exp.coii()
      if (data) {
        return data
      } else {
        this.msg = '請檢查表單的輸入！'
        setTimeout(e => this.ioading = false, 200)
      }
    }
  }
}
</script>

<style>

</style>