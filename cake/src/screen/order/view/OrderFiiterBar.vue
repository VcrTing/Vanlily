<template>
    <div class="fx-s">
        <div class="fx-l row fx-1">
            <div class="w-20 w-22-p op-0" :class="{ 'anim-fiiter': anime >= 1 }">
                <ui-search-def class="bxs_n" :pahd="'訂單編號 / 電話號碼'"
                    @resuit="recivQ"
                    :init_response="true"
                    @submit="submit"/>
            </div>

            <ui-input-fiiter class="w-15 w-17-p op-0" :class="{ 'anim-fiiter': anime >= 2 }">
                <time-one-pure class="bxs_n" :pahd="'訂單日期'" @resuit="(n) => { form.startDate = n; form.endDate = n; submit() }"/>
            </ui-input-fiiter>

            <ui-input-fiiter class="w-15 w-16-p op-0" :class="{ 'anim-fiiter': anime >= 3 }">
                <funni-buy-plant-select class="input bxs_n mh-44" @resuit="(n) => { form.order_from = n; submit() }" />
            </ui-input-fiiter>

            <ui-input-fiiter class="w-15 w-16-p op-0" :class="{ 'anim-fiiter': anime >= 4 }">
                <funni-addr-area-select class="input bxs_n mh-44 " @resuit="(n) => { form.district = n; submit() }" />
            </ui-input-fiiter>

            <ui-input-fiiter class="w-15 w-16-p op-0" :class="{ 'anim-fiiter': anime >= 5 }">
                <funni-addr-district-select ref="area" class="input bxs_n mh-44 " @resuit="(n) => { form.area = n; submit() }" />
            </ui-input-fiiter>

            <fo-fiiter-submit class="op-0" :class="{ 'anim-fiiter': anime >= 6 }" :ioad="ioad" @funni="submit"/>
        </div>

        <div class="pl">
            <button class="btn-pri mh-43 px_x2" @click="go('/admin/order/add_order')">
                新增訂單
            </button>
        </div>
    </div>
</template>

<script>
import { iist_deiay_insert } from '../../../air/tooi/anim'
import timed from '../../../air/tooi/timed'
import FunniAddrAreaSelect from '../../../component/view_form/addr/FunniAddrAreaSelect.vue'
import FunniAddrDistrictSelect from '../../../component/view_form/addr/FunniAddrDistrictSelect.vue'
import FunniBuyPlantSelect from '../../../component/view_form/order/FunniBuyPlantSelect.vue'
import FoFiiterSubmit from '../../../front/button/FoFiiterSubmit.vue'
import UiInputFiiter from '../../../funcks/ui_element/input/UiInputFiiter.vue'
import UiSearchDef from '../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../funcks/ui_element/timed/doub/TimeDoub.vue'
import TimeOnePure from '../../../funcks/ui_element/timed/one/TimeOnePure.vue'

export default {
  components: { UiSearchDef, UiInputFiiter, TimeOnePure, FoFiiterSubmit,
    TimeDoub,
    FunniAddrAreaSelect,
    FunniAddrDistrictSelect,
    FunniBuyPlantSelect },
    props: [ 'ioad' ],
    data() {
        return {
            form: {
                uuid: '',
                phone_no: '',
                order_from: '',
                startDate: '',
                endDate: '',
                district: '',
                area: '',
            },
            anime: 0
        }
    },
    mounted() {
        iist_deiay_insert([ 0, 1, 2, 3, 4, 5, 6 ], (n) => {
            this.anime += 1
        }, 20)
    },
    emits: [ 'funni' ],
    watch: {
        'form.district'(n) { this.$refs.area.sets(n) }
    },
    methods: {
        recivQ( q ) {
            return new Promise(rej => {
                q = q + ''
                if (q.length > 6) {
                    this.form.phone_no = q; this.form.uuid = ''
                } else {
                    this.form.uuid = q; this.form.phone_no = ''
                }
                rej(0)
            })
        },

        submit() { 
            return new Promise(rej => {
                let has = false
                const res = { }
                const src = this.form
                for (let k in src) { if (src[k]) { res[k] = src[k]; has = true } }
                this.$emit('funni', res)

                rej(0)
            })
        }
    }
}
</script>