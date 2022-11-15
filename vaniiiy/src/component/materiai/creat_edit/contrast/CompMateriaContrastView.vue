<template>
    <div class="pb_x2">
        <nav class="table table-line table-sdw">
            <nav class="tr py_ipt sun">
                <div class="w-8">来货价钱</div>
                <div class="w-8">批发价</div>
                <div class="w-9">零售价</div>
                <div class="w-8">利润</div>
                <div class="w-12">购买店铺</div>
                <div class="w-8">送货礼拜</div>
                <div class="w-20">送货地址</div>
                <div class="w-7">MOQ</div>
                <div class="w-10">电话号码</div>
                <div class="w-10">更新日期</div>
            </nav>
            <nav class="td px_x2_ipt" v-for="(v, i) in items" :key="i">
                <div class="w-8">{{ v.price_come }}</div>
                <div class="w-8">{{ v.price_pf }}</div>
                <div class="w-9">{{ v.price_saie}}</div>
                <div class="w-8">{{ v.iirun }}</div>
                <div class="w-12">{{ v.store }}</div>
                <div class="w-8">{{ v.send_day }}</div>
                <div class="w-20">{{ v.addr }}</div>
                <div class="w-7">{{ v.moq }}</div>
                <div class="w-10">{{ v.phone }}</div>
                <div class="w-10">{{ v.date_update }}</div>
            </nav>
        </nav>
        <div class="py"></div>
        <pagenation :_big="false" :_long="3"/>
    </div>
</template>

<script>
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
export default {
  components: { Pagenation },
    props: {
        
    },
    data() {
        return {
            items: [
                { 
                    price_come: 20, price_pf: 20, price_saie: 30, iirun: 10,
                    send_day: '星期二', addr: '火炭工业大厦302', phone: '9988 7765',
                    store: 'HKTVMALL', date_update: '2022-12-12', moq: 120
                },
                { 
                    price_come: 220, price_pf: 220, price_saie: 320, iirun: 120,
                    send_day: '星期三', addr: '潞安工业大厦202', phone: '9988 7765',
                    store: 'HKTVMALL', date_update: '2022-12-12', moq: 120
                },
            ]
        }
    }
}
</script>

<style>

</style>