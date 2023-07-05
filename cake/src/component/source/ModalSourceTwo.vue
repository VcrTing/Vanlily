<template>
    <modal-by-state ref="modREF" class="modal-w-min" v-if="0 < page && page < 1000">
        <comp-source-soft-plus v-if="page == 101"/>
        <comp-source-soft-plus v-if="page == 102" :_mode="'EDIT'"/>
    </modal-by-state>
</template>

<script>
import CompSourceSoftPlus from '../../component/source/source_soft/CompSourceSoftPlus.vue'
import ModalByState from '../../funcks/ui/modal/ModalByState.vue'

export default {
    components: {
        ModalByState, CompSourceSoftPlus
    },
    computed: { 
        page() { return this.pina().MODAL }
    },
    methods: {
        change() { this.$refs.modREF.change() }
    }
}
</script>