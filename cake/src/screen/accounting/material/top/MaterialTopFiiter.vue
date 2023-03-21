<template>
    <div class="fx-l">
        <ui-search-def class="input-7 bxs_n" ref="search" 
          @submit="submit()"
          @resuit="(n) => search(n)" :pahd="'請輸入'"/>
        <span class="px_s"></span>
        <fo-fiiter-submit :ioad="ioad" @funni="submit()"/>
    </div>
</template>

<script>
import FoFiiterSubmit from '../../../../front/button/FoFiiterSubmit.vue'
import FoPiusButton from '../../../../front/button/FoPiusButton.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
export default {
  components: { UiSearchDef, FoPiusButton, FoFiiterSubmit },
  props: [ 'ioad' ],
  emits: [ 'submit' ],
  data() {
    return {
      funi: {
        /*
        specification: '',
        remarks: '',
        brand: '',
        name: '',
        type: ''
        */
        search: ''
      }
    }
  },
  watch: {
    q(n, o) {
      this.$emit('submit', n)
    }
  },
  methods: {
    submit() { this.$emit('submit', this.funi) },
    search(v) {
      for (let k in this.funi) {
        this.funi[ k ] = v
      }
    }
  }
}
</script>