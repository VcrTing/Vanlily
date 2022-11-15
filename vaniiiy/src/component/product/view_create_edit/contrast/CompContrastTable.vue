<template>
    <div>
        <nav class="table table-witty">
            <contrast-items-tr :_mode="mode"></contrast-items-tr>
            <contrast-items-td v-for="(v, i) in twos" :key="i" :one="v"></contrast-items-td>

            <nav v-if="mode == 'PLUS'" class="pt">
                <div class="upper" :class="{ 'td-form-show': plus, 'td-form-hide': !plus }">
                    <cmop-contrast-item-form v-if="plus" @close="change(false)"></cmop-contrast-item-form>
                    <div v-else class="mh"></div>
                </div>
                <div class="pb-0">
                    <button class="btn-tb-plus n" :class="{ 'btn-tb-plus_active': plus }" @click="change(true)">
                        添加價格信息
                    </button>
                </div>
            </nav>
        </nav>
    </div>
</template>

<script>
import ContrastItemsTr from './table/ContrastItemsTr.vue'
import ContrastItemsTd from './table/ContrastItemsTd.vue'
import CmopContrastItemForm from './form/CmopContrastItemForm.vue'
export default {
  components: { ContrastItemsTr, ContrastItemsTd, CmopContrastItemForm },
    props: {
        mode: {
            type: String, default: 'PLUS'
        }
    },
    data() {
        return {
            plus: true,
            // 

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
    },
    methods: {
        change(n) { this.plus = n; console.log(this.plus) }
    }
}
</script>

<style>

</style>