<template>
    <div v-if="many && many.length > 0" class="upper">
        <slot></slot>
    </div>
    <div v-else class="py_x2 fx-c empty upper">
        <div class="py pt_x sus">
            <i class="mdi mdi-package-variant-remove h5 "></i>
            <span class="pl_s">空數據</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'many' ]
}
</script>

<style lang="sass" scoped>
.mdi-package-variant-remove
    transform: translateY(2px)
</style>