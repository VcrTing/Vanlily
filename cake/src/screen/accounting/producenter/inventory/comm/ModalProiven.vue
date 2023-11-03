<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-proivens-creat-edit v-if="page == 125"></comp-proivens-creat-edit>
    </modal-by-state>
</template>

<script>
import CompProivensCreatEdit from '../../../../../component/product/creat_edit/inventory/CompProivensCreatEdit.vue'
import ModalByState from '../../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompProivensCreatEdit },
    data() { return { invs: '' } },
    computed: {
        page() { return this.pina().MODAL }
    },
    methods: {
        open(num, _invs) { 
            this.pina().modai( num )
            this.invs = _invs
        },
        change() { this.$refs.modREF.change() }
    }
}
</script>