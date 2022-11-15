<template>
    <div>
        <div v-if="!__edit" class="fx-l">
            <span>{{ _header }}</span>
            <div>&nbsp;{{ cont }}</div>
        </div>
        <ui-input v-else :header="_header" :is_err="remark_err">
            
            <textarea class="input" v-model="remark" placeholder="請輸入內容"></textarea>
        </ui-input>
    </div>
</template>

<script>
import UiInput from '../../../../funcks/ui_element/input/normal/UiInput.vue'
export default {
  components: { UiInput },
    props: {
        _header: { type: String },
        __edit: {  type: Boolean, default: false },
        cont: { type: String, default: '' }
    },
    data() {
        return {
            remark: '',
            remark_err: false
        }
    }
}
</script>

<style>

</style>