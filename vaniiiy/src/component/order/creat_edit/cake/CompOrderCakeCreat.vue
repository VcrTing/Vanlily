<template>
    <form-def :header="'蛋糕資料'" @submit="submit">
        <cp-occe-basic ref="basic"/>
        <cp-occe-custext ref="custext"/>
        <cp-occe-price ref="price"/>
    </form-def>
</template>

<script>
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
import CpOcceBasic from './inner/CpOcceBasic.vue'
import CpOcceCustext from './inner/CpOcceCustext.vue'
import CpOccePrice from './inner/CpOccePrice.vue'
export default {
    components: { FormDef, CpOcceBasic, CpOcceCustext, CpOccePrice },

    data() {
        return {
        }
    },
    computed: {
        order() { return this.orderPina().one }
    },
    methods: {
        coii() {
            const basic = this.$refs.basic.coii()
            const custext = this.$refs.custext.coii()
            const price = this.$refs.price.coii()
            console.log('cake basic =', basic)
            console.log('cake custext =', custext)
            console.log('cake price =', price)
        },

        async submit() {
            let data = this.coii()
        },

        async create(data) {
            let res = await this.serv.cake.create(this, this.order.uuid, data)
            if (res) {

            }
        }
    }
}
</script>

<style lang="sass" scoped>
.w-65
    width: 65.4% !important
</style>