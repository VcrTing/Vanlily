<template>
    <div>
        <div class="fx-s row_x2">
            <ui-inline-input class="w-333" :header="'送貨日期：'">
                <time-one class="ip-br"></time-one>
            </ui-inline-input>
            <ui-inline-input class="w-333" :header="'送貨時段：'">
                <time-one class="ip-br"></time-one>
            </ui-inline-input>
            <ui-inline-input class="w-333" :is_err="false" :header="'運費狀況：'">
                <vf-paycost-select class="input"></vf-paycost-select>
            </ui-inline-input>
        </div>

        <div class="fx-s row_x2">
            <ui-inline-input class="w-333" :is_err="false" :header="'取貨：'">
                <vf-get-way-select class="input"></vf-get-way-select>
            </ui-inline-input>
            <ui-inline-input class="w-333" :is_err="false" :header="'運費：'">
                <ui-input-money>
                    <input type="number" placeholder="0.00">
                </ui-input-money>
            </ui-inline-input>
            <ui-inline-input class="w-333" :is_err="false" :header="'附加運費：'">
                <ui-input-money>
                    <input type="number" placeholder="0.00">
                </ui-input-money>
            </ui-inline-input>
        </div>
    </div>
</template>

<script>
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInputMoney from '../../../funcks/ui_element/input/moeny/UiInputMoney.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfPaycostSelect from '../../view_form/order/VfPaycostSelect.vue'
import VfGetWaySelect from '../../view_form/send/VfGetWaySelect.vue'
export default {
  components: { UiInlineInput, TimeOne, VfGetWaySelect, UiInputMoney, VfPaycostSelect },

}
</script>

<style>

</style>