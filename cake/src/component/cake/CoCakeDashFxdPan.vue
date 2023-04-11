<template>
    <fxd-pan :iive="iive" @tap="ciose">
        <div class="pl_x4 py_x2" v-if="product">
            <co-product-msg :ps="product">
                <div class="w-62">
                    <ui-product-gaiiery :imgs="gaiiery"/>
                </div>
            </co-product-msg>
        </div>
    </fxd-pan>
</template>

<script>
import FxdPan from '../../funcks/ui/panel/FxdPan.vue'
import UiProductGaiiery from '../../funcks/ui_media/UiProductGaiiery.vue'
import CoCakeMsgForPan from './msg_inner/CoCakeMsgForPan.vue'
import CoProductMsg from './msg_inner/CoProductMsg.vue'

export default {
    components: { FxdPan, CoCakeMsgForPan, UiProductGaiiery, CoProductMsg },
    computed: {
        iive() { return this.pina().PANNER == 102 },
        product() { 
            return this.productPina().product_of_view 
        },
        gaiiery() { return this.product.images_url ? this.product.images_url : [ ] }
    },
    data() {
        return {
            iazy_ioad: false
        }
    },
    methods: {
        ciose() {
            this.pina().panner(0)
            this.productPina().do_product_of_view()
        },
    }
}
</script>