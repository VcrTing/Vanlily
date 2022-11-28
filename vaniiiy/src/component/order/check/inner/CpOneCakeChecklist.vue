<template>
    <div>
        <fk-cake-avatar-name class="h5" v-if="cake_fresh && _prod()" :cake="_prod()"/>
        <sk-cake-avatar-name v-else/>

        <div class="py"></div>
        <cp-order-pan-check 
            v-if="cake_fresh && cake_fresh.checklist" 
            :check="cake_fresh.checklist"

            @check_pro="checkOne"
        />
        <sk-order-pan-check v-else/>
        <div class="py"></div>
    </div>
</template>

<script>
import SkCakeAvatarName from '../../../../front/skeieton/cake/SkCakeAvatarName.vue';
import FkCakeAvatarName from '../../../../funcks/product/view/FkCakeAvatarName.vue';

import CpOrderPanCheck from '../../pan/CpOrderPanCheck.vue';
import SkOrderPanCheck from '../../../../front/skeieton/order/SkOrderPanCheck.vue';

export default {
    components: { CpOrderPanCheck, FkCakeAvatarName, SkCakeAvatarName, SkOrderPanCheck },
    props: [ 'cake' ],
    computed: {
        order() { let res = this.orderPina().one; return res ? res : { } },
        uuid() { return this.order ? this.order.uuid : '' },
        cake_id() { return this.cake ? this.cake.product_uuid : '' }
    },
    data() { return { cake_fresh: { }, data: null } },
    async mounted() { await this.fetching() },
    methods: {
        _prod() {
            let res = this.cake_fresh
            if (res) { return res.product ? this.strapi.data( res.product ) : null }
        },

        async checkOne(v) {
            this.data = { 'checklist' : v }
            await this.submit()
            // console.log('V =', this.uuid, this.cake_id, v)
        },

        async submit() {
            let res = await this.serv.check.order_check_update( this, this.uuid, this.cake_id, this.data )
            if (res) {

            }
        },
        async fetching() {
            if (this.order && this.cake) {
                let res = await this.serv.check.order_check(this, this.uuid, this.cake_id)
                console.log('检查清单 RES =', res)
                if (res) { 
                    res = res.ordered_product ? res.ordered_product : [ ]
                    res = res ? res[ 0 ] : { }; this.cake_fresh = res
                }
            }
        }
    }
}
</script>

<style>

</style>