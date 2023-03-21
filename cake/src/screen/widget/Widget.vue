<template>
    <div>
        <div class="item fx-s">
            <div class="fx-l">
                <icon-order class="svg-def" :named="'car'"></icon-order>
                物流
            </div>
            <div class="fx-l">
                <icon-light class="svg-def" :named="'on'"></icon-light>
                状态
            </div>
            <div class="fx-l">
                <icon-light class="svg-def" :named="''"></icon-light>
                状态
            </div>
        </div>
        <div class="py_s"></div>
        <div class="item">
            <comp-order-text v-if="page == 0"></comp-order-text>
            <comp-product-msg v-else-if="page == 1"></comp-product-msg>
            <comp-order-check v-else-if="page == 2"></comp-order-check>
            <comp-order-logistics v-else-if="page == 3"></comp-order-logistics>
            <comp-order-record-plus v-else-if="page == 4"></comp-order-record-plus>
            <comp-send-delay-plus v-else-if="page == 5"></comp-send-delay-plus>
            <!-- 库存 -->

            <!-- 蛋糕 -->

            <!-- 员工 -->
            <comp-staff-create-edit v-else-if="page == 111"></comp-staff-create-edit>
            
            <!-- 公司支出 -->
            <comp-consume-creat-edit v-else-if="page == 121"></comp-consume-creat-edit>

            <charts v-else-if="page == 11"></charts>
        </div>
    </div>
</template>

<script>
import CompOrderCheck from '../../component/order/def_form/check/CompOrderCheck.vue'
import CompOrderText from '../../component/order/def_form/text/CompOrderText.vue'
import CompOrderLogistics from '../../component/order/def_form/logistics/CompOrderLogistics.vue'
import CompOrderRecordPlus from '../../component/order/def_form/record/plus/CompOrderRecordPlus.vue'
import CompProductMsg from '../../component/product/msg/CompProductMsg.vue'
import CompSendDelayPlus from '../../component/send/plus/CompSendDelayPlus.vue'

import IconLight from '../../funcks/ui_static/icon/IconLight.vue'
import IconOrder from '../../funcks/ui_static/icon/IconOrder.vue'
import Charts from './chart/Charts.vue'
import CompStaffCreateEdit from '../../component/staff/creat_edit/staff/CompStaffCreateEdit.vue'
import CompConsumeCreatEdit from '../../component/company/consume/CompConsumeCreatEdit.vue'

export default {
    components: { 
        CompOrderText,
        CompProductMsg,
        CompOrderCheck,

        CompOrderLogistics,
        CompOrderRecordPlus,
        CompSendDelayPlus,
        Charts,
        IconOrder,
        IconLight,
        CompStaffCreateEdit,
        CompConsumeCreatEdit,
        },
    data() {
        return {
            page: 21
        }
    }
}
</script>

<style>

</style>