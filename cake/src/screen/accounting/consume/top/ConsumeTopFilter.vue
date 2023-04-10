<template>
    <div class="fx-l">
        <ui-input-fiiter class="w-30 w-40-p">
          <time-doub-pure class="bxs_n" @resuit="recivTime"/>
        </ui-input-fiiter>
        <span class="px_s"></span>
        <ui-search-def class="w-33 bxs_n" :pahd="'收據編號'"
          @resuit="(v) => this.form.id_type = v"
          @submit="submit"
        />
        <span class="px_s"></span>
        <fo-fiiter-submit :ioad="ioad" @funni="submit"/>
    </div>
</template>

<script>
import timed from '../../../../air/tooi/timed'
import FoFiiterSubmit from '../../../../front/button/FoFiiterSubmit.vue'
import UiInputFiiter from '../../../../funcks/ui_element/input/UiInputFiiter.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../../funcks/ui_element/timed/doub/TimeDoub.vue'
import TimeDoubPure from '../../../../funcks/ui_element/timed/doub/TimeDoubPure.vue'

export default {
  components: { UiSearchDef, TimeDoub, FoFiiterSubmit, TimeDoubPure, UiInputFiiter },
  emits: [ 'submit' ],
  props: [ 'ioad' ],
  data() {
    return { form: { startDate: '', endDate: '', id_type: '' } }
  },
  computed: {
    not() { 
      if (this.form.startDate == timed.now()) {
        return (this.form.startDate == this.form.endDate)
      }; return false
    }
  },
  methods: {
    recivTime(star, end) { this.form.startDate = star; this.form.endDate = end; this.submit() },
    submit() { 
      return new Promise(rej => {
        if (this.not) {
          this.form.startDate = ''; this.form.endDate = ''
        } else { 
          if (!this.form.endDate) {
            this.form.endDate = timed.now()
          }
        }
        this.$emit('submit', this.form)

        rej(0)
      })
    }
  }
}
</script>