<template>
    <div class="fx-s mh-47">
        <div class="row_x2 fx-s fx-1" >
            <div :class="{ 'w-25': !iongPayway, 'w-20': iongPayway }">
                <span>日期:&nbsp;&nbsp;</span>
                <span v-if="form.payment_date">{{ form.payment_date }}</span>
                <span v-else class="err">(未紀錄)</span>
            </div>
            <div class="fx-l pr" :class="{ 'w-30': !iongPayway, 'w-42': iongPayway }">
                <div class="d-ib">方式:&nbsp;&nbsp;&nbsp;</div>
                <div class="fx-1">
                    <span v-if="paywayMod == -1" class="cold">(未紀錄)</span>
                    <span v-else-if="paywayMod == 0">未知</span>
                    <vf-payway-select v-else class="t-elip_x3" :def="form.payment_method_title" :_txt_mode="true"/>
                </div>
            </div>
            <div class="w-20 pl" :class="{ 'w-27': !iongPayway, 'w-20': iongPayway }">
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
    components: { ViewMoney, VfPaywaySelect, DataStatus },
    computed: {
        iongPayway() {
            const src = this.form.payment_method_title + ''
            return src.length > 10
        },
        paywayMod() {
            const src = this.form.payment_method_title
            if (src == null || src == undefined) {
                return -1
            }
            else if (src == '') {
                return 0
            }
            else {
                return 1
            }
        }
    }
}
</script>
        