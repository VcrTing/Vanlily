<template>
    <form-def :header="'檢查清單'" @submit="submit" :kiii_button="true">
        <div class="fx-l upper">
            <div>單號&nbsp;&nbsp;</div>
            <div v-if="order">{{ order.uuid }}</div>
        </div>
        <div v-if="cakes && cakes.length > 0">
            <div v-for="(v, i) in cakes" :key="i">
                <cp-one-cake-checklist v-if="v" :cake="v" :uuid="order.uuid"/>
            </div>
        </div>
        <sk-one-cake-checklist v-else/>
    </form-def>
</template>

<script>
import FormDef from "../../../funcks/ui_layout/form/def/FormDef.vue"
import CpOneCakeChecklist from './inner/CpOneCakeChecklist.vue';
import SkOneCakeChecklist from './inner/SkOneCakeChecklist.vue';

export default {
    components: { FormDef, CpOneCakeChecklist, SkOneCakeChecklist },
    computed: {
        order() { let res = this.orderPina().one; return res ? res : { } },
        cakes() { 
            let res = this.productPina().cakes; 
            return res ? res : [ ] 
        },
    },
    methods: {
        submit() { }
    }
}
</script>