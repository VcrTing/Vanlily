<template>
    <div class="td pl_x2_ipt td-pr">
        <div class="w-12">
            <ui-input :is_err="form_err.come_cost">
                <input v-model="form.come_cost" class="input ip-w-100 input-tiny" type="number" placeholder="请输入">
            </ui-input>
        </div>
        <div class="w-8">
            <ui-input :is_err="form_err.pifa">
                <input v-model="form.pifa" class="input ip-w-100 input-tiny" type="number" placeholder="请输入">
            </ui-input>
        </div>
        <div class="w-8">
            <ui-input :is_err="form_err.sale">
                <input v-model="form.sale" class="input ip-w-100 input-tiny" type="number" placeholder="请输入">
            </ui-input>
        </div>
        <div class="w-8">
            <ui-input :is_err="form_err.lirun">
                <input v-model="form.lirun" class="input ip-w-100 input-tiny" type="number" placeholder="请输入">
            </ui-input>
        </div>

        <div class="w-11">
            <ui-input :is_err="form_err.store">
                <input v-model="form.store" class="input ip-w-100 input-tiny" placeholder="请输入">
            </ui-input>
        </div>
        <div class="w-8">
            <ui-input :is_err="form_err.week">
                <vf-week-select :def="form.week" class="input ip-w-100 input-tiny"></vf-week-select>
            </ui-input>
        </div>
        <div class="w-18">
            <ui-input :is_err="form_err.addr">
                <input v-model="form.addr" class="input ip-w-100 input-tiny" placeholder="请输入">
            </ui-input>
        </div>
        <div class="w-6">
            <ui-input :is_err="form_err.moq">
                <input v-model="form.moq" class="input ip-w-100 input-tiny" type="number" placeholder="请输入">
            </ui-input>
        </div>

        <div class="w-10">
            <ui-input :is_err="form_err.phoned">
                <input v-model="form.phoned" class="input ip-w-100 input-tiny" type="number" placeholder="请输入">
            </ui-input>
        </div>
        <div class="w-11">
            <ui-table-save-cancel 
                @cancel="closeForm"
            ></ui-table-save-cancel>
        </div>
    </div>
</template>

<script>
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
import UiTableSaveCancel from '../../../../../funcks/ui_element/table/opera/UiTableSaveCancel.vue'
import VfWeekSelect from '../../../../view_form/comm/VfWeekSelect.vue'
export default {
  components: { VfWeekSelect, UiTableSaveCancel, UiInput },
    data() {
        return {
            form: { 
                come_cost: '', pifa: '', sale: '', lirun: '', 
                store: '', week: '', addr: '', moq: '', phoned: '' 
            },
            form_err: { 
                come_cost: false, pifa: false, sale: false, lirun: false, 
                store: false, week: false, addr: false, moq: false, phoned: false 
            },
        }
    },
    methods: {
        closeForm() {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>