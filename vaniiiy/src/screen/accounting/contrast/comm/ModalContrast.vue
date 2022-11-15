<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-contrast-creat-edit v-if="page == 120"></comp-contrast-creat-edit>
    </modal-by-state>
</template>

<script>
import CompContrastCreatEdit from '../../../../component/product/view_create_edit/contrast/CompContrastCreatEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompContrastCreatEdit },
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