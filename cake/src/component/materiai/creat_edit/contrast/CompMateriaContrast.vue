<template>
    <div class="py upper">
        <nav class="table table-panner">
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
            <!--
            <ui-tabie-empty :many="items">
            </ui-tabie-empty>
            -->
            <div v-for="(v, i) in items" :key="i">
                <nav class="td px_x2_ipt" v-if="!v.is_edit">
                    <div class="w-8 ps-r">
                        {{ v.import_price }}
                        <span class="px pri h5 td-i-edit" @click="v.is_edit = true">
                            <i class="mdi mdi-square-edit-outline"></i>
                        </span>
                    </div>
                    <div class="w-8">{{ v.wholesale_price }}</div>
                    <div class="w-9">{{ v.retail_price}}</div>
                    <div class="w-8">{{ v.profit }}</div>
                    <div class="w-12">{{ v.shop_name }}</div>
                    <div class="w-8">{{ v.delivery_weekday }}</div>
                    <div class="w-20">{{ v.delivery_address }}</div>
                    <div class="w-7">{{ v.moq }}</div>
                    <div class="w-10">{{ v.phone_no }}</div>
                    <div class="w-10 fx-s">
                        <div>{{ v.update_date }}</div>
                        <i class="mdi mdi-trash-can-outline hand err" @click="trash(i)"></i>
                    </div>
                </nav>
                <comp-mc-form v-else :def="v" @insert="(n) => { v.is_edit = false }" class="td px_x2 pb_x pt_s"/>
            </div>
            <div v-if="fs_c && fs_c.length > 0">
                <comp-mc-form v-for="(v, i) in fs_c" :key="i" @insert="(n) => insert(n , i)" class="td px_x2 pb_x pt_s"/>
            </div>
        </nav>
        <button class="btn-pri_out py_s btn-attach-tabie" @click="() => { }">添加材料或配件庫存記錄</button>
    </div>
</template>

<script>
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import UiTabieEmpty from '../../../../funcks/ui_view/UiTabieEmpty.vue'
import CompMcForm from './form/CompMcForm.vue'
export default {
  components: { Pagenation, CompMcForm, UiTabieEmpty },
    props: {
        mode: {
            type: String, default: 'VIEW' // EDIT // CREAT
        },
        materiai: {
            type: Object, default: () => { return { } }
        }
    },
    computed: {
        is_view() { return this.mode == 'VIEW' }, 
        is_edit() { return this.mode == 'EDIT' }, is_creat() { return this.mode == 'CREAT' },
    },
    mounted() { if (this.is_edit) { this.reset() } },
    data() {
        return { fs_c: [ false ], items: [ ] }
    },
    methods: {
        insert(f, idx) { this.items.push(f); this.reset_f() },
        reset() { this.items = this.materiai.price_comparison.map(e => { e.is_edit = false; return e }) },

        coii() { return this.items },
        trash(idx) { this.items.splice(idx, 1) },

        reset_f() {
            this.fs_c = [ ]
            setTimeout(e => this.fs_c = [ false ], 1)
        }
    }
}
</script>

<style lang="sass">
.td-i-edit
    position: absolute
    right: 0
    transform: translateX(0%) translateY(-10%)
</style>