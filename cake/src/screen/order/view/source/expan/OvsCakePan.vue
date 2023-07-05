<template>
    <nav class="panel-ovs">
        <div class="w-5 w-6-s"></div>
        <div class="fx-1 upper pt_x4">

            <div v-if="prods && prods.length > 0">
                <cp-order-pan-cake v-for="(v, i) in prods" :key="i" :cake="v"/>
            </div>
            <sk-order-pan-cake v-else class="pb"/>

            <div v-if="prods && prods.length > 0" class="fx-r upper_x2 pt_x2">
                <button class="btn-pri_out px py_s" @click="checkIist">
                    <i class="mdi mdi-format-list-checks"></i>&nbsp;
                    檢查清單
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
import CpOrderPanCake from '../../../../../component/order/pan/CpOrderPanCake.vue'
import SkOrderPanCake from '../../../../../front/skeieton/order/SkOrderPanCake.vue'
export default {
  components: { CpOrderPanCake, SkOrderPanCake },
    props: [ 'one' ],
    computed: {
        order() { return this.orderPina().one },
        prods() { let res = this.order; return res ? this._pords(res) : [ ] }
    },
    methods: {
        checkIist() {
            return new Promise(rej => {
                this.orderPina().do_one( this.order )
                this.productPina().do_cakes( this.prods )
                this.mod(24)
                rej(0)
            })
        },
        _pords(res) { return res && res.ordered_product ? res.ordered_product : [ ] },
    }
}
</script>