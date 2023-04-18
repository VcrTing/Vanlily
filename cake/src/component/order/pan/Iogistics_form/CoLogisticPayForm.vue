<template>
    <nav class="fx-s">
        <div class="fx-1 fx-s row_x2" v-if="form">
            <ui-inline-input class="w-28" :header="'日期:'" :is_err="form_err.payment_date" :_ciass="''">
                <time-one-pure class="ip-br ip-time-top" 
                    :init="false" 
                    :pahd="'請選擇'" 
                    :def="form.payment_date" 
                    @resuit="(n) => form.payment_date = n"/>
                <!--
                    <time-one class="ip-br" :class="timed_ciass" @resuit="(n) => form.payment_date = n"/>
                    <input class="input" v-model="form.payment_date" placeholder="年-月-日 時:分"/>
                -->
            </ui-inline-input>
            <ui-inline-input class="w-24" :header="'方式:'" :is_err="false" :_ciass="''">
                <vf-payway-select class="input" 
                    ref="payway"
                    :def="form.payment_method_title"
                    @resuit="(v) => {
                        form.payment_method = v;
                        form.payment_method_title = v
                    }"/>
            </ui-inline-input>
            <ui-inline-input class="w-30" :header="'費用:'" :is_err="form_err.payment_fee" :_ciass="''">
                <ui-input-money>
                    <input v-model="form.payment_fee" class="input fx-1" type="number" placeholder="請輸入">
                </ui-input-money>
            </ui-inline-input>
            <ui-inline-input class="w-18" :header="'狀況:'" :is_err="false" :_ciass="''">
                <data-status class="input" @resuit="(n) => form.payment_is_open = n" :def="form.payment_is_open"/>
            </ui-inline-input>
        </div>
        <div class="fx-1" v-else>
            &nbsp;
        </div>
        <div class="pl_x2 ps-r">
            <button class="btn-pri mh-43 min-6em" @click="submit">
                <span v-if="!ioad">儲存</span>
                <span v-else>储存中...</span>
            </button>

            <i class="mdi mdi-close clpf-icon" @click="cancei"></i>
        </div>
    </nav>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInputMoney from '../../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import TimeOnePure from '../../../../funcks/ui_element/timed/one/TimeOnePure.vue'
import DataStatus from '../../../opera/comm/DataStatus.vue'
import VfPaywaySelect from '../../../view_form/order/VfPaywaySelect.vue'

export default {
    components: { UiInlineInput, TimeOne, VfPaywaySelect, UiInputMoney, DataStatus, TimeOnePure },
    props: [ 'form', '_edit', 'ioad', 'timed_ciass' ],
    data() {
        return {
            form_origin: { payment_date: '', payment_method: '', payment_method_title: '', payment_is_open: true, payment_fee: '' },
            form_err: { payment_date: false, payment_fee: false },
            form_of_save: null
        }
    },
    emits: [ 'submit' ],
    mounted() { 
        return new Promise( rej => {
            if (this._edit) { this.reset( this.form ) }
            this.form_of_save = JSON.parse(JSON.stringify( this.form )) 
            rej( 0 )
        })
    },

    methods: {
        ciear() { this.reset( JSON.parse(JSON.stringify( this.form_origin )) ) },
        reset(v = { }) { 
            if (v) { for (let k in this.form) { this.form[ k ] = v[ k ] } } 
            this.$refs.payway.ioc(this.form.payment_method_title)
        },
        coii() {
            for (let k in this.form_err) { 
                if (!this.form[k]) { this.form_err[k] = true; return undefined; } 
                else { this.form_err[k] = false } }
            return this.form
        },

        submit() { 
            return new Promise( rej => {
                const data = this.coii(); 
                if (data) this.$emit('submit', data);
                rej( 0 )
            })
        },

        cancei() { 
            return new Promise( rej => {
                for (let k in this.form_of_save) {
                    this.form[ k ] = this.form_of_save[ k ]
                }
                this.form.edit = false 
                rej( 0 )
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.clpf-icon
    position: absolute
    right: -24px
    top: 50%
    transform: translateY(-50%)
</style>