<template>
    <div class="upper_x2">
        <div class="fx-c py_x2 order-creat-success">
            <div class="fx-c pt_x4">
                <span class="pri">
                    <i class="mdi mdi-check-decagram h2"></i>
                </span>
                <h4 class="n pl">
                    <span v-if="!edit">延遲發貨成功</span>
                    <span v-else>延遲發貨編輯成功</span>
                </h4>
            </div>
        </div>
        <div class="fx-c py_x2 upper_x2">
            <fo-button :pri="true" @click="$emit('back')" :tit="edit ? ' 確定' : ' 確定'" :icon="'mdi-check'"/>
        </div>
    </div>
</template>

<script>
import FoButton from '../../../front/button/FoButton.vue'
export default {
    components: { FoButton },
    props: [ 'edit' ],
    emits: [ 'back' ]
}
</script>

<style lang="sass" scoped>
.order-creat-success
    min-height: 24em
</style>