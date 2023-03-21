<template>
    <div class="pb_x2">
        <nav class="table table-line table-sdw">
            <nav class="tr py_ipt sun">
                <div class="w-8">來貨價錢</div>
                <div class="w-8">批發價</div>
                <div class="w-9">零售價</div>
                <div class="w-8">利潤</div>
                <div class="w-12">購買店鋪</div>
                <div class="w-8">送貨禮拜</div>
                <div class="w-20">送貨地址</div>
                <div class="w-7">MOQ</div>
                <div class="w-10">電話號碼</div>
                <div class="w-10">更新日期</div>
            </nav>
            <nav class="td px_x2_ipt" v-for="(v, i) in many" :key="i">
                <div class="w-8">{{ v.import_price }}</div>
                <div class="w-8">{{ v.wholesale_price }}</div>
                <div class="w-9">{{ v.retail_price}}</div>
                <div class="w-8">{{ v.profit }}</div>
                <div class="w-12">{{ v.shop_name }}</div>
                <div class="w-8">{{ v.delivery_weekday }}</div>
                <div class="w-20">{{ v.delivery_address }}</div>
                <div class="w-7">{{ v.moq }}</div>
                <div class="w-10">{{ v.phone_no }}</div>
                <div class="w-10">{{ v.update_date }}</div>
            </nav>
        </nav>
        <div class="py"></div>
        <!--pagenation :_big="false" :_long="3"/-->
    </div>
</template>

<script>
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
export default {
  components: { Pagenation },
    props: {
        materiai: Object
    },
    data() {
        return {
            items: [
                { 
                    import_price: 20, wholesale_price: 20, retail_price: 30, 
                    profit: 10, phone: '9988 7765',
                    delivery_weekday: '星期二', delivery_address: '火炭工業大廈302',
                    shop_name: 'HKTVMALL', update_date: '2022-12-12', phone_no: 120
                },
            ]
        }
    },
    computed: {
        many() {
            // price_comparison
            return (this.materiai && this.materiai.price_comparison) ? this.materiai.price_comparison : [ ]
        }
    }
}
</script>

<style>

</style>