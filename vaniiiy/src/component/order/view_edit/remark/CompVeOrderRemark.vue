<template>
    <div>
        <div v-if="!__edit" class="fx-l">
            <span>{{ _header }}</span>
            <div>&nbsp;{{ cont }}</div>
        </div>
        <ui-input v-else :header="_header" :is_err="is_err">
            <slot></slot>
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
        cont: { type: String, default: '' },
        is_err: Boolean
    }
}
</script>

<style>

</style>