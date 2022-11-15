<template>
    <div>
        <p class="sub pb">新增付款記錄</p>
        <nav class="fx-s">
            <ui-inline-input :header="'付款日期：'" :is_err="form_err.pay_time">
                <time-one></time-one>
            </ui-inline-input>
            <ui-inline-input :header="'付款方式：'">
                <vf-payway-select class="input"></vf-payway-select>
            </ui-inline-input>
            <ui-inline-input :header="'費用：'" :is_err="form_err.num" :_class="'t-r'">
                <input v-model="form.num" class="input" type="number" placeholder="請輸入">
            </ui-inline-input>
            <button class="btn-pri btn-input mb_x2">確認</button>
        </nav>
    </div>
</template>

<script>
import UiInlineInput from '../../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import TimeOne from '../../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfPaywaySelect from '../../../../view_form/order/VfPaywaySelect.vue'
export default {
  components: { UiInlineInput, VfPaywaySelect, TimeOne },
    data() {
        return {
            form: {
                num: '',
                pay_time: ''
            },
            form_err: {
                num: false,
                pay_time: false
            }
        }
    }
}
</script>

<style>

</style>