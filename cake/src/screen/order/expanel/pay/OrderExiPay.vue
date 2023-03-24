<template>
    <panel-inner :header="'新增付款記錄'">
        <template v-slot:cont>
          <comp-pay-record-line class="px_x4 py_x2" 
            v-if="order" 
            :pay="order"
            @edit="() => {
              pina().mod(31)
            }"
            />
          <div v-else class="py fx-c">暫無記錄</div>
        </template>
    </panel-inner>
</template>

<script>
import CompPayRecordLine from '../../../../component/pay/record/CompPayRecordLine.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
export default {
    components: { PanelInner, CompPayRecordLine },
    computed: {
      order() { let src = this.orderPina().one; return src && src.payment_date ? src : null },
    }
}
</script>