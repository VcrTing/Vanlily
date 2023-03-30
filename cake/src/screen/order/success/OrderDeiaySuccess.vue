<template>
    <div>
        <div class="fx-c fx-b py_x2 order-creat-success">
            <div class="fx-c pb_x4">
                <span class="pri">
                    <i class="mdi mdi-check-decagram h2"></i>
                </span>
                <h4 class="n pl">延遲發貨成功</h4>
            </div>
        </div>
        <div class="fx-c py_x2">
            <fo-button :pri="true" @click="$emit('back')" :tit="'訂單列表'" :icon="'mdi-format-list-bulleted'"/>
        </div>
    </div>
</template>

<script>
import FoButton from '../../../front/button/FoButton.vue'
export default {
    components: { FoButton },
    emits: [ 'back' ]
}
</script>

<style lang="sass" scoped>
.order-creat-success
    min-height: 30em
</style>