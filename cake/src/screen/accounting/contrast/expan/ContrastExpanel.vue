<template>
    <div class="fx-s fx-t">
        <div class="w-13 pr_x2">
            <img class="img br_t" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210827%2F2395168e45a447c9a6c24ab6e7182f61.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652968912&t=91d2cb1eefa71e56a98e7e593cd59015"/>
        </div>
        <div class="w-87">

            <comp-contrast-table :mode="'VIEW'"></comp-contrast-table>
        </div>
    </div>
</template>

<script>
import CompContrastTable from '../../../../component/product/view_create_edit/contrast/CompContrastTable.vue'
export default {
  components: { CompContrastTable },
    props: [ 'one' ],
    data() {
        return {

            twos: [ 
                { 
                    come_cost: 20, pifa_cost: 25, 
                    price: 28, lirun: 8,
                    store: 'HKTVMALL', week: '星期二', 
                    addr: '美肤大楼C 216， 15号',
                    moq: 120, phoned: '92779625', 
                    date: '2022-12-12'
                },
                { 
                    come_cost: 20, pifa_cost: 25, 
                    price: 28, lirun: 8,
                    store: '百佳', week: '星期日', 
                    addr: '美肤大楼C 216， 15号。美肤大楼C 216， 15号',
                    moq: 8822, phoned: '92779625', 
                    date: '2022-03-12'
                }
            ]
        }
    }
}
</script>

<style>

</style>