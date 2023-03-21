<template>
    <div>
        <p class="sub pb pt_s">新增付款記錄</p>
        <nav class="fx-s">
            <div class="fx-1 fx-s row">
                <ui-inline-input class="w-30" :header="'付款日期：'" :is_err="form_err.pay_time">
                    <time-one class="ip-br"/>
                </ui-inline-input>
                <ui-inline-input class="w-28" :header="'付款方式：'" :is_err="form_err.pay_way">
                    <vf-payway-select class="input" @change="(v) => pay_way"></vf-payway-select>
                </ui-inline-input>
                <ui-inline-input class="w-42" :header="'費用：'" :is_err="form_err.num" :_class="'t-r'">
                    <input v-model="form.num" class="input fx-1" type="number" placeholder="請輸入">
                </ui-inline-input>
            </div>
            <div class="pl righter">
                <button class="btn-pri btn-input">確認</button>
            </div>
        </nav>
    </div>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfPaywaySelect from '../../../view_form/order/VfPaywaySelect.vue'
export default {
  components: { UiInlineInput, VfPaywaySelect, TimeOne },
    data() {
        return {
            form: {
                num: '',
                pay_way: '',
                pay_time: ''
            },
            form_err: {
                num: false,
                pay_way: false,
                pay_time: false
            }
        }
    }
}
</script>

<style lang="sass">
.btn-input
    min-width: calc(4em + 2vw)
    padding-left: 6px
    padding-right: 6px
.mw-7em
    min-width: 7em
</style>