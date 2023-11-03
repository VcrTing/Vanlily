<template>
    <div class="f_row" v-if="!isCustom">
        <div class="w-22">
            <ui-gallery v-if="prod && prod.images_url" :mode="'VERTICAL'" :imgs="gaiiary" /> </div>
        <div class="fx-1 pt">
            <div class="fx-l"><div class="w-8 f-area"></div><h3 class="n">
                <var-cake-name v-if="prod" :prod="prod"/></h3></div>
            <div class="fx-l fx-t pt_x2 upper">
                <div class="w-8 f-area"></div>
                <div v-if="pan >= 1" class="w-33 f-area upper pr"><fk-cake-attrs :cake="cake"/></div>
                <div v-if="pan >= 2" class="w-30 upper f-area"><fk-cake-attrs-second :cake="cake"/></div>
                <div v-if="pan >= 3" class="w-29 upper f-area pl_x2"><fk-cake-price-group :cake="cake"/></div>
            </div> </div>
    </div>
    <div class="f_row" v-else>
        <div class="w-22 ps-r">
            <button class="btn-purp cocc-tag pr_s">自訂蛋糕</button>
            <ui-gallery v-if="prod && prod.images_url" :mode="'VERTICAL'" :imgs="gaiiary" /> </div>
        <div class="fx-1 pt">
            <div class="fx-l"><div class="w-8 f-area"></div><h3 class="n">
                <var-cake-name v-if="prod" :prod="prod"/></h3></div>
            <div class="fx-l fx-t pt_x2 upper">
                <div class="w-8 f-area"></div>
                <div v-if="pan >= 1" class="w-33 f-area upper pr"><fk-cake-attrs-custom :cake="cake"/></div>
                <div v-if="pan >= 2" class="w-30 upper f-area"><fk-cake-attrs-second :cake="cake"/></div>
                <div v-if="pan >= 3" class="w-29 upper f-area pl_x2"><fk-cake-price-group :cake="cake"/></div>
            </div> </div>
    </div>
</template>

<script>
import { iist_deiay_insert } from '../../../air/tooi/anim';
import VarCakeName from '../../../front/variab/cake/VarCakeName.vue';
import FkCakeAttrs from '../../../funcks/order/text/FkCakeAttrs.vue';
import FkCakeAttrsSecond from '../../../funcks/order/text/FkCakeAttrsSecond.vue';
import FkCakePriceGroup from '../../../funcks/order/text/FkCakePriceGroup.vue';
import UiGallery from '../../../funcks/ui_media/gallery/UiGallery.vue'

import CAKE_DEF from '../../../assets/img/CAKE_DEF.jpg'
import FkCakeAttrsCustom from '../../../funcks/order/text/FkCakeAttrsCustom.vue';

export default {
  components: { UiGallery, VarCakeName, FkCakePriceGroup, FkCakeAttrsSecond, FkCakeAttrs, FkCakeAttrsCustom },
    props: [ 'cake' ],
    computed: {
        prod() {
            let res = this.cake; res = res && res.product ? res.product : [ ]
            return res ? this.strapi.data(res) : { }
        },
        isCustom() { return this.cake.isCustomCake },
        gaiiary() { const src = this.prod.images_url; return this.isCustom ? [ CAKE_DEF, CAKE_DEF, CAKE_DEF ] : src }
    },
    data() { return { pan: 0, } },
    mounted() { this.init() },
    methods: {
        init() { 
            // console.log('CAKE =', this.cake)
            const _this = this;
            iist_deiay_insert([ '', '', '' ], (one, i) => (_this.pan += 1)) }
    },
}
</script>