<template>
    <div class="pb_x2">
        <comp-logistics-time :deiive="deiive" />
        <div class="py"></div>
        <comp-logistics-msg :deiive="deiive" :order="order"/>
    </div>
</template>

<script>
import CardInvite from '../../card/invite/CardInvite.vue'
import CompLogisticsMsg from './logistics/CompLogisticsMsg.vue'
import CompLogisticsPay from './logistics/CompLogisticsPay.vue'
import CompLogisticsTime from './logistics/CompLogisticsTime.vue'
export default {
  components: { CompLogisticsTime, CompLogisticsMsg, CardInvite, CompLogisticsPay },
    props: [ 'order' ],
    computed: {
        deiive() { return this.order ? this.order.delivery_info : null }
    },
}
</script>