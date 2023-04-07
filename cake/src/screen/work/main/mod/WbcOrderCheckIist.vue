<template>
    <div>
        <h4 class="n">檢查清單</h4>
        <div class="py">
            單號:&nbsp;&nbsp;{{ uuid }}
        </div>
        <div class="pb" v-for="(v, i) in prods" :key="i">
            <!--
            <div class="pb min">
                <h4># {{ i + 1 }}</h4>
            </div>
            -->
            <cp-one-cake-checklist :cake="v" :uuid="uuid"/>
        </div>
    </div>
</template>

<script>
import CpOneCakeChecklist from '../../../../component/order/check/inner/CpOneCakeChecklist.vue'
export default {
  components: { CpOneCakeChecklist },
    computed: {
        uuid() { return this.orderPina().uuid },
        prods() { return this.productPina().prods }
    },
}
</script>