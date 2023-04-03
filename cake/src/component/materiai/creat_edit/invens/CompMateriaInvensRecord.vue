<template>
    <div class="pb upper">
        <nav class="table table-panner tabie-materiai">
            <nav class="tr py_ipt">
                <div class="w-30">店鋪名</div>
                <div class="w-22">來貨日期</div>
                <div class="w-22">過期日期</div>
                <div class="w-21">數量</div>
                <div class="w-5">&nbsp;</div>
            </nav>
            <div v-for="(v, i) in items" :key="i">
                <nav class="td px-row" v-if="!v.is_edit">
                    <div class="w-30">
                        {{ v.shop_name }}
                        <span class="px pri h5" @click="v.is_edit = true">
                            <i class="mdi mdi-square-edit-outline"></i>
                        </span>
                    </div>
                    <div class="w-22">{{ v.import_date }}</div>
                    <div class="w-22">{{ v.expire_date }}</div>
                    <div class="w-21 py_s">{{ v.quantity }}</div>
                    <div class="w-5">
                        <ui-table-opera :_mode="4" @click="trash(i)"/>
                    </div>
                </nav>
                <comp-mir-form v-else :def="v" @insert="(n) => { v.is_edit = false }" class="td fx-s py_x pb-0"/>
                </div>
            <div v-if="fs && fs.length > 0">
                <comp-mir-form v-for="(v, i) in fs" :key="i" @insert="(n) => insert(n , i)" class="td fx-s py_x pb-0"/>
            </div>
            <div class="td mh-0 py"></div>
        </nav>
        <button class="btn-pri_out py_s btn-attach-tabie" @click="add_form">添加材料或配件庫存記錄</button>
    </div>
</template>

<script>
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import UiTabieEmpty from '../../../../funcks/ui_view/UiTabieEmpty.vue'
import CompMirForm from './form/CompMirForm.vue'

export default {
  components: { PanelInner, CompMirForm, UiTableOpera, UiTabieEmpty },
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
        return { fs: [ false ], items: [ ] }
    },
    methods: {
        insert(f, idx) { this.items.push(f); this.reset_f() },

        reset() { this.items = this.materiai.stock_record.map(e => { e.is_edit = false; return e }) },

        coii() { return this.items },
        reset_f() { this.fs = [ ]; setTimeout(e => this.fs = [ false ], 1) },
        trash(idx) { this.items.splice(idx, 1) }
    }
}
</script>

<style>

</style>