<template>
    <panel-inner :header="'新增付款記錄'">
        <template #cont>
            <div class="px_x2 py_x2">
                <comp-pay-record-line v-if="true" class=""/>
                <div v-else class="py fx-c">暫無記錄</div>
            </div>
        </template>
    </panel-inner>
</template>

<script>
import CompPayRecordLine from '../../../../component/pay/record/CompPayRecordLine.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
export default {
    components: { PanelInner, CompPayRecordLine },

}
</script>
        