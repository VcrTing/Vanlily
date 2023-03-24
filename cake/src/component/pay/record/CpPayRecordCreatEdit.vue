<template>
    <form-def :header="'付款紀錄'" :kiii_button="true">
        <comp-logistics-pay 
            v-if="order" 
            :order="order" 
            :_edit="true" 
            class="form-td"
            @success="() => {
                pina().mod(0)
            }"/>
        <co-logistic-pay-skei v-else/>
    </form-def>
</template>

<script>
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import CoLogisticPaySkei from '../../order/pan/Iogistics_form/CoLogisticPaySkei.vue';
import CompLogisticsPay from '../../order/pan/logistics/CompLogisticsPay.vue';
export default {
    components: { FormDef, CoLogisticPaySkei, CompLogisticsPay },
    computed: {
        order() { let res = this.orderPina().one; return res ? res : null }
    }
}
</script>