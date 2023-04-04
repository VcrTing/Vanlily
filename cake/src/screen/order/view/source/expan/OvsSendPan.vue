<template>
    <nav class="panel-ovs pt_x4">
        <div class="w-6 w-7-s"></div>
        <div class="fx-1">
            
            <div class="pb_x2">
                <comp-logistics-time :order="order"/>
                <div class="py"></div>
                <comp-logistics-msg :order="order"/>
            </div>

            <div class="card-def br upper">
                <p class="sub pb pt_s">付款記錄</p>
                <comp-logistics-pay 
                    :timed_ciass="'ip-time-top'"
                    class="px_x3" v-if="order && order.uuid" :order="order"/>
                <co-logistic-pay-skei v-else/>
            </div>
            <div class="pt_x3 fx-c pb">
                <order-exi-send-opera @edit="$emit('edit')" @review="$emit('review')"/>
            </div>
        </div>
    </nav>
</template>

<script>
import CompLogisticsPay from '../../../../../component/order/pan/logistics/CompLogisticsPay.vue'
import OrderExiOperaForSend from '../../../expanel/opera/OrderExiOperaForSend.vue'
import OrderExiSendOpera from '../../../expanel/opera/OrderExiSendOpera.vue'
import CoLogisticPaySkei from '../../../../../component/order/pan/Iogistics_form/CoLogisticPaySkei.vue'
import CompLogisticsTime from '../../../../../component/order/def_form/logistics/block/CompLogisticsTime.vue'
import CompLogisticsMsg from '../../../../../component/order/def_form/logistics/block/CompLogisticsMsg.vue'
export default {
    components: { OrderExiOperaForSend, OrderExiSendOpera, CompLogisticsPay, CoLogisticPaySkei, CompLogisticsTime, CompLogisticsMsg   },
    data() { return { send: { } } },
    emits: [ 'review', 'edit'],
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
    },
}
</script>