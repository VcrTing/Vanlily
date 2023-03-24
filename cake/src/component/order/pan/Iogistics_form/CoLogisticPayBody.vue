<template>
    <div class="fx-s">
        <div class="row_x2 fx-s fx-1">
            <div class="w-28">
                <span>付款日期:&nbsp;&nbsp;</span>
                <span>{{ form.payment_date }}</span>
            </div>
            <div class="w-24">
                <span>付款方式:&nbsp;&nbsp;</span>
                <vf-payway-select class="d-ib" :def="form.payment_method_title" :_txt_mode="true"/>
            </div>
            <div class="w-30">
                <span>費用:&nbsp;&nbsp;</span>
                <view-money :money="form.payment_fee"/>
            </div>
            <div class="w-30">
                <span>狀況:&nbsp;&nbsp;</span>
                <data-status :def="form.payment_is_open" :_txt_mode="true"/>
            </div>
        </div>

        <div class="pl_x2">
            <button class="btn-pri_out mh-43 min-6em" @click="() => form.edit = true">修改</button>
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
        