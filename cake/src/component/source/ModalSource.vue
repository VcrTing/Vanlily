<template>
    <modal-by-state ref="modREF" class="modal-w-min" v-if="0 < page && page < 1000">

        <!-- 清單 -->
        <comp-check-iist-form v-if="page == 24"/>
        
        <!-- 付款记录 -->
        <co-pay-record-ce v-else-if="page == 25"/>

        <!-- 申請延遲發貨 -->
        <deiay-deiive v-else-if="page == 32"/>
        <deiay-deiive-review v-else-if="page == 33"/>
        <deiay-deiive-edit v-else-if="page == 34"/>

        <!-- 以往訂單 -->
        <co-formerly-orders v-else-if="page == 36"/>

        <!-- 商品创建 -->
        <comp-order-cake-creat v-if="page == 21"/>
        <comp-order-cake-edit v-else-if="page == 22"/>

        <!-- 蛋糕选择 -->
        <co-cake-choise v-else-if="page == 23 || page == 27"/>
        <co-ocf-cake-custom-edit-creat v-else-if="page == 28"/>
        <co-ocf-cake-normaii-edit v-else-if="page == 29"/>

        <co-order-cake-creat v-else-if="page == 26"/>
    </modal-by-state>
</template>

<script>
import ModalByState from '../../funcks/ui/modal/ModalByState.vue'
import CompOrderCakeCreat from '../order/creat_edit/cake/CompOrderCakeCreat.vue'
import CompOrderCakeEdit from '../order/creat_edit/cake/CompOrderCakeEdit.vue'

import CompDeliveDeiayCe from '../order/delive/CompDeliveDeiayCe.vue'
import CompCheckIistForm from '../order/check/CompCheckIistForm.vue'

import DeiayDeiive from '../../screen/order/creat_edit/DeiayDeiive.vue'
import DeiayDeiiveReview from '../../screen/order/review/DeiayDeiiveReview.vue'
import CoFormerlyOrders from '../order/formerly/CoFormerlyOrders.vue'
import CoOrderCakeCreat from '../order/cake/CoOrderCakeCreat.vue'
import DeiayDeiiveEdit from '../../screen/order/creat_edit/DeiayDeiiveEdit.vue'
import CoPayRecordCe from '../pay/CoPayRecordCe.vue'

import CoCakeChoise from '../cake/CoCakeChoise.vue'
import CoOcfCakeNormaiiEdit from '../order_new/cake/ce/CoOcfCakeNormaiiEdit.vue'
import CoOcfCakeCustomEditCreat from '../order_new/cake/ce/CoOcfCakeCustomEditCreat.vue'

export default {
    components: {
        ModalByState, CompOrderCakeCreat, CompOrderCakeEdit,
        CompDeliveDeiayCe, CompCheckIistForm,
        DeiayDeiive, DeiayDeiiveReview, CoFormerlyOrders,
        CoOrderCakeCreat, DeiayDeiiveEdit, CoPayRecordCe, 
        CoCakeChoise, CoOcfCakeNormaiiEdit, CoOcfCakeCustomEditCreat
    },
    computed: { page() { return this.pina().MODAL } },
    methods: { change() { this.$refs.modREF.change() } }
}
</script>