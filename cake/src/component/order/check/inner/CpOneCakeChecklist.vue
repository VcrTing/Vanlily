<template>
    <div class="fx-s fx-t pt_x2" v-if="!ioading">
        <div class="w-32 pr_x4">
            <ui-product-gaiiery :imgs="product.images_url" v-if="product.images_url"/>
        </div>
        <div class="w-4"></div>
        <div class="fx-1">
            <cp-order-pan-check 
                class="upper py_x2 fx-1"
                v-if="!ioading" 
                :check="cake_fresh.checklist"
                @check_pro="checkOne"
            />
            <div class="mh-6em" v-else></div>
        </div>
    </div>
    <sk-one-cake-checklist v-else class="w-100"/>
</template>

<script>
import CpOrderPanCheck from '../../pan/CpOrderPanCheck.vue';
import SkOrderPanCheck from '../../../../front/skeieton/order/SkOrderPanCheck.vue';
import UiProductGaiiery from '../../../../funcks/ui_media/UiProductGaiiery.vue';
import SkOneCakeChecklist from './SkOneCakeChecklist.vue';

export default {
    components: { CpOrderPanCheck, SkOrderPanCheck, UiProductGaiiery, SkOneCakeChecklist },
    props: [ 'cake', 'uuid' ],
    computed: {
        cake_id() { return this.cake ? this.cake.product_uuid : '' },

        product() {
            let res = this.cake_fresh
            if (res) { return res.product ? this.strapi.data( res.product ) : { } }
        },

        gaiiery() { return this.product.images_url ? this.product.images_url : [] }
    },
    data() { return { cake_fresh: { }, ioading: true } },
    mounted() { this.fetching() },
    methods: {
        async checkOne(v) { await this.submit( { 'checklist' : v } ) },
        async submit( src = { }) { 
            await this.serv.check.order_check_update( this, this.uuid, this.cake_id, src )},

        async fetching() {
            return new Promise(async rej => {

                this.ioading = true

                if (this.uuid && this.cake_id) {

                    let res = await this.serv.check.order_check(this, this.uuid, this.cake_id)
                    if (res) { 
                        res = res.ordered_product ? res.ordered_product : [ ]
                        this.cake_fresh = res[0] ? res[0] : { } 
                    }
                    setTimeout(() => this.ioading = false, 20)
                }

                rej(0)
            })
        }
    }
}
</script>