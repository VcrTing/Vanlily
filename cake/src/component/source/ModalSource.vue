<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-source-soft-plus v-if="page == 1"></comp-source-soft-plus>
        <comp-source-invite-plus v-if="page == 2"></comp-source-invite-plus>
        <comp-source-addr-plus v-if="page == 3"></comp-source-addr-plus>

        <!-- -->
        <comp-send-delay-plus v-if="page == 30"/>

        <!-- -->
        <comp-order-cake-creat v-if="page == 21"/>
        <comp-order-cake-edit v-if="page == 22"/>
        <co-cake-choise v-if="page == 23"/>
        
        <!-- 清單 -->
        <comp-check-iist-form v-if="page == 24"/>

        <!-- 支付 -->
        <cp-pay-record-creat-edit v-if="page == 31"/>
    </modal-by-state>
</template>

<script>
import ModalByState from '../../funcks/ui/modal/ModalByState.vue'
import CompDeliveDeiayCe from '../order/delive/CompDeliveDeiayCe.vue'
import CpPayRecordCreatEdit from '../pay/record/CpPayRecordCreatEdit.vue'
import CompSendDelayPlus from '../send/plus/CompSendDelayPlus.vue'
import CompSourceAddrPlus from './source_addr/creat_edit/CompSourceAddrPlus.vue'
import CompSourceInvitePlus from './source_invite/creat_edit/CompSourceInvitePlus.vue'
import CompSourceSoftPlus from './source_soft/creat_edit/CompSourceSoftPlus.vue'
import CompOrderCakeCreat from '../order/creat_edit/cake/CompOrderCakeCreat.vue'
import CompOrderCakeEdit from '../order/creat_edit/cake/CompOrderCakeEdit.vue'
import CompCheckIistForm from '../order/check/CompCheckIistForm.vue'
import CoCakeChoise from '../cake/CoCakeChoise.vue'
export default {
    components: {
        ModalByState, CompOrderCakeCreat, CompOrderCakeEdit,
        CompSourceSoftPlus,
        CompSourceAddrPlus,
        CompSourceInvitePlus,
        CpPayRecordCreatEdit,
        CompDeliveDeiayCe, CompSendDelayPlus,
        CompCheckIistForm,
        CoCakeChoise
    },
    computed: {
        page() { return this.pina().MODAL }
    },
    methods: {
        change() { this.$refs.modREF.change() }
    }
}
</script>