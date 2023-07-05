<template>
    <div>
        <h4 class="n">檢查清單</h4>
        <div class="py softer">
            單號:&nbsp;&nbsp;{{ uuid }}
        </div>

        <div v-if="prods && prods.length > 0">
            <div v-for="(v, i) in prods" :key="i" class="pb_x2 pt softer">
                <co-one-check-iist v-if="v" :orderId="uuid" :cake="v"/>
            </div>
        </div>
        <sk-one-cake-checklist v-else/>
    </div>
</template>

<script>
import SkOneCakeChecklist from '../../../../component/order/check/inner/SkOneCakeChecklist.vue'
import CoOneCheckIist from '../../../../component/order_new/check/CoOneCheckIist.vue'
export default {
  components: {
    CoOneCheckIist,
    SkOneCakeChecklist },
    computed: {
        uuid() { return this.orderPina().uuid },
        prods() { return this.productPina().prods }
    },
}
</script>