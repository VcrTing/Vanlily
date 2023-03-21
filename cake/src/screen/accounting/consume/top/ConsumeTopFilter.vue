<template>
    <div class="fx-l">
        <time-doub class="bg-FFF input-clear pr bxs_n mh-43"
          @end="(v) => this.form.endDate = v"
          @star="(v) => this.form.startDate = v"
          @submit="submit"
        />
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
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../../funcks/ui_element/timed/doub/TimeDoub.vue'
export default {
  components: { UiSearchDef, TimeDoub, FoFiiterSubmit },
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
    submit() { 
      if (this.not) {
        this.form.startDate = ''; this.form.endDate = ''
      } else { 
        if (!this.form.endDate) {
          this.form.endDate = timed.now()
        }
      }
      this.$emit('submit', this.form) }
  }
}
</script>