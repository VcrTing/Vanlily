<template>
    <form-def :header="'檢查清單'" :kiii_button="true">
        <div class="fx-l upper">
            <div>單號&nbsp;&nbsp;</div>
            <div v-if="order">{{ order.uuid }}</div>
        </div>
        <div v-if="cakes && cakes.length > 0">
            <div v-for="(v, i) in cakes" :key="i" class="pb_x2 pt">
                <co-one-check-iist v-if="v" :orderId="order.uuid" :cake="v" @refresh="refresh"/>
            </div>
        </div>
        <sk-one-cake-checklist v-else/>
    </form-def>
</template>

<script>
import FormDef from "../../../funcks/ui_layout/form/def/FormDef.vue"
import CoOneCheckIist from '../../order_new/check/CoOneCheckIist.vue';
import SkOneCakeChecklist from './inner/SkOneCakeChecklist.vue';

export default {
    components: { FormDef, SkOneCakeChecklist, CoOneCheckIist },
    computed: {
        order() { let res = this.orderPina().one; return res ? res : { } },
        cakes() { return this.productPina().cakes; },
    },
    methods: {
        refresh(n) {
            // console.log('需要刷新 ~')
            this.orderPina().do_refreshOrderCheck(this.order.id, n)
        }
    }
}
</script>