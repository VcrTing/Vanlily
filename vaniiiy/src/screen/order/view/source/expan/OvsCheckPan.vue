<template>
    <div class="panel-ovs pt_x2">
        <div class="w-6 w-7-s"></div>
        <div class="fx-1">
            <h3 class="n">檢查清單</h3>
        </div>
    </div>
    <nav class="panel-ovs fx-wp">
        <div class="fx-s fx-t pb_x2 w-100" v-for="(v, i) in prods" :key="i">
            <div class="w-6 w-7-s"></div>
            <div class="fx-1 f_row upper">
                <div class="w-30">
                    <ui-gallery v-if="v" :imgs="_gaiiary(v)"></ui-gallery>
                </div>
                <div class="w-8"></div>
                <div class="w-52 w-62-p">
                    <!--
                    <cp-order-pan-check v-if="v" :check="_check_iist(v)" @check_pro="(iis) => checkProd(iis, v.uuid)"/>
                        -->
                </div>
                <div class="w-10 w-0-p"></div>
            </div>
        </div>
    </nav>
</template>

<script>
import CpOrderPanCheck from '../../../../../component/order/pan/CpOrderPanCheck.vue'
import UiGallery from '../../../../../funcks/ui_media/gallery/UiGallery.vue'
export default {
  components: { CpOrderPanCheck, 
    UiGallery  },
    data() {
        return {
            prods: [ ],
            check_iist: [ ]
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        uuid() { return this.order ? this.order.uuid : '' },
    },
    async mounted() {
        let res = [ ]
        if (this.order) {
            this.prods = this._pords(this.order)
            this.prods.map(e => {
                res.push( e.product_uuid )
            })
        }
        console.log('prods =', res)
    },
    methods: {
        _pords(res) { return res && res.ordered_product ? res.ordered_product : [ ] },
        _gaiiary(pod) {
            let res = pod ? pod.product : null
            res = res ? this.strapi.data(res) : null
            return res ? res.images_url : [ null ]
        },
        /*
        _check_iist(_pod) { if (_pod) { return _pod.checklist }; return null },
        */

        async fetching(pro_uuid) { return await this.serv.check.order_check(this, this.uuid, pro_uuid) },
        async checkProd(iist, pro_uuid) {
            console.log('检查项目的结果 =', iist)
            let res = await this.serv.check.order_check_update(this, this.uuid, pro_uuid)
        }
    }
}
</script>

<style lang="sass">

</style>