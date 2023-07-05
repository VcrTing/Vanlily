<template>
    <div>
        <nav class="px_x2 co-ocf-cake-custom">
            <span class="btn-purp pl_s pr_x py_t cocc-tag">自訂蛋糕</span>
            <div class="fx-s fx-t">
                <fk-order-img-msg class="fx-1" :imgs="imgs"/>
                <div class="w-8 hide-p"></div>
                <div class="t-r d-ib pl_x2">
                    <span class="px_x2" v-if="!need_trash">&nbsp;&nbsp;&nbsp;</span>
                    <button @click="cakeEdit()" class="btn-pri_out px_x2 py_s">編輯</button>
                    <span class="pr" v-if="need_trash"></span>
                    <button v-if="need_trash" @click="$emit('trash')" class="btn-err px_x2 py_s">刪除</button>
                </div>
            </div>
            <div class="py_x"><hr/></div>
            <div class="fx-s fx-t">
                <div class="w-43 pr">
                    <p>名稱：&nbsp;&nbsp;{{ ocf.product_name }}</p>
                    <p>蛋糕款式：&nbsp;&nbsp;{{ ocf.cake_type }}&nbsp;</p>
                    <p>蛋糕味道：&nbsp;&nbsp;{{ ocf.cake_flavor }}</p>
                    <p>尺寸：&nbsp;&nbsp;{{ ocf.cake_size }}</p>
                </div>
                <div class="w-35 pr">
                    <p>特別要求：&nbsp;&nbsp;{{ ocf.cake_special_needs }}</p>
                    <p>生日牌：&nbsp;&nbsp;{{ ocf.sign }}</p>
                    <p>字粒：&nbsp;&nbsp;{{ ocf.letter }}</p>
                    <p>數量：&nbsp;&nbsp;{{ ocf.quantity }}</p>
                </div>
                <div class="w-22">
                    <fk-cake-price-group :cake="ocf"/>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import FkOrderImgMsg from '../../../funcks/order/img/FkOrderImgMsg.vue';
import FkCakePriceGroup from '../../../funcks/order/text/FkCakePriceGroup.vue'

import CAKE_DEF from '../../../assets/img/CAKE_DEF.jpg'
export default {
    components: { FkCakePriceGroup, FkOrderImgMsg },
    props: [ 'product', 'ocf', 'idx', 'need_trash' ],
    emits: [ 'trash' ],
    data() { return { def: CAKE_DEF } },
    computed: {
        imgs() { 
            return [ CAKE_DEF, CAKE_DEF, CAKE_DEF ]
            // const res = this.ocf; return (res && res.images_url) ? res.images_url : [ ] 
        }
    },
    methods: {
        cakeEdit() {
            return new Promise(rej => {
                this.pina().mod(28)
                this.ocf.idx = this.idx
                this.productPina().do_ocf_of_edit( this.ocf )
                rej(0)
            })
        }
    }
}
</script>