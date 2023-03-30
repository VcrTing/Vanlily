<template>
    <div>
        <div class="fx-c fx-b py_x2 order-edit-success">
            <div class="fx-c pb_x4">
                <span class="pri">
                    <i class="mdi mdi-check-decagram h2"></i>
                </span>
                <h4 class="n pl">訂單修改成功</h4>
            </div>
        </div>
        <div class="fx-c py_x2">
            <fo-button :pri="true" @click="$emit('back')" :tit="'檢視訂單'" :icon="'mdi-chevron-left-box-outline'"/>
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
.order-edit-success
    min-height: 30em
</style>