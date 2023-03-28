<template>
    <div class="fx-s mh-47">
        <div class="row_x2 fx-s fx-1" >
            <div class="w-28">
                <span>日期:&nbsp;&nbsp;</span>
                <span v-if="form.payment_date">{{ form.payment_date }}</span>
                <span v-else class="cold">(未紀錄)</span>
            </div>
            <div class="w-24">
                <span>方式:&nbsp;&nbsp;</span>
                <vf-payway-select class="d-ib" :def="form.payment_method_title" :_txt_mode="true"/>
            </div>
            <div class="w-30">
                <span>費用:&nbsp;&nbsp;</span>
                <view-money :money="form.payment_fee"/>
            </div>
            <div class="w-18">
                <span>狀況:&nbsp;&nbsp;</span>
                <data-status class="d-ib" :def="form.payment_is_open" :_txt_mode="true"/>
            </div>
        </div>

        <div class="pl_x2">
            <div class="pri mh-43 min-6em fx-c" @click="() => form.edit = true">
                <i class="mdi mdi-square-edit-outline h4"></i>
            </div>
        </div>
    </div>
</template>

<script>
import DataStatus from '../../../opera/comm/DataStatus.vue'
import ViewMoney from '../../../view/money/ViewMoney.vue'
import VfPaywaySelect from '../../../view_form/order/VfPaywaySelect.vue'
export default {
    props: [ 'form' ],
    components: { ViewMoney, VfPaywaySelect, DataStatus }
}
</script>
        