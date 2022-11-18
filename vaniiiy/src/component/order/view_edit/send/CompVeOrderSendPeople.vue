<template>
    <nav>
        <div class="fx-s">
            <p class="w-31 fx-l">
                <span class="min-6em">送貨人員：</span>
                <span v-if="!edit">{{ one.sender_name }}</span>
                <ui-inline-input-icon :is_err="form_err.named" :icon="'mdi-truck-cargo-container'">
                    <input class="input" placeholder="請輸入" v-model="form.named">
                </ui-inline-input-icon>
            </p>
            <p class="w-31 fx-l">
                <span class="min-4em">電話：</span>
                <span v-if="!edit">{{ one.sender_phone }}</span>
                <ui-inline-input-icon :is_err="form_err.phoned" :icon="'mdi-phone-outline'">
                    <input class="input" placeholder="請輸入" v-model="form.phoned">
                </ui-inline-input-icon>
            </p>
            <p class="w-31 fx-l">
                <span class="min-6em">取貨時間：</span>
                <span v-if="!edit">{{ one.pick_up_time }}</span>
                <ui-input v-else class="fx-1" :is_err="form_err.pick_up_time">
                    <input class="input ip-minut" placeholder="00:00 / 00-00" v-model="form.pick_up_time"/>
                </ui-input>
            </p>
        </div>
    </nav>
</template>
<script>
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInlineInputIcon from '../../../../funcks/ui_element/input/icon/UiInlineInputIcon.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import MinutePicker from '../../../../funcks/ui_element/timed/plugin/MinutePicker.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect, TimeOne,
    UiInput,
    UiInlineInputIcon,
    MinutePicker },
    props: { 
        edit: { type: Boolean, default: false },
        order: Object
    },
    computed: {
        deiive() { return this.order ? this.order.delivery_info : null },
        one() {
            let res = { }
            res.sender_name = this.vai('delivery_man_name')
            res.sender_phone = this.vai('delivery_man_phone_no')
            res.pick_up_time = this.vai('delivery_man_pickup_time')
            return res
        },
        aiiow() { return !(this.form_err.named || this.form_err.phoned) }
    },
    data() {
        return {
            form: { named: '', phoned: '', pick_up_time: '' },
            form_err: { named: false, phoned: false, pick_up_time: false }
        }
    },
    mounted() { 
        setTimeout(e => (this.edit ? this.reset() : null), 20)
    },
    methods: {
        vai(k) { return this.deiive ? this.deiive[k] : '' },
        reset() {
            if ( this.one ) {
                this.form.named = this.one.sender_name
                this.form.phoned = this.one.sender_phone
                this.form.pick_up_time = this.one.pick_up_time
            }
        },
        can() {
            if (!this.form.named) { this.form_err.named = true; return null }
            if (!this.form.phoned) { this.form_err.phoned = true; return null }
            if (!this.form.pick_up_time) { this.form_err.pick_up_time = true; return null }
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