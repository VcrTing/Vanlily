<template>
    <form-def :header="'新增物品'" @submit="create_or_update">
        <div class="fx-s w-100">
            <div class="w-33">
                <p>物品編號：<span>{{ uuid }}</span></p>
            </div>
            <ui-inline-input :is_err="form_err.typed" class="w-30 pr_x2" :header="'物品類別：'">
                <vf-pro-type-select class="input"
                    :def="form.typed"  @change="changeTyped"></vf-pro-type-select>
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.named" class="w-37" :header="'產品全名'">
                <input v-model="form.named" class="input" placeholder="請輸入名稱"/>
            </ui-inline-input>
        </div>

        <div class="fx-s w-100">
            <ui-inline-input :is_err="form_err.brand" class="w-33 pr_x2" :header="'品牌：'">
                <input v-model="form.brand" class="input" placeholder="請輸入內容">
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.spsfs" class="w-30 pr_x2" :header="'規格：'">
                <vf-prospecification-select class="input"
                    :def="form.spsfs" @change="(v) => form.spsfs = v"></vf-prospecification-select>
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.remark" class="w-37" :header="'備註：'">
                <input v-model="form.remark" class="input" placeholder="請輸入內容"/>
            </ui-inline-input>
        </div>
        
        <comp-pro-ivens-item-table :many="[
            {
                store: { named: 'Es Shop' }, come_date: '2022-12-12', color: 'PINK', num: 222, num_change: 22, used: 33, bad: 1, issue_date: '2022-12-12'
            },
            {
                store: { named: 'Es Shop' }, come_date: '2002-12-12', color: 'PINK', num: 2122, num_change: 122, used: 133, bad: 11, issue_date: '2022-12-12'
            },
        ]" class="pt"></comp-pro-ivens-item-table>
    </form-def>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInlineInputFill from '../../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
import VfProspecificationSelect from '../../../view_form/pros/VfProspecificationSelect.vue'
import VfProTypeSelect from '../../../view_form/pros/VfProTypeSelect.vue'
import CompProIvensItemTable from '../../view_create_edit/inventory/CompProIvensItemTable.vue'
export default {
  components: { FormDef, UiInlineInput, VfProspecificationSelect,
    VfProTypeSelect,
    UiInlineInputFill,
    CompProIvensItemTable },
    data() {
        return {
            form: { typed: 1, named: '', spsfs: 1, brand: '', remark: '' },
            form_err: { typed: false, named: false, spsfs: false, brand: false, remark: false }
        }
    },
    computed: {
        uuid() { return '0001' }
    },
    methods: {
        changeTyped(v) {
            this.form.typed = v },
        create_or_update() { }
    }
}
</script>
