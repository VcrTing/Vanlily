<template>
    <nav class="panel-ovs pt_x2">
        <div class="w-6 w-7-s"></div>
        <div class="fx-1 upper">
            <div v-if="prods">
                <cp-order-pan-cake v-for="(v, i) in prods" :key="i" :cake="v"/>
            </div>

            <!--div class="fx-r upper">
                <button class="btn-pri_out px py_s">
                    <i class="mdi mdi-format-list-checks"></i>&nbsp;
                    檢查清單
                </button>
            </div-->
        </div>
    </nav>
</template>

<script>
import CpOrderPanCake from '../../../../../component/order/pan/CpOrderPanCake.vue'
export default {
  components: { CpOrderPanCake },
    props: [ 'one' ],
    data() {
        return {
            products: { }
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },

        prods() { let res = this.order; return this._pords(res) }
    },
    methods: {
        _pords(res) { return res && res.ordered_product ? res.ordered_product : [ ] },

        async fetching() {
            // this.products = await this.serv.check.order_cake(this, this.one.uuid)
        }
    }
}
</script>

<style>

</style>