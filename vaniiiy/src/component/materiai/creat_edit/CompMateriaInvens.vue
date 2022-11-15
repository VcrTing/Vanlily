<template>
    <div>
        <div v-if="is_edit" class="fx-s px_x2">
            <ui-inline-input class="w-30" :header="'库存:'" :_class="'min-3em'">
                <div>9999</div>
            </ui-inline-input>
            <ui-inline-input class="w-30" :is_err="form_err.used" :header="'已使用:'">
                <input v-model="form.used" class="input" placeholder="請輸入"/>
            </ui-inline-input>
            <ui-inline-input class="w-30" :is_err="form_err.bad" :header="'坏货:'" :_class="'min-3em'">
                <input v-model="form.bad" class="input" placeholder="請輸入名稱"/>
            </ui-inline-input>
        </div>
        <div v-else class="px_x2 pb_x2 pt">
            <nav class="fx-s row_x2">
                <div class="w-333">
                    <fn-num-card :active="true" :header="'库存'">3999</fn-num-card>
                </div>
                <div class="w-333">
                    <fn-num-card :active="false" :header="'已使用'">833</fn-num-card>
                </div>
                <div class="w-333">
                    <fn-num-card :active="false" :header="'坏货'">7</fn-num-card>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import FnNumCard from '../../../front/card/FnNumCard.vue'
import UiInlineInput from '../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import VfProTypeSelect from '../../view_form/pros/VfProTypeSelect.vue'
export default {
    components: { UiInlineInput, VfProTypeSelect, UiInput, FnNumCard },
    props: {
        is_edit: {
            type: Boolean, default: true
        }
    },
    data() {
        return {
            form: { invens: '', used: '', bad: '' },
            form_err: { used: false, bad: false }
        }
    },
    methods: {
        changeTyped(v) { this.form.typed = v },
        changeSpeci(v) { this.form.speci = v }
    }
}
</script>

<style>

</style>