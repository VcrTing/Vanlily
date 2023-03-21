<template>
    <div class="fx-s td-pr">
        <div class="w-10">
            <ui-input :is_err="form_err.named">
                <input v-model="form.named" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-8">
            <ui-input :is_err="form_err.duty">
                <input v-model="form.duty" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-10">
            <ui-input :is_err="form_err.day_go">
                <input v-model="form.day_go" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-8">
            <ui-input :is_err="form_err.day_qj">
                <input v-model="form.day_qj" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-11">
            <ui-input :is_err="form_err.day_work">
                <input v-model="form.day_work" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-10">
            <ui-input :is_err="form_err.jb_salary">
                <input v-model="form.jb_salary" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-7">
            <ui-input :is_err="form_err.jj">
                <input v-model="form.jj" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-8">
            <ui-input :is_err="form_err.jb_day">
                <input v-model="form.jb_day" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-7">
            <ui-input :is_err="form_err.jb_money">
                <input v-model="form.jb_money" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-8">
            <ui-input :is_err="form_err.other">
                <input v-model="form.other" class="input ip-w-100 input-adapt" placeholder="请输入">
            </ui-input></div>
        <div class="w-13">
            <ui-table-save-cancel @save="submit" @cancel="$emit('close')"></ui-table-save-cancel>
        </div>
    </div>
</template>

<script>
import UiInput from '../../../../../funcks/ui_element/input/normal/UiInput.vue'
import UiTableSaveCancel from '../../../../../funcks/ui_element/table/opera/UiTableSaveCancel.vue'
export default {
  components: { UiInput, UiTableSaveCancel },
    props: [ '' ],
    data() { 
        return {
            form: { 
                named: '', duty: '', day_go: '', day_qj: '', day_work: '', 
                jb_salary: '', jj: '', jb_day: '', jb_money: '', other: '' 
            },
            form_err: { 
                named: false, duty: false, day_go: false, day_qj: false, day_work: false, 
                jb_salary: false, jj: false, jb_day: false, jb_money: false, other: false 
            },
        }
    },
    methods: {
        submit() {

        }
    }
}
</script>

<style>

</style>