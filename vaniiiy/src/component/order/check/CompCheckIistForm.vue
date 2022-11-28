<template>
    <form-def :header="'檢查清單'" @submit="submit" :kiii_button="true">
        <div v-for="(v, i) in cakes" :key="i">
            <cp-one-cake-checklist  :cake="v"/>
        </div>
    </form-def>
</template>

<script>
import FormDef from "../../../funcks/ui_layout/form/def/FormDef.vue"
import CpOneCakeChecklist from './inner/CpOneCakeChecklist.vue';

export default {
    components: { FormDef, CpOneCakeChecklist },
    computed: {
        cakes() { let res = this.productPina().cakes; return res ? res : [ ] },
    },
    data() { return { } },
    async mounted() {
        // await this.fetching()
        console.log('cakes =', this.cakes)
    },
    methods: {
        async submit() {
            console.log('清单检查完毕')
        }
    }
}
</script>

<style>

</style>