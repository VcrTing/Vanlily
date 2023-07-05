<template>
    <h5 class="n py_n fx-l">
        送貨信息&nbsp;&nbsp;
        <div class="d-ib" v-if="!kiii_btn">
            <ui-err-tag v-if="has_deiay" @click="pina().mod(33)">訂單已延遲發貨</ui-err-tag>
            <ui-pri-tag v-else @click="pina().mod(32)" :tit="'申請延遲發貨'" :icon="'mdi-send-clock-outline'"/>
        </div>
    </h5>
</template>

<script>
import UiErrTag from "../../../funcks/ui_element/form/UiErrTag.vue"
import UiPriTag from '../../../funcks/ui_element/form/UiPriTag.vue'

export default {
    components: { UiErrTag, UiPriTag },
    props: [ 'has_deiay', 'kiii_btn' ]
}
</script>