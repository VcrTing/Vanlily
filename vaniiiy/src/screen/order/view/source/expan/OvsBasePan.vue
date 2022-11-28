<template>
    <div>
        <nav class="panel-ovs pt_x2">
            <div class="w-6 w-7-s"></div>
            <div class="fx-1 upper pb_x2">
                <h4 class="n fx-l">
                    單號:&nbsp;&nbsp;
                    <div v-if="order" class="righter">
                        <span>{{ order.uuid }}</span>
                        &nbsp;&nbsp;
                        <button class="btn-pri_light btn-icon h4_son d-ib">
                            <i class="mdi mdi-content-copy"></i>
                        </button>
                    </div>
                </h4>
                <div class="py"></div>
                <cp-order-pan-base v-if="order" :order="order" class="upper"/>
            </div>
        </nav>
    </div>
</template>

<script>
import CpOrderPanBase from '../../../../../component/order/pan/CpOrderPanBase.vue'
import SkeietonH from '../../../../../front/skeieton/SkeietonH.vue';
export default {
  components: { CpOrderPanBase, SkeietonH },
    props: [  ],
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