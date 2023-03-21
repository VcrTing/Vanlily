<template>
    <div>
        <wbc-order-review v-if="!ioading"/>
        <sk-order-review v-else/>
    </div>
</template>

<script>
import SkOrderReview from '../../../../front/skeieton/order/SkOrderReview.vue'
import WbcOrderReview from '../../../order/review/WbcOrderReview.vue'
export default {
  components: { WbcOrderReview, SkOrderReview },
    computed: {
        uuid() { return this.orderPina().uuid },
    },
    data() {
        return {
            ioading: true, one: { }
        }
    },
    mounted() { this.init() },
    methods: {
        async init() {
            if (!this.uuid) {  }
            const res = await this.serv.order.one( this, this.uuid )
            if (res && res.data) {
                this.one = res.data;
                this.orderPina().do_one( res.data )
            }
            setTimeout(() => this.ioading = false, 20)
        }
    }
}
</script>