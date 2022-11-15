<template>
    <form-def :header="'新增支出'">
        <div class="fx-l pb_x2">
            <div class="w-30">
                收据编号：<span>{{ number }}</span>
            </div>
            <ui-inline-input :is_err="form_err.date" class="w-45 mb-0 pr_x2" :header="'日期：'">
                <time-one :def="form.date" class="ip-br"></time-one>
            </ui-inline-input>
        </div>
        <div class="fx-l">
            <ui-inline-input-fill :is_err="form_err.content" class="w-75" :header="'收据内容：'">
                <input v-model="form.content" class="input ip-w-100" placeholder="请选择"/>
            </ui-inline-input-fill>
            <ui-inline-input :is_err="form_err.typed" class="w-25" :header="'类别：'">
                <input v-model="form.typed" class="input ip-w-100" placeholder="请选择"/>
            </ui-inline-input>
        </div>
        <div class="fx-l pt_x2">
            <ui-inline-input :is_err="form_err.unit" class="w-30 w-40-p pr_x2" :header="'货币：'">
                <input v-model="form.unit" class="input" placeholder="请选择"/>
            </ui-inline-input>
            <ui-inline-input :is_err="form_err.money" class="w-70 w-60-p" :header="'价钱：'">
                <input v-model="form.money" class="input" placeholder="请输入内容"/>
            </ui-inline-input>
        </div>
        <div class="pb_x2">
            <p>附件</p>
            <div class="pri_son">123.pdf</div>
        </div>
    </form-def>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInlineInputFill from '../../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
export default {
  components: { FormDef, UiInlineInput, TimeOne, UiInlineInputFill },
    data() {
        return { 
            form: { date: '2021-12-12', content: '', typed: '', unit: '', money: '' },
            form_err: { date: false, content: false, typed: false, unit: false, money: false },
        }
    },
    computed: {
        number() { return 'SFYD00202029' }
    }
}
</script>

<style>

</style>