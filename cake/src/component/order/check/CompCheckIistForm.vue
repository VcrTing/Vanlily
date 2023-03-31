<template>
    <form-def :header="'檢查清單'" @submit="submit" :kiii_button="true">
        <div v-for="(v, i) in cakes" :key="i">
            <cp-one-cake-checklist :cake="v" :uuid="order.uuid"/>
        </div>
    </form-def>
</template>

<script>
import FormDef from "../../../funcks/ui_layout/form/def/FormDef.vue"
import CpOneCakeChecklist from './inner/CpOneCakeChecklist.vue';

export default {
    components: { FormDef, CpOneCakeChecklist },
    computed: {
        order() { let res = this.orderPina().one; return res ? res : { } },
        cakes() { 
            let res = this.productPina().cakes; 
            console.log('check iist cakes =', res)
            return res ? res : [ ] },
    },
    methods: {
        submit() { }
    }
}
</script>