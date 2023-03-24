<template>

    <div class="fx-s fx-t cold row_x2">
        <div class="w-37">
            <p class="">運費</p>
            <p class="">&nbsp;</p>
        </div>
        <div class="w-28">
            <p>運費價格</p>
            
            <p class="pb" v-if="!_edit">
                <span>$</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="h5">120</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>HKD</span>
            </p>

            <ui-input v-else :is_err="form_err.delivery_fee">
                <ui-input-money>
                    <input type="number" placeholder="請輸入" v-model="form.delivery_fee">
                </ui-input-money>
            </ui-input>
        </div>
        <div class="w-28">
            <p class="pri_son">附加運費價格</p>

            <p class="pb pl_x2 pri_son" v-if="!_edit">
                <span>$</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="h5">120</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>HKD</span>
            </p>

            <ui-input v-else :is_err="false">
                <ui-input-money>
                    <input type="number" placeholder="可以不填寫" v-model="form.additional_fee">
                </ui-input-money>
            </ui-input>
        </div>
        <div class="w-7">&nbsp;</div>
    </div>
</template>

<script>
import UiInputMoney from '../../../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput, UiInputMoney },
    props: {
        _edit: Boolean
    },
    data() {
        return {
            form: { delivery_fee: null, additional_fee: null },
            form_origin: { delivery_fee: null, additional_fee: null },
            form_err: { delivery_fee: false }
        }
    },
    watch: {
        'form.delivery_fee'(n) { 
            if (n !== 0) {
                n = Number(n)
                n = (n != null && n != '') ? Math.abs(n) : ''
                this.form.delivery_fee = n 
            }
        },
        'form.additional_fee'(n) { 
            if (n !== 0) {
                n = Number(n)
                n = (n != null && n != '') ? Math.abs(n) : ''
                this.form.additional_fee = n 
            }
        }
    },
    mounted() { 
        if (this.is_edit) { this.reset( this.one ) }
    },
    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } },
        coii() {
            console.log('this.form.delivery_fee =', this.form.delivery_fee)
            if (this.form.delivery_fee != 0) {
                if (this.form.delivery_fee == null || this.form.delivery_fee == '') {
                    this.form_err.delivery_fee = true
                    return undefined;
                } else {
                    this.form_err.delivery_fee = false
                }
            }
            // for (let k in this.form_err) { if (!this.form[k]) { this.form_err[k] = true; return undefined; } else { this.form_err[k] = false } }
            delete this.form.id
            return this.form
        },
    }
}
</script>