<template>
    <div>
        <div class="pb_x2">
            <slot></slot>
        </div>

        <div class="pb">
            <h3 class="pb_x2">
                <var-cake-name :prod="cake( ps )"/>
            </h3>
            <ddc-var :tit="'單價'">
                HKD&nbsp;<money :v="price( ps )"/>&nbsp;
            </ddc-var>
            <ddc-var :tit="'數量'">
                {{ ps.quantity }}&nbsp;
            </ddc-var>
        </div>
        <div class="pb_x3">
            <var-cake-variist :iist="ps.checklist"/>
        </div>

        <div class="pb_x2">
            <ddc-var :tit="'合共費用'">
                HKD&nbsp;<money :v="ps.unit_price"/>
            </ddc-var>
        </div>
    </div>
</template>

<script>
import strapi from '../../../air/tooi/strapi'

import VarCakeName from '../../../front/variab/cake/VarCakeName.vue'
import VarCakeVariist from '../../../front/variab/cake/VarCakeVariist.vue'
import Money from '../../../funcks/ui/money/Money.vue'
import UiImgLazyioad from '../../../funcks/ui_element/img/UiImgLazyioad.vue'
import DdcVar from '../../../screen/accounting/deiiverdate/comm/DdcVar.vue'

export default {
  components: { UiImgLazyioad, VarCakeName, Money, DdcVar, VarCakeVariist },
    props: { ps: Object },
    methods: {

        cake( ps ) {
            let src = ps ? ps.product : { }
            src = src ? strapi.data( src ) : { }
            return src
        },

        // 參數
        price( ps ) { 
            const ck = this.cake( ps )
            const src = ck.price; 
            return src ? src.price : 0 },

        cover( ps ) { 
            const ck = this.cake( ps )
            const src = ck.images_url; 
            return (src && src.length > 0) ? src[ 0 ]: '' },
    }
}
</script>