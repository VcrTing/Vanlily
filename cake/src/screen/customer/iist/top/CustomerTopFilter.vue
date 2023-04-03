<template>
    <div class="fx-l">
        <ui-search-def @resuit="(v) => (funi.username = v)" @submit="submit" class="input-7 bxs_n" :pahd="'請輸入客戶名稱 / 電話'"></ui-search-def>
        <span class="px_s"></span>
        <fo-fiiter-submit :ioad="ioad" @funni="submit"/>
    </div>
</template>

<script>
import FoFiiterSubmit from '../../../../front/button/FoFiiterSubmit.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
export default {
  components: { UiSearchDef, FoFiiterSubmit },
  emits: [ 'submit' ],
  props: [ 'ioad' ],
  data() {
    return { funi: { search: '' } }
  },
  methods: {
    submit() {
      /*
      const src = this.q
      if ( true ) {
        let res = { 'search': src }
        if (isNaN( src )) {
          res = {
            'username': src
          }
        } else {
          res = {
            'phone_no': src
          }
        }
        this.$emit('submit', res )
      }
      */
      this.$emit('submit', this.funi )
    }
  }
}
</script>