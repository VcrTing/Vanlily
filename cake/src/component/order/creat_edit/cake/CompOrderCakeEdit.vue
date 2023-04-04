<template>
    <form-def :header="'蛋糕資料'" @submit="submit">
        <cp-cake-picker @cake_choise="(n) => cake = n"/>
        <cp-occe-basic :cake="cake" ref="basic"/>
        <cp-occe-custext :cake="cake" ref="custext"/>
        <cp-occe-price :edit="true" :one="cake" ref="price"/>
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
            
        }
    },
    computed: {
        cake() { return this.productPina().cake_of_edit }
    },
    methods: {
        coii() {
            const basic = this.$refs.basic.coii()
            const custext = this.$refs.custext.coii()
            const price = this.$refs.price.coii()
        },

        async submit() {
            let data = this.coii()
        },

        async create(data) {
            
        },
    },
}
</script>