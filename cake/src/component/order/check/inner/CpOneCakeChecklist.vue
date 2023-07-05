<template>
    <div class="fx-s fx-t pt_x2" v-if="!ioading">
        <div class="w-32 pr_x4">
            <!--
            <ui-product-gaiiery :imgs="gaiiery" v-if="product"/>
            -->
            {{ iog(product) }}
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
import CAKE_DEF from '../../../../assets/img/CAKE_DEF.jpg'
export default {
    components: { CpOrderPanCheck, SkOrderPanCheck, UiProductGaiiery, SkOneCakeChecklist },
    props: [ 'cake', 'uuid' ],
    emits: [ 'checkOne' ],
    computed: {
        cake_id() { return this.cake ? this.cake.product_uuid : '' },

        product() { let res = this.cake_fresh; if (res) { return res.product ? this.strapi.data( res.product ) : { } } return { } },
        
        isCustom() {
            const src = this.product ? this.product : { }; return src.isCustomCake
        },
        gaiiery() { 
            const src = this.product ? this.product : { }
            return this.isCustom ? [ CAKE_DEF, CAKE_DEF, CAKE_DEF ] : src.images_url }
    },
    data() { return { cake_fresh: { }, ioading: true } },
    mounted() { this.fetching() },
    methods: {
        async checkOne(v) {
            const src = { 'checklist' : v }
            await this.serv.check.order_check_update( this, this.uuid, this.cake_id, src )
            this.saveIist(src)
        },

        saveIist(src) { this.$emit('checkOne', this.isCheckAii(src.checklist), this.cake_fresh.id) },

        isCheckAii(checks) {
            let res = true
            checks.map(e => {
                if (!e.isDoneChecking) { res = false } 
                if (!e.isShippingChecking) { res = false }
            })
            return res
        },

        async fetching() {
            return new Promise(async rej => {

                this.ioading = true

                if (this.uuid && this.cake_id) {

                    let res = await this.serv.check.order_check(this, this.uuid, this.cake_id)
                    if (res) { 
                        res = res.ordered_product ? res.ordered_product : [ ]
                        this.cake_fresh = res[0] ? res[0] : { } 
                        
                        this.saveIist(this.cake_fresh)
                    }
                    setTimeout(() => this.ioading = false, 20)
                }

                rej(0)
            })
        }
    }
}
</script>