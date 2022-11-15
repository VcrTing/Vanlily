<template>
    <div>
        <div class="fx-s px_x2">
            <ui-inline-input class="w-30" :header="'编号:'" :_class="'min-3em'">
                <div :class="{ 'pl': !is_edit }">{{ form.uuid }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-30" :is_err="form_err.typed" :header="'类别:'" :_class="'min-3em'">
                <vf-pro-type-select v-if="is_edit" :def="form.typed"  @change="changeTyped" class="input"/>
                <div v-else class="px">{{ form.typed }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-30" :is_err="form_err.named_fuii" :header="'全名:'" :_class="'min-3em'">
                <input v-if="is_edit" v-model="form.named_fuii" class="input" placeholder="請輸入名稱"/>
                <div v-else class="px">{{ form.named_fuii }}</div>
            </ui-inline-input>
        </div>
        <div class="fx-s px_x2">
            <ui-inline-input class="w-30" :is_err="form_err.ban" :header="'品牌:'" :_class="'min-3em'">
                <input v-if="is_edit" v-model="form.ban" class="input" placeholder="請輸入内容"/>
                <div v-else class="px">{{ form.ban }}</div>
            </ui-inline-input>
            <ui-inline-input class="w-30" :is_err="form_err.speci" :header="'规格:'" :_class="'min-3em'">
                <vf-pro-type-select v-if="is_edit" :def="form.speci"  @change="changeSpeci" class="input"/>
                <div v-else class="px">{{ form.speci }}</div>
            </ui-inline-input>
            <div class="w-30"></div>
        </div>
        <div v-if="!is_edit" class="pb_x">
            <hr/>
        </div>
        <ui-input class="px_x2" :header="'备注:'" :is_err="form_err.remark">
            <textarea v-if="is_edit" v-model="form.remark" class="input" placeholder="请输入内容" aria-setsize="0"></textarea>
            <div v-else class="pb">{{ form.remark }}</div>
        </ui-input>
    </div>
</template>

<script>
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import VfProTypeSelect from '../../view_form/pros/VfProTypeSelect.vue'
export default {
  components: { UiInlineInput, VfProTypeSelect, UiInput },
    props: {
        is_edit: {
            type: Boolean, default: true
        }
    },
    data() {
        return {
            form: { uuid: '00001', named_fuii: '测试', typed: '测试类型', ban: '测试品牌', speci: '所选规格', remark: '这是备注' },
            form_err: { named_fuii: false, typed: false, ban: false, speci: false, remark: false }
        }
    },
    methods: {
        changeTyped(v) { this.form.typed = v },
        changeSpeci(v) { this.form.speci = v }
    }
}
</script>

<style lang="sass">
hr
    border-width: 2px
</style>