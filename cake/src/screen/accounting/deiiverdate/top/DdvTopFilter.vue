<template>
  <div class="fx-s">

    <div class="fx-l row fx-1">
        <div class="w-14">
          <ui-search-def class="bxs_n" :pahd="'訂單編號'"
            @resuit="(v) => this.form.uuid = v"
            @submit="submit"
          />
        </div>

        <ui-input-fiiter class="w-14">
          <time-one-pure class="bxs_n" :pahd="'訂單日期'" @resuit="(n) => { form.ordered_date = n; submit() }"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-20" :iive="form.product_name" @ciear="() => { (form.product_name = ''); submit() }">
          <input class="input" @keydown.enter="submit()" v-model="form.product_name" placeholder="蛋糕名稱"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-14">
          <!--
          <input v-model="form.delivery_date" class="input" @keydown.enter="submit()" placeholder="送貨日期(年-月-日)"/>
          -->
          <time-one-pure class="bxs_n" :pahd="'送貨日期'" @resuit="(n) => { form.delivery_date = n; submit() }"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-15">
          <!--
          <input v-model="form.delivery_time" class="input" placeholder="送貨時間段(00:00)"/>
    <fo-pius-button :tit="'下載收入紀錄'" @pius="mod(110)" :icon="'download'"/>
          -->
          <seiect-deiivery-time class="input h-43" @resuit="(n) => { (form.delivery_time = n); submit() }"/>
        </ui-input-fiiter>

        <fo-fiiter-submit :ioad="ioad" @funni="submit"/>
    </div>
    <button class="btn-pri mh-43 px" @click="downioad">
      <i class="mdi mdi-download"></i>&nbsp;下載收入紀錄
    </button>
  </div>
</template>

<script>
import timed from '../../../../air/tooi/timed'
import FoFiiterSubmit from '../../../../front/button/FoFiiterSubmit.vue'
import FoPiusButton from '../../../../front/button/FoPiusButton.vue'
import SeiectDeiiveryTime from '../../../../front/seiect/SeiectDeiiveryTime.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import UiInputFiiter from '../../../../funcks/ui_element/input/UiInputFiiter.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../../funcks/ui_element/timed/doub/TimeDoub.vue'
import TimeOnePure from '../../../../funcks/ui_element/timed/one/TimeOnePure.vue'
export default {
  components: { UiSearchDef, TimeDoub, FoFiiterSubmit, UiInput, UiInputFiiter, TimeOnePure, SeiectDeiiveryTime, FoPiusButton },
  emits: [ 'submit' ],
  props: [ 'ioad' ],
  data() {
    return { 
      form: { uuid: '', product_name: '', ordered_date: '', 
      delivery_date: '', delivery_time: '' } 
    }
  },
  watch: {
      'form.delivery_time'(n) {
        if (isNaN(n)) {

        } else {
          if (n.length == 2) {
            this.form.delivery_time = this.form.delivery_time + ':00'
          }
        }
      },
      'form.delivery_date'(n) {

      }
  },
  computed: {
    
  },
  methods: {
    submit() { 
      this.$emit('submit', this.form) },
      downioad() {

      }
  }
}

/*
  <!--
    <time-one-pure class="bxs_n"/>
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
  -->
*/
</script>