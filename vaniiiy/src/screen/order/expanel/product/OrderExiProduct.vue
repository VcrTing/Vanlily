<template>
    <div class="px_x2 pt_x">
        <div v-for="(v, i) in cakes" :key="i" class="pb_x">
            <nav class="px_x2 pt_s">
                <div class="fx-s fx-t">
                    <fk-order-img-msg class="fx-1" :imgs="_imgs(v)"/>
                    <div class="w-25 t-r row-item">
                        <button v-if="edit" @click="cakeEdit(v)" class="btn-pri_out px_x2 py_s">編輯</button>
                        <button v-else @click="checkIist(v)" class="btn-pri_out px py_s">檢查清單</button>
                    </div>
                </div>
                <div class="py_x"><hr/></div>
                <div class="fx-s fx-t">
                    <div class="w-37">
                        <p>款式：<var-cake-name :prod="v.product"/></p>
                        <fk-cake-attrs :cake="v"/>
                    </div>
                    <div class="w-40">
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
    props: [ 'order', 'edit' ],
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
            else {
                console.log('pro = ', res.product_uuid)
            }
        },
        _imgs(v) {
            let res = (v && v.product) ? v.product : null; return (res && res.images_url) ? res.images_url : [ ]
        },
        // .  
        checkIist(cake) {
            // sessionStorage.setItem('vaniiiy_pro_uuid', cake.product_uuid)
            this.orderPina().do_cake(cake)
            this.mod(24); 
        },

        //  編輯 
        cakeEdit(cake) {
            // sessionStorage.setItem('vaniiiy_pro_uuid', cake.product_uuid)
            this.orderPina().do_cake(cake)
            console.log('CAKE =', cake); this.mod(22)
        }
    },
    mounted() { }
}
/*

        this.pros = [
            {
                imgs: [
                    { src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.wdmcake.cn%2Fimages%2F202111%2Fgoods_img%2F2248_G_1637621899254.jpg&refer=http%3A%2F%2Fstatic.wdmcake.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670848149&t=f9032f33752944942e4871e4bd13db9d' },
                    { src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.wdmcake.cn%2Fimages%2F202111%2Fgoods_img%2F2248_G_1637621899254.jpg&refer=http%3A%2F%2Fstatic.wdmcake.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670848149&t=f9032f33752944942e4871e4bd13db9d' },
                    { src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.wdmcake.cn%2Fimages%2F202111%2Fgoods_img%2F2248_G_1637621899254.jpg&refer=http%3A%2F%2Fstatic.wdmcake.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670848149&t=f9032f33752944942e4871e4bd13db9d' },
                    { src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.wdmcake.cn%2Fimages%2F202111%2Fgoods_img%2F2248_G_1637621899254.jpg&refer=http%3A%2F%2Fstatic.wdmcake.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670848149&t=f9032f33752944942e4871e4bd13db9d' },
                ],
                img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.wdmcake.cn%2Fimages%2F202111%2Fgoods_img%2F2248_G_1637621899254.jpg&refer=http%3A%2F%2Fstatic.wdmcake.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670848149&t=f9032f33752944942e4871e4bd13db9d', 
                typed: '糖皮水果蛋糕', wd: '芒果', color: '金黃', weight: '2 KG',
                marks: { main: '生日快樂' }, chis: 80, num: 1, 
                price_result: 999, price: 888, price_origin: 1299
            }
        ]
*/
</script>