<template>
    <nav class="fx-s">
        <div class="fx-1 fx-s row_x2" v-if="form">
            <ui-inline-input class="w-28" :header="'日期:'" :is_err="false" :_ciass="''">
                <time-one class="ip-br" @resuit="(n) => form.payment_date = n"/>
            </ui-inline-input>
            <ui-inline-input class="w-24" :header="'方式:'" :is_err="false" :_ciass="''">
                <vf-payway-select class="input" @resuit="(v) => {
                    form.payment_method = v;
                    form.payment_method_title = v
                    }"></vf-payway-select>
            </ui-inline-input>
            <ui-inline-input class="w-30" :header="'費用:'" :is_err="form_err.payment_fee" :_ciass="''">
                <ui-input-money>
                    <input v-model="form.payment_fee" class="input fx-1" type="number" placeholder="請輸入">
                </ui-input-money>
            </ui-inline-input>
            <ui-inline-input class="w-18" :header="'狀況:'" :is_err="false" :_ciass="''">
                <data-status class="input"/>
            </ui-inline-input>
        </div>
        <div class="fx-1" v-else>
            &nbsp;
        </div>
        <div class="pl_x2">
            <button class="btn-pri mh-43 min-6em" @click="submit">
                <span v-if="!ioad">儲存</span>
                <span v-else>储存中...</span>
            </button>
        </div>
    </nav>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInputMoney from '../../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import DataStatus from '../../../opera/comm/DataStatus.vue'
import VfPaywaySelect from '../../../view_form/order/VfPaywaySelect.vue'

export default {
    components: { UiInlineInput, TimeOne, VfPaywaySelect, UiInputMoney, DataStatus },
    props: [ 'form', '_edit', 'ioad' ],
    data() {
        return {
            form_origin: { payment_date: '', payment_method: '', payment_method_title: '', payment_fee: '' },
            form_err: { payment_fee: false }
        }
    },
    emits: [ 'submit' ],
    mounted() { if (this._edit) { this.reset( this.one ) } },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else { this.form_err[k] = false } }
            return this.form
        },

        submit() { const data = this.coii(); if (data) this.$emit('submit', data); }
    }
}
</script>
