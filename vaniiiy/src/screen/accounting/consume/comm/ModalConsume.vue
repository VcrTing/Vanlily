<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-consume-creat-edit v-if="page == 110"></comp-consume-creat-edit>
    </modal-by-state>
</template>

<script>
import CompConsumeCreatEdit from '../../../../component/company/creat_edit/consume/CompConsumeCreatEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompConsumeCreatEdit },
    data() { return { consum: null } },
    computed: {
        page() { return this.pina().MODAL }
    },
    methods: {
        open(num, _consum) { 
            this.pina().modai( num )
            this.consum = _consum
        },
        change() { this.$refs.modREF.change() }
    }
}
</script>

<style>

</style>