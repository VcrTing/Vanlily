<template>
    <form-def :header="'新增付款记录'">
        <!-- SETP 1 -->
        <div class="fx-s pt">
            <ui-inline-input class="w-31" :is_err="form_err.pay_time" :header="'付款日期：'">
                <time-one class="ip-br" :def="form.pay_time"/>
            </ui-inline-input>
        </div>
        <div class="fx-s">
            <ui-inline-input class="w-31" :is_err="form_err.pay_way" :header="'付款方法：'">
                <vf-payway-select class="input w-100"></vf-payway-select>
            </ui-inline-input>
            <ui-inline-input class="w-31" :is_err="form_err.money" :header="'费用：'">
                <input v-model="form.moeny" class="input" placeholder="請輸入">
            </ui-inline-input>
            <ui-inline-input class="w-31" :is_err="form_err.status" :header="'状况：'">
                <data-status class="input" :_item="form"/>
            </ui-inline-input>
        </div>
    </form-def>
</template>

<script>
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'

import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import DataStatus from '../../opera/comm/DataStatus.vue'
import VfPaywaySelect from '../../view_form/order/VfPaywaySelect.vue'

export default {
  components: { FormDef, UiInlineInput, TimeOne, VfPaywaySelect, DataStatus },
    data() {
        return {
            form: { pay_time: '2022-12-12', pay_way: '', money: '', status: 0 },
            form_err: { pay_time: false, pay_way: false, money: false, status: false },
        }
    }
}
</script>

<style>

</style>