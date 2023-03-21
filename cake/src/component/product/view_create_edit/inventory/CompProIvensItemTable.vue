<template>
    <div>
        <div class="table table-witty">
            <comm-pro-ivens-tr></comm-pro-ivens-tr>
            <div class="mh">
                <comm-pro-ivens-td v-for="(v, i) in many" :key="i" :one="v"></comm-pro-ivens-td>
            </div>
            
            <ui-table-in-form-wrapper @open="change(true)" :_mode="mode" :_plus="plus" :_text="'添加價格信息'">
                <comm-pro-ivens-form @cancel="change(false)"></comm-pro-ivens-form>
            </ui-table-in-form-wrapper>
    
        </div>
        <div class="pt_x2 t-r b" v-if="mode != 'VIEW'">
            <div class="fx-r pb_s">壞貨：<span class="h4">2</span></div>
            <div class="fx-r pb_s">已使用：<span class="h4">21</span></div>
            <div class="fx-r pb_s">總庫存：<span class="h4">380</span></div>
        </div>
    </div>
</template>

<script>
import UiTableInFormWrapper from '../../../../funcks/ui_element/table/tdin/UiTableInFormWrapper.vue'
import CommProIvensForm from './form/CommProIvensForm.vue'
import CommProIvensTd from './table/CommProIvensTd.vue'
import CommProIvensTr from './table/CommProIvensTr.vue'
export default {
  components: { CommProIvensTr, CommProIvensTd, CommProIvensForm, UiTableInFormWrapper },
    props: {
        many: { type: Array },
        mode: { type: String, default: 'PLUS' }
    },
    data() { return { plus: true } },
    mounted() { console.log('MANY =', this.many) },
    methods: {
        change(f) { this.plus = f }
    },
}
</script>

<style>

</style>