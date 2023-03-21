<template>
    <modal-by-state ref="modREF" class="modal-w-min">
        <comp-consume-creat-edit v-if="mod == 110" @cancei="$emit('refresh')"/>
        <comp-consume-creat-edit v-if="mod == 111" @cancei="$emit('refresh')" :edit="true"/>
    </modal-by-state>
</template>

<script>
import CompConsumeCreatEdit from '../../../../component/company/consume/CompConsumeCreatEdit.vue'
import ModalByState from '../../../../funcks/ui/modal/ModalByState.vue'
export default {
  components: { ModalByState, CompConsumeCreatEdit },
    data() { return { consum: null } },
    emits: [ 'refresh' ],
    computed: {
        mod() { return this.pina().MODAL }
    },
    methods: {
        open(num, _consum) { 
            this.pina().modai( num ); this.consum = _consum
        },
        change() { this.$refs.modREF.change() }
    }
}
</script>