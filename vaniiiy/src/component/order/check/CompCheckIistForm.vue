<template>
    <div>
        <form-def :header="'檢查清單'">
            <cp-order-pan-check/>
            <div class="py"></div>
        </form-def>
    </div>
</template>

<script>
import FormDef from "../../../funcks/ui_layout/form/def/FormDef.vue"
import CpOrderPanCheck from '../pan/CpOrderPanCheck.vue'

export default {
    components: { FormDef, CpOrderPanCheck },
    computed: {
        order() { let res = this.orderPina().one; return res ? res : { } },
        pro_uuid() { return sessionStorage.getItem('vaniiiy_pro_uuid') }
    },
    data() {
        return {
            cake: { }
        }
    },
    async mounted() {
        await this.fetching()
    },
    methods: {
        async fetching() {
            if (this.order && this.pro_uuid) {
                let res = await this.serv.check.order_check(this, this.order.uuid, this.pro_uuid)
                console.log('RES =', res)
                if (res) { this.cake = res }
            }
        }
    }
}
</script>

<style>

</style>