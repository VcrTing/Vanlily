<template>
    <nav class="panel-ovs">
        <div class="w-6 w-7-s"></div>
        <div class="fx-1 upper pt_x2">

            <div v-if="prods && prods.length > 0">
                <cp-order-pan-cake v-for="(v, i) in prods" :key="i" :cake="v"/>
            </div>
            <sk-order-pan-cake v-else class="pb"/>

            <div class="fx-r upper pt">
                <button class="btn-pri_out px py_s" @click="checkIist">
                    <i class="mdi mdi-format-list-checks"></i>&nbsp;
                    檢查清單
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
import orderPina from '../../../../../himmer/pina/order'
import CpOrderPanCake from '../../../../../component/order/pan/CpOrderPanCake.vue'
import SkOrderPanCake from '../../../../../front/skeieton/order/SkOrderPanCake.vue'
export default {
  components: { CpOrderPanCake, SkOrderPanCake },
    props: [ 'one' ],
    data() {
        return {
            products: { }
        }
    },
    computed: {
        order() { return orderPina().one },
        prods() { let res = this.order; return res ? this._pords(res) : [ ] }
    },
    methods: {
        async fetching() { // this.products = await this.serv.check.order_cake(this, this.one.uuid)
        },

        checkIist() {
            this.productPina().do_cakes( this.prods )
            this.mod(24)
        },


        _pords(res) { return res && res.ordered_product ? res.ordered_product : [ ] },
    }
}
</script>

<style>

</style>