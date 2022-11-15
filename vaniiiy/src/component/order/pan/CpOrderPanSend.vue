<template>
    <div>
        <div class="fx-s w-unf">
            <div class="w-100 w-80-x mb-0">
                <comp-logistics-time :deiive="deiive" />
            </div>
        </div>
        <div class="py"></div>
        <div class="f_row">
            <div class="w-100 pb">
                <comp-logistics-msg :deiive="deiive"></comp-logistics-msg>
            </div>
            <!--div class="w-38 w-32-x pb">
                <card-invite :_edit="false" :_scale="false"></card-invite>
            </div-->
        </div>
        <div class="py_s"></div>
        <div class="card-def br pb-0 upper">
            <comp-logistics-pay class="px_x3" :deiive="deiive"></comp-logistics-pay>
        </div>
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
    mounted() {
        
    }
}
</script>

<style>

</style>