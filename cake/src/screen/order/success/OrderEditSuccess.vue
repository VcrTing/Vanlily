<template>
    <div class="">
        <div class="fx-c py_x2 order-edit-success">
            <div class="fx-c pt_x4 upper_x2">
                <span class="pri">
                    <i class="mdi mdi-check-decagram h2"></i>
                </span>
                <h4 class="n pl">訂單修改成功</h4>
            </div>
        </div>
        <div class="fx-c py_x2 upper_x2">
            <!--
            <fo-button :pri="true" @click="$emit('back')" :tit="'檢視訂單'" :icon="'mdi-chevron-left-box-outline'"/>
            -->
            <order-exi-base-opera @review="$emit('review')" @edit="$emit('edit')"/>
        </div>
    </div>
</template>

<script>
import FoButton from '../../../front/button/FoButton.vue'
import OrderExiBaseOpera from '../expanel/opera/OrderExiBaseOpera.vue'
export default {
    components: { FoButton, OrderExiBaseOpera },
    emits: [ 'review', 'edit' ]
}
</script>

<style lang="sass" scoped>
.order-edit-success
    min-height: 50em
</style>