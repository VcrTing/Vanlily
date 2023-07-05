<template>
    <div v-for="(v, i) in prods" :key="i">
        <div v-if="v.isCustomCake">
            <p>蛋糕名字：&nbsp;{{ v.product_name }}</p>
            <p>蛋糕款式：&nbsp;{{ v.cake_type }}</p>
            <p>蛋糕味道：&nbsp;{{ v.cake_flavor }}</p>
            <p>尺寸：&nbsp;{{ v.cake_size }}</p>
            <!--p>數字：</！p-->
            <p>生日牌：&nbsp;{{ v.sign }}</p>
            <p>字粒：&nbsp;{{ v.letter }}</p>
            <p>特別要求：&nbsp;{{ v.cake_special_needs }}</p>
        </div>
        <div v-else>
            <nav>
                <p>蛋糕名字：<span>
                    <var-order-cake-name ref="prod" v-if="order" :order="order"/>
                </span></p>
            </nav>
            <area-order-cake-attrs :attrs="attrs(v)" :iess="true"/>
            <p class="pt">特別要求：&nbsp;{{ v.cake_special_needs }}</p>
            <p class="pt">數量：&nbsp;{{ v.quantity }}</p>
        </div>
    </div>
</template>

<script>
import strapi from '../../../../air/tooi/strapi'
import AreaOrderCakeAttrs from '../../../../front/area/order/AreaOrderCakeAttrs.vue'
import VarOrderCakeName from '../../../../front/variab/order/VarOrderCakeName.vue'
export default {
  components: { AreaOrderCakeAttrs, VarOrderCakeName },
    props: [ 'order' ],
    computed: {
        prods() { return this.order.ordered_product }
    },
    methods: {
        attrs(n) { return n.attribute ? strapi.data(n.attribute) : [ ] }
    }
}
</script>