<template>
    <div>
        <div class="fx-c py_x2 order-creat-success">
            <div class="fx-c pt_x4 upper_x2">
                <span class="pri">
                    <i class="mdi mdi-check-decagram h2"></i>
                </span>
                <h4 class="n pl">訂單創建成功</h4>
            </div>
        </div>
        <div class="fx-c py_x2">
            <fo-button @click="again" :tit="'新增訂單'" :icon="'mdi-plus'"/>
            <span class="px_s"></span>
            <fo-button :pri="true" @click="$emit('back')" :tit="'返回列表'" :icon="'mdi-format-list-bulleted'"/>
        </div>
    </div>
</template>

<script>
import FoButton from '../../../front/button/FoButton.vue'
export default {
    components: { FoButton },
    emits: [ 'back', 'again' ],
    methods: {
        again() {
            window.location.reload()
        }
    }
}
</script>

<style lang="sass" scoped>
.order-creat-success
    min-height: 40em
</style>