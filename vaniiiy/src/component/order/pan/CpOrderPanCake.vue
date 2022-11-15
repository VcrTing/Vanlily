<template>
    <div class="f_row">
        <div class="w-27">
            <ui-gallery v-if="prod" :mode="'VERTICAL'" :imgs="prod.images_url"></ui-gallery>
        </div>
        <div class="fx-1 f_row pt">
                <div class="w-8 f-area"></div>
                <div class="w-33 f-area pr">
                    <div>
                        款式：<span><var-cake-name v-if="prod" :prod="prod"/></span>
                    </div>
                    <fk-cake-attrs :cake="cake"/>
                </div>
                <div class="w-30 f-area">
                    <fk-cake-attrs-second :cake="cake"/>
                </div>
                <div class="w-29 f-area pl_x2">
                    <fk-cake-price-group :cake="cake"/>
                </div>
                <div class="w-100 f_row">
                    <div class="w-8"></div>
                    <div class="fx-1 f_row">
                        <div class="w-5em">生日字粒：</div>
                        <div class="pl">
                            <div><span>名字字粒：</span><span>KC Li</span></div>
                            <div class="pt_n"><span>底盤字粒：</span><span>happy birthday</span></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import VarCakeName from '../../../front/variab/cake/VarCakeName.vue';
import FkCakeAttrs from '../../../funcks/order/text/FkCakeAttrs.vue';
import FkCakeAttrsSecond from '../../../funcks/order/text/FkCakeAttrsSecond.vue';
import FkCakePriceGroup from '../../../funcks/order/text/FkCakePriceGroup.vue';
import Money from '../../../funcks/ui/money/Money.vue'
import UiGallery from '../../../funcks/ui_media/gallery/UiGallery.vue'
import ViewMoney from '../../view/money/ViewMoney.vue';
export default {
  components: { UiGallery, Money, VarCakeName, ViewMoney, FkCakePriceGroup, FkCakeAttrsSecond, FkCakeAttrs },
    props: [ 'cake' ],
    computed: {
        prod() {
            let res = this.cake; res = res && res.product ? res.product : [ ]
            return res ? this.strapi.data(res) : { }
        },
    },
    methods: {

    }
}
</script>

<style>

</style>