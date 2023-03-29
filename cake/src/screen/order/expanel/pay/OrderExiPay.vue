<template>
    <panel-inner :header="'付款記錄'">
        <template #cont>
          <div v-if="order" class="px_x4 py" >
            <comp-logistics-pay :order="order"/>
          </div>
          <div v-else class="py_x2"></div>
        </template>
    </panel-inner>
</template>

<script>
import CompLogisticsPay from '../../../../component/order/pan/logistics/CompLogisticsPay.vue';
import CompPayRecordLine from '../../../../component/pay/record/CompPayRecordLine.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
export default {
    components: { PanelInner, CompPayRecordLine, CompLogisticsPay },
    computed: {
      order() { 
        let src = this.orderPina().one; 
        return src && src.id ? src : null },
    },
    data() {
      return {
        edit: false
      }
    }
}
</script>