<template>
    <nav class="panel-ovs pt_x2">
        <div class="w-6 w-7-s"></div>
        <div class="fx-1 upper">
            <h4 class="n">
                單號:&nbsp;&nbsp;
                <span>{{ one.uuid }}</span>
                &nbsp;&nbsp;
                <button class="btn-pri_light btn-icon h4_son d-ib">
                    <i class="mdi mdi-content-copy"></i>
                </button>
            </h4>
            <div class="py"></div>
            <cp-order-pan-base v-if="order" :order="order" class="upper"/>
        </div>
    </nav>
</template>

<script>
import CpOrderPanBase from '../../../../../component/order/pan/CpOrderPanBase.vue'
export default {
  components: { CpOrderPanBase },
    props: [ 'one' ],
    data() {
        return {
            base: { }
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null }
    },
    methods: {
        async fetching() {
            // this.base = await this.serv.check.order_base(this, this.one.uuid)
        }
    }
}
</script>

<style lang="sass">

</style>