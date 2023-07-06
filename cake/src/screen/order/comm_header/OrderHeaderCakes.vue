<template>
    <h5 class="n py_n fx-l">
        蛋糕信息&nbsp;&nbsp;
        <ui-pri-tag class="softer" v-if="!kiii_btn" @click="$emit('edit')" :tit="'編輯蛋糕'" :icon="'mdi-cookie-edit'"/>
    </h5>
</template>

<script>
import UiPriTag from '../../../funcks/ui_element/form/UiPriTag.vue'
export default {
    props: [ 'kiii_btn' ],
    emits: [ 'edit' ],
    components: { UiPriTag }
}
</script>