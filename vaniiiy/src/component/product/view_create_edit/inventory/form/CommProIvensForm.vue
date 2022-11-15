<template>
    <div class="fx-s td-pr">

        <div class="w-18">
            <vf-pro-buy-store-select class="input ip-w-100 input-adapt"></vf-pro-buy-store-select>
        </div>
        <div class="w-15">
            <time-one class="ip-w-100 input-adapt-in"></time-one>
        </div>
        <div class="w-10">
            <input class="input ip-w-100 input-adapt" placeholder="請輸入">
        </div>
        <div class="w-11">
            <input type="number" class="input ip-w-100 input-adapt" placeholder="請輸入">
        </div>
        <div class="w-9">
            <input type="number" class="input ip-w-100 input-adapt" placeholder="請輸入">
        </div>
        <div class="w-9">
            <input type="number" class="input ip-w-100 input-adapt" placeholder="請輸入">
        </div>
        <div class="w-15">
            <time-one class="ip-w-100 input-adapt-in ip-calendar-left"></time-one>
        </div>

        <div class="w-13 t-c">
            <ui-table-save-cancel @cancel="$emit('cancel')"></ui-table-save-cancel>
        </div>
    </div>
</template>

<script>
import UiTableSaveCancel from '../../../../../funcks/ui_element/table/opera/UiTableSaveCancel.vue'
import TimeOne from '../../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfProBuyStoreSelect from '../../../../view_form/pros/VfProBuyStoreSelect.vue'
export default {
  components: { TimeOne, UiTableSaveCancel,
    VfProBuyStoreSelect  },
    props: {
        def: { type: Object }
    }
}
</script>

<style>

</style>