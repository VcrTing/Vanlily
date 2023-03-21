<template>
    <modal-by-state class="modal-w-min">
        <wbc-order-check-iist v-if="pan === 1001"/>
        <wbc-order-review v-else-if="pan === 1002"/>
    </modal-by-state>
</template>

<script>
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
import WbcOrderCheckIist from './WbcOrderCheckIist.vue'
import WbcOrderReview from './WbcOrderReview.vue'
export default {
  components: { ModalByState, WbcOrderCheckIist, WbcOrderReview },
    computed: {
        pan() { return this.pina().MODAL }
         
    }
}
</script>