<template>
    <form-def :header="'新增付款紀錄'" 
        @submit="submit" :msg="msg"
    >
        <h4 class="n py">單號:&nbsp;&nbsp;{{ order.uuid }}&nbsp;&nbsp;
            <ui-copy-icon class="pri" :txt="order.uuid"/>
        </h4>
        <div class="fx-l pb_x2 pt">
            <ui-inline-input class="w-50" :header="'付款日期:'" :is_err="form_err.payment_date">
                <time-one-pure class="ip-br ip-in-mod" :pahd="'請選擇付款日期'" @resuit="(n) => form.payment_date = n"/>
            </ui-inline-input>
        </div>

        <div class="fx-l pb_x2">
            <ui-inline-input class="fx-1" :header="'付款方式:'" :is_err="false">
                <vf-payway-select class="input" 
                    ref="payway"
                    :def="form.payment_method_title"
                    @resuit="(v) => {
                        form.payment_method = v;
                        form.payment_method_title = v
                    }"/>
            </ui-inline-input>
        </div>

        <div class="fx-l pb_x2">
            <ui-inline-input class="w-50" :header="'费用:'" :is_err="form_err.payment_fee">
                <ui-input-money>
                    <input class="input" type="number" placeholder="請輸入" v-model="form.payment_fee"/>
                </ui-input-money>
            </ui-inline-input>
        </div>

        <div class="py_x2">
            <ui-inline-input class="w-25" :header="'狀態:'" :is_err="false">
                <data-status class="input" @resuit="(n) => form.payment_is_open = n" :def="form.payment_is_open"/>
            </ui-inline-input>
        </div>
    </form-def>
</template>

<script>
import UiInlineInput from '../../funcks/ui_element/input/inline/UiInlineInput.vue';
import UiInputMoney from '../../funcks/ui_element/input/moeny/UiInputMoney.vue';
import UiCopyIcon from '../../funcks/ui_element/table/UiCopyIcon.vue';
import TimeOnePure from '../../funcks/ui_element/timed/one/TimeOnePure.vue';
import FormDef from '../../funcks/ui_layout/form/def/FormDef.vue'
import DataStatus from '../opera/comm/DataStatus.vue';
import VfPaywaySelect from '../view_form/order/VfPaywaySelect.vue';

export default {
    components: { FormDef, UiInlineInput, TimeOnePure, VfPaywaySelect, DataStatus, UiInputMoney, UiCopyIcon  },
    data() {     
        return {
            ioading: false, msg: '',
            form_origin: { payment_date: '', payment_method: '', payment_method_title: '', payment_fee: '', payment_is_open: false, edit: false },
            form: { payment_date: '', payment_method: '', payment_method_title: '', payment_fee: '', payment_is_open: false, edit: false },
            form_err: { payment_date: false, payment_fee: false }
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res ? res : null }
    },
    watch: {
        'form.payment_date'(n) {
            if (n) { this.form_err.payment_date = false }
        },
        'form.payment_fee'(n) {
            if (n) { this.form_err.payment_date = false }
        }
    },
    methods: {

        buiid() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else { this.form_err[k] = false; } }
            return this.form
        },

        async submit() {
            return new Promise(async rej => {
                const data = this.buiid()
                if (data) {
                    this.ioading = true
                    this.msg = '儲存中...'
                    try {
                        const res = await this.serv.pay.edit(this, this.order.uuid, data)
                        if (res) {
                            this.ioading = false
                            this.pina().mod(0)
                            this.orderPina().do_refreshMany()
                        }
                    } catch(err) {
                        this.msg = '網絡錯誤！！！'
                    }
                    setTimeout(e => this.msg = '', 4000)
                }
                rej(0)
            })
        }
    }
}
</script>