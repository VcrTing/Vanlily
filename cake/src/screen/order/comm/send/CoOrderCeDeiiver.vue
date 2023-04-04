<template>
    <nav class="">

        <div class="fx-s row_x2 pb_x2">
            <ui-inline-input-icon class="w-333" :header="'送貨日期：'" :_right="true" :is_err="form_err.delivery_date">
                <!--
                <time-one class="ip-br" @resuit="(n) => form.delivery_date = n" :def="form.delivery_date"/>
                    -->
                <time-one-pure ref="date" class="ip-br" :pahd="'請選擇'" :def="form.delivery_date" @resuit="(n) => form.delivery_date = n" :init="false"/>
            </ui-inline-input-icon>
 
            <ui-inline-input-icon class="w-333" :header="'送貨時段：'" :_right="true" :is_err="false">
                <vf-send-time-select ref="send_time" class="input" @resuit="(n) => form.delivery_time = n" :def="form.delivery_time"/>
            </ui-inline-input-icon>

            <ui-inline-input-icon class="w-333" :header="'實際送貨時間：'" :_class="'label-7em'" :icon="'mdi-clock-time-five-outline'" :_right="true" :is_err="false">
                <input class="input" placeholder="00:00" v-model="form.actual_delivery_time" :def="form.actual_delivery_time"/>
            </ui-inline-input-icon>
        </div>

        <div class="fx-s row_x2 pb_x2">
            <ui-inline-input-icon class="w-333" :header="'送貨人員：'" :icon="'mdi-moped'" :_right="true" :is_err="form_err.delivery_man_name">
                <input class="input" placeholder="請輸入" v-model="form.delivery_man_name"/>
            </ui-inline-input-icon>

            <ui-inline-input-icon class="w-333" :header="'電話：'" :icon="'mdi-card-account-phone-outline'" :_right="true" :is_err="form_err.delivery_man_phone_no">
                <input class="input" placeholder="請輸入" v-model="form.delivery_man_phone_no" type="number"/>
            </ui-inline-input-icon>

            <ui-inline-input-icon class="w-333" :header="'取貨時間：'" :_class="'label-7em'" :icon="'mdi-clock-time-five-outline'" :_right="true" :is_err="false">
                <input class="input" placeholder="00:00" v-model="form.delivery_man_pickup_time"/>
            </ui-inline-input-icon>
        </div>
    </nav>
</template>
<script>
import FkSearchOidOrder from '../../../../funcks/order/static/FkSearchOidOrder.vue'
import UiIconInput from '../../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInlineInputIcon from '../../../../funcks/ui_element/input/icon/UiInlineInputIcon.vue'
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfBuyPlantSelect from '../../../../component/view_form/order/VfBuyPlantSelect.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import timed from '../../../../air/tooi/timed'
import VfSendTimeSelect from '../../../../component/view_form/send/VfSendTimeSelect.vue'
import TimeOnePure from '../../../../funcks/ui_element/timed/one/TimeOnePure.vue'
export default {
  components: { UiIconInput, VfBuyPlantSelect, FkSearchOidOrder, UiInlineInputIcon, TimeOne, UiInlineInput, UiInput, VfSendTimeSelect, TimeOnePure },
    props: { 
        one: Object,
        _edit: Boolean
    },
    
    data() {
        return {
            form: { delivery_date: '', delivery_time: '', delivery_man_name: '', delivery_man_phone_no: '', delivery_man_pickup_time: '', actual_delivery_time: '' },
            form_origin: { delivery_date: '', delivery_time: '', delivery_man_name: '', delivery_man_phone_no: '', delivery_man_pickup_time: '', actual_delivery_time: '' },
            form_err: { delivery_man_name: false, delivery_man_phone_no: false }
        }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { 
            if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } }
            this.$refs.send_time.ioc(this.form.delivery_time)
            this.$refs.date.ioc(this.form.delivery_date)
        },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else { this.form_err[k] = false } }
            delete this.form.id

            this.form.delivery_man_phone_no = this.form.delivery_man_phone_no + ''
            return this.form
        },
    }
}
</script>