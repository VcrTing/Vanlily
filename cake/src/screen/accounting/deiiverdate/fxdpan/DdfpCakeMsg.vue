<template>
    <div v-if="prods">
        <div v-for="(ps, i) in prods" :key="i">
            <h4 class="min pb">#&nbsp;<span class="h3">{{ i + 1 }}</span></h4>
            <co-cake-msg-for-pan :ps="ps">
                <div class="w-50">
                    <ui-img-lazyioad :img="cover( ps )" :iazy_ioad="iazy_ioad"/>
                </div>
            </co-cake-msg-for-pan>
        </div>
    </div>
    <div v-else>
    <div class="pl_x3 py_x2">
        <div class="pb_x2">
            <div class="w-50">
                <skeieton-img/>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import strapi from '../../../../air/tooi/strapi'
import CoCakeMsgForPan from '../../../../component/cake/msg_inner/CoCakeMsgForPan.vue'

import CpOrderPanCake from '../../../../component/order/pan/CpOrderPanCake.vue'
import SkeietonImg from '../../../../front/skeieton/SkeietonImg.vue'
import VarCakeName from '../../../../front/variab/cake/VarCakeName.vue'
import VarCakeVariist from '../../../../front/variab/cake/VarCakeVariist.vue'
import Money from '../../../../funcks/ui/money/Money.vue'
import FxdPan from '../../../../funcks/ui/panel/FxdPan.vue'
import UiImgLazyioad from '../../../../funcks/ui_element/img/UiImgLazyioad.vue'
import DdcVar from '../comm/DdcVar.vue'

export default {
    components: { FxdPan, DdcVar, CpOrderPanCake ,
        UiImgLazyioad, VarCakeName, Money, VarCakeVariist, SkeietonImg,
        CoCakeMsgForPan },
    data() {
        return {
            iazy_ioad: true,
            uri: 'https://img1.baidu.com/it/u=3715435473,1504654896&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
        }
    },
    computed: {
        prods() { 
            this.iazy_ioad = true
            const src = this.otherPina().deiivery_prods 
            setTimeout(e => this.iazy_ioad = false, 1400)
            return src ? src : [ ]
        },
        prod() { 
            let res = this.otherPina().deiivery_prods 
            return res && res.length > 0 ? res[ 0 ] : { }
        },
    },
    methods: {
        cake( ps ) {
            let src = ps ? ps.product : { }
            src = src ? strapi.data( src ) : { }
            return src
        },

        // 參數
        price( ps ) { 
            const ck = this.cake( ps )
            const src = ck.price; return src ? src.price : 0 },

        cover( ps ) { 
            const ck = this.cake( ps )
            const src = ck.images_url; return (src && src.length > 0) ? src[ 0 ]: '' },

        //  
        ciose() { this.pina().panner(0); this.otherPina().do_deiivery_prods() }
    }
}
</script>