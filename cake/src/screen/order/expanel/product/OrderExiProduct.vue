<template>
    <div v-if="cakes.length > 0">
        <div v-for="(v, i) in cakes" :key="i" 
            class="pb_x2 px_x4 pt"
            :class="{ 'bg-cake': (i % 2) == 1 }"
            >
            <co-view-cake-custom v-if="v.isCustomCake" :v="v"/>
            <co-view-cake-normaii v-else :v="v"/>
        </div>
    </div>
    <div class="py_x3 fx-c" v-else>
        (该订单没有蛋糕)
    </div>
</template>

<script>
import CoViewCakeCustom from '../../../../component/order_new/cake_one_view/CoViewCakeCustom.vue'
import CoViewCakeNormaii from '../../../../component/order_new/cake_one_view/CoViewCakeNormaii.vue'
export default {
    components: { CoViewCakeNormaii, CoViewCakeCustom },
    props: [ 'order', 'edit', '_kiii_btn' ],
    computed: {
        cakes() { 
            let res = (this.order && this.order.ordered_product) ? this.order.ordered_product : [ ] 
            return res.map(e => { e.product = this._prod(e); return e })
        },
    },
    methods: {
        _prod(v) { let res = v ? v.product : null; return res ? this.strapi.data(res) : null },
    },
}
</script>