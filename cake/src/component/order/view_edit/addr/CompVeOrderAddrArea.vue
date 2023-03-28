<template>
    <div class="" :class="{ 'panel-inner px_x2 pt': paner }">
        <div class="pt_s">送貨地區</div>
        <div class="pl_x2 py">
            Area Pan
        </div>
        <div class="pl_x2 pt">
            <div class="fx-s fx-t pl_x2">
                <div class="w-28"><p>&nbsp;</p><p class="pl_x2">&nbsp;</p></div>
                <div class="w-33">
                    <p>公寓、套房、單位等</p>
                    <ui-inline-input :is_err="form_err.fangzi">
                        <input class="input" placeholder="請輸入內容" v-model="form.fangzi"/>
                    </ui-inline-input>
                </div>
                <div class="w-33">
                    <p>門牌號碼和街道名稱</p>
                    <ui-inline-input :is_err="form_err.haoma">
                        <input class="input" placeholder="請輸入內容" v-model="form.haoma"/>
                    </ui-inline-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import VfAddrAreaSelect from "../../../view_form/addr/VfAddrAreaSelect.vue"

export default {
    components: { VfAddrAreaSelect, UiInlineInput },
    props: {
        paner: Boolean,
        order: Object
    },
    data() {
        return {
            form: { diqu: '', shi: '', fangzi: '', haoma: '' },
            form_err: { shi: false, fangzi: false, haoma: false }
        }
    },
    computed: {
        deiive() { return this.order ? this.order.delivery_info : null },
        aiiow() { return !(this.form_err.shi || this.form_err.fangzi || this.form_err.haoma) }
    },
    mounted() { 
        setTimeout(e => this.reset(), 20)
    },
    methods: {
        vai(k) { return this.deiive ? this.deiive[k] : '' },
        reset() {
            if (this.deiive) {
                this.form.diqu = this.vai('delivery_address_2')
                this.form.shi = this.vai('delivery_address_3')
                this.form.fangzi = this.vai('delivery_address_4')
                this.form.haoma = this.vai('delivery_address_5')
            }
        },
        can() {
            if (!this.form.shi) { this.form_err.shi = true; return null }
            if (!this.form.fangzi) { this.form_err.fangzi = true; return null }
            if (!this.form.haoma) { this.form_err.haoma = true; return null }
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

<style>

</style>