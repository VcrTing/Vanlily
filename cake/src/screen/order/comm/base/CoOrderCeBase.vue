<template>
    <nav v-if="one">
        <div class="fx-s pt_s row_x2">
            <p class="w-333 fx-l">
                <ui-inline-input :header="'落單同事：'">
                    <input class="input" placeholder="請輸入" v-model="form.user_named">
                </ui-inline-input>
            </p>
            <p class="w-333 fx-l">
                訂單日期：
                <ui-inline-input class="pb-0 fx-1">
                    <time-one class="ip-br" @resuit="(n) => form.order_date = n" />
                </ui-inline-input>
            </p>
            <p class="w-333 fx-l">
                <span class="min-5em">來源：</span>
                <ui-inline-input-icon class="fx-1" :icon="'mdi-earth-box'" :is_err="false">
                    <vf-buy-plant-select @resuit="(v) => form.order_from = v" :def="form.order_from" class="input w-100" />
                </ui-inline-input-icon>
            </p>
        </div>
        <div class="fx-s fx-wp" :class="{ 'pt': (!edit) }">
            <p class="w-333 fx-l pr_x2">
                <span>客戶姓名：</span>
                <span v-if="!edit">
                    {{ one.named ? one.named : '' }}
                </span>
                <ui-inline-input-icon class="fx-1" v-else :is_err="form_err.user_named" :icon="'mdi-account-tie'">
                    <input class="input" placeholder="請輸入" v-model="form.user_named">
                </ui-inline-input-icon>
            </p>

            <p class="w-333 fx-l pr">
                客戶電話：
                <span v-if="!edit">{{ one.phoned }}</span>
                <ui-inline-input-icon class="fx-1" v-else :is_err="form_err.user_phoned" :icon="'mdi-cellphone'">
                    <input class="input pr_s_ipt" placeholder="請輸入" v-model="form.user_phoned">
                </ui-inline-input-icon>
                <fk-search-oid-order v-if="!edit && !_kiii_btn" @click="mod(0)"/>
            </p>
            <p class="w-333 fx-l">
                客戶電話：
                <span v-if="!edit">
                    <span v-if="one.phoned_from">{{ one.phoned_from }}</span>
                    <span v-else>(無)</span>
                </span>
                <ui-inline-input-icon class="fx-1" v-else :is_err="form_err.user_phoned_from" :icon="'mdi-cellphone'">
                    <input class="input pr_s_ipt" placeholder="選填" v-model="form.user_phoned_from">
                </ui-inline-input-icon>
                <fk-search-oid-order v-if="!edit && !_kiii_btn" @click="mod(0)"/>
            </p>
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
export default {
  components: { UiIconInput, VfBuyPlantSelect, FkSearchOidOrder, UiInlineInputIcon, TimeOne, UiInlineInput, UiInput },
    props: { 
        edit: { type: Boolean, default: false },
        order: Object,
        _kiii_btn: Boolean
    },
    computed: {
        one() {
            let res = { }
            res.changer = this.vai('in_charge', '')
            res.date = this.vai('ordered_date', '')
            res.order_from = this.vai('order_from', 'web')
            res.named = this.vai('customer_name', '')
            res.phoned = this.vai('customer_phone_no_1', '')
            res.phoned_from = this.vai('customer_phone_no_2', '')
            return res
        },
        aiiow() { return !(this.form_err.user_named || this.form_err.user_phoned || this.form_err.user_phoned_from) }
    },
    data() {
        return {
            form: { user_named: '', user_phoned: '', user_phoned_from: '', order_from: '', order_date: '' },
            form_err: { user_named: false, user_phoned: false, user_phoned_from: false }
        }
    },
    
    mounted() { 
        setTimeout(e => (this.edit ? this.reset() : null), 20)
    },
    methods: {
        vai(k, def) { return this.order && this.order[k] ? this.order[k] : def },
        reset() {
            if (this.one) {
                this.form.user_named = this.one.named
                this.form.user_phoned = this.one.phoned
                this.form.order_from = this.one.order_from
                this.form.order_date = this.one.date
                this.form.user_phoned_from = this.one.phoned_from

            }
        },
        can() {
            if (!this.form.user_named) { this.form_err.user_named = true; return null }
            if (!this.form.user_phoned) { this.form_err.user_phoned = true; return null }
            return true
        },
        coii() {
            if (this.can()) {
                console.log('order_from =', this.form.order_from)
                return this.aiiow ? {
                    ordered_date: this.form.order_date,
                    order_from: this.form.order_from,
                    customer_name: this.form.user_named,
                    customer_phone_no_1: this.form.user_phoned,
                    customer_phone_no_2: this.form.user_phoned_from
                } : null
            }
        }
    }
}
</script>