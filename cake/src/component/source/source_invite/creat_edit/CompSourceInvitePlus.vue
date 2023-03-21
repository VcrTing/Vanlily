<template>
    <div class="px_x2">
        <form-def :header="'新增地區'">
            <div class="fx-s">
                <ui-inline-input-fill class="w-39 w-45-p" :header="'名稱：'">
                    <input class="input" type="text" placeholder="請輸入">
                </ui-inline-input-fill>
                <ui-inline-input class="w-58 w-55-p" :header="'說明：'">
                    <select class="input w-100">
                        <option>1200</option>
                    </select>
                </ui-inline-input>
            </div>
            <div class="fx-s">
                <ui-inline-input-fill class="w-39 w-45-p" :header="'送貨費用：'">
                    <input class="input" type="number" placeholder="$">
                </ui-inline-input-fill>
                <ui-inline-input class="w-58 w-55-p" :header="'GOGOVAN費用：'">
                    <input class="input" type="number" placeholder="$">
                </ui-inline-input>
            </div>
            <div class="pt_s"></div>
        </form-def>
    </div>
</template>

<script>
import UiInlineInput from '../../../../funcks/ui_element/input/inline/UiInlineInput.vue'
import UiInlineInputFill from '../../../../funcks/ui_element/input/inline/UiInlineInputFill.vue'
import FormDef from '../../../../funcks/ui_layout/form/def/FormDef.vue'
export default {
  components: { FormDef, UiInlineInput, UiInlineInputFill },

}
</script>

<style lang="sass">
.min-w
    width: 100%
    max-width: 70vw
</style>