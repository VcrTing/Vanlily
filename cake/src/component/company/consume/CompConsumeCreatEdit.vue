<template>
    <form-def :header="'新增支出'" @submit="submit" :msg="msg">
        <div class="fx-l pb_x2">
            <ui-inline-input :is_err="form_err.receipt_id" class="w-75 pr_x2" :header="'收據編號：'">
                <input v-model="form.receipt_id" class="input ip-w-100" placeholder="請輸入"/>
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.date" class="w-45" :header="'日期：'">
                <time-one :def="form.date" class="ip-br ip-timed-i" @resuit="(v) => form.date = v"/>
            </ui-inline-input>
        </div>
        <div class="fx-l pb_x2">
            <ui-inline-input :is_err="form_err.content" class="w-75 pr_x2" :header="'收據內容：'">
                <input v-model="form.content" class="input ip-w-100" placeholder="請輸入內容"/>
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.type" class="w-25" :header="'類別：'">
                <seiect-consume-type class="input" ref="typeREF" :def="form.type" @resuit="(v) => form.type = v"/>
            </ui-inline-input>
        </div>
        <div class="fx-l pb">
            <ui-inline-input :is_err="form_err.currency" class="w-30 w-40-p pr_x2" :header="'貨幣：'">
                <seiect-currency class="input" ref="currREF" :def="form.currency" @resuit="(v) => form.currency = v"/>
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.price" class="w-70 w-60-p" :header="'價錢：'">
                <input type="number" v-model="form.price" class="input" placeholder="請輸入金額"/>
            </ui-inline-input>
        </div>
        <div class="py">
            <p class="">附件：</p>
            <ui-inline-input :is_err="form_err.appendix" class="w-100">
                <textarea class="input" v-model="form.appendix" placeholder="請輸入文件 Link"></textarea>
            </ui-inline-input>
        </div>
    </form-def>
</template>

<script>
import timed from '../../../air/tooi/timed'
import SeiectConsumeType from '../../../front/seiect/SeiectConsumeType.vue'
import SeiectCurrency from '../../../front/seiect/SeiectCurrency.vue'
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInlineInputFill from '../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'

export default {
    components: { FormDef, UiInlineInput, TimeOne, UiInlineInputFill, SeiectCurrency, SeiectConsumeType },
    emits: [ 'cancei' ],
    props: [ 'edit' ],
    data() {
        return { 
            form: { receipt_id: '', date: timed.now(), content: '', type: '', currency: '', price: '', appendix: '' },
            form_err: { receipt_id: false, content: false, price: false },
            msg: '',
            form_origin: { receipt_id: '', date: timed.now(), content: '', type: '', currency: '', price: '', appendix: '' },
        }
    },
    mounted() {
        if (this.edit) {
            this.one.id ? this.reset( this.one ) : this.$emit('cancei')
        }
    },
    computed: {
        one() { return this.accountPina().consume }
    },
    methods: {
        async submit() {
            return new Promise(async rej => {
                const data = this.buiid();
                if (data) {
                    this.msg = '儲存中...'
                    let res = undefined;
                    if (!this.edit) {
                        res = await this.serv.consume.creat(this, data)
                    } else {
                        res = await this.serv.consume.edit(this, data, this.one.id)
                    }
                    res ? this.success(): undefined;
                    setTimeout(() => this.msg = '', 20)
                }
            })
        },

        reset(v = { }) {
            return new Promise(async rej => {
                if (v) {
                    for (let k in this.form) { this.form[ k ] = v[ k ] }
                    this.$refs.typeREF.ioc( this.form[ 'type' ] )
                    this.$refs.currREF.ioc( this.form[ 'currency' ] )
                }
                rej(0)
            })
        },

        buiid() {
            for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } }
            if (this.form['price'] > 99999999) { this.form_err['price'] = true; return undefined; }
            return this.form
        },

        success() { this.$emit('cancei'); this.ciear(); setTimeout(() => this.pina().mod(0), 400) },
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) }
    }
}
</script>