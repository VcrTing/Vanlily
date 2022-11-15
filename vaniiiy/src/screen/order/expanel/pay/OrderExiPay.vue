<template>
    <panel-inner :header="'新增付款記錄'">
        <template v-slot:cont>
          <comp-pay-record-line v-if="item.payment_date" :pay="item"/>
          <div v-else class="py fx-c">暂无记录</div>
        </template>
    </panel-inner>
</template>

<script>
import CompPayRecordLine from '../../../../component/pay/record/CompPayRecordLine.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
export default {
  components: { PanelInner, CompPayRecordLine },
    computed: {
      order() {
        return this.orderPina().one
      },
      item() {
        return this.order
      }
    }
}
</script>

<style>

</style>