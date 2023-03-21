<template>
    <form-def :header="'新增物品'">
        <div class="fx-s">
            <div class="w-233">
                物品编号：<span>00001</span>
            </div>
            <ui-inline-input :is_err="form_err.typed" class="w-433 pr mb-0" :header="'物品类别：'">
                <input v-model="form.typed" class="input ip-w-100" placeholder="请选择">
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.brand" class="w-333 mb-0" :header="'品牌：'">
                <input v-model="form.brand" class="input ip-w-100" placeholder="请输入内容">
            </ui-inline-input>
        </div>
        <div class="fx-s pt_x2">
            <ui-inline-input-fill :is_err="form_err.named" class="w-666" :header="'物品全名：'" :_pr="true">
                <input v-model="form.named" class="input ip-w-100" placeholder="请输入名称">
            </ui-inline-input-fill>
            <div class="w-333"></div>
        </div>
        <div class="fx-s pb_x2">
            <ui-inline-input-fill :is_err="form_err.remark" class="w-100" :header="'备注：'" :_pr="false">
                <input v-model="form.remark" class="input ip-w-100" placeholder="请输入">
            </ui-inline-input-fill>
        </div>

        <div class="pb_x2">
            <h4 class="pb">价格信息</h4>

            <comp-contrast-table></comp-contrast-table>
        </div>
    </form-def>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInlineInputFill from '../../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
import CompContrastTable from './CompContrastTable.vue'
export default {
  components: { FormDef, UiInlineInput, UiInlineInputFill, CompContrastTable },
    data() {
        return {
            form: { typed: '', brand: '', named: '', remark: '' },
            form_err: { typed: false, brand: false, named: false, remark: false },
        
        }
    }
}
</script>

<style>

</style>