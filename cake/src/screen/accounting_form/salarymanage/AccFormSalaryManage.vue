<template>
    <layout-form :header="''">
        <template v-slot:cont>
            <form-def :header="'编辑工资管理'" :_class_cont="'mh-form'">
                <p class="h4 pt_x2">基本信息</p>
                <div class="fx-s">
                    <ui-inline-input-fill :is_err="form_err.tit" class="w-30 w-50-p" :header="'标题：'">
                        <input v-model="form.tit" class="input" placeholder="请输入">
                    </ui-inline-input-fill>
                    <div class="w-5">&nbsp;</div>
                    <ui-inline-input :is_err="form_err.date" class="w-65 w-45-p" :header="'创建日期：'">
                        <time-one :def="form.date" class="ip-br"></time-one>
                    </ui-inline-input>
                </div>
                <p class="h4 pt_x2">员工信息</p>
                <comp-salary-item-table :mode="1"></comp-salary-item-table>

                <div class="py"></div>
            </form-def>
        </template>
    </layout-form>
</template>

<script>
import CompSalaryItemTable from '../../../component/staff/creat_edit/salary/CompSalaryItemTable.vue'
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInlineInputFill from '../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import TimeOne from '../../../funcks/ui_element/timed/one/TimeOne.vue'
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import LayoutForm from '../../../funcks/ui_layout/layout/page/LayoutForm.vue'
export default {
    components: { 
        LayoutForm,
        UiInlineInput,
        TimeOne,
        CompSalaryItemTable,
        UiInlineInputFill,
        FormDef
    },
    data() {
        return {
            form: { tit: '2022年12月份月结', date: '2022-12-12' },
            form_err: { tit: false, date: false }
        }
    },
}
</script>