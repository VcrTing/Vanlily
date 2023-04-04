<template>
    <div class="px_x2">
        <form-def class="form-def" :header="is_plus ? '新增付款記錄' : '修改付款記錄'" @submit="creat_or_update">
            <div class="pb">
                <p class="h5">基本信息</p>
            </div>
            <div class="fx-l">
                <ui-inline-input class="w-50" :header="'付款日期：'" :is_err="named_err">
                    <time-one></time-one>
                </ui-inline-input>
                <div class="w-50"></div>
            </div>
            <div class="fx-s fx-t w-unf-m">
                <div class="w-70 fx-l w-unf-p">
                    <ui-inline-input class="w-50" :header="'付款方式：'" :is_err="named_err">
                        <vf-payway-select class="input input-w"></vf-payway-select>
                    </ui-inline-input>
                    <ui-inline-input class="w-50" :_class="'t-r'" :header="'費用：'" :is_err="named_err">
                        <vf-paycost-select class="input input-w"></vf-paycost-select>
                    </ui-inline-input>
                </div>
                <ui-inline-input class="w-30" :_class="'t-r'" :header="'狀況：'" :is_err="named_err">
                    <vf-opera-select class="input-def"></vf-opera-select>
                </ui-inline-input>
            </div>
            <div class="py_s"></div>
        </form-def>
    </div>
</template>

<script>
import UiInlineInput from '../../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import TimeOne from '../../../../../funcks/ui_element/timed/one/TimeOne.vue'
import FormDef from '../../../../../funcks/ui_layout/form/def/FormDef.vue'
import VfOperaSelect from '../../../../view_form/opera/VfOperaSelect.vue'
import VfPaycostSelect from '../../../../view_form/order/VfPaycostSelect.vue'
import VfPaywaySelect from '../../../../view_form/order/VfPaywaySelect.vue'
export default {
  components: { FormDef, UiInlineInput, TimeOne, VfPaywaySelect, VfPaycostSelect, VfOperaSelect },
    props: {
        _mode: { type: String, default: 'PLUS' },
        def: { type: Object, default: null }
    },
    data() {
        return {
            id: 0,
            named: '',
            named_err: null
        }
    },
    mounted() { if (this.def) { this.named = this.def.named; this.id = this.def.id } },
    computed: { 
        is_plus() { return this._mode == 'PLUS' },
    },
    watch: {
        named(n, o) {
            this.named_err = !this.vid.input.vid_named(n)
        }
    },
    methods: {
        _build() { return { named: this.named } },

        async doing(way, data) { 
            let res = await this.serv.addr[ way ](this, data) 
            if (res) {
            }
        },

        async creat_or_update() {
            if (!this.named_err && this.named) {
                let res = this._build()
                res = await this.is_plus ? 
                    this.doing('creat', res): 
                    this.doing('update', res)
            }
        }
    }
}
</script>

<style>

</style>