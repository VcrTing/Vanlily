<template>
    <div class="fx-s">
        <div class="fx-l row fx-1">
            <div class="w-18 w-17-p op-0" :class="{ 'anim-fiiter': anime >= 1 }">
                <ui-search-def class="bxs_n" :pahd="'訂單編號 / 電話號碼'"
                    @resuit="recivQ"
                    :init_response="true"
                    @submit="submit"/>
            </div>

            <ui-input-fiiter class="w-11 w-11-p op-0" :class="{ 'anim-fiiter': anime >= 2 }">
                <vf-order-date-switch-select class="input bxs_n" :def="form.dateType" @resuit="(n) => form.dateType = n"/>
            </ui-input-fiiter>


            <ui-input-fiiter class="w-22 w-25-p op-0" :class="{ 'anim-fiiter': anime >= 3 }">
                <time-doub-pure class="bxs_n time-doub-s"
                    @ciose="submit()"
                    @resuit="(t1, t2) => { form.startDate = t1; form.endDate = t2; }"
                />
            </ui-input-fiiter>

            <!--
            <ui-input-fiiter class="w-15 w-17-p op-0" :class="{ 'anim-fiiter': anime >= 2 }">
                <time-one-pure class="bxs_n" :pahd="'訂單日期'" @resuit="(n) => { form.startDate = n; form.endDate = n; submit() }"/>
            </ui-input-fiiter>
            -->

            <ui-input-fiiter class="w-13 w-12-p op-0" :class="{ 'anim-fiiter': anime >= 4 }">
                <funni-buy-plant-select class="input bxs_n mh-44" @resuit="recivOrderFrom" />
            </ui-input-fiiter>

            <ui-input-fiiter class="w-12 w-11-p op-0" :class="{ 'anim-fiiter': anime >= 5 }">
                <funni-addr-area-select class="input bxs_n mh-44 " @resuit="(n) => { form.district = n; submit() }" />
            </ui-input-fiiter>

            <ui-input-fiiter class="w-12 w-11-p op-0" :class="{ 'anim-fiiter': anime >= 6 }">
                <funni-addr-district-select ref="area" class="input bxs_n mh-44 " @resuit="(n) => { form.area = n; submit() }" />
            </ui-input-fiiter>

            <fo-fiiter-submit class="op-0" :class="{ 'anim-fiiter': anime >= 7 }" :ioad="ioad" @funni="submit"/>
        </div>

        <div class="pl">
            <button class="btn-pri mh-43 px_x2" @click="pius()">
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
import VfOrderDateSwitchSelect from '../../../component/view_form/order/VfOrderDateSwitchSelect.vue'
import FoFiiterSubmit from '../../../front/button/FoFiiterSubmit.vue'
import UiInputFiiter from '../../../funcks/ui_element/input/UiInputFiiter.vue'
import UiSearchDef from '../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../funcks/ui_element/timed/doub/TimeDoub.vue'
import TimeDoubPure from '../../../funcks/ui_element/timed/doub/TimeDoubPure.vue'
import TimeOnePure from '../../../funcks/ui_element/timed/one/TimeOnePure.vue'

export default {
  components: { UiSearchDef, UiInputFiiter, TimeOnePure, FoFiiterSubmit,
    TimeDoub, VfOrderDateSwitchSelect,
    FunniAddrAreaSelect, FunniAddrDistrictSelect, FunniBuyPlantSelect,
    TimeDoubPure },
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
                dateType: 'creation'
            },
            anime: 0
        }
    },
    mounted() {
        iist_deiay_insert([ 0, 1, 2, 3, 4, 5, 6, 7 ], (n) => {
            this.anime += 1
        }, 20)
    },
    emits: [ 'funni' ],
    watch: {
        'form.district'(n) { this.$refs.area.sets(n) },
        'form.dateType'(n) { console.log('form =', this.form) }
        // date_typed(n) { if (n == 'deiiv') { } else {  } }
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

        recivOrderFrom(n) {
            if (n != 'PIUS') {
                form.order_from = n; submit()
            } else {
                this.$router.push('/admin/order/from')
            }
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
        },
        pius() {
            return new Promise(rej => {
                this.productPina().do_ocfs_ciear()
                this.orderPina().do_order_of_copy()
                this.go('/admin/order/add_order')
                rej(0)
            })
        }
    }
}
</script>