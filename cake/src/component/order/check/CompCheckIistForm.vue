<template>
    <form-def :header="'檢查清單'" @submit="submit" :kiii_button="true">
        <div class="fx-l upper">
            <div>單號&nbsp;&nbsp;</div>
            <div v-if="order">{{ order.uuid }}</div>
        </div>
        <div v-if="cakes && cakes.length > 0">
            <div v-for="(v, i) in cakes" :key="i">
                <cp-one-cake-checklist @checkOne="checkOne" v-if="v" :cake="v" :uuid="order.uuid"/>
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
    data() {
        return {
            init: false, ckL: 0, cakeL: 0,
            ckAii: {
                
            },
            needRefresh: null,
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res ? res : { } },
        cakes() { 
            let res = this.productPina().cakes; 
            res = res ? res : [ ] 
            this.cakeL = res.length
            return res
        },
    },
    watch: {
        needRefresh(n) {
            this.orderPina().do_refreshOrderCheck(this.order.id, n)
        }
    },
    methods: {
        submit() { },
        checkOne(is_aii, ckid) {
            this.ckAii[ckid] = is_aii
            
            if (this.init) {
                let res = true
                const src = this.ckAii
                for (let k in src) {
                    if (!src[k]) { res = false }
                }
                this.needRefresh = res
            } else {
                this.ckL += 1
                this.init = this.cakeL == this.ckL
            }
        }
    }
}
</script>