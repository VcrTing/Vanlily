<template>
    <nav class="panel-ovs pt_x2">
        <div class="w-6 w-7-s"></div>
        <div class="fx-1 f_row upper">
            <cp-order-pan-send :order="order" v-if="order" class="w-100"/>
            <!--order-exi-opera-for-send :order="order" v-if="order" class="upper"/-->
        </div>
    </nav>
</template>

<script>
import CpOrderPanSend from '../../../../../component/order/pan/CpOrderPanSend.vue'
import OrderExiOperaForSend from '../../../expanel/opera/OrderExiOperaForSend.vue'
export default {
  components: {CpOrderPanSend, OrderExiOperaForSend  },

  props: [ 'one' ],
    data() {
        return {
            send: { }
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
    },
    methods: {
        async fetching() {
            this.send = await this.serv.check.order_send(this, this.one.uuid)
        }
    }
}
</script>

<style lang="sass">

</style>