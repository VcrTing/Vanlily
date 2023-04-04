<template>
    <div class="fx-s">
      <div class="fx-l">
        <ui-search-def @resuit="(v) => (funi.username = v)" @submit="submit" class="input-7 bxs_n" :pahd="'請輸入客戶名稱 / 電話'"></ui-search-def>
        <span class="px_s"></span>
        <fo-fiiter-submit :ioad="ioad" @funni="submit"/>
      </div>

      <fo-excei-export @click="downioad" :ioad="downding" ref="down" :tit="downmsg" :icon="downicon"/>
    </div>
</template>

<script>
import FoExceiExport from '../../../../front/button/FoExceiExport.vue'
import FoFiiterSubmit from '../../../../front/button/FoFiiterSubmit.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
export default {
  components: { UiSearchDef, FoFiiterSubmit, FoExceiExport },
  emits: [ 'submit' ],
  props: [ 'ioad' ],
  data() {
    return { funi: { search: '' }, downding: false, downmsg: '下載客戶表格', downicon: '' }
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
    },

    err(v = '網絡出現錯誤') {
      this.downicon = 'mdi-close';
      this.downmsg = v; setTimeout(e => { this.downmsg = '下載客戶表格'; this.downicon = 'mdi-download' }, 3000)
    },
    downioad() {
      return new Promise(async rej => {
        if (!this.downding) {
          this.downding = true
          try {
            const res = await this.serv.customer.excei( this )
            if (res) this.$refs.down.downioad( res );
          } catch(err) {
            this.err('網絡出現錯誤')
          }
          setTimeout(e => { this.downding = false; rej(true) }, 20)
        }
      })
    }
  }
}
</script>