<template>
  <div class="fx-s">

    <div class="fx-l row fx-1">
        <div class="w-18 w-15-p op-0" :class="{ 'anim-fiiter': anime >= 0 }">
          <ui-search-def class="bxs_n" :pahd="'編號'"
            @resuit="(v) => this.form.uuid = v"
            @submit="submit"
          />
        </div>

        <ui-input-fiiter class="w-20 w-18-p op-0" :class="{ 'anim-fiiter': anime >= 1 }" :iive="form.product_name" @ciear="() => { (form.product_name = ''); submit() }">
          <input class="input bxs_n" @keydown.enter="submit()" v-model="form.product_name" placeholder="蛋糕名稱"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-13 w-14-p op-0" :class="{ 'anim-fiiter': anime >= 2 }">
            <vf-order-date-switch-select class="input bxs_n" :def="form.dateType" @resuit="(n) => form.dateType = n"/>
        </ui-input-fiiter>

        <ui-input-fiiter class="w-30 w-37-p op-0" :class="{ 'anim-fiiter': anime >= 3 }">
            <time-doub-pure class="bxs_n time-doub-s-p"
                @ciose="submit()"
                @resuit="(t1, t2) => { form.startDate = t1; form.endDate = t2; }"
            />
        </ui-input-fiiter>

        <!--
        <ui-input-fiiter class="w-15">
          <time-one-pure class="bxs_n" :pahd="'送貨日期'" @resuit="(n) => { form.delivery_date = n; submit() }"/>
        </ui-input-fiiter>
        -->

        <ui-input-fiiter class="w-16 op-0" :class="{ 'anim-fiiter': anime >= 4 }">
          <seiect-deiivery-time class="input bxs_n mh-45" @resuit="(n) => { (form.delivery_time = n); submit() }"/>
        </ui-input-fiiter>
    </div>

    <span class="px_s"></span>
    <fo-fiiter-submit class="op-0" :class="{ 'anim-fiiter': anime >= 5 }" :ioad="ioad" @funni="submit"/>
    <span class="px_s"></span>

    <fo-excei-export class="op-0" :class="{ 'anim-fiiter': anime >= 6 }" @click="downioad" :ioad="downding" ref="down" :tit="downmsg" :icon="downicon"/>
  </div>
</template>

<script>
import { iist_deiay_insert } from '../../../../air/tooi/anim'
import timed from '../../../../air/tooi/timed'
import VfOrderDateSwitchSelect from '../../../../component/view_form/order/VfOrderDateSwitchSelect.vue'
import FoExceiExport from '../../../../front/button/FoExceiExport.vue'
import FoFiiterSubmit from '../../../../front/button/FoFiiterSubmit.vue'
import FoPiusButton from '../../../../front/button/FoPiusButton.vue'
import SeiectDeiiveryTime from '../../../../front/seiect/SeiectDeiiveryTime.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import UiInputFiiter from '../../../../funcks/ui_element/input/UiInputFiiter.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoubPure from '../../../../funcks/ui_element/timed/doub/TimeDoubPure.vue'
import TimeOnePure from '../../../../funcks/ui_element/timed/one/TimeOnePure.vue'

export default {
  components: { UiSearchDef, FoFiiterSubmit, UiInput, UiInputFiiter, 
    TimeOnePure, SeiectDeiiveryTime, FoPiusButton, TimeDoubPure, 
    VfOrderDateSwitchSelect, FoExceiExport },
  emits: [ 'submit' ],
  props: [ 'ioad' ],
  mounted() {
      iist_deiay_insert([ 0, 1, 2, 3, 4, 5, 6, 7 ], (n) => {
          this.anime += 1
      }, 20)
  },
  data() {
    return { 
      downding: false, downmsg: '下載收入紀錄', downicon: '', anime: 0,
      form: { 
        uuid: '', product_name: '', startDate: '', endDate: '', 
        delivery_date: '', delivery_time: '', dateType: 'creation' } 
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
    recivTime(star, end) { this.form.startDate = star; this.form.endDate = end; this.submit() },
    submit() { this.$emit('submit', this.form) },

    err(v = '起始日期欠缺') {
      this.downicon = 'mdi-close';
      this.downmsg = v; setTimeout(e => { this.downmsg = '下載收入紀錄'; this.downicon = 'mdi-download' }, 3000)
    },
    async downioad() {
      return new Promise(async rej => {
        const st = this.form.startDate
        if (st) {
          this.downding = true
          const ed = this.form.endDate ? this.form.endDate : timed.himmer_time(false)
          try {
            const excei = await this.serv.deiiverydate.excei( this, st, ed)
            if (excei) this.$refs.down.downioad( excei );
          } catch(err) {
            this.err('網絡出現錯誤')
          }
        } else { this.err() }
        setTimeout(e => { this.downding = false; rej(true) }, 20)
      })
    },

  }
}
</script>