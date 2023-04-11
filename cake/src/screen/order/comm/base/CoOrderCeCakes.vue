<template>
    <div class="" v-if="cakes && cakes.length > 0">
        <div v-for="(v, i) in cakes" :key="i" class="pt_x2 pb px_x2" :class="{ 'mui_cake_bg': (i % 2 == 1) }">
            <nav class="py_x2 px_x2">
                <div class="fx-s fx-t">
                    <fk-order-img-msg class="fx-1" :imgs="_imgs(v)"/>
                    <div class="w-25 t-r row-item">
                        <button v-if="_creat" class="btn-err px py_s" @click="cakeTrash(i)">刪除</button>
                        <button @click="cakeEdit(v)" class="btn-pri_out px_x2 py_s">編輯</button>
                    </div>
                </div>
                <div class="py_x2"><hr/></div>
                <div class="fx-s fx-t">
                    <div class="w-43 pr">
                        <p>名稱:&nbsp;&nbsp;<var-cake-name :prod="v"/></p>
                        <co-coecs-attr v-if="has( v )" :cake="v"/>
                        <div v-else class="err">蛋糕參數未完善</div>
                    </div>
                    <div class="w-35 pr">
                        <co-coecs-basic v-if="has( v )" :cake="v"/>
                        <div v-else>
                            <p>特別要求</p>
                            <p class="err">信息不完整</p>
                        </div>
                    </div>
                    <div class="w-22">
                        <co-coecs-price v-if="has( v )" :cake="v"/>
                        <div v-else class="">
                            <p>蛋糕單價:&nbsp;&nbsp;<view-money :money="v.__price"/></p>
                            <p class="err">價格信息不完整</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div v-else class="py_x2"></div>
</template>
<script>
import VarCakeName from '../../../../front/variab/cake/VarCakeName.vue'
import FkOrderImgMsg from '../../../../funcks/order/img/FkOrderImgMsg.vue'
import FkCakePriceGroup from '../../../../funcks/order/text/FkCakePriceGroup.vue'
import FkCakeAttrs from '../../../../funcks/order/text/FkCakeAttrs.vue'
import UiImgGroup from '../../../../funcks/ui_element/img/UiImgGroup.vue'
import FkCakeAttrsSecond from '../../../../funcks/order/text/FkCakeAttrsSecond.vue'
import ViewMoney from '../../../../component/view/money/ViewMoney.vue'

import strapi from '../../../../air/tooi/strapi'
import CoCoecsAttr from '../comm/CoCoecsAttr.vue'
import CoCoecsBasic from '../comm/CoCoecsBasic.vue'
import CoCoecsPrice from '../comm/CoCoecsPrice.vue'

export default {
    components: { UiImgGroup, FkOrderImgMsg, VarCakeName, FkCakeAttrs, FkCakePriceGroup, FkCakeAttrsSecond, ViewMoney, CoCoecsAttr, CoCoecsBasic, CoCoecsPrice },
    props: [ 'cakes', 'edit', '_creat' ],
    data() {
        return {
            
        }
    },
    emits: [ 'trash' ],
    computed: {
        coecs() { let src = this.productPina().coecs; return src ? src : [ ]; },
    },
    methods: {
        has( cake ) { let res = null
            this.coecs.map(e => {
                if (e.product_uuid == cake.uuid) { res = e }
            }); return res ? true : false
        },

        _attrs(v) { 
            let res = { }
            let src = v.attributes_relations
            src ? src.map(e => {
                    if (!res[ e.attribute_type_name ]) { res[ e.attribute_type_name ] = [ ] }
                    res[ e.attribute_type_name ].push( e )
                }) : undefined;
            return res
        },
        _imgs(v) { return (v && v.images_url) ? v.images_url : [ ] },
        //  編輯 
        cakeEdit(cake) { this.productPina().do_cake_of_edit(cake); this.mod(26) },
        // 刪除
        cakeTrash(idx) { this.$emit('trash', idx) },

        coii() {
            let res = null
            if (this.cakes.length > 0 && this.coecs.length) { 
                res = [ ]
                this.cakes.map(ck => {
                    this.coecs.map( cs => {
                        if (ck.uuid == cs.product_uuid) res.push( cs );
                    })
                })
            } 
            return res
        }
    },
    mounted() { }
}
</script>

<style lang="sass" scoped>
.mui_cake_bg
    background: #f8f8f8 // #ededed
    hr
        // border-color: #f4f4f4 !important
</style>