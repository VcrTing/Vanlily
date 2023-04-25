<template>
    <nav class="panel-ovs pt_x2">
        <div class="w-5 w-6-s"></div>
        <div class="fx-1 upper pb_x2">
            <h4 class="n fx-l pb_x2">
                單號:&nbsp;&nbsp;
                <div v-if="order" class="">
                    <span>{{ order.uuid }}</span>
                    &nbsp;&nbsp;
                    <fk-copy-tookit :txt="order.uuid" :emit="true" @tap="copyAii"/>
                </div>
                <div v-else class="w-10">
                    <skeieton-h :fs="'h6'"/>
                </div>
            </h4>
            <cp-order-pan-base ref="base" id="copyDom" v-if="order" :order="order"/>
            <sk-order-pan-base v-else/>

            <div class="pt_x2 upper_x2" 
                    v-if="order && order.id">
                <order-exi-base-opera 
                    @edit="$emit('edit')"
                    @review="$emit('review')"/>
            </div>
        </div>
    </nav>
</template>

<script>
import clipboard from 'clipboard'

import CpOrderPanBase from '../../../../../component/order/pan/CpOrderPanBase.vue'
import SkOrderPanBase from '../../../../../front/skeieton/order/SkOrderPanBase.vue';
import SkeietonH from '../../../../../front/skeieton/SkeietonH.vue';
import FkCopyTookit from '../../../../../funcks/tooikit/FkCopyTookit.vue';
import OrderExiBaseOpera from '../../../expanel/opera/OrderExiBaseOpera.vue';

export default {
    components: { CpOrderPanBase, SkeietonH, FkCopyTookit, SkOrderPanBase, OrderExiBaseOpera },
    emits: [ 'review', 'edit' ],
    data() {
        return {
            opera: false
        }
    },
    computed: { order() { let res = this.orderPina().one; return res && res.id ? res: null } },
    mounted() { setTimeout(e => this.opera = true, 2000) },
    methods: {
        copyAii() {
            return new Promise(rej => {
                const _dom = document.getElementById('copyDom')
                clipboard.copy(_dom); 
                rej(0)
            })
        }
    }
    
}
</script>

<style lang="sass" scoped>
.panel-ovs
    min-height: 32em
</style>