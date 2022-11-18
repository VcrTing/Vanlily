<template>
    <form-def :header="'蛋糕資料'" @submit="submit">
        <cp-cake-picker @cake_choise="(n) => cake = n"/>
        <cp-occe-basic :cake="cake" ref="basic"/>
        <cp-occe-custext :cake="cake" ref="custext"/>
        <cp-occe-price :cake="cake" ref="price"/>
    </form-def>
</template>

<script>
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
import CpCakePicker from './comm/CpCakePicker.vue'
import CpOcceBasic from './inner/CpOcceBasic.vue'
import CpOcceCustext from './inner/CpOcceCustext.vue'
import CpOccePrice from './inner/CpOccePrice.vue'
export default {
    components: { FormDef, CpOcceBasic, CpOcceCustext, CpOccePrice, CpCakePicker },

    data() {
        return {
            cake: {  }
        }
    },
    computed: {
        order() { return this.orderPina().one },
        products() { return this.productPina().products }
    },
    methods: {
        // uuid() { return sessionStorage.getItem('vaniiiy_pro_uuid') },
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
        },

        product_one(pk) {
            /* let res = await this.serv.check.order_check( this, this.order.uuid, pk )
            console.log('RES =', res)
            this.cake = res */
            this.cake = this.orderPina().cake
            console.log('CAKE =', this.cake)
        }
    },
    async mounted() {
        // const uuid = this.uuid; console.log('UUID =', uuid)
        this.product_one(null)
    }
}
</script>

<style lang="sass" scoped>
.w-65
    width: 65.4% !important
</style>