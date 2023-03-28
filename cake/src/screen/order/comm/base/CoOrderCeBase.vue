<template>
    <nav class="pt_s">
        <div class="fx-s row_x2 pb_x2">
            <ui-inline-input-icon class="w-333" :icon="'mdi-shield-account'" :header="'落單同事：'" :is_err="false">
                <input class="input" placeholder="可以不填寫" v-model="form.in_charge">
            </ui-inline-input-icon>

            <ui-inline-input-icon class="w-333" :header="'訂單日期：'" :icon="'mdi-calendar-range'" :is_err="false" :_txt_mode="true">
                {{ time }}
            </ui-inline-input-icon>

            <ui-inline-input-icon class="w-333" :header="'來源：'" :icon="'mdi-earth-box'" :is_err="false">
                <vf-buy-plant-select @resuit="(v) => form.order_from = v" ref="piant" class="input w-100" />
            </ui-inline-input-icon>
        </div>
        <div class="fx-s row_x2 pb_x2">

            <ui-inline-input-icon class="w-333" :header="'客戶姓名：'" :icon="'mdi-account-tie'" :is_err="form_err.customer_name">
                <input class="input" placeholder="請輸入" v-model="form.customer_name">
            </ui-inline-input-icon>

            <ui-inline-input-icon class="w-333" :header="'客戶電話：'" :icon="'mdi-cellphone'" :is_err="form_err.customer_phone_no_1">
                <input class="input pr_s_ipt" placeholder="請輸入" v-model="form.customer_phone_no_1" type="number">
            </ui-inline-input-icon>

            <ui-inline-input-icon class="w-333" :header="'客戶電話：'" :icon="'mdi mdi-phone'" :is_err="false">
                <input class="input pr_s_ipt" placeholder="可以不填寫" v-model="form.customer_phone_no_2" type="number">
            </ui-inline-input-icon>

            <!-- 
                <fk-search-oid-order  @click="mod(0)"/>
            -->
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
export default {
    components: { UiIconInput, VfBuyPlantSelect, FkSearchOidOrder, UiInlineInputIcon, TimeOne, UiInlineInput, UiInput },
    props: { 
        one: Object,
        _edit: Boolean
    },
    
    data() {
        return {
            time: timed.now(),
            form: { in_charge: '', order_from: '', customer_name: '', customer_phone_no_1: '', customer_phone_no_2: '', },
            form_origin: { in_charge: '', order_from: '', customer_name: '', customer_phone_no_1: '', customer_phone_no_2: '', },
            form_err: { customer_name: false, customer_phone_no_1: false }
        }
    },
    mounted() { 
        if (this._edit) { this.reset( this.one ) }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } }
            this.$refs.piant.ioc( this.form.order_from )
            this.time = timed.view( v.ordered_date )
        },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else { this.form_err[k] = false } }
            delete this.form.id
            this.form.customer_phone_no_1 = this.form.customer_phone_no_1 + ''
            this.form.customer_phone_no_2 = this.form.customer_phone_no_2 ? this.form.customer_phone_no_2 + '' : ''
            return this.form
        },
    }
}
</script>