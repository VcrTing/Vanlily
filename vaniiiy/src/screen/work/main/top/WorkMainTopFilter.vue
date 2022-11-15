<template>
    <div class="fx-l pt">
        <ui-input class="w-27 pr" :is_err="form_err.send_date" :header="'送货日期：'">
            <time-one :def="form.send_date" class="ip-w-100 ip-l_x3 wmtf-ip-time"></time-one>
        </ui-input>
        <ui-input class="w-27 pr" :is_err="form_err.send_cate" :header="'运输分类：'">
            <vf-send-category-select class="input ip-w-100"></vf-send-category-select>
        </ui-input>
        <ui-input class="w-27" :is_err="form_err.timeperiod" :header="'时间段：'">
            <vf-timeperiod-select class="input ip-w-100"></vf-timeperiod-select>
        </ui-input>
    </div>
</template>

<script>
import VfTimeperiodSelect from '../../../../component/view_form/comm/VfTimeperiodSelect.vue'
import VfSendCategorySelect from '../../../../component/view_form/send/VfSendCategorySelect.vue'
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
export default {
  components: { UiInput, TimeOne, VfSendCategorySelect, VfTimeperiodSelect },
    data() {
        return {
            form: { send_date: '2021-12-12', send_cate: '', timeperiod: '' },
            form_err: { send_date: false, send_cate: false, timeperiod: false }
        }
    }
}
</script>

<style>

</style>