<template>
    <form-order :header="'申请延迟发货'" :header_sub="'基本信息'">
        <comp-ve-order-basic/>
        <div class="pt_x2 pb">
            <h4 class="n">原定送货信息</h4>
        </div>
        <comp-ve-order-send/>
    </form-order>
</template>

<script>
import FormOrder from '../../../funcks/ui_layout/form/def/FormOrder.vue'
import CompVeOrderBasic from '../view_edit/basic/CompVeOrderBasic.vue'
import CompVeOrderSend from '../view_edit/send/CompVeOrderSend.vue'
export default {
  components: {
    CompVeOrderBasic,
    FormOrder,
    CompVeOrderSend },

}
</script>

<style>

</style>