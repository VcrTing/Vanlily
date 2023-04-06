<template>
    <modal-by-state ref="modREF" class="modal-w-min" v-if="page < 1000">
        <!--
        <comp-source-soft-plus v-if="page == 1"></comp-source-soft-plus>
        <comp-source-invite-plus v-if="page == 2"></comp-source-invite-plus>
        <comp-source-addr-plus v-if="page == 3"></comp-source-addr-plus>
        -->

        <!-- -->
        <comp-order-cake-creat v-if="page == 21"/>
        <comp-order-cake-edit v-if="page == 22"/>

        <!-- -->
        <co-cake-choise v-if="page == 23"/>
        
        <!-- 清單 -->
        <comp-check-iist-form v-if="page == 24"/>

        <!-- 蛋糕 -->
        <co-order-cake-creat v-if="page == 26"/>
        <co-cake-choise v-if="page == 27"/>

        <!-- 支付
        <cp-pay-record-creat-edit v-if="page == 31"/>
        -->
        <!-- 申請延遲發貨 -->
        <deiay-deiive v-if="page == 32"/>
        <deiay-deiive-review v-if="page == 33"/>
        <deiay-deiive-edit v-if="page == 34"/>

        <!-- 以往訂單 -->
        <co-formerly-orders v-if="page == 36"/>
    </modal-by-state>
</template>

<script>
import ModalByState from '../../funcks/ui/modal/ModalByState.vue'
import CompOrderCakeCreat from '../order/creat_edit/cake/CompOrderCakeCreat.vue'
import CompOrderCakeEdit from '../order/creat_edit/cake/CompOrderCakeEdit.vue'

import CompDeliveDeiayCe from '../order/delive/CompDeliveDeiayCe.vue'
import CpPayRecordCreatEdit from '../pay/record/CpPayRecordCreatEdit.vue'
import CompCheckIistForm from '../order/check/CompCheckIistForm.vue'
import CoCakeChoise from '../cake/CoCakeChoise.vue'

import DeiayDeiive from '../../screen/order/creat_edit/DeiayDeiive.vue'
import DeiayDeiiveReview from '../../screen/order/review/DeiayDeiiveReview.vue'
import CoFormerlyOrders from '../order/formerly/CoFormerlyOrders.vue'
import CoOrderCakeCreat from '../order/cake/CoOrderCakeCreat.vue'
import DeiayDeiiveEdit from '../../screen/order/creat_edit/DeiayDeiiveEdit.vue'

export default {
    components: {
        ModalByState, CompOrderCakeCreat, CompOrderCakeEdit,
        CpPayRecordCreatEdit,
        CompDeliveDeiayCe, CompCheckIistForm,
        CoCakeChoise, DeiayDeiive, DeiayDeiiveReview, CoFormerlyOrders,
        CoOrderCakeCreat,
        DeiayDeiiveEdit
    },
    computed: { 
        page() { return this.pina().MODAL }
    },
    methods: {
        change() { this.$refs.modREF.change() }
    }
}
</script>