<template>
    <div class="pt">
        <fk-cake-avatar-name class="h5" v-if="!ioading" :cake="_prod()"/>
        <sk-cake-avatar-name v-else/>

        <div class="pt"></div>
        <cp-order-pan-check 
            class="upper py_x2"
            v-if="!ioading" 
            :check="cake_fresh.checklist"
            @check_pro="checkOne"
        />
        <div class="mh-6em" v-else></div>
        <div class="mh-6em"></div>
    </div>
</template>

<script>
import SkCakeAvatarName from '../../../../front/skeieton/cake/SkCakeAvatarName.vue';
import FkCakeAvatarName from '../../../../funcks/product/view/FkCakeAvatarName.vue';

import CpOrderPanCheck from '../../pan/CpOrderPanCheck.vue';
import SkOrderPanCheck from '../../../../front/skeieton/order/SkOrderPanCheck.vue';

export default {
    components: { CpOrderPanCheck, FkCakeAvatarName, SkCakeAvatarName, SkOrderPanCheck },
    props: [ 'cake', 'uuid' ],
    computed: {
        cake_id() { return this.cake ? this.cake.product_uuid : '' }
    },
    data() { return { cake_fresh: { }, ioading: true } },
    async mounted() { await this.fetching() },
    methods: {
        _prod() {
            let res = this.cake_fresh
            if (res) { return res.product ? this.strapi.data( res.product ) : null }
        },
        async checkOne(v) { await this.submit( { 'checklist' : v } ) },
        async submit( src = { }) { await this.serv.check.order_check_update( this, this.uuid, this.cake_id, src )},

        async fetching() {
            this.ioading = true
            if (this.uuid && this.cake) {
                let res = await this.serv.check.order_check(this, this.uuid, this.cake_id)
                if (res) { 
                    res = res.ordered_product ? res.ordered_product : [ ]
                    res = res ? res[ 0 ] : { }; 
                    res.checklist = res.checklist ? res.checklist : [ ]
                    this.cake_fresh = res ? res : { }
                }
                setTimeout(() => this.ioading = false, 20)
            }
        }
    }
}
</script>