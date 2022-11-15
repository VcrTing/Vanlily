<template>
    <nav v-if="one">
        {{ iog(order) }}
        <div class="fx-s pt_s">
            <p class="w-31 fx-l">
                送貨日期：
                <span v-if="!edit">{{ one.send_date }}</span>
                <time-one :_calss="'ip-time-def'" v-else></time-one>
            </p>
            <p class="w-31 fx-l">
                送貨時間：
                <span v-if="!edit">{{ one.send_time }}</span>
                <time-one :_calss="'ip-time-def'" v-else></time-one>
            </p>
            <p class="w-31 fx-l">
                <span class="min-5em">實際送貨時間：</span>
                <span v-if="!edit">{{ one.actuai_send_time }}</span>
                <time-one :_calss="'ip-time-def'" v-else></time-one>
            </p>
        </div>
        <div class="fx-s">
            <p class="w-31 fx-l">
                <span class="min-5em">取貨：</span>
                <span v-if="!edit" class="t-cap">
                    {{ one.getter }}
                </span>
                <vf-get-way-select v-else class="input input-4"></vf-get-way-select>
            </p>
            <p class="w-31 fx-l">
                <span class="min-5em">運費：</span>
                <view-money :money="one.cost" v-if="!edit"></view-money>
                <ui-input-money v-else class="input-4-limit">
                    <input type="number" placeholder="請輸入">
                </ui-input-money>
            </p>
            <p class="w-31 fx-l">
                <span class="min-7em">附加運費：</span>
                <view-money :money="one.cost_add" v-if="!edit"></view-money>
                <ui-input-money v-else class="input-4-limit">
                    <input type="number" placeholder="請輸入">
                </ui-input-money>
            </p>
        </div>
        <div class="fx-s">
            <p class="w-31 fx-l">
                <span class="min-5em">運單狀況：</span>
                <span v-if="!edit" class="t-cap">
                    {{ one.mark }}
                </span>
                <vf-paycost-select v-else class="input input-4"></vf-paycost-select>
            </p>
        </div>
    </nav>
</template>
<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInputMoney from '../../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import ViewMoney from '../../../view/money/ViewMoney.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
import VfPaycostSelect from '../../../view_form/order/VfPaycostSelect.vue'
import VfGetWaySelect from '../../../view_form/send/VfGetWaySelect.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect,
    TimeOne, VfGetWaySelect, UiInputMoney, VfPaycostSelect, ViewMoney },
    props: { 
        edit: { type: Boolean, default: false },
        order: Object
    },
    computed: {
        deiive() { return this.order ? this.order.delivery_info : null },
        one() {
            let res = {
                send_date: '', send_time: '', actuai_send_time: '2022-12-12', cost: 399, cost_add: 12, 
                named: '', phoned: '', phoned_from: '', mark: '这里是备注', getter: '陈先生',
            }
            res.send_date = this.vai('delivery_date')
            res.send_time = this.vai('delivery_time')
            res.actuai_send_time = this.vai('actual_delivery_time')
            res.getter = this.vai('delivery_method')
            res.cost = this.vai('delivery_fee')
            res.cost_add = this.vai('additional_fee')
            res.mark = this.vai('delivery_fee_status')
            return res
        },
    },
    data() {
        return {
            form: { user_named: '', user_phoned: '', user_phoned_from: '' }
        }
    },
    mounted() { 
        // this.edit ? this.reset() : null
    },
    methods: {
        vai(k) { return this.deiive ? this.deiive[k] : '' },
        reset() {
            if( this.one ) {
                this.form.user_named = this.one.named
                this.form.user_phoned = this.one.phoned
                this.form.user_phoned_from = this.one.phoned_from
            }
        }
    }
}
</script>