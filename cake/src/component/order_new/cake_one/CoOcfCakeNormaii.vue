<template>
    <div>
        <nav class="px_x2" v-if="product">
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
                <div class="w-43 pr upper">
                    <p>名稱:&nbsp;&nbsp;<var-cake-name :prod="product"/></p>
                    <fk-cake-attrs v-if="ocf.__compieted" class="upper"
                        :attribute_post="ocf.attribute_post"
                        :attributes_relations="ocf.attributes_relations"/>
                    <p v-else class="err">信息未完善</p>
                </div>
                <div class="w-35 pr upper">
                    <fk-cake-attrs-second v-if="ocf.__compieted" :cake="product"/>
                    <div v-else>
                        <p>特別要求：</p>
                        <p class="err">信息未完善</p>
                    </div>
                </div>
                <div class="w-22 upper">
                    <fk-cake-price-group v-if="ocf.__compieted" :cake="ocf"/>
                    <div v-else>
                        <p>價格：</p>
                        <p class="err">信息未完善</p>
                    </div>
                </div>
            </div>
        </nav>
        <nav v-else>
            未傳入 PRODUCT 參數
        </nav>
    </div>
</template>

<script>
import VarCakeName from '../../../front/variab/cake/VarCakeName.vue'
import FkOrderImgMsg from '../../../funcks/order/img/FkOrderImgMsg.vue'
import FkCakeAttrs from '../../../funcks/order/text/FkCakeAttrsByArray.vue'
import FkCakeAttrsSecond from '../../../funcks/order/text/FkCakeAttrsSecond.vue'
import FkCakePriceGroup from '../../../funcks/order/text/FkCakePriceGroup.vue'
export default {
    components: { FkCakePriceGroup, FkOrderImgMsg, VarCakeName, FkCakeAttrsSecond, FkCakeAttrs },
    props: [ 'product', 'ocf', 'idx', 'need_trash' ],
    emits: [ 'trash' ],
    computed: {
        imgs() { const res = this.product; return (res && res.images_url) ? res.images_url : [ ] }
    },
    methods: {
        cakeEdit() {
            return new Promise(rej => {
                this.pina().mod(29)
                this.ocf.idx = this.idx
                this.productPina().do_ocf_of_edit( this.ocf )
                rej(0)
            })
        }
    }
}
</script>