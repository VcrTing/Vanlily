<template>
    <div class="px_x2 pt_x">
        <div v-for="(v, i) in cakes" :key="i" class="pb_x">
            <nav class="px_x2 pt_s">
                <div class="fx-s fx-t">
                    <fk-order-img-msg class="fx-1" :imgs="_imgs(v)"/>
                    <div class="w-25 t-r row-item" v-if="!_kiii_btn">
                        <button v-if="edit" @click="cakeEdit(v)" class="btn-pri_out px_x2 py_s">編輯</button>
                        <button v-else @click="checkIist(v)" class="btn-pri_out px py_s">檢查清單</button>
                    </div>
                </div>
                <div class="py_x"><hr/></div>
                <div class="fx-s fx-t">
                    <div class="w-43">
                        <p>款式：<var-cake-name :prod="v.product"/></p>
                        <fk-cake-attrs :cake="v"/>
                    </div>
                    <div class="w-35">
                        <fk-cake-attrs-second :cake="v"/>
                    </div>
                    <div class="w-22">
                        <fk-cake-price-group :cake="v"/>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import VarCakeName from '../../../../front/variab/cake/VarCakeName.vue'
import FkOrderImgMsg from '../../../../funcks/order/img/FkOrderImgMsg.vue'
import FkCakePriceGroup from '../../../../funcks/order/text/FkCakePriceGroup.vue'
import FkCakeAttrs from '../../../../funcks/order/text/FkCakeAttrs.vue'
import UiImgGroup from '../../../../funcks/ui_element/img/UiImgGroup.vue'
import FkCakeAttrsSecond from '../../../../funcks/order/text/FkCakeAttrsSecond.vue'
export default {
  components: { UiImgGroup, FkOrderImgMsg, VarCakeName, FkCakeAttrs, FkCakePriceGroup, FkCakeAttrsSecond },
    props: [ 'order', 'edit', '_kiii_btn' ],
    data() {
        return {

        }
    },
    computed: {
        cake_of_pina() { return this.productPina().products },
        cakes() { 
            let res = (this.order && this.order.ordered_product) ? this.order.ordered_product : [ ] 
            return res.map(e => {
                e.product = this._prod(e); return e
            })
        },
    },
    methods: {
        _prod(v) { 
            let res = v ? v.product : null; 
            if (res) { return this.strapi.data(res) }
            else { }
        },
        _imgs(v) {
            let res = (v && v.product) ? v.product : null; return (res && res.images_url) ? res.images_url : [ ]
        },
        // .  
        checkIist(cake) {
            this.productPina().do_cakes([ cake ])
            this.mod(24); 
        },

        //  編輯 
        cakeEdit(cake) {
            this.orderPina().do_cake(cake)
            this.mod(22)
        }
    },
    mounted() { }
}
</script>