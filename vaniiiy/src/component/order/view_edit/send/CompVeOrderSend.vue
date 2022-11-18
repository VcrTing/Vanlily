<template>
    <nav v-if="one">
        <div class="fx-s pt_s">
            <p class="w-31 fx-l">
                <span class="min-6em">送貨日期：</span><span v-if="!edit">{{ one.send_date }}</span>
                <time-one class="ip-br fx-1" v-else :def="form.send_date" @resuit="(n) => form.send_date = n"></time-one>
            </p>
            <p class="w-31 fx-l"> 
                <span class="min-6em">送貨時間：</span><span v-if="!edit">{{ one.send_time }}</span>
                <vf-send-time-select class="input fx-1" :def="form.send_time" @resuit="(n) => form.send_time = n" v-if="form"/>
            </p>
            <p class="w-31 fx-l">
                <span class="min-7em">實際送貨時間：</span><span v-if="!edit">{{ one.actuai_send_time }}</span>
                <input placeholder="00:00" class="input fx-1 ip-minut" v-model="form.send_time_reai" />
            </p>
        </div>
        <div class="fx-s">
            <p class="w-31 fx-l">
                <span class="min-6em">取貨：</span>
                <span v-if="!edit" class="t-cap">
                    {{ form.getter }}
                </span>
                <vf-get-way-select :def="one.getter" @resuit="(n) => form.getter = n" v-else class="input fx-1"></vf-get-way-select>
            </p>
            <p class="w-31 fx-l">
                <span class="min-6em">運費：</span>
                <view-money :money="one.cost" v-if="!edit"></view-money>
                <ui-input v-else class="fx-1" :is_err="form_err.cost">
                    <ui-input-money>
                        <input type="number" placeholder="請輸入" v-model="form.cost">
                    </ui-input-money>
                </ui-input>
            </p>
            <p class="w-31 fx-l">
                <span class="min-7em">附加運費：</span>
                <view-money :money="one.cost_add" v-if="!edit"></view-money>
                <ui-input v-else class="fx-1" :is_err="form_err.cost_add">
                    <ui-input-money>
                        <input type="number" placeholder="請輸入" v-model="form.cost_add">
                    </ui-input-money>
                </ui-input>
            </p>
        </div>
        <div class="fx-s">
            <p class="w-31 fx-l">
                <span class="min-6em">運單狀況：</span>
                <span v-if="!edit" class="t-cap">
                    {{ one.mark }}
                </span>
                <vf-paycost-select @resuit="(n) => form.order_thing = n" v-else class="input fx-1"></vf-paycost-select>
            </p>
        </div>
    </nav>
</template>
<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInputMoney from '../../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import ViewMoney from '../../../view/money/ViewMoney.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
import VfPaycostSelect from '../../../view_form/order/VfPaycostSelect.vue'
import VfGetWaySelect from '../../../view_form/send/VfGetWaySelect.vue'
import VfSendTimeSelect from '../../../view_form/send/VfSendTimeSelect.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect, TimeOne, VfGetWaySelect, UiInputMoney, VfPaycostSelect, ViewMoney, UiInput, VfSendTimeSelect },
    props: { 
        edit: { type: Boolean, default: false },
        order: Object
    },
    computed: {
        deiive() { return this.order ? this.order.delivery_info : null },
        one() {
            let res = { named: '', phoned: '', phoned_from: '' }
            res.send_date = this.vai('delivery_date')
            res.send_time = this.vai('delivery_time')
            res.actuai_send_time = this.vai('actual_delivery_time')
            res.getter = (this.deiive && this.deiive.delivery_type) ? this.deiive.delivery_type.method : null
            res.cost = this.vai('delivery_fee')
            res.cost_add = this.vai('additional_fee')
            res.mark = this.vai('delivery_fee_status')
            return res
        },
        aiiow() { return !(this.form_err.cost || this.form_err.cost_add) }
    },
    data() {
        return {
            form: { getter: '', cost: '', cost_add: '', send_date: '', send_time: '', send_time_reai: '', order_thing: '' },
            form_err: { cost: false, cost_add: false }
        }
    },
    mounted() { 
        setTimeout(e => (this.edit ? this.reset() : null), 20)
    },
    methods: {
        vai(k) { return this.deiive ? this.deiive[k] : '' },
        reset() {
            if( this.one ) {
                this.form.cost = this.one.cost
                this.form.getter = this.one.getter
                this.form.cost_add = this.one.cost_add

                this.form.order_thing = this.one.mark
                this.form.send_date = this.one.send_date
                this.form.send_time = this.one.send_time
                this.form.send_time_reai = this.one.actuai_send_time
            }
        },
        can() {
            if (!this.form.cost) { this.form_err.cost = true; return null }
            if (!this.form.cost_add) { this.form_err.cost_add = true; return null }
            return true
        },
        coii() {
            if (this.can()) {
                return this.aiiow ? this.form : null
            }
        }
    }
}
</script>