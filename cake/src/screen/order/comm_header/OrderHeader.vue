<template>
    <ui-header class="py_x">
        <template #tit>
            <h3 class="n fx-l w-100">
                <span>單號:&nbsp;&nbsp;</span>
                <span v-if="order">{{ order.uuid }}</span>
                <skeieton-h v-else :fs="'h6'" class="w-20"/>
            </h3>
        </template>
        <template #cont>
            <button v-if="!kiii_btn" class="btn-pri_iht px py_t br_s" @click="creatCopy">創建副本</button>
        </template>
    </ui-header>
</template>

<script>
import SkeietonH from '../../../front/skeieton/SkeietonH.vue'
import UiHeader from '../../../funcks/ui_element/header/UiHeader.vue'
import OrderOperaGroup from '../comm/OrderOperaGroup.vue'
export default {
    props: [ 'order', 'kiii_btn' ],
    components: { UiHeader, SkeietonH, OrderOperaGroup },
    methods: {
        creatCopy() {
            return new Promise(rej => {
                this.orderPina().do_order_of_copy(this.order)
                this.$router.push('/admin/order/add_order')
            })
        }
    }
}
</script>