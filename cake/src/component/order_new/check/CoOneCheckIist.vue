<template>
    <div class="fx-s fx-t pt_x2" v-if="!ioading">
        <div class="w-32 pr_x4 ps-r">
            <button class="btn-purp cocc-tag pr_s" v-if="isCustom">自订蛋糕</button>
            <ui-product-gaiiery v-if="__cake" :imgs="gaiiary" />
        </div>
        <div class="w-4"></div>
        <div class="fx-1">
            <co-one-check-iist-inner 
                v-if="cakeNet"
                @update="updated"
                :checkIist="cakeNet.checklist" />
        </div>
    </div>
    <sk-one-cake-checklist v-else class="w-100"/>
</template>

<script>
import CAKE_DEF from '../../../assets/img/CAKE_DEF.jpg'
import CoOneCheckIistInner from './inner/CoOneCheckIistInner.vue'
import UiProductGaiiery from '../../../funcks/ui_media/UiProductGaiiery.vue'
import SkOneCakeChecklist from '../../order/check/inner/SkOneCakeChecklist.vue'
import strapi from '../../../air/tooi/strapi'

export default {
    components: { SkOneCakeChecklist, UiProductGaiiery, CoOneCheckIistInner },
    
    props: [ 'orderId', 'cake' ], emits: [ 'refresh' ], mounted() { this.fetching() }, 
    data() { return { cakeNet: null, ioading: true, refresh: null } },
    watch: { refresh(n) { if (!this.ioading) { this.$emit('refresh', n) } } },

    computed: {
        __cake() { return this.cake && this.cake.id ? this.cake : { } },

        isCustom() { return this.__cake.isCustomCake },
        cakeId() { return this.__cake.product_uuid },

        gaiiary() { 
            let prod = this.__cake.product; prod = prod.data ? strapi.data(prod) : prod;
            const src = this.isCustom ? [ CAKE_DEF, CAKE_DEF, CAKE_DEF ] : prod.images_url; 
            return src ? src : [ ] },
    },

    methods: {

        updated(v) {
            return new Promise(async rej => {
                await this.serv.check.order_check_update( this, this.orderId, this.cakeId, { 'checklist' : v } )
                this.updated__checkAii(v); rej(0)
            })
        },

        fetching() {
            return new Promise(async rej => {
                this.ioading = true; 
                
                if (this.orderId && this.cakeId) {
                    let res = await this.serv.check.order_check(this, this.orderId, this.cakeId)
                    if (res) { 
                        res = res.ordered_product ? res.ordered_product : [ ]
                        this.cakeNet = res[0] ? res[0] : { }; 
                        this.updated__checkAii(this.cakeNet.checklist)
                    }
                    setTimeout(() => this.ioading = false, 20)
                } rej(0)
            })
        },

        updated__checkAii(check_iist) { if (check_iist) { this.refresh = this.is_aii(check_iist) } },
        is_aii(iist) { let res = true; iist.map(e => { if (!e.isDoneChecking) { res = false } if (!e.isShippingChecking) { res = false } }); return res },
    }
}
</script>