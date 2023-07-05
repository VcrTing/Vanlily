<template>
    <div>
        <div class="fx-s fx-t">
            <fk-order-img-msg class="fx-1" :imgs="_imgs(v)"/>

            <div class="w-8 hide-p"></div>
            <div class="t-r d-ib pl_x2">
                <button @click="checkIist(v)" class="btn-pri_out px py_s">檢查清單</button>
            </div>
        </div>
        <div class="py_x"><hr/></div>
        <div class="fx-s fx-t">
            <div class="w-43 pr">
                <p>名稱:&nbsp;&nbsp;<var-cake-name :prod="v.product"/></p>
                <fk-cake-attrs :cake="v"/>
            </div>
            <div class="w-35 pr">
                <fk-cake-attrs-second :cake="v"/>
            </div>
            <div class="w-22">
                <fk-cake-price-group :cake="v"/>
            </div>
        </div>
    </div>
</template>

<script>
import VarCakeName from '../../../front/variab/cake/VarCakeName.vue';
import FkOrderImgMsg from '../../../funcks/order/img/FkOrderImgMsg.vue';
import FkCakeAttrs from '../../../funcks/order/text/FkCakeAttrs.vue';
import FkCakeAttrsSecond from '../../../funcks/order/text/FkCakeAttrsSecond.vue';
import FkCakePriceGroup from '../../../funcks/order/text/FkCakePriceGroup.vue';

export default {
    components: { FkCakeAttrs, FkCakeAttrsSecond, FkCakePriceGroup, VarCakeName, FkOrderImgMsg },
    props: { v: Object },
    // v = order_product
    methods: {

        _imgs(v) {
            let res = (v && v.product) ? v.product : null; return (res && res.images_url) ? res.images_url : [ ]
        },

        // .  
        checkIist(cake) {
            return new Promise(rej => {
                this.mod(24); 
                this.productPina().do_cakes([ cake ])
                rej(0)
            })
        },

        //  編輯 
        cakeEdit(cake) {
            this.orderPina().do_cake(cake)
            this.mod(22)
        }
    }
}
</script>