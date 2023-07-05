<template>
    <div>
        <div class="fx-s fx-t">
            <div class="fx-1 ps-r">
                <button class="btn-purp cocc-tag pr_s">自订蛋糕</button>
                <fk-order-img-msg class="w-100" :imgs="_imgs()"/>
            </div>

            <div class="w-8 hide-p"></div>
            <div class="t-r d-ib pl_x2">
                <button @click="checkIist(v)" class="btn-pri_out px py_s">檢查清單</button>
            </div>
        </div>
        <div class="py_x"><hr/></div>
        <div class="fx-s fx-t">
            <div class="w-43 pr">
                <p>名稱:&nbsp;&nbsp;{{ v.product_name }}</p>
                <fk-cake-attrs-custom :cake="v"/>
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
import FkOrderImgMsg from '../../../funcks/order/img/FkOrderImgMsg.vue';
import FkCakeAttrsCustom from '../../../funcks/order/text/FkCakeAttrsCustom.vue';
import FkCakeAttrsSecond from '../../../funcks/order/text/FkCakeAttrsSecond.vue';
import FkCakePriceGroup from '../../../funcks/order/text/FkCakePriceGroup.vue';

import CAKE_DEF from '../../../assets/img/CAKE_DEF.jpg'
export default {
    components: { FkCakeAttrsSecond, FkCakePriceGroup, FkOrderImgMsg, FkCakeAttrsCustom },
    props: { v: Object },
    // v = order_product
    methods: {

        _imgs() { return [ CAKE_DEF, CAKE_DEF, CAKE_DEF ] },

        // .  
        checkIist(cake) {
            return new Promise(rej => {
                this.mod(24); 
                this.productPina().do_cakes([ cake ])
                rej(0)
            })
        },

    }
}
</script>